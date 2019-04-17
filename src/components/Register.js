import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RegisterUserAction} from '../actions/types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../components/index.css'
import forgotPassword from '../user/forgotPassword';
import Axios from 'axios';




class Register extends React.Component {
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
                <input {...input} type={type} autoComplete="on" />
                {this.renderError(meta)}
            </div>
        );

    }

    renderInputMail = ({ input, email, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={email} autoComplete="on" />
                {this.renderError(meta)}
            </div>
        );

    }


    renderInputDate = ({input,meta,label}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type="date" autoComplete="on" />
                {this.renderError(meta)}
            </div>
        );

    }

    


    renderInputDropDown = ({input,label,meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return(
            <div className={className}>

            <label>{label}</label>
            <select {...input} autoComplete="on" >
            <option value="">choose your option</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Ahemdabad">Ahemdabad</option>
            <option value="Manali">Manali</option>
            <option value="Kerela">Kerela</option>
            <option value="Ladhak">Ladhak</option>  
            <option value="Pondichery">Pondichery</option>  
            <option value="Goa">Goa</option>  
            <option value="Rajasthan">Rajasthan</option> 
            <option value="kashmir">Kashmir</option>    
            </select>
            {this.renderError(meta)}
            </div>
        );
    }

    renderNOInputDropDown = ({input,label,meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return(
            <div className={className}>

            <label>{label}</label>
            <select {...input} autoComplete="on" >
            <option value="">choose your option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>  
            <option value="7">7</option>  
            <option value="8">8</option>  
            <option value="9">9</option> 
            <option value="10">10</option>    
            </select>
            {this.renderError(meta)}
            </div>
        );
    }


    onSubmit = (formValues) => {
        console.log(formValues);
        Axios.post('http://localhost:3001/tours&travels' , formValues).then(res => {
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

                        <Field style={{fontSize:"15px",color:"#249BDB"}} name="fullname" component={this.renderInput} label="Full Name" />
                        <Field style={{fontSize:"15px",color:"#249BDB"}} name="email" component={this.renderInputMail} label="Email" />
                        <Field style={{fontSize:"15px",color:"#249BDB"}} name="mobileno" component={this.renderInput} label="Mobile No." />
                        <Field style={{fontSize:"15px",color:"#249BDB"}} name="depturecity" component={this.renderInputDropDown} label="Depture City" />
                        <Field style={{fontSize:"15px",color:"#249BDB"}} name="depturedate" component={this.renderInputDate} label="Depture Date" />
                        <Field style={{fontSize:"15px",color:"#249BDB"}} name="numberofpeople" component={this.renderNOInputDropDown} label="Number Of People" />
                        <button className="input-field2" type="submit" className="btn" style={{backgroundColor:"orange"}}>I'm interested</button>
                    </form>
                  
                
                </div>
            
        
            );
    }
        
}
        
        



    const validate = (formValues) => {
    const errors = {};

        if (!formValues.fullname) {
            errors.fullname = '*Field is mandatory';
        }
        else if (formValues.fullname.length >= 25) {
            errors.fullname = '*Name is too long'
        }

        if (!formValues.email) {
            errors.email = '*Field is mandatory';
        }
        else if (formValues.email.length >= 35) {
            errors.email = '*email is too long'
        }

        if (!formValues.mobileno) {
            errors.mobileno = '*Field is mandatory';
        }
        else if ((formValues.mobileno.length <= 9)||((formValues.mobileno.length >= 11))) {
            errors.mobileno = '*Phone number have must 10 digits '
        }

        if (!formValues.depturecity) {
            errors.depturecity = '*Field is mandatory';
        }
       
        if (!formValues.depturedate) {
            errors.depturedate = '*Field is mandatory';
        }
       

        if (!formValues.numberofpeople) {
            errors.numberofpeople = '*Field is mandatory';
        } 
       
        return errors;

    }


    export default reduxForm({
    form: 'Register',
    validate
    })(Register);


   

    