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
                        <h3 className="title1" style={{color:"black",padding:"20px",fontSize:"35px"}}>Wildlife Tourism</h3>
                        <p style={{padding:"20px"}}>Along with enviably diverse terrains, India is home to some of the most exotic wildlife in the world. 
                            The glorious Asiatic lion, the elusive snow leopard, the fleeting flying squirrel and our national animal,
                             Bengal tiger; the list of wildlife in India is a matter of pride for enthusiasts. Opening the environs of
                              wildlife tourism, VisTour brings you a collections of stories, stays and tips for the best jungle experience.
                        </p>
                    </div>  

                <div className="ui container">
                <h1>Wildlife In India</h1>
                           <div className="ui row">
                             <div className="ui column" > 
                             <Link to="/honeymoonpackages">
                             <Img src={require("../images/tiger.jpg")} 
                                 style={{width:"90%",height:"44vh"}}
                                />
                             </Link>
                             <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Tiger Reserves In India
                                </h4></Link>
                             </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Link to="/heritage">
                        <Img src={require("../images/elephent1.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Elephants At Dalma Wildlife Sanctuary</h4></Link>
                        </div>
                        <hr></hr>        
                </div>

                
                <div className="ui column" >
                        <Link to="/heritage">
                        <Img src={require("../images/Lion.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Asiatic Lion In Gir
                                </h4></Link>
                        </div>
                        <hr></hr>        
                </div>
                </div>

                <h1>Where To See Tigers In India</h1>
                <div className="ui row">
                <div className="ui column" > 
                             <Link to="/heritage">
                             <Img src={require("../images/tiger-forest.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>8 Best Places Tiger Safari In India!</h4></Link>
                                </div>
                                <hr></hr>
                             </div>
                
                             <div className="ui column" > 
                             <Link to="/heritage">
                             <Img src={require("../images/panna-tiger.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Wildlife Safaris at Panna National Park</h4></Link>
                                    
                                </div>
                                <hr></hr>
                             </div>

                             <div className="ui column" > 
                             <Link to="/heritage">
                             <Img src={require("../images/panch-park.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Mowgli's Trail in Pench National Park</h4></Link>
                                    
                                </div>
                                <hr></hr>
                             </div> 
                </div>

                <h1>Where To See Elephants In India</h1>
                    <div className="ui row">
                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/park-elephant.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Periyar Boat Safari</h4></Link>
                               
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/elephent2.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Bhadra Wildlife - Into The Wild</h4></Link>
                              
                            
                                </div>
                                <hr></hr>
                        </div>

                        <div className="ui column">
                            <Link to="/heritage">
                            <Img src={require("../images/elephent.jpg_1458193553")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Ranipuram -Hills of the western ghats</h4></Link>
                                
                            
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