import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class Signin extends Component {
    handleFormSubmit({email, password}) {
        console.log('email', email, 'password', password);
    }
    render() {
        const {
            handleSubmit,fields: {email,password}} = this.props;

        const renderInput = field => (<div>
                                        <input {...field.input} type={field.type} className="form-control"/> {field.meta.touched && field.meta.error}
                                            <span>{field.meta.error}</span>
                                      </div>)

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className='form-group'>
                <label>
                    Email:
                </label>
                    <Field name="email" component={renderInput} type="text" />
            </fieldset>
            <fieldset className='form-group'>
                <label>
                    Password:
                </label>
                <Field name="password" component={renderInput} type="text" />
            </fieldset>
            <button action='submit' className='btn btn-primary'>
                Sign In</button>
        </form>
        )
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);
