import React from 'react';
import Img from 'react-image';
import '../index.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

class Beaches extends React.Component{
    render(){
        return(
            <div>
                <header className="header1">
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
                               
                                <Link to="/inspiration/Experiences" className="item">Experiences</Link>
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
                    <h3 className="title1" style={{color:"black",padding:"20px",fontSize:"35px"}}>Beaches</h3>
                    <p className="paragraph" style={{padding:"20px"}}>The love affair with the ocean lasts a lifetime.
                    </p>

                        <p className="paragraph" style={{padding:"20px"}}>Sand, waves and wind make a perfect getaway from the hustle bustle of city life.
                         Beaches can make anyone happy. Just take a beach vacation anywhere in the world and you will find your happiness in the waves. 
                         You can choose from a variety of destinations for your next beach holiday in India or anywhere.
                          Pick a beach resort according to your budget and spend time with the family or go for a solo trip on picture perfect shores that 
                          nature has blessed us with. Enjoy the sunrise, go for water sports or just sit idle on sandy floors of these beautiful beaches.
                        </p>
                </div>  

                <div className="ui container">
                <h1>Best Beach Destinations In India</h1>
                <p>The peninsular part of India is blessed with several pristine beaches for all the beach lovers out there.
                     India has some of the best beaches that can help you get that extra doze of thrill that you have always
                      been looking for. Beaches in India vary from tropical beaches to Island beaches. Some of the famous 
                      beaches in India are in Goa, Gokarna and Kerala.
                </p>
                           <div className="ui row">
                             <div className="ui column" > 
                             <Link to="/beach">
                             <Img src={require("../images/goa-beaches.png")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Goa</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Link to="/beach">
                        <Img src={require("../images/beach-pondicherry.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Pondicherry
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 29,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>


                <div className="ui column" >
                        <Link to="/Gujrat Royality">
                        <Img src={require("../images/beach-andaman.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Andaman and Nicobar
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 29,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>
                </div>

                <div className="ui row">
                <div className="ui column" > 
                             <Link to="/beach">
                             <Img src={require("../images/beach-kerela.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>kerela</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                
                             <div className="ui column" > 
                             <Link to="/beach">
                             <Img src={require("../images/beach-maharastra.png")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Maharastra</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>

                             <div className="ui column" > 
                             <Link to="/beach">
                             <Img src={require("../images/beach-tamil.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Tamil Nadu</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div> 
                </div>

                <h1>For Adventure Lovers</h1>
                    <div className="ui row">
                        <div className="ui column">
                            <Link to="/beach">
                            <Img src={require("../images/beach-adventure.png")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Scuba Diving In The Andamans</h4></Link>
                                <a style={{color:"red"}}>₹ 30,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/beach">
                            <Img src={require("../images/beach-coastal.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Coastal Treks In India</h4></Link>
                                <a style={{color:"red"}}>₹ 30,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/beach">
                            <Img src={require("../images/beach-flord.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>All About Flyboarding In Goa</h4></Link>
                                <a style={{color:"red"}}>₹ 30,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
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