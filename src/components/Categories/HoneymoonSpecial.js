import React from 'react';
import Img from 'react-image';
import '../index.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';


class HoneymoonSpecial extends React.Component{
    render(){
        return(
            <div>
                <header className="header9">
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
                        <h3 style={{padding:"20px"}}><Link to="/">home/</Link>Honeymoon Packages' Inspiration</h3>
                    </div>  

                <div className="ui container">
                <h1>Trending Honeymoon Packages in India</h1>
                <h5>Exclusive Tours & Holiday Packages</h5>
                    <p>Take the Honeymoon planning stress off your shoulders.
                        VisTour is here to make you browse through handcrafted Honeymoon 
                        Packages from our travel partners. 
                        India offers a range of destinations for a honeymoon trip. 
                        From the backwaters of Kerala to the beaches of Andaman and Goa, 
                        the snowy locales of Kashmir and the dreamy palaces of Rajasthan. 
                        Explore below for some of the Best Honeymoon Packages in India with prices.
                    </p>
                           <div className="ui row">
                             <div className="ui column" > 
                             <Link to="/honeymoonpackages">
                             <Img src={require("../images/kerela.jpg")} 
                                 style={{width:"90%",height:"44vh"}}
                                />
                             </Link>
                             <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Kerela 5 days package
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 22,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                             </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Link to="/heritage">
                        <Img src={require("../images/kashmir.jpeg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Kashmir Tour Package
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 13,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>

                
                <div className="ui column" >
                        <Link to="/heritage">
                        <Img src={require("../images/northeast1.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Darjeeling and Gangtok Tour
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 19,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>
                </div>

                <h1>Domestic Honeymoon Packages Under INR 20,000</h1>
                <div className="ui row">
                <div className="ui column" > 
                             <Link to="/heritage">
                             <Img src={require("../images/kullu3.jpeg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Shimla & Manali</h4></Link>
                                    <a  style={{color:"red"}}>₹ 15,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                
                             <div className="ui column" > 
                             <Link to="/heritage">
                             <Img src={require("../images/goa.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>4 days in Goa</h4></Link>
                                    <a  style={{color:"red"}}>₹ 17,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>

                             <div className="ui column" > 
                             <Link to="/heritage">
                             <Img src={require("../images/andaman.png")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Andaman Vacation</h4></Link>
                                    <a  style={{color:"red"}}>₹ 13,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div> 
                </div>

                <h1>Ladakh Honeymoon Packages</h1>
                    <div className="ui row">
                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/laddak.jpeg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>5 days In Ladakh</h4></Link>
                                <a style={{color:"red"}}>₹ 19,900</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/laddak3.jpeg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Leh Nubra Pangong</h4></Link>
                                <a style={{color:"red"}}>₹ 43,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/laddak1.jpeg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Shrinagar, kargil & Leh</h4></Link>
                                <a style={{color:"red"}}>₹ 53,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                        </div>

                        <h1>Himachal Honeymoon Packages</h1>
                    <div className="ui row">
                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/mountain-himachal.png")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Trip To McLeod Ganj</h4></Link>
                                <a style={{color:"red"}}>₹ 6,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/mountain-hill1.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>4 days Kullu & Manali Tour</h4></Link>
                                <a style={{color:"red"}}>₹ 13,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/mountain-hill.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Dharamshala – Land Of The Lamas</h4></Link>
                                <a style={{color:"red"}}>₹ 13,999</a><br></br>
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

export default HoneymoonSpecial;