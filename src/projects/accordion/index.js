import React from 'react';
import questions from './data';

import Rows from './Rows'
import './style.css'



export default function Index() {
  const [data, setData] = React.useState(questions);
  const [newData, setNewData] = React.useState([]);
    

  const changeColorHandeler = (id) => {
       
      let select = newData.map((e) => {
        if (e.id == id) {
          if(e.status == true){
            return { ...e, status: false };
          }
          return { ...e, status: true };
        }else{
          return { ...e, status: false };
        }

        
      });
     
     setNewData(select);
     };



React.useEffect(()=> {
setNewData(data);
},[])

 
    return (
      <section className="accordian">
        <h3>Health Tips</h3>
        <br></br>
        {newData.map((quest) => {
          return <Rows {...quest} changeFun={changeColorHandeler} />;
        })}
      </section>
    );
}
