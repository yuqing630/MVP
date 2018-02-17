import React from 'react';

const List = (props) => (
  <div>
    <h4> Pokemon </h4>
    <ul>
      {props.items.map((item) => {
        return (

          <text>
          {item.name}
          <img src={item.img} onClick={() => props.handleClick(item.name)}/>

         </text>
       )
     })
    }
  </ul>

   </div>
)

export default List;
