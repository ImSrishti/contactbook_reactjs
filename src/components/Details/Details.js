import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import {getdetails} from '../../redux/selector'
import './Details.css'

let temp;
function Details(props) {
    const {id} = useParams()
    const [redirect, setredirect] = useState(false)
    const goBack=() =>{
        setredirect(true)
    }
    temp=id;
    return (
        <div className="detail">
          <div>
                <div> <label>Name:</label></div>
                <div className="label_val"> <label >{id}</label></div>
            </div>
            <div>
                <div> <label>Contact No:</label></div>
                <div className="label_val">  <label >{props.details?props.details["contact"]:null}</label></div>
            </div>
            <div>
                <div> <label>Email:</label></div>
                <div className="label_val"> <label >{props.details?props.details["email"]:null}</label></div>
            </div>
            <button onClick={()=>goBack()} className="add_info_button">Back</button>
            {redirect ? <Redirect to="/" /> : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    let index = -1;
    
    let details = getdetails(state)
    for(let a in details){
        if(details[a].name===temp){
          index = a;
        }
    }
     details = details[index]
    return {details}
}


export default connect(mapStateToProps, null)(Details)
