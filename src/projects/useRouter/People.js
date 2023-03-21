import React from 'react';
import {list} from '../../data/Person'
import {Link} from 'react-router-dom'
export default function People() {


    return <div>{list.map(person => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <Link to={`/person/${person.id}`}>
              <button>read more</button>
            </Link>
          </div>
        );
    })}</div>;
}
