import React from 'react';
import Cardholder from './CardHolder'

export default function SliderContent({ people, index}) {
  
    return (
        <>
            {
                people.map((person, personIndex) => {
                    let { id, image, name, quote, title } = person
                    let myClass = "next-slide";
                    if (personIndex == index) {
                        myClass = "active-slide";
                    }
                    if (personIndex == index - 1) {
                        myClass = "last-slide";
                    }
                    return (
                        <article key={id} className={`slide ${myClass}`}>
                            <Cardholder person={person} />
                        </article>
                    )
                })
            }
            
        </>
    )
}
