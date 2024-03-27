import React, { useState } from 'react'

const Form = ({addItem}) => {

  const [descption , setDescption] = useState("")
  const [quantity, setQuantity] = useState(1)


  function handleChange(e){
     setDescption(prevDes => e.target.value)
  }
  
  

  function handleSubmit(e){
    e.preventDefault()

    if(!descption) return;

    const newItem = {descption, quantity, packed : false , id : new Date()}
    // console.log(newItem) 

    addItem(newItem)

    setDescption("")
    setQuantity(1)
  }
   
  return (
    <form className='add-form' onSubmit={handleSubmit} >
        <h3>What do you need for you trip?</h3>
        <select value = {quantity} onChange={(e) => setQuantity(Number(e.target.value))} >
            {Array.from({length : 20}, (_ , i) => i+1).map((num) => (
                <option value={num} key = {num} > {num} </option>
            ))}
        </select>

            <input type='text' placeholder='...items' value = {descption} onChange={handleChange} />

            <button>Add Item</button>
    </form>
  )
}

export default Form