import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'


class SignIn extends Component {
  handleFormSubmit = ({ email, password }) => {
    this.props.signInUser({ email, password })
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        {/* E-Mail */}
        <fieldset className="form-group">
          <label>E-Mail:</label>
          <Field name="email" component="input" type="email" />
        </fieldset>
        {/* Password */}
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component="input" type="password" />
        </fieldset>
        {/* Submit */}
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    )
  }
}
const form = reduxForm({ form: 'signin' })(SignIn)
export default connect(null, actions)(form)
