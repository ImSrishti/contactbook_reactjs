import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import {getdetails} from '../../redux/selector'
import './Details.css'

function Details(props) {
    const {id} = useParams()
    const [redirect, setredirect] = useState(false)
    const goBack=() =>{
        setredirect(true)
    }
   
    return (
        <div className="detail">
          <div>
                <div> <label>Name:</label></div>
                <div className="label_val"> <label >{props.details[id].name}</label></div>
            </div>
            <div>
                <div> <label>Contact No:</label></div>
                <div className="label_val">  <label >{props.details[id].contact}</label></div>
            </div>
            <div>
                <div> <label>Email:</label></div>
                <div className="label_val"> <label >{props.details[id].email}</label></div>
            </div>
            <button onClick={()=>goBack()} className="add_info_button">Back</button>
            {redirect ? <Redirect to="/" /> : null}
        </div>
    )
}

const mapStateToProps = (state) => { 
    let details = getdetails(state)
    return {details}
}


export default connect(mapStateToProps, null)(Details)
