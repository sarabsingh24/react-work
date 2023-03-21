import React from 'react';
import TourList from './TourList'

import './style.css';
const url = "https://course-api.com/react-tours-project";

export default function Tour() {
const [loading,setLoading] = React.useState(true)
const [tours, setTours] = React.useState([]);
const [index, setIndex] = React.useState(0);




const featchTours = async() => {
    try{
          const response = await fetch(url);
          const tours = await response.json();
          
          setTours(tours);
         
          setLoading(false);

    }catch (error){
        setLoading(false);
        console.log(error)
    }
  
}


const rendomSelect = () => {
 let num = Math.floor(Math.random() * tours.length);
 if(num === index){
   num = num + 1;
 }
 setIndex(num);
}

const nextValue = () => {
  setIndex((index)=> {
let newvalue
    if(index !== tours.length -1){
     newvalue = index + 1;
    }else {
      newvalue = 0;
    }
     return newvalue;

  });
}



const prevValue = () => {
  setIndex((index) => {
    let newvalue;
    if (index !== 0) {
      newvalue = index - 1;
    } else {
      newvalue = tours.length - 1;
    }
    return newvalue;
  });
};

React.useEffect(() => {
  
  featchTours();

  
},[]);

if (loading){
return <div className="container-box scroll-box">Loading......</div>;
} 
return (
  <section className="tour ">
    <h3 className="title">Random Tours</h3>
    <div className="container-box scroll-box">
      <TourList
        tours={tours[index]}
        rendomSelect={rendomSelect}
        nextValue={nextValue}
        prevValue={prevValue}
      />
    </div>
  </section>
);

}
