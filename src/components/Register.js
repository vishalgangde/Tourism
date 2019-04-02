import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RegisterUserAction} from '../actions/types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../components/index.css'
import forgotPassword from '../user/forgotPassword';




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
                <input {...input} type={type} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );

    }

    onSubmit = (formValues) => {
        
        this.props.signInAction(formValues);
        console.log( this.props.signInAction(formValues));
        //console.log('onSubmit', callback);
    }
    
    


    render() {
       
    //console.log(this.props);
        return (
            <div className="ui_container">
                <div className="form-popup" id="myForm">
                 <form action="/action_page.php" class="form-container">
                    <h1 className="input-field0" style={{color:"grey",fontSize:"18px"}}>Provide your details below to get a custom quote.</h1>

                    
                   
                    <label for="Full Name" style={{fontSize:"15px",color:"#249BDB"}}><b>Full Name</b></label>
                    <input className="input-field1" type="text" placeholder="Full Name" name="fullname" required />

                    <label for="email" style={{fontSize:"15px",color:"#249BDB"}}><b>Email</b></label>
                    <input className="input-field1" type="email" placeholder="Email" name="email" required />

                    <label for="mobileno" style={{fontSize:"14px",color:"#249BDB"}}><b>Mobile No.</b></label>
                    <input className="input-field1" type="number" placeholder="Mobile No."  name="mobileno" required />
                    
                    <label for="people" style={{fontSize:"14px",color:"#249BDB"}}><b>Depture City</b></label>
                    <select className="input-field1"  autoComplete="off" >
                        <option value="">choose your option</option>
                         <option value="mumbai">Mumbai</option>
                         <option value="delhi">Delhi</option>
                         <option value="ahemdabad">Ahemdabad</option>
                         <option value="manali">Manali</option>
                         <option value="kerela">Kerela</option>
                         <option value="ladhak">Ladhak</option> 
                         <option value="pondichery">Pondichery</option>
                         <option value="goa">Goa</option>
                         <option value="rajasthan">Rajasthan</option>
                         <option value="kashmir">Kashmir</option> 
            </select>
                  
                    <label for="date" style={{fontSize:"14px",color:"#249BDB"}}><b>Depture Date</b></label>
                    <input className="input-field1" type="date" placeholder="depture date" name="depdate" required />


                    <label for="people" style={{fontSize:"14px",color:"#249BDB"}}><b>Number Of People</b></label>
                    <select className="input-field1"  autoComplete="off" >
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
                    <button className="input-field2" type="submit" className="btn" style={{backgroundColor:"orange"}}>I'm interested</button>

                </form>
                
</div>
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
    

    const logVal = reduxForm({
    form: 'RegisterUserAction',
    validate
    })(Register);

    export default connect(null, { RegisterUserAction})(logVal);