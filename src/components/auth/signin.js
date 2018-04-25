import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'


class SignIn extends Component {
  handleFormSubmit = ({ email, password }) => {
      // console.log(email,password);
    this.props.signInUser({ email, password })
  }
  renderAlert(){
      if (this.props.errorMessage) {
          return(
              <div className = 'alert alert-danger'>
                  <strong>Oop!!</strong>{this.props.errorMessage}
              </div>
          )
      }
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>

        <fieldset className="form-group">
          <label>E-Mail:</label>
          <Field className = 'form-control' name="email" component="input" type="email" />
        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <Field className = 'form-control' name="password" component="input" type="password" />
        </fieldset>
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    )
  }
}
function mapStateToProps(state){
    return {errorMessage: state.auth.error}
}
const form = reduxForm({ form: 'signin' })(SignIn)
export default connect(mapStateToProps, actions)(form)
