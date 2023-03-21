import React from 'react';


const reducer = (state,action) => {
  
    if (action.type == "ADD_ITEM"){
        const { age, company } = action.payload
        return {
            ...state,
            status:true,
            comment:"i am added",
            age: age, 
            company: company
        }
    }

return state;
}

const defaultValue = {
people:[],
status:false,
comment:"",

}




export default function Test() {

const [name, setName] = React.useState('');
const [state,dispatch] = React.useReducer(reducer,defaultValue)

    const submitHandel = (e) => {
        e.preventDefault();
       if(name){
           dispatch({type:"ADD_ITEM",payload:{ age:46, company: "kent"}});
       }
    }

    return (
        <div>
            <form onSubmit={submitHandel}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value) } />
<button type="submit">click</button>
            </form>
            
            {console.log(state)

            }
        </div>
    )
}
