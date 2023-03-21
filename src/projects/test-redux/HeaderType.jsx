import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import List from './List';

const myList = [
  {name:'AAAA',id:1, company:'rsystem', amount:1, cost:10}, 
  {name:'BBBB',id:2, company:'kent', amount:1, cost:20}, 
  {name:'CCC',id:3, company:'sparrow', amount:1, cost:30}
];

const HeaderType = ({count,list,total,start})=> {

useEffect(()=>{
  start();
},[]);

  return (<div >
    <div>Count: {count}</div>
     <div>Total: {total}</div>
    {
      list.map(item => <List key={item.id} {...item} />)
    }
    </div>
  )
}

const mapStateToProps = (store)=> {
return{
  count:store.count, 
  list: store.list, 
  total: store.total}
}

const mapDispatchToProps = (dispatch) => {
  return {start:()=> dispatch({type:'START',payload:{myList}}),}
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderType)