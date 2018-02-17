import React from 'react';

const List = (props) => (
  <div>
    <h4> Pokemon </h4>
    <ul>
      {props.items.map((item) => {
        return (

          <div>
          {item.id}
          <img src={item.img} onClick={() => props.handleClick(item.name)}/>
          {item.name}
         </div>
       )
     })
    }
  </ul>

   </div>
)

export default List;
