import React from 'react';
import Img from 'react-image';
import '../components/index.css'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

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
                                 <div className="dropdown">
                                    <li>Inspirations</li>
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
                                    <li>Choose Category</li>
                                    <div className="dropdown-content">
                                        <Link to="/categories/family">Family Holidays</Link>
                                        <Link to="/categories/friends">Friends Road Trips</Link>
                                        <Link to="/categories/honeymoon">Honeymoon Special</Link>
                                        <Link to="/categories/budget">Budget Getaways</Link>
                                        <Link to="/categories/thrillingtreks">Thrilling Treks</Link>
                                    </div>
                                 </div>
                                    <li><Link to="/forum" className="item">Forum</Link></li>
                                    <li><Link to="/hotels" className="item">Hotels</Link></li>
                                    <li><Link to="/flights" className="item">Flights</Link></li>
                                    <li><Link to="/trips" className="item">Trips</Link></li>
                                    <li><Link to="/user/signin" className="item">Sign In</Link></li>
                                </ul>
                            </div>
                            <div className="title">
                                <h1>Exclusive Tours & Holiday Packages</h1>
                            </div>
                            
                </header>
                        <div>
                            <h3 className="title1">Holidays in India</h3>
                            <p className="paragraph">
                                Need help in getting a perfect travel experience in India? 
                                VisTravels has curated several travel packages covering some
                                of the most popular holiday destinations for you!
                            </p>
                            <p className="paragraph">
                                The wide range of tours offered at VisTravels promise to render you the best of travel experiences.
                                Whether you are looking for handcrafted honeymoon holidays, pre-planned road trips, thrilling treks, weekend getaways,
                                or a pilgrimage tour with family, get to browse according to your choice.
                                VisTravels also understands the needs of a budget traveller, which is why low-budget holidays and pocket-friendly escapades are always on.
                                Enjoying holidays in India was never as easy as it is now at VisTravels. Happy Vacations!
                            </p>
                        </div>  
                        <div className="ui container">
                            <h1>Domestic Holidays- Under ₹ 30,000</h1>
                                <div className="ui row">
                                    <div className="ui column" > 
                                        <Link to="/lehladakh/">
                                            <Img src={require("./images/laddak2.jpeg")}
                                            style={{width:"90%", height:"44vh"}}
                                            />
                                        </Link>
                                        <Link to="/lehladakh/" style={{color:"black"}}>
                                        <div class="centered3" style={{ border: "2px solid black"}}><b><i>Leh Ladakh<br/></i>
                                            <br/>
                                            ₹ 21,999 Per Person<br/>
                                            6 Days / 5 Nights<br/>
                                            </b>
                                        </div>
                                        </Link>
                                        <div className="ui text-block">
                                            <Link><h4 style={{color:"black"}}>Leh Ladakh Leh Places</h4></Link>
                                            <br></br>
                                            <Link to="/vishal tours/Leh Ladakh">Vishal Tours</Link>
                                        </div>
                                        <hr></hr>
                                    </div>
                                    <div className="ui column" >
                                        <Link to="/Gujrat Royality">
                                            <Img src={require("./images/gujarat2.jpeg")} 
                                            style={{width:"90%",height:"44vh"}}
                                            />
                                        </Link>
                                        <Link to="/Gujrat Royality" style={{color:"black"}}>
                                            <div class="centered4" style={{ border: "2px solid black"}}><b><i>Gujrat<br/></i>
                                                <br/>
                                                ₹ 18,999 Per Person<br/>
                                                6 Days / 5 Nights<br/>
                                                </b>
                                            </div>
                                        </Link>
                                        <div className="ui text-block">
                                            <Link><h4 style={{color:"black"}}>Gujrat Royality of Sasangir,Somnath</h4></Link>
                                            <br></br>
                                            <Link to="/vishal tours/Gujrat">Vishal Tours</Link>
                                        </div>
                                        <hr></hr>        
                                    </div>
                                    <div className="ui column">
                                        <Link to="/tour-package/North-East">
                                            <Img src= {require("./images/northeast.jpg")} 
                                            style={{width:"90%", height:"44vh"}}
                                            />
                                        </Link>
                                        <Link to="/tour-package/North-East" style={{color:"black"}}>
                                            <div class="centered5" style={{ border: "2px solid black"}}><b><i>North-East<br/></i>
                                                <br/>
                                                ₹ 21,999 Per Person<br/>
                                                6 Days / 5 Nights<br/>
                                                </b>
                                            </div>
                                        </Link>
                                        <div className="ui text-block">
                                            <Link><h4 style={{color:"black"}}>North-East Cherrapunji</h4></Link>
                                            <br></br>
                                            <Link to="vishal tours/north-east">Vishal Tours</Link>
                                        </div>
                                        <hr></hr>      
                                    </div>
                                </div>
                                <h1>Domestic Family Holidays- Under ₹ 40,000</h1>
                                    <div className="ui row">
                                        <div className="ui column">
                                            <Link to="/tour-package/Pondicherry">
                                                <Img src={require("./images/pondichery.jpeg")} 
                                                style={{width:"90%",height:"44vh"}}
                                                />
                                            </Link>
                                            <Link to="/tour-package/Pondicherry" style={{color:"black"}}>
                                            <div class="centered6" style={{ border: "2px solid black"}}><b><i>Pondicherry<br/></i>
                                                <br/>
                                                ₹ 15,999 Per Person<br/>
                                                3 Days / 2 Nights<br/>
                                                </b>
                                            </div>
                                            </Link>
                                            <div className="ui text-block">
                                                <Link><h4 style={{color:"black"}}>Pondicherry Karaikal Beach</h4></Link>
                                                <br></br>
                                                <Link to="MakeMyTrip/pondicherry">MakeMyTrip</Link>
                                            </div>
                                            <hr></hr>
                                        </div>
                                        <div className="ui column">
                                            <Link to="/tour-package/Rajasthan">
                                                <Img src={require("./images/rajasthan2.jpeg")}
                                                style={{width:"90%",height:"44vh"}}
                                                />
                                            </Link>
                                            <Link to="/tour-package/Rajasthan" style={{color:"black"}}>
                                            <div class="centered7" style={{ border: "2px solid black"}}><b><i>Rajasthan<br/></i>
                                                <br/>
                                                ₹ 30,999 Per Person<br/>
                                                9 Days / 8 Nights<br/>
                                                </b>
                                            </div>
                                            </Link>
                                            <div className="ui text-block">
                                                <Link><h4 style={{color:"black"}}>Rajasthan Pushkar Raj-Mahal</h4></Link>
                                                <br></br>
                                                <Link to="MakeMyTrip/rajasthan">MakeMyTrip</Link>
                                            </div>
                                            <hr></hr>
                                        </div>
                                        <div className="ui column"> 
                                            <Link to="/tour-package/Rohtang Pass Manali">
                                                <Img src={require("./images/kullu3.jpeg")}
                                                style={{width:"90%",height:"44vh"}}
                                                />
                                            </Link>
                                            <Link to="/tour-package/Rohtang Pass Manali" style={{color:"black"}}>
                                                <div class="centered8" style={{ border: "2px solid black"}}><b><i>Manali<br/></i>
                                                    <br/>
                                                    ₹ 25,999 Per Couple<br/>
                                                    4 Days / 3 Nights<br/>
                                                    </b>
                                                </div>
                                            </Link>
                                            <div className="ui text-block">
                                                <Link><h4 style={{color:"black"}}>Rohtang Pass Manali</h4></Link>
                                                <br></br>
                                                <Link to="trivago/manali">Trivago</Link>
                                            </div>
                                            <hr></hr>
                                        </div>
                                    </div>
                                    <h1>Domestic Honeymoon Packages</h1>
                                        <div className="ui row">
                                           <div className="ui column">
                                                <Link to="/tour-package/Andaman Nikobar Beach">
                                                    <Img src= {require("./images/honeymoon.jpeg")}
                                                    style={{width:"90%",height:"45vh"}}
                                                    />
                                                </Link>
                                                <Link to="/tour-package/Andaman Nikobar Beach" style={{color:"black"}}>
                                                <div class="centered9" style={{ border: "2px solid black"}}><b><i>Andaman<br/></i>
                                                    <br/>
                                                    ₹ 21,999 Per Person<br/>
                                                    6 Days / 5 Nights<br/>
                                                    </b>
                                                </div>
                                                </Link>
                                                <div className="ui text-block">
                                                    <Link><h4 style={{color:"black"}}>Andaman Nikobar Beach</h4></Link>
                                                    <br></br>
                                                    <Link to="vishal tours/andaman">Vishal Tours</Link>
                                                </div>
                                                <hr></hr>
                                            </div>
                                            <div className="ui column">
                                                    <Link to="/tour-package/Goa Chapora Beach">
                                                        <Img src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                        style={{width:"90%",height:"45vh"}}
                                                        />
                                                    </Link>
                                                    <Link to="/tour-package/Goa Chapora Beach" style={{color:"black"}}>
                                                        <div class="centered10" style={{ border: "2px solid black"}}><b><i>Goa<br/></i>
                                                            <br/>
                                                            ₹ 21,999 Per Person<br/>
                                                            5 Days / 4 Nights<br/>
                                                            </b>
                                                        </div>
                                                    </Link>
                                                    <div className="ui text-block">
                                                        <Link><h4 style={{color:"black"}}>Goa Chapora Beach</h4></Link>
                                                        <br></br>
                                                        <Link to="gangde agencies/goa">Gangde Agencies</Link>
                                                    </div>
                                                    <hr></hr>
                                            </div>
                                            <div className="ui column"> 
                                                <Link to="/tour-package/Kerela Chavakkad">
                                                    <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkafguPCecXVXbfsHMu4ihKqtdcQvyoU8TennXQ90qNFXFkj5gw"
                                                    style={{width:"90%", height:"45vh"}}
                                                    />
                                                </Link>
                                                <Link to="/tour-package/Kerela Chavakkad" style={{color:"black"}}>
                                                    <div class="centered11" style={{ border: "2px solid black"}}><b><i>Kerela<br/></i>
                                                        <br/>
                                                        ₹ 21,999 Per Person<br/>
                                                        3 Days / 2 Nights<br/>
                                                        </b>
                                                    </div>
                                                </Link>
                                                <div className="ui text-block">
                                                    <Link><h4 style={{color:"black"}}>Kerela Chavakkad Beach</h4></Link>
                                                    <br></br>
                                                    <Link to="chouhan agencies/kerela">Chouhan Agencies</Link>
                                                </div>
                                                <hr></hr>
                                            </div>
                                        </div>
                                        <h1>Biking Trips across India</h1>
                                            <div className="ui row">
                                                <div className="ui column">
                                                    <Link to="/tour-package/Leh to Manali">
                                                        <Img src={require("./images/biking.jpeg")}
                                                        style={{width:"90%", height:"45vh"}}
                                                        />
                                                    </Link>
                                                    <Link to="/tour-package/Leh to Manali" style={{color:"black"}}>
                                                        <div class="centered12" style={{ border: "2px solid black"}}><b><i>Leh to Manali<br/></i>
                                                            <br/>
                                                            ₹ 21,999 Per Person<br/>
                                                            7 Days / 6 Nights<br/>
                                                            </b>
                                                        </div>
                                                    </Link>
                                                    <div className="ui text-block">
                                                        <Link><h4 style={{color:"black"}}>Leh to Manali Highway</h4></Link>
                                                        <br></br>
                                                        <Link to="chouhan agencies/lehtomanali">Chouhan Agencies</Link>
                                                    </div>
                                                    <hr></hr>
                                                </div>
                                                <div className="ui column">
                                                    <Link to="/tour-package/Guwahati to Tawang">
                                                        <Img src={require("./images/biking1.jpeg")}
                                                        style={{width:"90%",height:"45vh"}}
                                                        />
                                                    </Link>
                                                    <Link to="/tour-package/Guwahati to Tawang" style={{color:"black"}}>
                                                        <div class="centered13" style={{ border: "2px solid black"}}><b><i>Guwahati<br/></i>
                                                            <br/>
                                                            ₹ 21,999 Per Person<br/>
                                                            8 Days / 7 Nights<br/>
                                                            </b>
                                                        </div>
                                                    </Link>
                                                    <div className="ui text-block">
                                                        <Link><h4 style={{color:"black"}}>Guwahati to Tawang</h4></Link>
                                                        <br></br>
                                                        <Link to="chouhan agencies/guwahatitotawang">Chouhan Agencies</Link>
                                                    </div>
                                                    <hr></hr>
                                                </div>
                                                <div className="ui column"> 
                                                    <Link to="/tour-package/Shimla to Manali">
                                                        <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovdOzvdmvUQEARH8VCzI82syqB2CCIg4wswq84hQBWKPJEmiFkw"
                                                        style={{width:"90%",height:"45vh"}}
                                                        />
                                                    </Link>
                                                    <Link to="/tour-package/Shimla to Manali" style={{color:"black"}}>
                                                        <div class="centered14" style={{ border: "2px solid black"}}><b><i>Shimla to Manali<br/></i>
                                                            <br/>
                                                            ₹ 21,999 Per Person<br/>
                                                            6 Days / 5 Nights<br/>
                                                            </b>
                                                        </div>
                                                    </Link>
                                                    <div className="ui text-block">
                                                        <Link><h4 style={{color:"black"}}>Shimla to Manali via Mandi</h4></Link>
                                                        <br></br>
                                                        <Link to="gangdeji agencies/shimlatomanali">Gangdeji Agencies</Link>
                                                        <hr></hr>   
                                                    </div>
                                                </div>
                                            </div>
                                    <Footer/>
                                </div>
                        </div>
            
                );
        }
}

export default Packages;