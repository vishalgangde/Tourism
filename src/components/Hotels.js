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
                <header className="header10">
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
                                    
                                    <li><Link to="/hotels" className="item">Hotels</Link></li>
                                    <li><Link to="/flights" className="item">Flights</Link></li>
                                    <li><Link to="/trips" className="item">Trips</Link></li>
                                    <li><Link to="/user/signin" className="item">Sign In</Link></li>
                                </ul>
                        </div>
                    
                    
                    
                    <div className="title">
                        <h1 style={{fontSize:"23px"}}>Search & Book Hotels Online</h1>
                    </div>
                    <div className="topnav">
                        <div className="search-container">
                            <form action="/action_page.php">
                            <input type="text" placeholder="Where would you like to stay" name="search" />
                            <input className="date" type="date" name="bday" />
                            </form>
                        </div>
                    </div>
                        

                   
                </header>
                        <h3 style={{padding:"10px"}}><Link to="/"><i>home/</i></Link>Hotels Booking</h3>
                        <div className="ui container" style={{padding:"60px"}}>
                         <h1 style={{fontSize:"19px"}}>Hand-picked Hotels for your Upcoming Vacation</h1>
                           <div className="ui row">
                             <div className="ui column" > 
                             <Link to="/hotels/goa">
                             <Img src={require("./images/hotel-goa.jpg")}
                                style={{width:"90%", height:"44vh"}}
                               />
                               </Link>
                                <div className="ui text-block">
                                    <Link><h4 style={{color:"black"}}>Hotels In Goa</h4></Link>
                                </div>
                                <hr></hr>
                             </div>
                        
                <div className="ui column" >
                        <Link to="/hotels/mumbai">
                        <Img src={require("./images/hotel-mumbai.jpg")} 
                        style={{width:"90%",height:"44vh"}}
                         />
                         </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Hotels In Mumbai</h4></Link>
                        </div>
                        <hr></hr>        
                </div>
                
                <div className="ui column">
                    <Link to="/hotels/shimla">
                    <Img src= {require("./images/hotel-shimla.jpg")} 
                     style={{width:"90%", height:"44vh"}}
                     />
                     </Link>
                        <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>Hotels In Shimla</h4></Link>
                        </div>
                        <hr></hr>      
                </div>
                
                </div>
                
                
                
                <h1 style={{fontSize:"19px"}}>Top Hotels in the Indian Metros</h1>
                    <div className="ui row">
                        <div className="ui column">
                            <Link to="/hotels/kolkatta">
                            <Img src={require("./images/hotel-kolkatta.jpg")} 
                             style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                               <Link><h4 style={{color:"black"}}>KOLKATA</h4></Link>
                            </div>
                                <hr></hr>
                        </div>
                        
                        <div className="ui column">
                            <Link to="/hotels/delhi">
                            <Img src={require("./images/hotel-delhi.jpg")}
                            style={{width:"90%",height:"44vh"}}
                            />
                            </Link>
                            <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>DELHI</h4></Link>
                            </div>
                                <hr></hr>
                        </div>
                        
                        <div className="ui column"> 
                            <Link to="/hotels/mumbaii">
                            <Img src={require("./images/hotel-mumbai1.jpg")}
                             style={{width:"90%",height:"44vh"}}
                             />
                             </Link>
                             <div className="ui text-block">
                                <Link><h4 style={{color:"black"}}>BANGALORE</h4></Link>
                             </div>
                                <hr></hr>
                        </div>
                    </div>
                    <div className="ui container1">
                        <h3>Why book with us?</h3>
                            <p>While booking hotels online, the most important factors for most travellers
                                are cheapest prices, convenient location, room options, facilities, reviews, etc.
                                Here at VisTours, we understand your needs well because we are travellers too. 
                                We know what you are looking for and have created an interface that find the perfect
                                set of options for your dates, budget, luxury rating, distance etc. Whether you are a 
                                backpacker or a luxury seeker, a solo tripper or traveling with family, or whether you’re 
                                traveling for business or leisure, we only bring you the best properties at the cheapest possible prices.
                            </p>
                        <h3>Places to stay on VisTours</h3>
                            <p>Yachts, treehouses, beach resorts, hostels, guesthouses, cottages, villas, chalets, wellness
                                retreats, farmstays and much, much more

                                VisTours’s in-house hotel metasearch engine helps you see listings from multiple providers on
                                a single page. Find properties on booking.com, Airbnb.com and other trusted online 
                                hotel booking sites. etc. all under one roof - saving hours in research and planning.
                                Click on your preferred hotel, homestay or resort to be directed to the listing webpage 
                                and make complete booking your hotel in a few simple steps. VisTours makes travelling smarter and easier.
                            </p>
                        <h3>Hotels on VisTours</h3>
                            <p>Find and book hotels through Tripoto. Search for hotels on the go through Tripoto’s mobile app or visit the VisTours website.
                                You can also ask the VisTours.ai - VisTours’s resident chatbot - to find all kinds of accommodation anywhere in India. Ask away!
                            </p>
                        <h3>Luxury hotels on VisTours</h3>
                            <p>From the ridiculously expensive to value-for-money, the world of luxury hotels and resorts has something for every budget bracket imaginable. 
                                Prices start from around Rs.3000 per night.

                                Click here to chat with <Link to="/VisTours">VisTours.ai</Link> for your hotel booking queries
                            </p>
                        <h3>How to book hotels on VisTours</h3>
                            <p>Booking hotels is a breeze with VisTours search. Here's a step-by-step guide to searching for properties on VisTours:<br></br>

                                Step 1: Click on Book Hotels on the right corner of menu bar<br></br>

                                Step 2: Enter your destination (city, state, region or country), pick your dates and number of guests before clicking on the search button.
                                 This will take you to a page with all the search results for your query<br></br>

                                Step 3:  You can now filter your results. Select your price range, preferred user rating, preferred provider and type of property<br></br>

                                Step 4: Sort hotels by price (low to high, high to low), rating, number of reviews and distance from your destination<br></br>

                                Step 5: Click on any of the hotels to be directed to the listing's hotel booking site</p>
                        <h3>Contact Us</h3>
                            <p><Link to="/VisTours">VisTours.ai</Link> is here to help you with all your hotel booking queries and issues.<br></br>

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