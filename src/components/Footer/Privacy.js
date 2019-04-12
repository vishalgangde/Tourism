import React from 'react';
import Img from 'react-image';
import { Link } from 'react-router-dom';
import '../../components/index.css';
import Register from '../Register'
import Footer from '../Footer';
import { connect } from 'react-redux';
import { RegisterUserAction  } from '../../actions/index';



class Privacy extends React.Component{

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
                    <p className="p">Privacy Policy (Version 3.0, Effective date: April 1, 2019)</p><br></br>
                    <br></br>
                    <p>
                        We recognize that your privacy is very important and take it seriously. This Privacy Policy (“Privacy Policy”) describes the Company's policies
                        and procedures on the collection, use and disclosure of your information when you use the Website or our Services. We will not use or share 
                        your information with anyone except as described in this Privacy Policy.<br></br>
                        This Privacy Policy is a part of and incorporated within and is to be read along with the Terms of Website Use (“Terms”) . The capitalized terms 
                        used in this Privacy Policy, but not defined herein, shall have the meaning given to such terms in the Terms.
                    </p>
                    
                    <h2>Infomation We May Collect From You</h2><br></br>
                    <p>We may collect and process the following data about you:</p>
                    <ul>
                        <li>
                            <b>Information you give us.</b> You may give us information about yourself by filling in forms on the Website or 
                            by corresponding with us by phone, e-mail or otherwise. This includes information you provide when you 
                            register to use the Website and subscribe to our Services, submit anything for publication on our Website, 
                            participate in discussion boards or other social media functions on the Website, enter a competition, 
                            promotion or survey and when you report a problem with the Website. The information you give us may include 
                            name, address, e-mail address and phone number. You may also choose to provide other personal information 
                            in order to express yourself beyond the required information, such as a short biography, your location,
                            your website, or a picture.Your name, you e-mail id and other information you choose to add to your profile
                            will be available for public viewing on the Website.<br></br><br></br>
                        </li>
                        <li>
                            <b>Information we collect about you.</b> With regard to each of your visits to the Website, we may automatically collect the following information:<br></br><br></br>
                            <p>
                                1. Technical information, including the Internet protocol (IP) address used to connect your computer to the Internet,
                                your login information, browser type and version, time zone setting, browser plug-in types and versions, operating
                                system and platform;<br></br><br></br>
                                2. Information about your visit, including the full Uniform Resource Locators (URL) click stream to, through and from 
                                the Website (including date and time); material or information that you viewed or searched for; page response times, 
                                download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), 
                                and methods used to browse away from the page and any phone number used to call our customer service number.<br></br><br></br>
                            </p>
                        </li>
                        <li>
                            <b>Information we receive from other sources.</b> We may receive information about you if you use any of the other websites we operate or 
                            the other services we provide. In this case we will inform you when we collect that data and that it may be shared internally and 
                            combined with data collected on this Website. We are also working closely with third parties (including, for example, business partners, 
                            sub-contractors in technical, payment and delivery services, advertising networks, analytics providers, search information providers, 
                            credit reference agencies) and may receive information about you from such sources. We collect non-personally identifiable information 
                            from the Website visitors to track the total of number of visitors to the Website in aggregate form and identify the type of Internet 
                            web browser (e.g., Internet Explorer®) and operating system (e.g., Windows®) used by the visitor. This information allows us continuously 
                            to improve our Website.<br></br><br></br>
                        </li>
                        <li>
                            <b>Metadata.</b> Metadata is usually technical data associated with Content you submit, post or share on the Website. Users can add or may have metadata added 
                            to their Content including geolocation, date, attribution, or other data.<br></br><br></br>
                        </li>
                    </ul>

                    <h2>Where We Store Your Personal Data</h2>
                    <p>
                        Personal data refers to data, whether true or not, about an individual: (i) who can be identified from that data; or (ii) from that data and other information
                        to which we have or are likely to have access. [All information you provide to us is stored on our secure servers.][Any payment transactions will be encrypted 
                        using SSL technology].Where we have given you (or where you have chosen) a password which enables you to access certain parts of the Website, you are responsible 
                        for keeping this password confidential. We ask you not to share a password with anyone.<br></br>
                        Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot 
                        guarantee the security of your data transmitted to the Website; any transmission is at your own risk. Once we have received your information, we will use strict 
                        procedures and security features to try to prevent unauthorised access.<br></br>
                    </p>
                    
                    <h2>How We Treat Your Browser Information</h2>
                    <p>
                        We analyse the log files of our Website to better understand the volume of traffic to particular areas of our Website. This information helps us to serve your information needs.<br></br>
                    </p>

                    <h2>Your Rights</h2>
                    <p>
                        You are free to remove or delete Content from your Account at any point in time. However, there is a strong possibility
                        that copies of public Content will be retained indefinitely in our systems, including in cached and archived pages of the 
                        Website, or if other users have copied or saved that information. In addition, due to the nature of internet sharing, copies 
                        of your Content, including Content that you have removed or deleted from your Account, may also exist elsewhere on the 
                        Internet and be retained indefinitely..<br></br><br></br>
                        You may correct, amend, add or delete personal information from your Account at any time by logging in and visiting your profile 
                        page. As noted above, you may opt out from unwanted e-mail communications from us by following the instructions in the message. 
                        However, until your Account is deleted you will continue to receive all system e-mails.<br></br><br></br>
                        The Website may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. 
                        If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not 
                        accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to 
                        these websites.<br></br>
                    </p>

                    <h2>EU privacy/data protection rights</h2>
                    <p>
                        If you reside in the European Union (“EU”), United Kingdom, Lichtenstein, Norway, Iceland, or Switzerland, 
                        you may have additional rights with respect to your Personal Data, as further outlined below:.<br></br>
                        <ul>
                            <li>
                                <b>The right to be informed:</b> Every company must be transparent in how they use your personal data (personal data may include data such 
                                as your work email ID and your work mobile phone number if they are specific to an individual).<br></br><br></br>
                            </li>
                            <li>
                                <b>The right of access:</b> You will have the right to know exactly what information is held about you and how it is processed or used by us<br></br><br></br>
                            </li>
                            <li>
                                <b>The right of rectification:</b> You will be entitled to get your personal data rectified if it's inaccurate or incomplete.<br></br><br></br>
                            </li>
                            <li>
                                <b>The right to erasure:</b> Also known as 'the right to be forgotten', this refers to your right to have your personal data deleted 
                                from our database without the need for a specific reason as to why you wish to do so.<br></br><br></br>
                            </li>
                            <li>
                                <b>The right to data portability:</b> This allows you to retain and reuse your personal data for your own purpose.<br></br><br></br><br></br>
                            </li>
                        </ul>
                    </p>

                    <h2 className="terms1">Grievance Redressal</h2>
                    <p>
                        Redressal Mechanism: Any complaints, abuse or concerns with regards to content and or comment or breach of these terms shall be immediately informed to the
                        designated Grievance Officer as mentioned below via in writing or through email signed with the electronic signature to <a style={{padding:"0px"}} href="info@VisTours.com">info@VisTours.com</a><br></br>
                    </p>
                    <a href="https://www.VisTours.com">https://www.VisTours.com</a><br></br>
                    <h5>
                        Adv. Jitu Singh Thakur<br></br>
                        VisTours Private Limited<br></br>
                        HA-18, Takshshila Parisar<br></br>
                        AB Road, Rajendra Nagar<br></br>
                        Indore - 452012, India<br></br>
                        Contact: <a style={{padding:"0px"}} href="">0731-2424444</a>
                    </h5>

                    

                    <h2>THANK YOU FOR VISITING US.</h2>
                    <hr></hr>
                    <Footer/>
                </div>
                </div>
            
           
        );
    }
} 

export default Privacy;

