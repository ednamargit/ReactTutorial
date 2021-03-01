import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters'; 
import React, { Component, useEffect, useState } from 'react';

function App() {

  const [counters, setCounters] = useState([
    { id: 1, value: 5},
    { id: 2, value: 0},
    { id: 3, value: 0},
    { id: 4, value: 0}
  ]); 
  
  function handleReset() {
    counters.map(c => {
        c.value = 0;
        return c;
    });

    setCounters([ ...counters ]);

    //Solución Alternativa
    // setCounters(
    //   counters.map(c => {
    //     c.value = 0;
    //     return c;
    //   })
    // )
  };


  function handleIncrement (counter) {
    //we have to create a new object and use the spread operator to clone it
    const index = counters.indexOf(counter); 
    counters[index].value++;
    setCounters([...counters]);
  }

  function handleDecrement (counter) {
    //we have to create a new object and use the spread operator to clone it
    const index = counters.indexOf(counter); 
    counters[index].value--;
    setCounters([...counters]);
  }

  function handleDelete (counterId) {
    
    // //If the key and value are the same, we can simplify the code with just one name
    // const countDelete = counters.filter(c => c.id !== counterId); 
    setCounters(counters.filter(c => c.id !== counterId)); 
  }; 

return (
    <React.Fragment>
      <NavBar totalCounters ={counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
