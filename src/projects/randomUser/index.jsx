import React from 'react';
import Users from './users';
import './style.css';

const url = "https://randomuser.me/api/"

export default function Index() {
const [loading, setLoading] = React.useState(true);
    const [list, setList] = React.useState(null);


const fetchData = async ()=> {

    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results[0]);
        setList(data.results[0]);
        setLoading(false);
        
    }
    catch(error){
        console.log("CURRENT ERROR === " + error)
    }
   
}

const randomDataHandeler = () => {
    fetchData();
}


React.useEffect(()=>{
    fetchData();
},[]);




if (loading)
    {
        return (
            <div>
                Loading...
            </div>
        )
    }

        return (
          <div className="random_user">
            <Users list={list} />
            <button onClick={randomDataHandeler}>Rendom load</button>
          </div>
        );
    

}
