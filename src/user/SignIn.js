import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction} from '../actions/types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../components/index.css'
import forgotPassword from '../user/forgotPassword';




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

    onSubmit = (formValues) => {
        
        this.props.signInAction(formValues);
        console.log( this.props.signInAction(formValues));
        //console.log('onSubmit', callback);
    }
    
    


    render() {
       
    //console.log(this.props);
        return (
            <div className="ui_container">
            <section className="popupBody">
						<div className="social_login">
								<div class="">
										<Link to="/user/facebook" class="social_box fb">
												<span class="icon"><i class="fa fa-facebook"></i></span>
												<span class="icon_title">Connect with Facebook</span>

										</Link>

										<Link to="/user/google" class="social_box google">
												<span class="icon"><i class="fa fa-google-plus"></i></span>
												<span class="icon_title">Connect with Google</span>
										</Link>
								</div>
                                </div>
                                </section>


            <div className="form-popup" id="myForm">
                <form action="/action_page.php" class="form-container">
                    <h1 style={{color:"grey"}}>Login</h1>

                    
                   
                    <label for="email" style={{fontSize:"20px"}}><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />
                    

                  
                    <label for="password" style={{fontSize:"20px"}}><b>Password</b></label>
                    <input className="input-field" type="password" placeholder="Enter Password" name="psw" required />


                    <button type="submit" className="btn">Login</button>
                    <Link to="/" type="button" className="btn cancel" onclick="closeForm()">Close</Link>
                    
                    <Link to="/user/forgotpassword" style={{fontSize:"15px",textAlign:"left"}}>Forgot password?</Link>
                </form>
                <div className="">
                <h4>Don't have an account?<Link to="/user/signup"> Sign Up</Link></h4>
                
                </div>
</div>
</div>
);
/*function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}*/


        
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
    form: 'SignIn',
    validate
    })(SignIn);

    export default connect(null, { signInAction})(logVal);