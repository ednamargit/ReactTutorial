import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
    
    //If I exclude the value of selected = {true} by default it will be set to true selected
    //We can pass a reference to the function handleDelete, using props to our child component (Counter Component) onDelete={this.handleDelete}
    //counter component is raising an event and its parent (counters component) is handling that event

    //we pass id and key while their values are exactly the same. The reason is because the key attribute is used internally by React, so we wonn't be able to access it in our counter component.
    //That's why we have to pass id, as a prop, and then read it via this.props.id
    //The point of using objects is to encapsulate related values (value, id), that's why you can pass the object itself counter={counter}

    render() { 

      //Destructuring -> para no usar todas las veces this.props
      const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props; 

      return (
        <div>
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={counter}
            >
              <h4>Counter # {counter.id}</h4>
            </Counter>
          ))}
        </div>
      );
    }
}
 
export default Counters;