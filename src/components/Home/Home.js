import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { sortbyasc,sortbydsc } from '../../redux/selector'
import {deletes} from '../../redux/actions'
import './Home.css'
function Home(props) {
    const [names, setnames] = useState(props.sortedbyasc)
 //   const [sort, setsort] = useState(initialState)
    const handledropdown = (s) => {
        if(s.target.value==="SORT BY ASC")
        setnames(props.sortedbyasc)
        else 
        setnames(props.sortedbydsc)

    }

    const deletescontact =(name) =>{
        props.deletes(name)
        setnames(props.sortedbyasc)
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
            {names.map((name, i) => (
                <div className="contact_list" key={i}>
                    <div className="name_list"><Link to={`/details/${name}`} style={{"textDecoration":"none","color":"black"}}>{name} </Link></div>
                    <div className="edit_delete_button">
                       <Link to={`/edit/${name}`}><button className="button edit_button">EDIT</button></Link> 
                        <button onClick={()=>deletescontact(name)} className="button delete_button">DELETE</button>
                    </div>
                </div>
            ))}


        </div>
    )
}

const mapStateToProps = (state) => {
    const sortedbyasc = sortbyasc(state)
    const sortedbydsc=sortbydsc(state)
    return {sortedbydsc,sortedbyasc}
}



export default connect(mapStateToProps, {deletes})(Home)
