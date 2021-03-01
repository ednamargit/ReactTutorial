import React, { Component } from "react";

class Counter extends Component {

  //state has any data that the component needs
  //a controlled component does not have its own local state, it receives all the data via props and raises events whenever data needs to be changed.
  //So, this component is entirely controlled by its parent  
  
  //Arrow functions don't rebind with this keyword, they inherit it
 
  render() {
    console.log(this.props);
    return (
      <React.Fragment className="row">
        <div className="col-1">
          <h6>{this.props.counter.id}</h6>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>  
        <div className="col">
          <button
            //we can use an inline function
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            //we can use an inline function
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
  
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
      const { value: count } = this.props.counter; 
      return count === 0 ? <span>Zero</span> : count;
  }

}



export default Counter;
