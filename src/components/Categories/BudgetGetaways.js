import React from 'react';
import Img from 'react-image';
import '../index.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';


class BudgetGetaways extends React.Component{
    render(){
        return(
            <div>
                <header className="header13">
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
                        <h3 style={{padding:"20px"}}><Link to="/">home/</Link>Budget Getaways</h3>
                    </div>  

                <div className="ui container">
                <h1>Domestic Packages | Under INR 6,000</h1>
                <h5>Exclusive Tours & Holiday Packages</h5>
                   <div className="ui row">
                             <div className="ui column" > 
                             <Link to="/ThrillingTreks">
                             <Img src={require("../images/thrilling-1.webp")} 
                                 style={{width:"90%",height:"44vh"}}
                                />
                             </Link>
                             <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>McLeodganj Tour Package</h4></Link>
                                <a  style={{color:"red"}}>₹ 5,599
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                             </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Link to="/ThrillingTreks">
                        <Img src={require("../images/thrilling-bhrigu.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Bhrigu Lake Trekking Expedition</h4></Link>
                                <a  style={{color:"red"}}>₹ 5,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>

                
                <div className="ui column" >
                        <Link to="/ThrillingTreks">
                        <Img src={require("../images/thrilling-hampta-trek.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Manali Tour</h4></Link>
                                <a  style={{color:"red"}}>₹ 5,699
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>
                </div>

                <h1>Domestic Packages | Under INR 10,000 Per Person</h1>
                <div className="ui row">
                <div className="ui column" > 
                             <Link to="/ThrillingTreks">
                             <Img src={require("../images/thrilling1.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Sar Pass Trekking Tour</h4></Link>
                                    <a  style={{color:"red"}}>₹ 8,500 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                
                             <div className="ui column" > 
                             <Link to="/ThrillingTreks">
                             <Img src={require("../images/thrilling-Har_ki_Doon.jpg.webp")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>4 days In Goa</h4></Link>
                                    <a  style={{color:"red"}}>₹ 9,299 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>

                             <div className="ui column" > 
                             <Link to="/ThrillingTreks">
                             <Img src={require("../images/thrilling2.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Har Ki Doon & Jaundhar Glacier Trek</h4></Link>
                                    <a  style={{color:"red"}}>₹ 9,799 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
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

export default BudgetGetaways;