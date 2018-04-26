import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component{
    handleFormSubmit(formProps){

        console.log(formProps);

        this.props.signupUser(formProps);
    }
    renderAlert(){
        if (this.props.errorMessage) {
            <div className = 'alert alert-danger'>
                <strong>Oop!</strong>{this.props.errorMessage}
            </div>
        }
    }

    render() {

        const renderInput = ({ input, label ,meta})=>(
            <div className = {meta.error && meta.touched ? 'error' : ''} >
            <input {...input} type="password"/>
            {meta.error && meta.touched && <span> {meta.error}</span>}
            </div>
        )
        const renderEmailInput = ({ input, label ,meta})=>(
            <div className = {meta.error && meta.touched ? 'error' : ''} >
                <input {...input} type="email"/>
                {meta.error && meta.touched && <span> {meta.error}</span>}
            </div>
            )

      const { handleSubmit } = this.props;
      return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
              <label>E-Mail:</label>
              <Field className = 'form-control' name="email" component={renderEmailInput}  type="email" />
            </fieldset>
            <fieldset className="form-group">
              <label>Password:</label>
              <Field className = 'form-control' name="password"  component={renderInput} type="password" />
            </fieldset>
            <fieldset className="form-group">
              <label>PasswordConfirm:</label>
              <Field className = 'form-control' name="passwordConfirm" component={renderInput} type="password" />
            </fieldset>
            {this.renderAlert()}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )
    }
  }



function validate(formProps){
    const errors = {};
    if (!formProps.email) {
        errors.email = 'please enter an email!'
    }
    if (!formProps.password) {
        errors.password = 'please enter password!'
    }
    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'please confirm password!'
    }
    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Password must match!';
    }
    return errors;
}

function mapStateToProps(state){
    return { errorMessage: state.auth.error}
}

const form = reduxForm({
    form: 'signup',
    validate
    })(Signup)
export default connect(mapStateToProps, actions)(form)
