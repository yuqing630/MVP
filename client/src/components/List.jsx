import React from 'react';

const List = (props) => (
  <div>
    <h4> Pokemon </h4>
    <ul>
      {props.items.map((item) => {
        return (

          <div>

          <img src={item.img}/>
          {item.name}
         </div>
       )
     })
    }
  </ul>

   </div>
)

export default List;
