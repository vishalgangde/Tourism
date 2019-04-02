import React from 'react';
import '../components/index.css';
import { Link } from 'react-router-dom'
//import Modal from '../Modal';


class forgotPassword extends React.Component{
    render(){
        return(
                <div>
                   <span><i className="fa fa-key icon" style={{textAlign:"center",fontSize:"48px",color:"red"}}></i></span>
                    <p style={{fontSize:"20px",textAlign:"center"}}>Don't worry.</p>
                    <p style={{fontSize:"18px",textAlign:"center"}}> It happens to us all the time.
                        Just tell us your email id and we will generate a new one and send it to your id.
                    </p>
                    <label for="email"><b>Email</b></label>
                    <input className="input-field"  type="email" placeholder="Email Id" name="email" required />
                    <label for="password"><b>Password</b></label>
                    <input className="input-field" type="password" placeholder="New Password" name="password" required />
                    <label for="cfm_password"><b>Confirm Password</b></label> 
                    <input className="input-field" type="password" placeholder="Re-enter Password" name="cfm_password" required />
                    
                    <Link to="/forgotpassword/mail/id" className="confirm_btn" style={{backgroundColor:"red"}} onclick="closeForm()">Confirm</Link>
                </div>
            );
    }
}
    


export default forgotPassword;