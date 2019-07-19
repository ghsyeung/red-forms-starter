import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";
import TextField from "@material-ui/core/TextField";

import "./exercise2.css";


export class Step1 extends Component {
  onSubmit(o) {
    console.log("Submitting:", o);
  }

  validate(o) {
    console.log("Validating:", o);
    const error = {};
    if (!o.name) {
      error.name = "Name is required";
    }
    if (!o.email) {
      error.email = "Email is required";
    } else if (!/.*@.*\..*/.test(o.email)) {
      error.email = "Email invalid";
    }
    return error;
  }

  render() {
    return (
      <div className="email-form">
        <h3>Email Form</h3>
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          validateOnBlur={false}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="name"
                render={({ input, meta }) => {
                  console.log("Inside name: ", meta);
                  return (
                    <div className="field">
                      <label for="name">Name:</label>
                      <TextField inputProps={input} />
                      {/*<input type="text" {...input} />*/}
                      {meta.touched && meta.invalid &&
                        <div className="error"
                          style={{ color: "red", fontSize: "10px" }}>
                          {meta.error}
                        </div>
                      }
                    </div>
                  );
                }} />
              <Field
                name="email"
                render={({ input, meta }) => (
                  <div className="field">
                    <label for="name">Email:</label>
                    <input type="text" {...input} />
                    {meta.touched && meta.invalid &&
                      <div className="error"
                        style={{ color: "red", fontSize: "10px" }}>
                        {meta.error}
                      </div>
                    }

                  </div>
                )} />

            </form>
          )}
        />
      </div>
    );
  }
}