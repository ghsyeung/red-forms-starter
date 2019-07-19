import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import {Form, Field} from 'react-final-form'

const MyForm = ({onSubmit, validate}) => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({handleSubmit, pristine, invalid}) => (
      <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
        <div>
          <label>First Name</label>
          <Field name="firstName" render={({input, meta}) => (
            <div>
              <TextField inputProps={input}/>
            </div>
          )}/>
        </div>

        {/*
        <h2>An Arbitrary Reusable Input Component</h2>
        <div>
          <label>Interests</label>
          <Field name="interests" component={InterestPicker} />
        </div>
*/}
        <div>
          <h2>Render Function</h2>
          <label>Bio</label>
          <Field
            name="bio"
            render={({input, meta}) => (
              <div>
                {/*
              <textarea {...input} />
              */}

                <TextField multiline={true} inputProps={input}/>
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div> )}
          />
        </div>

        <h2>Render Function as Children</h2>
        <label>Phone</label>
        <Field name="phone">
          {({input, meta}) => (
            <div>
              <TextField inputProps={input} placeholder="Phone"/>
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        </Field>

        <button type="submit" disabled={pristine || invalid}>
          Submit
        </button>
      </form>
    )}
  />
);

function validate({phone}) {
  const errors = {};
  if (!/[0-9]+/.test(phone)) {
    errors.phone = "Phone number is invalid";
  }
  return errors;
}

class App extends Component {
  render() {
    return (
      <MyForm onSubmit={console.log} validate={validate}/>
    );
  }
}

export default App;
