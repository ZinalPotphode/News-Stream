import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { useState } from 'react';
function App() {
  const [category, setCategory] = useState("general"); 

  const changeCategory = (newCategory) => {
    setCategory(newCategory); 
  }
 
 
  return (
    <>
    <Navbar changeCategory={changeCategory} />
    <News category={category}/>
    
    </>
  );
}

export default App;
