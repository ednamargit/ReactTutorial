import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters'; 
import React, { Component, useEffect, useState } from 'react';

function App() {

  let [counters, setCounters] = useState([
    { id: 1, value: 5},
    { id: 2, value: 0},
    { id: 3, value: 0},
    { id: 4, value: 0}
  ]); 

  
  function handleReset(props) {
    console.log('Resettt');
    console.log(props);
    // const counters = props.counters.map(c => {
    //     c.value = 0;
    //     return c;
    // });
    // console.log(counters); 
    // setCounters( { counters } );
  };

  function handleIncrement (counter) {
    console.log('Increment'); 
    //we have to create a new object and use the spread operator to clone it
    const counters = [...counters]; 
    const index = counters.indexOf(counter); 
    counters[index] = {...counter};
    counters[index].value++;
    setCounters( { counters } );
  }

  function handleDelete (counterId) {
    console.log('Delete');
    // const counters = counters.filter(c => c.id !== counterId);
    // //If the key and value are the same, we can simplify the code with just one name
    // // this.setState( {counters: counters} );
    // setCounters( { counters } );
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
