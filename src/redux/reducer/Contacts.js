import {ADD,EDIT,DELETE} from '../actionTypes'

const initialState = {
    data: [],
    filter:'ASC'
}

export default function (state = initialState, action) {
    switch(action.type){
        case(ADD):{
            const {content} = action.payload
            return {
                ...state,
                data:[content,...state.data]
            }
        }
        case(EDIT):{
            const {content} = action.payload
            let temp =state.data
            let index = -1
            for(let a in temp){
                if(temp[a].name===content.id){
                  index = a;
                }
            }
            if (index !== -1)
                temp.splice(index, 1,{name:content.name,contact:content.contact,email:content.email});
            
            return {
                ...state,
                data:[...temp]
            }
        }
        case(DELETE):{
            const {content} = action.payload
            let temp =state.data
            let index = -1
            for(let a in temp){
                if(temp[a].name===content){
                  index = a;
                }
            }
            if (index !== -1)
                temp.splice(index, 1);
            return {
                ...state,
                data:[...temp]
            }
        }
        case('SORT'):{
            const {content} = action.payload
            
            return {
                ...state,
                filter:content
            }
        }
        default:{
            return state
        }
    }
    

}