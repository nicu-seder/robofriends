import React from "react";
import 'tachyons'
import Card from "./Card";


const CardList = ({robots}) => {
    const cardComponent = robots.map((element)=>{
       return(
           <Card
               key={`${element.id}-${element.name}-${element.email}`}
               id={element.id}
               name={element.name}
               email={element.email}/>
       ) ;
    });

    return (
        <div>
            {cardComponent}
        </div>

    )
};

export default CardList