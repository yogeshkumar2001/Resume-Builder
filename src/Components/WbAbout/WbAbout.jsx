import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./WbAbout.css";
class WbAbout extends Component {
    state = {}
    render() {
        return (

            <div className="about-us-container" onLoad={this.props.IsHomePage} >
                <div className="about-bg">
                    <h1>About Us</h1>
                    {/* <img src="./images/bread.jpg" alt="" /> */}
                </div>
                <div className="whoWe-section">
                    <div className="whoWe-left-col">
                        <div className="dream-dots">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <h4>We Deliver The Best</h4>

                        <div className="side-feature-list-item">
                            <img src="images/check.png" className="check-mark-icon" alt="" />
                            <div className="foot-c-info">Proven CV Templates to increase Hiring Chance</div>
                        </div>
                        <div className="side-feature-list-item">
                            <img src="images/check.png" className="check-mark-icon" alt="" />
                            <div className="foot-c-info">Creative and Clean Templates Design</div>
                        </div>
                        <div className="side-feature-list-item">
                            <img src="images/check.png" className="check-mark-icon" alt="" />
                            <div className="foot-c-info">Easy and Intuitive Online CV Builder</div>
                        </div>
                        <div className="side-feature-list-item">
                            <img src="images/check.png" className="check-mark-icon" alt="" />
                            <div className="foot-c-info">Free to use. Developed by hiring professionals.</div>
                        </div>
                        <div className="side-feature-list-item">
                            <img src="images/check.png" className="check-mark-icon" alt="" />
                            <div className="foot-c-info">Fast Easy CV and Resume Formatting</div>
                        </div>
                        <div className="side-feature-list-item">
                            <img src="images/check.png" className="check-mark-icon" alt="" />
                            <div className="foot-c-info">Recruiter Approved Phrases.</div>
                        </div>
                    </div>

                    <div className="whoWe-right-col">
                        <div className="welcome -meter wow fadeInUp mt-s" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp", marginTop: "-2%" }}>
                            <img src="images/cv.png" className="center-block" alt="" />
                        </div>
                    </div>
                </div>
                <div className="choose-us">
                    <div className="choose-us-left">
                        <div className="services-block-four">
                            <div className="inner-box">
                                <div className="icon-img-box">
                                    <img src="images/d1.png" alt="" />
                                </div>
                                <h3><a href="#">Easy Online Resume Builder</a></h3>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</div>

                            </div>
                        </div>
                        <div className="services-block-four">
                            <div className="inner-box">
                                <div className="icon-img-box">
                                    <img src="images/d2.png" alt="" />
                                </div>
                                <h3><a href="#">Step By Step Expert Tips</a></h3>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</div>

                            </div>
                        </div>
                        <div className="services-block-four">
                            <div className="inner-box">
                                <div className="icon-img-box">
                                    <img src="images/d3.png" alt="" />
                                </div>
                                <h3><a href="#">Recruiter Approved Phrases</a></h3>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</div>
                            </div>
                        </div>
                    </div>
                    <div className="choose-us-right">
                        <div className="who-we-contant mt-s">
                            <div className="dream-dots">
                                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                            </div>
                            <h4 style={{fontSize:"2.5rem"}}>Why Choose Our Platform?</h4>
                            <p className="contant-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                            <p className="contant-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!</p>
                            <Link  className="btn dream-btn mt-30" to="/templates">lets build your cv</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WbAbout;