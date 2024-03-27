import React from "react";

const Item = ({ item , deleteItem, updateItem }) => {
    // console.log(item)
  return (
    <li>
      <input type = "checkbox" value = {item.packed} onChange={() => updateItem(item.id)} />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.descption}
      </span> 
      <button onClick ={() => deleteItem(item.id)} >❌</button>
    </li>
  );
};

export default Item;
