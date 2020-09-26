import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getList } from '../../redux/selector'
import {remove,changeSort} from '../../redux/actions'
import './Home.css'
function Home(props) {

    const handledropdown = (s) => {
        if(s.target.value==="SORT BY ASC"){
            props.changeSort('ASC')
        }else{
            props.changeSort('DEC') 
        }
    }

    const deletescontact =(name) =>{
        props.remove(name)
        //setnames(props.sortedbyasc)
    }
    
    return (
        <div className="home">
            <div className="contact_list">
                <div className="search_input">
                    <input className="search_input_box" placeholder="search contact or add contact" />
                </div>
                <div className="add_button">
                    <Link to="/add"><button className="button button1">ADD</button></Link>
                    <select className="sort" onChange={(e)=>handledropdown(e)}>
                        <option>SORT BY ASC</option>
                        <option>SORT BY DESC</option>
                    </select>
                </div>
            </div>
            {props.list.map((x, i) => (
                <div className="contact_list" key={i}>
                    <div className="name_list"><Link to={`/details/${x.name}`} style={{"textDecoration":"none","color":"black"}}>{x.name} </Link></div>
                    <div className="edit_delete_button">
                       <Link to={`/edit/${x.name}`}><button className="button edit_button">EDIT</button></Link> 
                        <button onClick={()=>deletescontact(x.name)} className="button delete_button">DELETE</button>
                    </div>
                </div>
            ))}


        </div>
    )
}

const mapStateToProps = (state) => {
    const list = getList(state)
    return {list}
}

export default connect(mapStateToProps, {remove,changeSort})(Home)
