import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction} from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../components/index.css'
import forgotPassword from '../user/forgotPassword';
import Axios from 'axios';



class SignIn extends React.Component {
    renderError({ touched, error }) {
        //console.log({error});
        //console.log({touched})

        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, type, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );

    }

    renderInputPass = ({input,meta,label}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type="password" autoComplete="on" />
                {this.renderError(meta)}
            </div>
        );

    }

    onSubmit = (formValues) => {
        //this.props.signInAction(formValues);
        //console.log( this.props.signInAction(formValues));
        //console.log(formValues);
        Axios.post('http://localhost:3001/Login' , formValues).then(res => {
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

                      
                       <Field style={{fontSize:"15px",color:"#249BDB"}} name="email" component={this.renderInput} label="Email" />
                       <Field style={{fontSize:"15px",color:"#249BDB"}} name="password" component={this.renderInputPass} label="Password" />
                       <button className="input-field2" type="submit" className="btn" style={{backgroundColor:"pink",color:""}}>Sign In</button>
                   </form>
                 
                        <div className="">
                            <h4>Don't have an account?<Link to="/user/signup"> Sign Up</Link></h4>

                        </div>
               </div>
           
       
           );
   }
}



    const validate = (formValues) => {
    const errors = {};

        if (!formValues.email) {
            errors.email = '*Field is mandatory';
        }
        else if (formValues.email.length >= 25) {
            errors.email = 'must enter valid email'
        }

        if (!formValues.password) {
            errors.password = '*Field is mandatory';
        }
        else if(formValues.password.length <= 8){
            errors.password = 'must contain at least 8 or more characters'
        }

        return errors;

    }
    

    const logVal = reduxForm({
    form: 'SignIn',
    validate
    })(SignIn);

    export default connect(null, { signInAction})(logVal);