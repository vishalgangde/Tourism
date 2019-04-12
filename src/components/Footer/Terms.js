import React from 'react';
import Img from 'react-image';
import { Link } from 'react-router-dom';
import '../../components/index.css';
import Register from '../Register'
import Footer from '../Footer';
import { connect } from 'react-redux';
import { RegisterUserAction  } from '../../actions/index';



class Terms extends React.Component{

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
                    <p className="p">Terms of Website Use (Version 1.0, Effective date: April 12, 2019)</p><br></br>
                    <br></br>
                    <h3>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS SITE</h3><br></br>
                    <h2>TERMS OF WEBSITE USE</h2><br></br>
                    <p>
                        These terms of use (together with the documents referred to in it) (“Terms”) are the terms on which you may make use of our website
                        http://www.VisTours.com/ (“Website”), whether as a guest or a registered user. Use of the Website includes accessing, browsing, or 
                        registering to use the Website.Please read these Terms carefully before you start to use the Website. We recommend that you print a
                        copy of this for future reference.<br></br>
                        By using the Website, you confirm that you accept these Terms and that you agree to comply with them.<br></br>
                        If you do not agree to these Terms, you must not use the Website. If you do not agree with any amendments made
                        by to these Terms at any time in future, you must stop using the Website with immediate effect.<br></br>
                    </p>

                    <h2>OTHER APPLICABLE TERMS</h2>
                    <p>
                        These Terms refer to and include the following additional terms, which also apply to your use of the Website:<br></br>
                    </p>
                    <ul className="terms">
                        <li>
                            1. Our Privacy Policy, which sets out the terms on which we process any personal data we collect from you, or that you provide to us.
                            By using the Website, you consent to such processing and you warrant that all data provided by you is accurate.
                        </li>
                        <li>
                            2. Our Acceptable Use Policy, which sets out the permitted uses and prohibited uses of the Website. When using the Website,
                            you must comply with this Acceptable Use Policy.
                        </li>
                        <li>
                            3. Our Advertising Policy, which sets out information about advertising through our Website.
                        </li>
                    </ul>

                    <h2>ABOUT US</h2>
                    <p>
                        The Websiteis operated byVisTours Private Limited (the “Company”)incorporated underIndian
                        Companies Act, 1956 having CIN U63030DL2013PTC256239 with registered office at #HA-18 Rajendra Nagar, AB Road, Indore.<br></br>

                        We provide online user platform for people to share and discover crowd sourced travel stories and itineraries from 
                        travellers from around the India (“Services”).<br></br>

                        Any reference to “you” or “your” refers to you as a user of the Website and the Services and any reference to
                        “we”, “our” and “us” shall refer to the Company as the provider of the Services.<br></br>
                    </p>

                    <h2>CHANGES TO THESE TERMS AND SERVICES</h2>
                    <p>
                        We may revise these Terms at any time by amending this page. Please check this page from time to time to take notice
                        of any changes we made, as they are binding on you.<br></br>
                        We may, without prior notice, change the Services; add or remove functionalities or features; stop providing the 
                        Services or features of the Services, to you or to users generally; or create usage limits for the Services.
                    </p>

                    <h2>CHANGES TO THE WEBSITE</h2>
                    <p>
                        We may update the Website from time to time, and may change the Content at any time. In these Terms, the term “Content”
                        means any information, text, graphics, or other materials uploaded by the users of the Website, including you, and 
                        which appears on the Website for other users to access. However, please note that any of the Content on the Website
                        may be out of date at any given time and we are under no obligation to update it.<br></br>
                        We do not guarantee that the Website, or any Content on it, will be free from errors or omissions.
                    </p>


                    <h2>YOUR ACCOUNT AND PASSWORD</h2>
                    <p>
                        If you choose to register with us, an account will be created for your use (“Account”) on the Website and you will be
                        provided withrequired Account Information to enable your access to the Account. The term “Account Information” refers
                        to a user identification code, password or any other piece of information which may be provided to you as part of our
                        security procedures.If you access the Website after logging into any third party website like facebook, twitter or  
                        gmail, the login information of such third party account, as the case may be, shall be considered as the Account Information.
                        You must always treat Account Information as confidential and must not disclose it to any third party. Any access to the 
                        Website through your Account shall be considered an access by you or on your behalf and you shall be solely responsible 
                        for any activity carried out in, by or through your Account either on the Website or any other Website accessed by you through 
                        the Website.<br></br>
                        You represent and warrant that if you are an individual, (i) you are over thirteen years of age and (ii)you are of age as required
                        to enter into a binding contract as is prescribed under the laws of the country in which you reside, or (iii) that if you are
                        registering on behalf of an entity, that you are authorized to enter into, and bind the entity to, these Terms and register for the 
                        Services, in accordance with the laws of the country in which you reside. Any person under the age of eighteen (18) years accessing
                        the Website should do so only under parental guidance.<br></br>
                    </p>

                    <h2>USER RESPONSIBILITIES</h2>
                    <p>
                        These Terms govern your behaviour on the Website and set forth your obligations. You agree and confirm to the following responsibilities:<br></br>
                        <ul>
                            <li>
                                1. You shall comply with all the obligations set forth in these Terms.
                            </li>
                            <br></br>
                            <li>
                                2. You will use the Services rendered by us for lawful purposes only and comply with these Terms and all applicable laws and regulations
                                while using and transacting on the Website.
                            </li>
                            <br></br>
                            <li>
                                3. Creation and maintenance of all Content in your account shall be your sole responsibility.
                            </li>
                            <br></br>
                            <li>
                                4. You are responsible for safeguarding the password that you use as a part of your Account Information to access
                                the Services and for any activities or actions under your Account. We encourage you to use “strong” passwords 
                                preferably using a combination of upper and lower case letters, numbers and symbols with your Account. 
                                The Company will not be liable for any loss or damage arising from your failure to comply with this instruction.
                            </li>
                            <br></br>
                            <li>
                               5. Provide us with only such information that is true and accurate to the best of your knowledge.
                            </li>
                            <br></br>
                        </ul>
                    </p>

                    <h2>PAYMENT TERMS</h2>
                    <p>
                        The Website is made available free of charge.
                    </p>

                    <h2>WEBSITE SECURITY AND GRIEVANCE OFFICER</h2>

                    <p>
                        This Website stores all data withthe [cloud platform of Amazon Web Services] which stores this data on its servers located in Singapore and in other
                        jurisdictions outside of India. [The cloud platform of Amazon Web Services] has security measures in place to protect the loss, misuse and alteration
                        of the information. These measures adopted by the [cloud platform of Amazon Web Services] and certain additional measures adopted by us are detailed in
                        the Manual of Data Security Practices and Procedures. You acknowledge you have reviewed and understood the Manual of Data Security Practices and Procedures 
                        and that these are reasonable security practices and procedures that are commensurate with the information assets being protected. You also acknowledge that 
                        the standards followed by [cloud platform of Amazon Web Services] are not within control of the Company and are liable to change from time to time. You agree
                        that it is in your interest to review from time to time the security standards, practices and policies adopted by the [cloud platform of Amazon Web Services]
                        to confirm that there are no changes that you are not comfortable with.<br></br><br></br>
                        Amazon Web Services can be contacted at the following address: <a style={{padding:"0px"}} href="http://docs.aws.amazon.com/AmazonS3/latest/dev/DataDurability.html">http://docs.aws.amazon.com/AmazonS3/latest/dev/DataDurability.html</a><br></br><br></br>
                        In accordance with Information Technology Act, 2000 and Information Technology (Intermediaries Guidelines) Rules, 2011 made there under, the name and contact details of the Grievance Officer are provided below:<br></br>
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

                    <h2>GENERAL TERMS</h2>
                    <p>
                        Relationship of the Parties: Notwithstanding any provision hereof, for all purposes of the Terms, you and the Company shall be and act independently and not as partner, joint venturer, agent, employee
                        or employer of the other. You shall not have any authority to assume or create any obligation for or on behalf of the Company, express or implied, and you shall not attempt to bind us to any contract.<br></br>
                        Invalidity of Specific Terms: If any provision of the Terms is found by a court of competent jurisdiction to be invalid, other provisions of such the Terms shall remain in full force and effect.
                    </p>

                    <h2>CONTACT US</h2>
                    <p>
                        For general enquires, complaints and/or giving any feedback, please email to <a style={{padding:"0px"}} href="info@VisTours.com">info@VisTours.com</a>.<br></br>
                        If you do not agree with any provision of these Terms and wish to opt out of such provision, please write to us at info@VisTours.com(“Opt-out Request”). You agree that you are not entitled to use
                        this Website or the Services unless your Opt-out Request is accepted by us in writing.

                    </p>

                    <h2>THANK YOU FOR VISITING US.</h2>
                    <hr></hr>
                    <Footer/>
                    </div>  
                </div>
            
           
        );
    }
} 

export default Terms;

