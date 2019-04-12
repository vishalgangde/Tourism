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
                        <Field style={{fontSize:"15px",color:"#249BDB"}} name="email" component={this.renderInput} label="Email" />
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

        if (!formValues.username) {
            errors.username = 'must enter valid user name';
        }
        else if (formValues.username.length >= 15) {
            errors.username = 'must be 15 characters or less'
        }

        if (!formValues.password) {
            errors.password = 'must enter valid password';
        }
        else if(formValues.password.length <= 8){
            errors.password = 'must contain at least 8 or more characters'
        }
        if (!formValues.cfm_password) {
            errors.cfm_password = 'must enter confirm password';
        } 
        else if (formValues.cfm_password !== formValues.password) {
            errors.cfm_password = 'Password mismatched';
        }
        return errors;

    }


    export default reduxForm({
    form: 'Register',
    validate
    })(Register);


   

    /*
    import React from 'react';
import { Field, reduxForm } from 'redux-form';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

class StreamForm extends React.Component {
    //if user leave input text blank it show an error
    renderError({ error, touched }) {
        if (error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    //helper function for input type and use of destructuring
    renderInput = ({ input, label, meta }) => {
        console.log(meta);
        //if user leave the input field empty than it will show an error msg
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
        
    }

    //for submit form creating helper method and redux prop(handleSubmit)
    onSubmit = (formValue) => {
        this.props.onSubmit(formValue);
    }

    render() {
        //console.log(this.props);
        //title and description connects with the validate function to show an error msg. 
        return (

            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >

                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }

}

//validation of form, if user inputs invalid title or description it will show an error msg 

const validate = formValue => {
    const error = {};

    if (!formValue.title) {
        error.title = 'You must enter a title';
    }
    if (!formValue.description) {
        error.description = 'You must enter a description';
    }
    return error;
};
//using connect component , we can send the data in to the db.json
export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);



    */