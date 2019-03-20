import React from 'react';
import _ from 'lodash';
import { Field,reduxForm} from 'redux-form';
import { RegisterUserAction } from '../actions/types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SignUp extends React.Component{
    renderError({touched,error}){
        //console.log({errors});
        
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input,type,label,meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        
        return(
                <div className={className}>
                    <label><h4>{label}</h4></label>
                    <input {...input} type={type} autoComplete="off" />
                    {this.renderError(meta)}
            </div>
        );
        
    }

    onSubmit = (formValues) => {
        let role = {
            role :'author'
          }
          formValues = _.assign(formValues,role);
          //console.log(role);
          formValues = _.omit(formValues, 'cfm_password');
          console.log(formValues);
          this.props.RegisterUserAction(formValues);
        
    }

    render(){
        //console.log(this.props);
       // if(!localStorage.getItem("authToken")){
        return(
            <div>
                <h1>SignUp Form</h1 >
                <br></br>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                        <Field  
                            type="text" 
                            name="first_name" 
                            component={this.renderInput} 
                            label="First Name (Must be 5 to 15 characters)" 
                        />
                        <Field  
                            type="text" 
                            name="last_name" 
                            component={this.renderInput} 
                            label="Last Name (Must be 5 to 15 characters)" 
                        />
                        <Field  
                            type="text" 
                            name="username" 
                            component={this.renderInput} 
                            label="UserName   (Must be 5 to 15 characters)" 
                        />
                        <Field  
                            type="email" 
                            name="email" 
                            component={this.renderInput} 
                            label="Email ID" 
                        />


                        <Field  
                            type="password" 
                            name="password" 
                            component={this.renderInput} 
                            label="Password   (Atleast 8 or more characters)" 
                        />
                    
                        <Field  
                            type="password" 
                            name="cfm_password" 
                            component={this.renderInput} 
                            label="Confirm Password" 
                        />
                        <button type="submit"  className="ui button primary">Submit</button>
                        <Link to="/signin" className="ui button">Cancel</Link>
                    </form>
            </div>
            
        );
    }

       
}


const validate = (formValues) => {
    const errors = {};
    //const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(!formValues.first_name){
        errors.first_name = 'Please Enter First Name';
    }
    else if((formValues.first_name.length < 5) || (formValues.first_name.length > 16))
    {
        errors.first_name =("First Name must be 5 to 15 characters");
    }
    

    

    if(!formValues.last_name){
        errors.last_name = 'Please Enter Last Name ';
    }
    else if((formValues.last_name.length < 5) || (formValues.last_name.length > 16))
    {
        errors.last_name =("Last Name must be 5 to 15 characters");
    }
    
    
    if(!formValues.username){
        errors.username = 'Please Enter Username';
    }
    else if((formValues.username.length < 5) || (formValues.username.length > 16)){
        errors.username = ("Username must be be 5 to 15 characters")
        /*/^[A-Za-z]\w{7,15}$/
        (?=.*\d)(?=.*[a-z])(?=.*[A-Z])*/
    }
    
    if(!formValues.email){
        errors.email = 'Please Enter Email Id';
    }
    
    if (!formValues.password) {
        errors.password = 'Please Enter Valid Password';
      }
    else if(formValues.password.length < 8) {
    errors.password = 'At least 8 or more one letters';
    }
     
     if (!formValues.cfm_password ) {
        errors.cfm_password = 'Please Enter Confirm Password' ;
      } else if (formValues.cfm_password !== formValues.password) {
        errors.cfm_password = 'Confirm password is not matched with password' ;
      }

    return errors;

}

    const Wrapped = reduxForm({
    form : 'SignUp',
    validate
    })(SignUp);

    export default connect(null,{RegisterUserAction})(Wrapped);




    