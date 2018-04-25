import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component{

    render() {
      const { handleSubmit } = this.props
      return (
        <form>
          <fieldset className="form-group">
            <label>E-Mail:</label>
            <Field className = 'form-control' name="email" component="input" type="email" />
          </fieldset>

          <fieldset className="form-group">
            <label>Password:</label>
            <Field className = 'form-control' name="password" component="input" type="password" />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <Field className = 'form-control' name="passwordConfirm" component="input" type="password" />
          </fieldset>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )
    }
  }





const form = reduxForm({
    form: 'signup',
    fields:['email','password','passwordConfirm']
    })(Signup)
export default connect(null, actions)(form)
