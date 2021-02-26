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
  
  // console.log(counters);
  
  function handleReset() {
    // console.log('Resettt');
    // console.log('Counters' + counters);
    let reset = counters.map(c => {
        c.value = 0;
        return c;
    });

    setCounters([ { id: 1, value: 0},
      { id: 2, value: 0},
      { id: 3, value: 0},
      { id: 4, value: 0} ]);
    
  };

  function handleIncrement (counter) {
    console.log('Increment'); 
    //we have to create a new object and use the spread operator to clone it

    // setCounters({...counters})
    // const counters = [...counters]; 
    // const index = counters.indexOf(counter); 
    // counters[index] = {...counter};
    // counters[index].value++;
  }

  function handleDelete (counterId) {
    console.log('Delete');
    // const counters = counters.filter(c => c.id !== counterId);
    // //If the key and value are the same, we can simplify the code with just one name
    // // this.setState( {counters: counters} );
    // setCounters( { counters } );
    console.log(counters);
    setCounters([{counters: counters.filter(c=>c.id !== counterId)}]);
}; 

return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
