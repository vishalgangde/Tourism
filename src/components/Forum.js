import React from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';
import '../components/index.css';

class Forum extends React.Component{
    render(){
        return(
                <div className="ui container">
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
                    </header>
                    <div >
                        <h2 className="title2">VishTours Forum</h2>
                        <p className="paragraph2">Get answers & discussion from real VishTours travelers</p>
                    </div>
                    <div className="textarea">
                        <textarea  rows="7" cols="53" placeholder="Post Your Questions.." />
                    </div>
                    <button className="btn1">Post</button>

                    <div>
                        <ul className="line">
                        <li className="list"><Link to ="/forum/recent">Recent</Link></li>
                        <li className="list"><Link to ="/forum/popular">Popular</Link></li>
                        <li className="list"><Link to ="/forum/you">You</Link></li>
                        </ul>
                        
                    </div>  
                    
                    <div>

                        <h4 className="title4">Suresh Katkar</h4>
                            <p className="paragraph3">I am planning to visit Ahmadabad next week with wife.
                                I had 2 and half days to explore Ahmadabad. 
                                I request esteemed members to suggest me an itinerary to visit all must see places and enjoy best gujrati cusines.
                                Thanks.
                            </p>

                        <h4 className="title4">Pallavi Pual</h4>
                            <p className="paragraph3">My parents don't let me travel. How can I convince them?</p>

                        <h5 className="title5">Himanshu</h5>
                            <p className="paragraph4" style={{fontSize:"16px"}}>I'm planning to travel solo. What would be better choice between Goa and Pondicherry? 
                                How much will it cost?
                            </p>

                        <h3>Nikita Choudhry</h3>
                            <p>Goa and Pondicherry, both are paradises for beach lovers! Also, both are good places to see the remnants of colonialism. Goa has a lot many more beaches compared to Pondicherry. So if you have more no. of days to spend, go for Goa. But that means more expenditure as well. 
                                So if you have more days and more money, Goa is the go to place for a beach vacation. If you have less number of days and want to enjoy it to the fullest in lesser expense, go for Pondicherry! 
                                Both are great places. Happy vacay! 🙂
                            </p>

                        <h4>Priyanka Shrivas</h4>
                            <p style={{fontSize:"16px"}}>ooty or munnar???</p>

                        <h3>Premlata Chouhan</h3>
                            <p style={{fontSize:"19px"}}>which is the best month to visit Jaipur?</p>
                </div>
            </div>
            
        );

    }
}

export default Forum;