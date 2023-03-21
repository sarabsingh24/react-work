import React,{useEffect} from 'react';
import {connect} from 'react-redux';


function List({name,company,amount,start, increase,decrease,reset}) {
  return (
    <div >
        <h2>{name}</h2>
        <p>{company}</p>
        <p>{amount}</p>
         <button onClick={()=> decrease()} >decrease </button>
        <button onClick={()=> increase()} >Increase </button>
        <button onClick={()=> reset()} >Reset </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch,ownProps)=> {
  const {id,amount,cost} = ownProps;
    return {
        increase:()=> dispatch({type:'INCREASE',payload:{id,amount,cost}}),
        decrease:()=> dispatch({type:'DECREASE',payload:{id,amount,cost}}),
        reset:()=> dispatch({type:'RESET'}),
        start:()=> dispatch({type:'START'}),
    }
}
export default connect(null,mapDispatchToProps)(List)