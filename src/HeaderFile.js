import React from 'react';
import './index'
import { Link } from 'react-router-dom';
import Img from 'react-image';


class HeaderFile extends React.Component{
    render(){
        return(
                <div>
                    <header>
                        <div className="ui main">
                            <div className="ui logo">
                            <Img src={require("./components/images/logo1.png")} alt="a"/>
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
                    <h3 className="title1">Holidays in India</h3>
                    <p className="paragraph">Cover the length and breadth of your beloved nation, by ticking off one destination after another with the changing season!
                        Choose from holidays suitable to your budget & convenience!
                    </p>
                </div>
        );
    }
}

export default HeaderFile;