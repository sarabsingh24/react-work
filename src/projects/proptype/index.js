import React from 'react'
import PropTypes from 'prop-types';
import defaultImage from '../../assets/item-1.jpeg'
export default function Index() {
// Example 3 => export default function Index({image , name ,age}) {
//continue Example 3 =>  const image = image && image.url // {image: {url: "image link........"}}

    return (
        <div>


            {/* Example 1 => supose we call an API but in api some value is missing like image, name, age 
            Index.PropTypes will show error */}
            {/* Example 2 => supose we call an API but in api some value is missing like image, name, age 
            Index.defaultProp will replace with default value */}

            {/*  continue Example 3 => {image || defaultImage} */}
        </div>
    )
}

Index.PropTypes = {//.......................Example 1
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}

Index.defaultProp = {//.......................Example 2
    image: "default image url",
    name: "default name",
    age: "defult age",
}