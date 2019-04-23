import React from 'react';
import Img from 'react-image';
import '../index.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';


class HoneymoonPackages extends React.Component{
    render(){
        return(
            <div>
                <header className="header4">
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
                                    <li className="adjust1">Choose Category</li>
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
                        <h3 className="title1" style={{color:"black",padding:"20px",fontSize:"30px"}}><Link to="/" style={{fontSize:"20px"}}><i>home/</i></Link>Honeymoon Packages' Inspiration</h3>
                    </div>  

                <div className="ui container">
                <h1>Trending Honeymoon Packages in India</h1>
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
                             <Link to="/honeymoonpackages/kerela">
                             <Img className="images" src={require("../images/kerela.jpg")} 
                                 style={{width:"90%",height:"44vh"}}
                                />
                             </Link>
                             <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered24" style={{ border: "2px solid black"}}><b><i>Kerela 5 days<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                             <div className="ui text-block">
                                <Link><h4 style={{color:"black",paddingTop:"20px"}}>Kerela 5 days package
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 22,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                             </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Link to="/honeymoonpackages/kashmir">
                        <Img className="images" src={require("../images/kashmir.jpeg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                         <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered25" style={{ border: "2px solid black"}}><b><i>Kashmir Tour Package<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black",paddingTop:"20px"}}>Kashmir Tour Package
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 13,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>

                
                <div className="ui column" >
                        <Link to="/honeymoonpackages/darjeeling">
                        <Img className="images" src={require("../images/northeast1.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                         <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered26" style={{ border: "2px solid black"}}><b><i> Gangtok Tour<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black",paddingTop:"20px"}}>Darjeeling and Gangtok Tour
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
                             <Link to="/honeymoonpackages/manali">
                             <Img className="images" src={require("../images/kullu3.jpeg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                               <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered" style={{ border: "2px solid black"}}><b><i>Shimla & Manali Tour<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black",paddingTop:"20px"}}>Shimla & Manali</h4></Link>
                                    <a  style={{color:"red"}}>₹ 15,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                
                             <div className="ui column" > 
                             <Link to="/honeymoonpackages/goa">
                             <Img className="images" src={require("../images/goa.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                               <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered31" style={{ border: "2px solid black"}}><b><i>4 days in Goa<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black",paddingTop:"20px"}}>4 days in Goa</h4></Link>
                                    <a  style={{color:"red"}}>₹ 17,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>

                             <div className="ui column" > 
                             <Link to="/honeymoonpackages/andaman">
                             <Img className="images" src={require("../images/andaman.png")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                               <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered32" style={{ border: "2px solid black"}}><b><i>Andaman Vacation<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black",paddingTop:"20px"}}>Andaman Vacation</h4></Link>
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
                            <Link to="/honeymoonpackages/ladakh">
                            <Img className="images" src={require("../images/laddak.jpeg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered33" style={{ border: "2px solid black"}}><b><i>5 days In Ladakh<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black",paddingTop:"20px"}}>5 days In Ladakh</h4></Link>
                                <a style={{color:"red"}}>₹ 19,900</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/honeymoonpackages/manali">
                            <Img className="images" src={require("../images/mountain-himachal.png")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered34" style={{ border: "2px solid black"}}><b><i>Trip To McLeod Ganj<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black",paddingTop:"20px"}}>Trip To McLeod Ganj</h4></Link>
                                <a style={{color:"red"}}>₹ 6,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>          

                        <div className="ui column">
                            <Link to="/honeymoonpackages/shrinagar">
                            <Img className="images" src={require("../images/laddak1.jpeg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered35" style={{ border: "2px solid black"}}><b><i>Shrinagar, kargil & Leh<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black",paddingTop:"20px"}}>Shrinagar, kargil & Leh</h4></Link>
                                <a style={{color:"red"}}>₹ 53,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                        </div>

                        <h1>Himachal Honeymoon Packages</h1>
                    <div className="ui row">
                        

                        <div className="ui column">
                            <Link to="/honeymoonpackages/manali">
                            <Img className="images" src={require("../images/mountain-hill1.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered36" style={{ border: "2px solid black"}}><b><i>4 days Kullu<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black",paddingTop:"20px"}}>4 days Kullu & Manali Tour</h4></Link>
                                <a style={{color:"red"}}>₹ 13,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/honeymoonpackages/shrinagar">
                            <Img className="images" src={require("../images/mountain-hill.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered37" style={{ border: "2px solid black"}}><b><i>Dharamshala<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black",paddingTop:"20px"}}>Dharamshala – Land Of The Lamas</h4></Link>
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

export default HoneymoonPackages;