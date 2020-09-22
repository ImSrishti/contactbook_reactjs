import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {add} from '../../redux/actions'
import './Add.css'

function Add(props) {
    const [name, setname] = useState('')
    const [contact, setcontact] = useState(0)
    const [email, setemail] = useState('')
    const [redirect, setredirect] = useState(false)
    const saveContacts = () =>{
        const temp = {name: name ,contact:contact, email:email}
        props.add(temp)
        setredirect(true)
    }
    return (
        <div className="add">
            <div>
                <div> <label>Name:</label></div>
                <div> <input onChange={(e) => setname(e.target.value)} /></div>
            </div>
            <div>
                <div> <label>Contact No:</label></div>
                <div>  <input onChange={(e) => setcontact(e.target.value)} /></div>
            </div>
            <div>
                <div> <label>Email:</label></div>
                <div> <input onChange={(e) => setemail(e.target.value)}/></div>
            </div>
            <button onClick={()=>saveContacts()} className="add_info_button">Add</button>
            {redirect ? <Redirect to="/" /> : null}
        </div>
    )
}

export default connect(null, {add})(Add)
