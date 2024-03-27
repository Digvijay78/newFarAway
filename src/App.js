
import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import PackagingList from './components/PackagingList';
import Stats from './components/Stats';
import { useState } from 'react';

function App() {

  const[items , setItems] = useState([])

  function handleItem(item){
     setItems(prevItem => [...prevItem , item])
  }

  function handleDeleteItem (id) {

    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  function handleUpdateItem (id) {
    setItems((prevItem) => prevItem.map((item) => item.id === id ? {...item, packed : !item.packed} : item ))
  }

  function handleClearItem (){

    const confirm = window.confirm("Are you sure want to delete all the items?")

    if(confirm){
    setItems([]);
  }
  }
  return (
    <div>
      <Logo />
      <Form addItem = {handleItem} />
      <PackagingList items = {items}
                     deleteItem = {handleDeleteItem} 
                     updateItem ={handleUpdateItem}
                     handleClearItem= {handleClearItem}
      />
      <Stats items ={items}
      
      />
    </div>
  );
}

export default App;
