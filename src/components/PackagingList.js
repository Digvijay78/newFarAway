import React, { useState } from 'react'
import Item from './Item';

const PackagingList = ({items, deleteItem , updateItem , handleClearItem}) => {

    const [sortBy , setSortBy] = useState("input")

    let sortItems;

    if(sortBy === "input"){

        sortItems = items;
    } 

    if(sortBy === "descption") sortItems = items.slice().sort((a,b) => a.descption.localeCompare(b.descption) )

    if(sortBy === "packed") sortItems = items.slice().sort((a,b) => Number(b.packed - a.packed) )

    // console.log(items)
    // console.log(sortItems)

  return (
    <div className='list' >
        <ul>
            {sortItems.map((item)=> {
                return <Item key = {item.id} item = {item} deleteItem = {deleteItem} updateItem ={updateItem} />
            })}
        </ul>
        <div className='actions' >
            <select value = {sortBy} onChange = {(e) => setSortBy(e.target.value)} name="sort" id="sort">
                <option value = "input" >sort by input</option>
                <option value = "descption" >sort by descption</option>
                <option value = "packed" >sort by packed</option>
            </select>
            <button onClick={handleClearItem} >Clear List</button>
        </div>
        </div>
  )
}

export default PackagingList