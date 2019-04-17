import React from 'react';
import { Link } from 'react-router-dom';
import '../components/index.css';
import Img from 'react-image';
class Footer extends React.Component{
    render(){
        return(
           
            <div className="color"> 
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
                       
                    </div>
                    
                </div>
                
                <div>
                    <h2 className="footer_size">More Links</h2>
                    <div className="grid-item">
                        <Link to="/tour-package/Goa Chapora Beach">Goa</Link><br/>
                        <Link to="/tour-package/Kerela Chavakkad">Kerela</Link><br/>
                        <Link to="/dharamshala">Dharamshala Travel</Link><br/> 
                        <Link to="/tour-package/Rajasthan">Rajasthan Trip</Link><br/> 
                        <Link to="/tour-package/Rohtang Pass Manali">Manali Travel </Link><br/> 
                        <Link to="/inspiration/WildlifeTourism">Places To Visit National Park</Link><br/> 
                        <Link to="/inspiration/RoadTrips">Places To Visit in Ladakh</Link><br/> 
                        <Link to="/inspiration/HoneymoonPackages">Honeymoon Destinations In India</Link><br/>
                       
                      
                    </div>
                </div>
                <hr></hr><hr></hr><hr></hr>
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