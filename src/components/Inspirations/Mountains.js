import React from 'react';
import Img from 'react-image';
import '../index.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

class Mountains extends React.Component{
    render(){
        return(
            <div>
                <header className="header2">
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
                        <h3 className="title1" style={{color:"black",padding:"20px",fontSize:"35px"}}>Mountains</h3>
                         <p className="paragraph" style={{padding:"20px"}}>Answer the call of the mountains by getting a heavy dose of wanderlust on the best of mountain escapes, mountain resorts, treks and offbeat destinations.
                             Here is all you need to help you plan your next perfect vacation to the hills.
                         </p>

                       
                    </div>  

                <div className="ui container">
                <h1>Best Mountain Destinations In India</h1>
                           <div className="ui row">
                             <div className="ui column" > 
                             <Link to="/mountains">
                             <Img src={require("../images/mountain-hill.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Sikkim</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Link to="/mountains">
                        <Img src={require("../images/mountain-himachal.png")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Himachal Pradesh
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 29,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>


                <div className="ui column" >
                        <Link to="/mountains">
                        <Img src={require("../images/mountain-uttarakhnd.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Uttarakhnd
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
                             <Link to="/mountains">
                             <Img src={require("../images/Mountain-Kashmir.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Kashmir</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                
                             <div className="ui column" > 
                             <Link to="/mountains">
                             <Img src={require("../images/mountain-karnataka.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Karnataka</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>

                             <div className="ui column" > 
                             <Link to="/mountains">
                             <Img src={require("../images/mountain-kerela.png")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Kerela</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div> 
                </div>

                <h1>Most Beautiful Hill Stations In India</h1>
                    <div className="ui row">
                        <div className="ui column">
                            <Link to="/mountains">
                            <Img src={require("../images/mountain-hill.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Himachal</h4></Link>
                                <a style={{color:"red"}}>₹ 30,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/mountains">
                            <Img src={require("../images/mountain-hill1.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Manali </h4></Link>
                                <a style={{color:"red"}}>₹ 30,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/mountains">
                            <Img src={require("../images/mountain-hill3.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Munnar</h4></Link>
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

export default Mountains;