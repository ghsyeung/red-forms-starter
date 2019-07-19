import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./exercise2.css";

export class Exercise2 extends Component {
  /* 
  * @TODO Controlled vs Uncontrolled inputs in React
  * Try typing something in each of the inputs. What is the difference between
  * controlled and uncontrolled inputs in React?
  * 
  * Once you've observed the differences: 
  * - Write the necessary code to update the value in the controlled input. 
      (Hint: Use setState)
  * - Write the necessary code to track what the user is typing into the 
  *   uncontrolled input. (Hint: Use React.createRef())
  *
  * Question: How would you describe the difference between controlled and un-controlled inputs?
  */
  state = {
    controlled: "Hello controlled input"
  };

  render() {
    return (
      <div className="App">
        <h3>React Form Basics</h3>
        <form>
          <label for="controlled">
            Controlled Input:
            <input
              name="controlled"
              type="text"
              value={this.state.controlled}
              id="controlled"
            />
          </label>
          <label for="uncontrolled">
            Uncontrolled Input:
            <input
              name="un-controlled"
              defaultValue="Uncontrolled input"
              type="text"
              id="uncontrolled"
            />
          </label>
        </form>
      </div>
    );
  }
}
