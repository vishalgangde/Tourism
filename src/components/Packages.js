import React from 'react';
import Img from 'react-image';
import '../components/index.css'
import { Link } from 'react-router-dom';

//import { Link } from 'react-router-dom';

class Packages extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <div className="ui main">
                        <div className="ui logo">
                            <Img src={require("./images/logo1.png")} alt="a"/>
                        </div>
                            <ul>
                                <li><Link to="/inspirations" className="item">Inspirations</Link></li>
                                <li><Link to="/forum" className="item">Forum</Link></li>
                                <li><Link to="/hotels" className="item">Hotels</Link></li>
                                <li><Link to="/holidays" className="item">Holidays</Link></li>
                                <li><Link to="/flights" className="item">Flights</Link></li>
                                <li><Link to="/trips" className="item">Trips</Link></li>
                                <li><Link to="/user/signin" className="item">Sign In</Link></li>
                            </ul>
                        </div>
                    
                    
                    
                    <div className="title">
                        <h1>Exclusive Tours & Holiday Packages</h1>
                    </div>
                        <div className="dropdown">
                            <button className="dropbtn">Destination</button>
                             <div className="dropdown-content">
                                <Link to="/goa" className="item">Goa</Link>
                                <Link to="/manali" className="item">Manali</Link>
                                <Link to="/kashmir" className="item">Kashmir</Link>
                                <Link to="/northeast" className="item">North-East</Link>
                            </div>
                        </div>
                        <div className=" dropdown">
                            <button class="dropbtn">Choose Category</button>
                            <div className="dropdown-content">
                                <Link to="/family">Family</Link>
                                <Link to="/friends">Friends</Link>
                                <Link to="/couple">Couple</Link>
                                <Link to="/budget">Budget</Link>
                            </div>
                        </div>
                </header>

                <div>
                    <h3 className="title1">Holidays in India</h3>
                    <p className="paragraph">Cover the length and breadth of your beloved nation, by ticking off one destination after another with the changing season!
                        Choose from holidays suitable to your budget & convenience!
                    </p>
                </div>  


                        
                        <div className="ui container">
                         <h1>Domestic Holidays- Under ₹ 30,000</h1>
                           <div className="ui row">
                             <div className="ui column" > 
                             <Link>
                             <Img src={require("./images/laddak2.jpeg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Leh Ladakh Leh Places</h4></Link>
                                    <a  style={{color:"red"}}>₹ 27,999 </a>
                                     <br></br>
                                    <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Img src={require("./images/gujarat2.jpeg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Gujrat Royality of Sasangir,Somnath
                                </h4></Link>
                                <a  style={{color:"red"}}>₹ 29,999
                                </a>
                                <br></br>
                                <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>        
                </div>
                
                <div className="ui column">
                    <Img src= {require("./images/northeast.jpg")} 
                     style={{width:"90%", height:"44vh"}}
                     />
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>North-East Cherrapunji</h4></Link>
                                <a   style={{color:"red"}}>₹ 28,999</a><br></br>
                                <Link to="vishal tours/north-east">Vishal Tours</Link>
                            
                        </div>
                        <hr></hr>      
                </div>
                
                </div>
                
                
                
                <h1>Domestic Family Holidays- Under ₹ 40,000</h1>
                    <div className="ui row">
                        <div className="ui column">
                        
                            <Img src={require("./images/pondichery.jpeg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>Pondicherry Karaikal Beach</h4></Link>
                                <a style={{color:"red"}}>₹ 30,999</a><br></br>
                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                        
                        <div className="ui column">
                            <Img src={require("./images/rajasthan2.jpeg")}
                            style={{width:"90%",height:"44vh"}}
                            />
                            <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Rajasthan Pushkar Raj-Mahal</h4></Link>
                                <a style={{color:"red"}}>₹ 30,999</a><br></br>
                                <Link to="MakeMyTrip/rajasthan">MakeMyTrip</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                        
                        <div className="ui column"> 
                            <Img src={require("./images/kullu3.jpeg")}
                             style={{width:"90%",height:"44vh"}}
                             />
                             <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Rohtang Pass Manali</h4></Link>
                                <a style={{color:"red"}}>₹ 35,999</a><br></br>
                                <Link to="trivago/manali">Trivago</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                    </div>

                <h1>Domestic Honeymoon Packages</h1>
                <div className="ui row">
                        <div className="ui column">
                                <Img src= {require("./images/honeymoon.jpeg")}
                              style={{width:"90%"}}
                              />
                              <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Andaman Nikobar Beach</h4></Link>
                                <a style={{color:"red"}}>₹ 21,399</a><br></br>
                                <Link to="vishal tours/andaman">Vishal Tours</Link>
                            
                                </div>
                                <hr></hr>
                                
                               
                        </div>
                        <div className="ui column">
                            <Img src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                             style={{width:"90%",height:"45vh"}}
                            />
                             <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Goa Chapora Beach</h4></Link>
                                <a style={{color:"red"}}>₹ 25,599</a><br></br>
                                <Link to="gangde agencies/goa">Gangde Agencies</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                        <div className="ui column"> 
                            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkafguPCecXVXbfsHMu4ihKqtdcQvyoU8TennXQ90qNFXFkj5gw"
                             style={{width:"90%", height:"44vh"}}
                             />
                             <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Kerela Chavakkad Beach</h4></Link>
                                <a style={{color:"red"}}>₹ 18,999</a><br></br>
                                <Link to="chouhan agencies/kerela">Chouhan Agencies</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                </div>

                <h1>Biking Trips across India</h1>
                <div className="ui row">
                        <div className="ui column">
                            <Img src={require("./images/biking.jpeg")}
                             style={{width:"90%", height:"45vh"}}
                            />
                            <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Leh to Manali Highway</h4></Link>
                                <a style={{color:"red"}}>₹ 26,599</a><br></br>
                                <Link to="chouhan agencies/lehtomanali">Chouhan Agencies</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                        <div className="ui column">
                            <Img src={require("./images/biking1.jpeg")}
                             style={{width:"90%"}}
                            />
                            <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Guwahati to Tawang</h4></Link>
                                <a   style={{color:"red"}}>₹ 22,699</a><br></br>
                                <Link to="chouhan agencies/guwahatitotawang">Chouhan Agencies</Link>
                            
                                </div>
                                <hr></hr>
                        </div>
                        <div className="ui column"> 
                            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovdOzvdmvUQEARH8VCzI82syqB2CCIg4wswq84hQBWKPJEmiFkw"
                             style={{width:"90%",height:"45vh"}}
                             />
                             <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Shimla to Manali via Mandi</h4></Link>
                                <a style={{color:"red"}}>₹ 23,799</a><br></br>
                                <Link to="gangdeji agencies/shimlatomanali">Gangdeji Agencies</Link>
                                <hr></hr>   
                                </div>
                                
                        </div>
                </div>
            </div>
            
        </div>
            
        );
    }
}

export default Packages;