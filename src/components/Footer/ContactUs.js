import React from 'react';
import Img from 'react-image';
import '../index.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

class ContactUs extends React.Component{
    render(){
        return(
            <div>
                <header className="header15">
                    <div className="uimain1">
                        <div className="ui logo">
                            <Img src={require("../images/logo1.png")} alt="a"/>
                        </div>
                            <ul>    
                                <li><Link to="/forum" className="item">Forum</Link></li>
                                <li><Link to="/hotels" className="item">Book Hotels</Link></li>
                                <li><Link to="/holidays" className="item">Book Holidays</Link></li>
                                <li><Link to="/trips" className="item">Trips</Link></li>
                                <li><Link to="/user/signin" className="item">Sign In</Link></li>
                            </ul>
                        </div>
                    
                    
                    
                   
                    <div className="dropdown">
                            <button className="dropbtn">Inspirations</button>
                             <div className="dropdown-content">
                               
                               
                                <Link to="/inspiration/beaches" className="item">Beaches</Link>
                               <Link to="/inspiration/Mountains" className="item">Mountains</Link>
                                <Link to="/inspiration/Heritage" className="item">Heritage</Link>
                                <Link to="/inspiration/HoneymoonPackages" className="item">Honeymoon Packages</Link>
                                <Link to="/inspiration/WildlifeTourism" className="item">Wildlife Tourism</Link>
                                <Link to="/inspiration/RoadTrips" className="item">Road Trips</Link>
                            </div> 
                            </div>

                            <div className="title5" style={{paddingBottom:'20px'}}>
                                <h1>We would love to hear from you!</h1>
                            </div>

                            
                            <div class="bg-img">
                            <form action="/action_page.php" class="container2">
                                <h1 style={{color:"#506066"}}>GET IN TOUCH</h1>

                                <label for="name"><b>Name</b></label>
                                <input type="text" placeholder="Your Name" name="name" required />

                                <label for="email"><b>Email</b></label>
                                <input type="email" placeholder="Email" name="email" required />
                                
                                <label for="message"><b>Message</b></label>
                                <textarea type="text" placeholder="Message" name="message" ></textarea>

                                <button type="submit" class="btn">Send Me!</button>
                            </form>
                            <div>
                            <form action="/action_page.php" class="container3">
                                <h4>info@VisTours.com</h4>
                                <Link to="VisTours.com"><h4>We'll respond in 24 hrs</h4></Link>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                               
                               
                                <h3 style={{paddingTop:"138px",color:"#506066"}}>Address:</h3>
                                <h5>VisTours Private Limited<br></br>
                                    HA-18,Takshshila Parisar<br></br>
                                    Rajendra Nagar<br></br>
                                    Indore - 452012, India
                                </h5>
                            </form>
                            </div>
                            </div>
                    </header>

                   

            <Footer/>
            </div>
        );
    }
}

export default ContactUs;