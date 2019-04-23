import React from 'react';
import Img from 'react-image';
import '../index.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';


class HoneymoonPackages extends React.Component{
    render(){
        return(
            <div>
                <header className="header5">
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
                        <h3 className="title1" style={{color:"black",padding:"20px",fontSize:"30px"}}><Link to="/" style={{fontSize:"20px"}}><i>home/</i></Link>Wildlife Tourism</h3>
                        <p style={{padding:"20px"}}>
                                    Along with enviably diverse terrains, India is home to some of the most exotic wildlife in the world. 
                                    The glorious Asiatic lion, the elusive snow leopard, the fleeting flying squirrel and our national animal,
                                    Bengal tiger; the list of wildlife in India is a matter of pride for enthusiasts. Opening the environs of
                                    wildlife tourism, VisTour brings you a collections of stories, stays and tips for the best jungle experience.
                        </p>
                    </div>  

                    <div className="ui container">
                    <h1>Wildlife In India</h1>
                            <div className="ui row">
                                <div className="ui column" > 
                                <Link to="/WildlifeTourism/TigerInIndia">
                                <Img className="images" src={require("../images/tiger.jpg")} 
                                    style={{width:"90%",height:"44vh"}}
                                    />
                                </Link>
                                <Link to="/WildlifeTourism/TigerInIndia" style={{color:"black"}}>
                                        <div class="centered38" style={{ border: "2px solid black"}}><b><i>Tiger In India<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black",paddingTop:"20px"}}>Tiger Reserves In India
                                    </h4></Link>
                                </div>
                                    <hr></hr>
                                </div>
                            
                                <div className="ui column" >
                                        <Link to="/WildlifeTourism/ElephantsInIndia">
                                        <Img className="images" src={require("../images/elephent1.jpg")} 
                                        style={{width:"90%",height:"44vh"}}
                                        />
                                        </Link>
                                        <Link to="/WildlifeTourism/ElephantsInIndia" style={{color:"black"}}>
                                        <div class="centered39" style={{ border: "2px solid black"}}><b><i>Elephants At Dalma<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                        <div className="ui text-block">
                                                <Link><h4 style={{color:"black",paddingTop:"20px"}}>Elephants At Dalma Wildlife Sanctuary</h4></Link>
                                        </div>
                                        <hr></hr>        
                                </div>

                
                                <div className="ui column" >
                                        <Link to="/WildlifeTourism/AsiaLion">
                                        <Img className="images" src={require("../images/Lion.jpg")} 
                                        style={{width:"90%",height:"44vh"}}
                                        />
                                        </Link>
                                        <Link to="/WildlifeTourism/AsiaLion" style={{color:"black"}}>
                                        <div class="centered40" style={{ border: "2px solid black"}}><b><i>Asiatic Lion<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                        <div className="ui text-block">
                                                <Link><h4 style={{color:"black",paddingTop:"20px"}}>Asiatic Lion In Gir
                                                </h4></Link>
                                        </div>
                                        <hr></hr>        
                                </div>
                                </div>

                            <h1>Where To See Tigers In India</h1>
                            <div className="ui row">
                            <div className="ui column" > 
                                        <Link to="/WildlifeTourism/BestPlacesTiger">
                                        <Img className="images" src={require("../images/tiger-forest.jpg")}
                                            style={{width:"90%", height:"44vh"}}
                                        />
                                        </Link>
                                        <Link to="/WildlifeTourism/BestPlacesTiger" style={{color:"black"}}>
                                        <div class="centered41" style={{ border: "2px solid black"}}><b><i>Best Places Tiger<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                            <div className="ui text-block">
                                                <Link><h4 style={{color:"black",paddingTop:"20px"}}>8 Best Places Tiger Safari In India!</h4></Link>
                                            </div>
                                            <hr></hr>
                                        </div>
                            
                                        <div className="ui column" > 
                                        <Link to="/WildlifeTourism/PannaNationalPark">
                                        <Img className="images" src={require("../images/panna-tiger.jpg")}
                                            style={{width:"90%", height:"44vh"}}
                                        />
                                        </Link>
                                        <Link to="/WildlifeTourism/PannaNationalPark" style={{color:"black"}}>
                                        <div class="centered42" style={{ border: "2px solid black"}}><b><i>Wildlife Panna National<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                            <div className="ui text-block">
                                                <Link><h4 style={{color:"black",paddingTop:"20px"}}>Wildlife Safaris at Panna National Park</h4></Link>
                                                
                                            </div>
                                            <hr></hr>
                                        </div>

                                        <div className="ui column" > 
                                        <Link to="/WildlifeTourism/PenchNationalPark">
                                        <Img className="images" src={require("../images/panch-park.jpg")}
                                            style={{width:"90%", height:"44vh"}}
                                        />
                                        </Link>
                                        <Link to="/WildlifeTourism/PenchNationalPark" style={{color:"black"}}>
                                        <div class="centered43" style={{ border: "2px solid black"}}><b><i>Pench National Park<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                            <div className="ui text-block">
                                                <Link><h4 style={{color:"black",paddingTop:"20px"}}>Mowgli's Trail in Pench National Park</h4></Link>
                                                
                                            </div>
                                            <hr></hr>
                                        </div> 
                            </div>

                            
                                <div className="ui row">
                                   
                                    <div className="ui column">
                                        <Link to="/WildlifeTourism/BhadraWildlife">
                                        <Img className="images" src={require("../images/elephent2.jpg")} 
                                        style={{width:"90%",height:"44vh"}}
                                        />
                                        </Link>
                                        <Link to="/WildlifeTourism/BhadraWildlife" style={{color:"black"}}>
                                        <div class="centered44" style={{ border: "2px solid black"}}><b><i>Bhadra Wildlife <br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                        <div className="ui text-block">
                                        <Link><h4 style={{color:"black",paddingTop:"20px"}}>Bhadra Wildlife - Into The Wild</h4></Link>
                                        
                                        
                                            </div>
                                            <hr></hr>
                                    </div>

                                    <div className="ui column">
                                        <Link to="/WildlifeTourism/Ranipuram">
                                        <Img className="images" src={require("../images/elephent.jpg_1458193553")} 
                                        style={{width:"90%",height:"44vh"}}
                                        />
                                        </Link>
                                        <Link to="/WildlifeTourism/Ranipuram" style={{color:"black"}}>
                                        <div class="centered45" style={{ border: "2px solid black"}}><b><i>Ranipuram -Hills<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                        <div className="ui text-block">
                                        <Link><h4 style={{color:"black",paddingTop:"20px"}}>Ranipuram -Hills of the western ghats</h4></Link>
                                            
                                        
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