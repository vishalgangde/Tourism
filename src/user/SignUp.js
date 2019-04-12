import React from 'react';
import _ from 'lodash';
import { Field,reduxForm} from 'redux-form';
import { RegisterUserAction } from '../actions/index';
import '../components/index.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';


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

    renderInputMobNo = ({input,meta,label}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label><h4>{label}</h4></label>
                <input {...input} type="number" autoComplete="on" />
                {this.renderError(meta)}
            </div>
        );

    }

    renderInputPass = ({input,meta,label}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label><h4>{label}</h4></label>
                <input {...input} type="password" autoComplete="on" />
                {this.renderError(meta)}
            </div>
        );

    }

  

    onSubmit = (formValues) => {
        console.log(formValues);
        Axios.post('http://localhost:3001/Signup' , formValues).then(res => {
            console.log(res , "response")
        }).catch(err => {
            console.log(err , "error")
        })
        // this.props.onSubmit(formValues);
    }

    render(){
        return(
           
               <div>
                   
                       <h1 className="input-field0" style={{color:"grey",fontSize:"18px"}}>Provide your details below to get a custom quote.</h1>


                   <form
                       onSubmit={this.props.handleSubmit(this.onSubmit)}
                       className="ui form error"
                   >

                       <Field  name="firstname" component={this.renderInput} label="First Name" />
                       <Field  name="lastname" component={this.renderInput} label="Last Name" />
                       <Field  name="email" component={this.renderInput} label="Email" />
                       <Field  name="contactno" component={this. renderInputMobNo} label="Contact No." />
                       <Field  name="password" component={this.renderInputPass} label="Password" />
                       <Field  name="cfm_password" component={this.renderInputPass} label="Confirm Password" />
                       <button className="input-field2" type="submit" className="btn" style={{backgroundColor:"orange"}}>Sign Up</button>
                       <Link to="/"><button className="input-field2" type="submit" className="btn" style={{backgroundColor:"blue"}}>Close</button></Link>
                   </form>
                 
               
               </div>
           
       
           );
   }
       
}


const validate = (formValues) => {
    const errors = {};
    //const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(!formValues.firstname){
        errors.firstname = 'Please Enter First Name';
    }
    else if((formValues.firstname.length < 4) || (formValues.firstname.length > 16))
    {
        errors.firstname =("First Name must be 5 to 15 characters");
    }
    

    

    if(!formValues.lastname){
        errors.lastname = ('Please Enter Last Name ');
    }
    else if((formValues.lastname.length < 5) || (formValues.lastname.length > 16))
    {
        errors.lastname =("Last Name must be 5 to 15 characters");
    }
    
    
    if(!formValues.contactno){
        errors.contactno = 'Please enter vaild number';
    }
    else if((formValues.contactno.length < 5) || (formValues.contactno.length > 10)){
        errors.contactno = ("Contact No must be 10 digits")
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




    