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
                        <h3 className="title1" style={{color:"black",padding:"20px",fontSize:"30px"}}><Link to="/" style={{fontSize:"20px"}}><i>home/</i></Link>Mountains</h3>
                         <p className="paragraph" style={{padding:"20px"}}>Answer the call of the mountains by getting a heavy dose of wanderlust on the best of mountain escapes, mountain resorts, treks and offbeat destinations.
                             Here is all you need to help you plan your next perfect vacation to the hills.
                         </p>

                       
                    </div>  

                <div className="ui container">
                <h1>Best Mountain Destinations In India</h1>
                           <div className="ui row">
                             <div className="ui column" > 
                             <Link to="/mountains/sikkim">
                             <Img className="images" src={require("../images/mountain-hill.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                               <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered24" style={{ border: "2px solid black"}}><b><i>Sikkim<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black",paddingTop:"20px"}}>Sikkim</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Link to="/mountains/himachal">
                        <Img className="images" src={require("../images/mountain-himachal.png")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                         <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered25" style={{ border: "2px solid black"}}><b><i>Himachal Pradesh<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black",paddingTop:"20px"}}>Himachal Pradesh
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 29,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>


                <div className="ui column" >
                        <Link to="/mountains/uttarakhnd">
                        <Img className="images" src={require("../images/mountain-uttarakhnd.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                         <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered26" style={{ border: "2px solid black"}}><b><i>Uttarakhnd<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black",paddingTop:"20px"}}>Uttarakhnd
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
                             <Link to="/mountains/kashmir">
                             <Img className="images" src={require("../images/Mountain-Kashmir.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                               <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered6" style={{ border: "2px solid black"}}><b><i>Kashmir<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black",paddingTop:"20px"}}>Kashmir</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                
                             <div className="ui column" > 
                             <Link to="/mountains/karnataka">
                             <Img className="images" src={require("../images/mountain-karnataka.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                               <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered7" style={{ border: "2px solid black"}}><b><i>Karnataka<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black",paddingTop:"20px"}}>Karnataka</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>

                             <div className="ui column" > 
                             <Link to="/mountains/kerela">
                             <Img className="images" src={require("../images/mountain-kerela.png")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                               <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered8" style={{ border: "2px solid black"}}><b><i>Kerela<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black",paddingTop:"20px"}}>Kerela</h4></Link>
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
                            <Link to="/mountains/manali">
                            <Img className="images" src={require("../images/mountain-hill1.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered9" style={{ border: "2px solid black"}}><b><i>Manali<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black",paddingTop:"20px"}}>Manali </h4></Link>
                                <a style={{color:"red"}}>₹ 30,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/mountains/munnar">
                            <Img className="images" className="images" src={require("../images/mountain-hill3.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered10" style={{ border: "2px solid black"}}><b><i>Munnar<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black",paddingTop:"20px"}}>Munnar</h4></Link>
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