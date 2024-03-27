import React from 'react'

const Stats = ({items}) => {

  if(!items.length){
    return <footer className ="stats" > <em>Start adding some item in yor packaging List</em>  </footer>
  }

  const numItems = items.length
  const packedItem = items.filter((item) => item.packed ).length
  const percentage = Math.round((packedItem/numItems) * 100)
  return (
    <footer className='stats' > 
    {percentage === 100 ? (
      <em>You have packed Everything, You are ready to Go! ✈️</em>
    ): (

     <em> You have {numItems} item in the list, and you have packed {packedItem} items ({percentage}%)</em>
    )}
    </footer>
  )
}

export default Stats