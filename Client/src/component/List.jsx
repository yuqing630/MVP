import React from 'react';

const List = (props) => (
  <div>
    <h4> Pokemons </h4>

    { props.list.map(item =>
      <
      item={item}
      />
    )}
  </div>
)

export default List;
