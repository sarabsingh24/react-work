import React from 'react'
import { list } from "../../data/Person";
import {Link, useParams} from 'react-router-dom'
export default function SinglePerson() {

    const [name,setName] = React.useState("sarab")
   const {id} = useParams();
   
   const person = list.find((person) => person.id == parseInt(id));

   React.useEffect(()=> {
    setName(person.info);
   },[])


    return (
      <div>
        <div>{name}</div>
        <Link to="/people">
          <button>Back to people</button>
        </Link>
      </div>
    );
}
