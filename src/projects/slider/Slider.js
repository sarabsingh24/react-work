import React from 'react';
import Slidercontent from './SliderContent';
import SideButton from './SideButton'
import Data from "./Data";
import './style.css'




export default function Slider() {
    const [people, setPeople] = React.useState(Data);
    const [index,setIndex] = React.useState(0);
    
    React.useEffect(() => {

        if (index < 0){
            setIndex(people.length - 1)
        }
        if (index == people.length ){
            setIndex(0)
        }
        
    }, [index])
  

React.useEffect(() => {
    let autoRun = setInterval(() => {
        setIndex(index + 1)
    }, 3000);
    return () => clearInterval(autoRun)
}, [index])

    return (
        <div className="slider-box">
            <Slidercontent people={people} index={index} />
            <SideButton index={index} setIndex={setIndex} />
        </div>
    )
}

