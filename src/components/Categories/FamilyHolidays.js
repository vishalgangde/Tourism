import React from 'react';
import Img from 'react-image';
import '../index.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer';

//import { Link } from 'react-router-dom';

class Packages extends React.Component{
    render(){
        return(
            <div>
                <header className="header7">
                    <div className="uimain1">
                    <div className="ui logo">
                            <Img src={require("../images/logo1.png")} alt="a"/>
                        </div>
                            <ul>
                                <li><Link to="/forum" className="item">Forum</Link></li>
                                <li><Link to="/hotels" className="item">Hotels</Link></li>
                                <li><Link to="/holidays" className="item">Holidays</Link></li>
                                <li><Link to="/flights" className="item">Flights</Link></li>
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
                </header>

                <div>
                    <h3 style={{padding:"10px"}}><Link to="/">home/</Link>Exclusive Tours & Holiday Packages</h3>
                    <h4  style={{color:"black",padding:"10px",fontSize:"30px"}}>Family Getaways</h4>

                        <p style={{fontSize:"15px",padding:"10px"}}>Explore the most popular destinations in India with your family
                            and loved ones by opting for the following family holiday packages that are designed to
                            provide you with a fulfilling travel experience. Now enjoy family holidays and vacations
                            like never before with our family tour packages that are equipped with quality services 
                            that vary from flights, sightseeing tours, food, transportation and are crafted keeping 
                            in mind the comfort of you and your loved ones. Visit beautiful places and mesmerizing hill
                            stations. To book the tour select from the available family holiday packages in India and 
                                set out on your next family trip.
                        </p>
                </div>  


                        
                        <div className="ui container">
                         <h1>Domestic Family Holidays- Under ₹ 50,000</h1>
                           <div className="ui row">
                             <div className="ui column" > 
                             <Link to="/familyholiday">
                             <Img src={require("../images/family-ladakh1.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Leh Ladakh Leh Places</h4></Link>
                                    <a  style={{color:"red"}}>₹ 12,199 </a>
                                    <h5>Per Person</h5>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Link to="/familyholiday">
                        <Img src={require("../images/family-gujarat.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Somnath,Gujarat
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 11,899
                                </a>
                                <h5>Per Person</h5>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>
                
                <div className="ui column">
                    <Link to="/familyholiday">
                    <Img src= {require("../images/family-north.jpg")} 
                     style={{width:"90%", height:"44vh"}}
                     />
                     </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>North-East Cherrapunji</h4></Link>
                                <a   style={{color:"red"}}>₹ 10,500</a>
                                <h5>Per Person</h5>
                                <Link to="vishal tours/north-east">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>      
                </div>
                
                </div>
                
                
                
                <h1>Domestic Family Holidays- Under ₹ 40,000</h1>
                    <div className="ui row">
                        <div className="ui column">
                            <Link to="/familyholiday">
                            <Img src={require("../images/family-pondicherry.jpeg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Matrimandir Pondicherry</h4></Link>
                                <a style={{color:"red"}}>₹ 8,499</a>
                                <h5>Per Person</h5>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                        
                        <div className="ui column">
                            <Link to="/familyholiday">
                            <Img src={require("../images/family-rajasthan.jpg")}
                            style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Rajasthan Pushkar Raj-Mahal</h4></Link>
                                <a style={{color:"red"}}>₹ 9,200</a>
                                <h5>Per Person</h5>
                                <Link to="MakeMyTrip/rajasthan">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                        
                        <div className="ui column"> 
                            <Link to="/familyholiday">
                            <Img src={require("../images/family-manali.jpeg")}
                             style={{width:"90%",height:"44vh"}}
                             />
                             </Link>
                             <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Hadimba Temple Manali</h4></Link>
                                <a style={{color:"red"}}>₹ 7,999</a>
                                <h5>Per Person</h5>
                                <Link to="trivago/manali">Trivago</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                    </div>

                <h1>Family Holidays Under INR 20,000 Per Person</h1>
                <div className="ui row">
                        <div className="ui column">
                                <Link to="/familyholiday">
                                <Img src= {require("../images/leh-ladakh4.jpg")}
                              style={{width:"90%",height:"45vh"}}
                              />
                              </Link>
                              <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Hemis Leh Ladakh</h4></Link>
                                <a style={{color:"red"}}>₹ 5,399</a>
                                <h5>Per Person</h5>
                                <Link to="vishal tours/andaman">Vishal Tours</Link>
                            
                                </div>
                                <hr></hr>
                                
                               
                        </div>
                        <div className="ui column">
                            <Link to="/familyholiday">
                            <Img src={require("../images/family-ladakh.jpg")}
                             style={{width:"90%",height:"45vh"}}
                            />
                            </Link>
                             <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Chadar Trek Ladakh</h4></Link>
                                <a style={{color:"red"}}>₹ 4,500</a>
                                <h5>Per Person</h5>
                                <Link to="gangde agencies/goa">Gangde Agencies</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                        <div className="ui column"> 
                            <Link to="/familyholiday">
                            <Img src= {require("../images/family-ladakh2.png")}
                             style={{width:"90%", height:"45vh"}}
                             />
                             </Link>
                             <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Leh Palace</h4></Link>
                                <a style={{color:"red"}}>₹ 6,299</a>
                                <h5>Per Person</h5>
                                <Link to="chouhan agencies/kerela">Chouhan Agencies</Link>
                            
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

export default Packages;