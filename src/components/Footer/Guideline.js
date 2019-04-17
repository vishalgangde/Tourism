import React from 'react';
import Img from 'react-image';
import { Link } from 'react-router-dom';
import '../../components/index.css';
import Register from '../Register'
import Footer from '../Footer';
import { connect } from 'react-redux';
import { RegisterUserAction  } from '../../actions/index';



class Guideline extends React.Component{

  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
  }

  handler(e){
    this.props.filterUser(e.target.value);
  }

    

    render(){
        return(

            
            <div>
                <header className="headerr">
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
                            </ul>
                </header>
                <div className="terms">
                    <h1>VisTours</h1>
                    <p className="p" style={{paddingRight:"35px"}}>WEBSITE ACCEPTABLE USE POLICY</p><br></br>
                    <br></br>
                    <p>
                        This acceptable use policy (“Use Policy”)is a part of and incorporated within and to be read with the Terms of Website Use (“Terms”) . 
                        The capitalized terms used in this Use Policy, but not defined herein, shall have the meaning given to such terms in the Terms.<br></br>
                    </p>
                    <h2>PROHIBITED USES</h2><br></br>
                    <p>You may use the Website only for lawful purposes. You may not use the Website:</p><br></br>
                    <div className="arange">
                    <ul>
                        <li>
                            1) In any way that breaches any applicable local, national or international law or regulation.<br></br><br></br>
                        </li><br></br>
                        <li>
                            2) In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.<br></br><br></br>
                        </li><br></br>
                        <li>
                            3) For the purpose of harming or attempting to harm minors in any way.<br></br><br></br>
                        </li>
                        <li>
                            4) To send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards.<br></br><br></br>
                        </li>
                        <li>
                            5) To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam).<br></br><br></br>
                        </li>
                        <li>
                            6) Not to reproduce, duplicate, copy or re-sell any part of the Website in contravention of the provisions of the Terms.<br></br><br></br>
                        </li>
                        <li>
                            7) Not to access without authority, interfere with, damage or disrupt:<br></br><br></br>
                        </li><br></br>
                        <li>
                            8) Any equipment or network on which the Website is stored;<br></br><br></br>
                        </li>
                        <li>
                            9) Any equipment or network or software owned or used by any third party in order to facilitate you or allow you to access any part of the Website.<br></br><br></br>
                        </li>
                    </ul>
                    </div>
                    

                    <h2>CONTENT STANDARDS</h2>
                    <p>
                        These content standards apply to any and all material which you contribute to the Website (Contributions), and to any interactive services associated with it. 
                        You must comply with the spirit and the letter of the following standards. The standards apply to each part of any Contribution as well as to its whole.<br></br>
                        Contributions must:<br></br><br></br>
                        <ul>
                            <li>
                                1) Be accurate (where they state facts).<br></br><br></br>
                            </li><br></br>
                            <li>
                                2) Be genuinely held (where they state opinions).<br></br><br></br>
                            </li><br></br>
                            <li>
                                3) Comply with applicable law in India and in any country from which they are posted or in which such Contributions are likely to be of interest.
                                Contributions must not:<br></br><br></br>
                            </li><br></br>
                            <li>
                                4) Be misleading in any way.<br></br><br></br>
                            </li><br></br>
                            <li>
                                5) Contain video, photographs, or images of another person (without voluntary permission/consent of that person)<br></br><br></br>
                            </li><br></br>
                            <li>
                                6) Contain any material which is defamatory of any person.<br></br><br></br>
                            </li><br></br>
                            <li>
                                7) Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.<br></br><br></br>
                            </li><br></br>
                            <li>
                                8) Infringe any intellectual property right of any other person.<br></br><br></br>
                            </li><br></br>
                            <li>
                                9) Be made in breach of any legal duty owed to a third party, such as a contractual duty or a duty of confidence.<br></br><br></br>
                            </li><br></br>
                            <li>
                                10) Prevent investigation of any offence.<br></br><br></br>
                            </li><br></br>
                            <li>
                                11) Be threatening, abuse or invade another’s privacy, or cause annoyance, inconvenience or needless anxiety.<br></br><br></br>
                            </li><br></br>
                            <li>
                                12) Interfere with another user's use and enjoyment of the Website or any other individual's user and enjoyment of similar services;<br></br><br></br>
                            </li>
                            <li>
                                13) Solicit gambling or engages in any gambling activity which we, in our sole discretion, believe is or could be construed as being illegal;<br></br><br></br>
                            </li>
                        </ul>
                    </p>
                    
                  

                    <h2>SUSPENSION AND TERMINATION</h2>
                    <p>
                        We will determine, in our discretion, whether there has been a breach of this Use Policy through your use of the Website. When a breach of this policy has occurred,
                        we may take such action as we deem appropriate.<br></br>
                        Failure to comply with this Use Policy constitutes a material breach of the terms of use upon which you are permitted to use the Website, and may result in our 
                        taking all or any of the following actions:<br></br><br></br>
                    </p>
                    <ul>
                        <li>
                            1) Immediate, temporary or permanent withdrawal of your right to use the Website.<br></br><br></br>
                        </li><br></br>  
                        <li>
                            2) Immediate, temporary or permanent removal of any posting or material uploaded by you to the Website.<br></br><br></br>
                        </li><br></br>
                        <li>
                            3) Issue of a warning to you.<br></br><br></br>
                        </li><br></br>
                        <li>
                            4) Legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach.<br></br><br></br>
                        </li><br></br>
                        <li>
                            5) Further legal action against you.<br></br><br></br>
                        </li><br></br>
                        <li>
                            6) Disclosure of such information to law enforcement authorities as we reasonably feel is necessary.<br></br><br></br>
                        </li><br></br>
                    </ul>
                    <p>
                        We exclude liability for actions taken in response to breaches of this Use Policy. The responses described in this policy are not limited, and we may take any other action we reasonably deem appropriate.
                    </p>

                    

                    <h2>THANK YOU FOR VISITING US.</h2>
                    <hr></hr>
                    <Footer/>
                </div>
                </div>
            
           
        );
    }
} 

export default Guideline;

