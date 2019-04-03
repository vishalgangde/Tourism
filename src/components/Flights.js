import React from 'react';
import Img from 'react-image';
import '../components/index.css'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

//import { Link } from 'react-router-dom';

class Hotels extends React.Component{
    render(){
        return(
            <div>
                <header className="header11">
                    <div className="ui main">
                        <div className="ui logo">
                            <Img src={require("./images/logo1.png")} alt="a"/>
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
                    
                    
                    
                    <div className="title" >
                        <h1 style={{fontSize:"23px",color:"#E0FFFF"}}>Book Domestic Flight Tickets</h1>
                    </div>
                    <div className="topnav">
                        <div className="search-container">
                            <form action="/action_page.php">
                            <div>
                            <input style={{backgroundColor:"white"}} type="text" placeholder="From: Airport or City" name="search" />
                            </div>
                            <div>
                            <input style={{backgroundColor:"white"}} type="text" placeholder="To: Airport or City" name="search" />
                            </div>
                            <input style={{backgroundColor:"#87CEEB"}} className="date" type="date" name="bday" />
                            </form>
                        </div>
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
                        <h3 style={{padding:"10px"}}><Link to="/"><i>home/</i></Link>Flights Booking</h3>
                        <div className="ui container" style={{padding:"60px"}}>
                         <h1 style={{fontSize:"19px"}}>Lowest Airfare Deals</h1>
                           <div className="ui row">
                             <div className="ui column" > 
                             <Link to="/hotels/goa">
                             <Img src={require("./images/flight-mumbai.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h5 style={{color:"black"}}>Cheapest Flights From Mumbai For Upcoming Weekends</h5></Link>
                                </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Link to="/hotels/mumbai">
                        <Img src={require("./images/flight-bangalore.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h5 style={{color:"black"}}>Cheapest Flights From Bangalore For Upcoming Weekends</h5></Link>
                        </div>
                        <hr></hr>        
                </div>
                
                <div className="ui column">
                    <Link to="/hotels/shimla">
                    <Img src= {require("./images/flight-delhi.jpg")} 
                     style={{width:"90%", height:"44vh"}}
                     />
                     </Link>
                        <div className="ui text-block">
                                <Link><h5 style={{color:"black"}}>Cheapest Flights From Delhi For Upcoming Weekends</h5></Link>
                        </div>
                        <hr></hr>      
                </div>
                
                </div>
                
                
                
                
                    <div className="ui container1">
                        <h3>Why book flights with us??</h3>
                            <p>VisTours user-friendly interface lets you book flights with absolute ease and
                                shows you all the best ongoing flight deals. All this because here, at VisTours, 
                                we understand what a traveller wants while booking a flight. Some might want cheap 
                                flight tickets, some a non-stop flight, some look for a certain airline, and some just 
                                feel comfortable getting a particular seat in an airplane. Well, you get all such choices 
                                if you go for flight ticket booking options on VisTours.
                            </p>
                        <h3>Destinations covered by VisTours</h3>
                            <p>VisTours is delighted to have HappyEasyGo as its partner which brings some of the biggest names in the airline industry on board
                                and helps more and more travellers book flights at best prices. Book a flight In India, almost all major destinations, including
                                Mumbai, Delhi, Chennai, Bangalore, Kochi, Jaipur, Ranchi, Amritsar, Ahmedabad, Goa and Andaman are covered on VisTours.
                            </p>
                        <h3>How to book flight tickets on VisTours</h3>
                            <p>Booking an air ticket is easy on VisTours. All you need to do is follow these simple steps to search and book international and domestic flights on VisTours:<br></br>

                                Step 1: Click on Flights on the right corner of menu bar<br></br>

                                Step 2: Click on the suitable trip option (one way or return trip) <br></br>

                                Step 3: Enter your city of departure, destination (city, state, region or country), select the dates, and then click on search symbol<br></br>

                                Step 4: Select your preferred option and click on Select to book your flight.<br></br>

                                Step 5:  You will be taken to a page where you need to enter your details and make the final payment.</p>
                        <h3>Contact Us</h3>
                            <p><Link to="/VisTours">VisTours.ai</Link> is here to help you you need to know about flights or air tickets.<br></br>

                                You can also reach us at <Link to="/info@VisTours">info@VisTours.com</Link>
                            </p>
                            <hr></hr    >
                    </div>

               
               
                <Footer/>
            </div>
            
        </div>
            
        );
    }
}

export default Hotels;