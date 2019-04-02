import React from 'react';
import { Link } from 'react-router-dom';
import '../components/index.css';
import Img from 'react-image';
class Footer extends React.Component{
    render(){
        return(
           
            <div> 
                <footer>
                <div className="ui logo">
                            <Img src={require("./images/logo1.png")} alt="a"/>
                        </div>
                        <h3 style={{bottom:"35px"}}>VisTours</h3>
                            
                <div class="grid-container">
                <div>
                    <h2 className="footer_size">Products</h2>
                    <div className="grid-item">
                        <Link to="/hotels">Hotels</Link><br/>
                        <Link to="/holidays">Holidays</Link><br/>
                        <Link to="/flights">Flights</Link><br/> 
                        <Link to="/trips & itineraries">Trips & Itineraries</Link><br/> 
                        <Link to="/travel videos">Travel Videos</Link><br/> 
                        <Link to="/photo blogs">Photo Blogs</Link><br/> 
                        <Link to="/weekend getaways">Weekend Getaways</Link><br/> 
                        <Link to="/places to visit">Places to Visit</Link><br/> 
                        <Link to="/Attractions">Attractions</Link> 
                        <hr></hr>
                    </div> 
                </div>

                <div>
                    <h2 className="footer_size">About</h2>
                    <div className="grid-item">
                        <Link to="/blog">Blog</Link><br/>
                        <Link to="/guidelines">Guidelines</Link><br/>
                        <Link to="/privacy policy">Privacy Policy</Link><br/> 
                        <Link to="/terms & conditions">Terms & Conditions</Link><br/> 
                        <Link to="/contact us">Contact Us</Link><br/> 
                        <hr></hr>
                    </div>
                    
                </div>
                
                <div>
                    <h2 className="footer_size">More Links</h2>
                    <div className="grid-item">
                        <Link to="/goa">Goa</Link><br/>
                        <Link to="/kerela">Kerela</Link><br/>
                        <Link to="/dharamshala">Dharamshala Travel Guide</Link><br/> 
                        <Link to="/rajasthan travel">Rajasthan Travel Guide</Link><br/> 
                        <Link to="/Manali travel">Manali Travel Guide</Link><br/> 
                        <Link to="/ooty travel">Places To Visit in Ooty</Link><br/> 
                        <Link to="/kolkata travel">Places To Visit in Kolkata</Link><br/> 
                        <Link to="/mysore travel">Places To Visit in Mysore</Link><br/> 
                        <Link to="/Honeymoon Destinations In India">Honeymoon Destinations In India</Link><br/>
                        <Link to="/honeymoon packages">Honeymoon Packages</Link>
                        <hr></hr>
                    </div>
                </div>
            
            </div>
                <div className="grid-container" style={{paddingLeft:"25px"}}>
                   <h2 className="footer_size1">© All rights reserved.</h2>
               </div>
               </footer>
            </div>
            
            
        );
    }
}

export default Footer;