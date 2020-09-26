import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import {edit} from '../../redux/actions'
import {getdetails} from '../../redux/selector'
import './Edit.css'
function Edit(props) {
    let {id} =useParams();
    const [name, setname] = useState(props.details[id].name)
    const [contact, setcontact] = useState(props.details[id].contact)
    const [email, setemail] = useState(props.details[id].email)
    const [redirect, setredirect] = useState(false)
    const editContacts = () =>{
        const temp = {name: name ,contact:contact, email:email,id:id}
        props.edit(temp)
        setredirect(true)
    }
    return (
        <div className="edit">
             <div>
                <div> <label>Name:</label></div>
                <div> <input placeholder={props.details[id].name} onChange={(e) => setname(e.target.value)} /></div>
            </div>
            <div>
                <div> <label>Contact No:</label></div>
                <div>  <input placeholder={props.details[id].contact} onChange={(e) => setcontact(e.target.value)} /></div>
            </div>
            <div>
                <div> <label>Email:</label></div>
                <div> <input placeholder={props.details[id].email} onChange={(e) => setemail(e.target.value)}/></div>
            </div>
            <button onClick={()=>editContacts()} className="add_info_button">Update</button>
            {redirect ? <Redirect to="/" /> : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    const details = getdetails(state)
    return {details};
}



export default connect(mapStateToProps, {edit})(Edit)
