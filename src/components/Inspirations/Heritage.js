import React from 'react';
import Img from 'react-image';
import '../index.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

class Heritage extends React.Component{
    render(){
        return(
            <div>
                <header className="header3">
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
                            </ul>
                    </header>

                    <div>
                        <h3 className="title1" style={{color:"black",padding:"20px",fontSize:"30px"}}><Link to="/" style={{fontSize:"20px"}}><i>home/</i></Link>Heritage</h3>
                         <p className="paragraph" style={{padding:"20px"}}>India has cradled many civilisations and kingdoms;
                            some revelled in power and other crumbled to dust. Either way, the marks of our country's glorious 
                            past are sprinkled across land and sea. So, if you want to travel back in time for your next vacation,
                            here's all you need to plan the trip.
.
                         </p>

                       
                    </div>  

                <div className="ui container">
                <h1>Heritage Destinations In India</h1>
                           <div className="ui row">
                             <div className="ui column" > 
                             <Link to="/heritage">
                             <Img src={require("../images/heritage-rajasthan.webp")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Rajasthan</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Link to="/heritage">
                        <Img src={require("../images/heritage-orissa.png")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Orissa
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 29,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>


                <div className="ui column" >
                        <Link to="/heritage">
                        <Img src={require("../images/heritage-tamil.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Tamil Nadu
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 29,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>
                </div>
                <h1>Heritage Destinations</h1>
                <div className="ui row">
                <div className="ui column" > 
                             <Link to="/heritage">
                             <Img src={require("../images/heritage-madhya.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Madhya Pradesh</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                
                             <div className="ui column" > 
                             <Link to="/heritage">
                             <Img src={require("../images/heritage-delhi.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Delhi</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>

                             <div className="ui column" > 
                             <Link to="/heritage">
                             <Img src={require("../images/heritage-maharastra.JPG")}
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
                </div>

                <h1>Glorious Forts Of India</h1>
                    <div className="ui row">
                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/heritage-gwalior.jpeg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Gwalior Fort</h4></Link>
                                <a style={{color:"red"}}>Madhya Pradesh</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/heritage-hydrabaad.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Golconda Fort </h4></Link>
                                <a style={{color:"red"}}>Hydrabaad</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/heritage-fort.png")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Chittorgarh Fort</h4></Link>
                                <a style={{color:"red"}}>Rajasthan</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                        </div>

                        <h1>Mughal Architecture In India</h1>
                    <div className="ui row">
                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/tajmahal.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Taj Mahal</h4></Link>
                                <a style={{color:"red"}}>Agra</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/bibi ka makbara1.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Fatehpur Sikri</h4></Link>
                                <a style={{color:"red"}}>Hydrabaad</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/humayu.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Humayun's Tomb</h4></Link>
                                <a style={{color:"red"}}>Delhi</a><br></br>
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

export default Heritage;