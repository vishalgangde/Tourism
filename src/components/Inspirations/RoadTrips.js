import React from 'react';
import Img from 'react-image';
import '../index.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

class Beaches extends React.Component{
    render(){
        return(
            <div>
                <header className="header6">
                    <div className="uimain1">
                        <div className="ui logo">
                            <Img src={require("../images/logo1.png")} alt="a"/>
                        </div>
                            <ul>
                                
                                <li><Link to="/hotels" className="item">Hotels</Link></li>
                                <li><Link to="/holidays" className="item">Holidays</Link></li>
                                <li><Link to="/flights" className="item">Flights</Link></li>
                                <li><Link to="/trips" className="item">Trips</Link></li>
                                <li><Link to="/user/signin" className="item">Sign In</Link></li>
                            </ul>
                        </div>
                    
                    
                    
                   
                            <ul>
                                 <div className="dropdown">
                                    <li className="adjust">Inspirations</li>
                                        <div className="dropdown-content">
                                            <Link to="/inspiration/beaches" className="item">Beaches</Link>
                                            <Link to="/inspiration/Mountains" className="item">Mountains</Link>
                                            <Link to="/inspiration/Heritage" className="item">Heritage</Link>
                                            <Link to="/inspiration/HoneymoonPackages" className="item">Honeymoon Packages</Link>
                                            <Link to="/inspiration/WildlifeTourism" className="item">Wildlife Tourism</Link>
                                            <Link to="/inspiration/RoadTrips" className="item">Road Trips</Link>
                                        </div> 
                                 </div>

                                 <div className="dropdown">
                                    <li>Choose Category</li>
                                    <div className="dropdown-content">
                                        <Link to="/categories/family">Family Holidays</Link>
                                        <Link to="/categories/friends">Friends Road Trips</Link>
                                        <Link to="/categories/honeymoon">Honeymoon Special</Link>
                                        <Link to="/categories/budget">Budget Getaways</Link>
                                        <Link to="/categories/thrillingtreks">Thrilling Treks</Link>
                                    </div>
                                 </div>
                            </ul>
                    </header>

                    <div>
                         <h3 className="title1" style={{color:"black",padding:"20px",fontSize:"30px"}}><Link to="/" style={{fontSize:"20px"}}><i>home/</i></Link>Road Trips</h3>
                        
                            <p className="paragraph" style={{padding:"20px"}}>If you are bitten by the travel bug, then nothing
                                quite beats the satisfaction of hitting the tarmac to a destination far and beautiful. For travellers
                                who like staying on the road more than home, VisTours brings a handpicked section of road trips in and 
                                around India. From ambitious 10,000km sojourns to quick three hour getaways, here is all the inspiration 
                                and information you need to plan your next road trip.
                            </p>

                    </div>  

                <div className="ui container">
                <h1>Best Road Trips in India</h1>
                           <div className="ui row">
                             <div className="ui column" > 
                             <Link to="/RoadTrips/SoutherIndia">
                             <Img src={require("../images/south-road.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>A Road Trip Through Souther India</h4></Link>
                                </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Link to="/RoadTrips/RoadTripSpitiValley">
                        <Img src={require("../images/Spitivalley.jpg&h=380&w=650&zc=1")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>A Roadtrip to Spiti valley</h4></Link>
                        </div>
                        <hr></hr>        
                </div>


                <div className="ui column" >
                        <Link to="/RoadTrips/RoadTripsRajasthan">
                        <Img src={require("../images/rajasthan-road.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}> 1800 kms road trip to Rajasthan
                                </h4></Link>
                        </div>
                        <hr></hr>        
                </div>
                </div>
                
                <h1>Road Trips From Bangalore</h1>
                <div className="ui row">
                <div className="ui column" > 
                             <Link to="/RoadTrips/RoadTripBanglore">
                             <Img src={require("../images/banglore-road.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Road Trip From Bangalore To The Misty Nilgiris</h4></Link>
                                </div>
                                <hr></hr>
                             </div>
                
                             <div className="ui column" > 
                             <Link to="/RoadTrips/ThrillRoadTrips">
                             <Img src={require("../images/thrill-road1.jpg_1489478640")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Thrill-Seeking Road Trips</h4></Link>
                                    
                                </div>
                                <hr></hr>
                             </div>

                             <div className="ui column" > 
                             <Link to="/RoadTrips/OotyRoadTrips">
                             <Img src={require("../images/ooty-road.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Bangalore to Ooty: Perfect Road Trip </h4></Link>
                                </div>
                                <hr></hr>
                             </div> 
                        </div>
                    </div>
                <Footer/>
        </div>
        );
    }
}

export default Beaches;