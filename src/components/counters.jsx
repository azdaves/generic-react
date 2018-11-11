import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  

  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id} //accessed internally by react
            onReset={this.props.onReset}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            counter={counter}
          >
            <h4>{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
