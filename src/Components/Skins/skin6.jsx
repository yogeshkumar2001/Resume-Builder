import React, { Component } from 'react';
import "./skin6.css";
class Skin6 extends Component {
    state = {
        finalDetails: {
            contactDetails: {},
            educationDetails: {},
            experienceDetails: {},
            skills: "",
            about: {},
            skillsArr: [],
            achievementArr:[],
            hobbiesArr : []
            // skinId:""
        },
    };

    componentDidMount() {

        console.log("cmd of Resume1");
        let lcexperienceDetails = JSON.parse(
            window.localStorage.getItem("experienceDetails")
        );
        let lceducationDetails = JSON.parse(
            window.localStorage.getItem("educationDetails")
        );
        let lccontactDetails = JSON.parse(
            window.localStorage.getItem("contactDetails")
        );
        let lcskills = window.localStorage.getItem("skills");
        let skillsArr = lcskills.split(",");
        let lcabout = JSON.parse(window.localStorage.getItem("about"));
        let achievementArr = lcabout.achievement.split(",");
        let hobbiesArr = lcabout.hobbies.split(",");
        let oldfinalDetails = this.state.finalDetails;
        this.setState({
            finalDetails: {
                ...oldfinalDetails,
                experienceDetails: lcexperienceDetails,
                educationDetails: lceducationDetails,
                contactDetails: lccontactDetails,
                about: lcabout,
                skills: lcskills,
                skillsArr: skillsArr,
                achievementArr:achievementArr,
                hobbiesArr:hobbiesArr
            },
        });
    }
    render() {
        let CDetails = this.state.finalDetails.contactDetails;
        let edu = this.state.finalDetails.educationDetails;
        let ED = this.state.finalDetails.experienceDetails;
        let skillsArr = this.state.finalDetails.skillsArr;
        let about = this.state.finalDetails.about;
        let achievementArr =this.state.finalDetails.achievementArr;
        let hobbiesArr =this.state.finalDetails.hobbiesArr;
        return (
            <div className={this.props.mobile == true ? "skin6-cont-mobile" : "skin6-cont"} ref={this.props.refProp} >
                <div className="skin6-incont">
                    <div className="skin6box1">
                        <div className="skin6box1-upr">
                            Yogesh Kumar
                        </div>
                        <div className="skin6box1-dwn">
                            <span>699-812-1342</span> | <span>jwalker@gmail.com</span> | <span>24 Armor Lane, North Easton, MA
                                20013</span>
                        </div>
                    </div>
                    <div className="skin6box">
                        <div className="skin6box-upr">PROFESSIONAL SUMMARY</div>
                        <div className="skin6box-dwn">Successful sales professional with 10+ years experience in large-scale food
                            and retail environments. Implement
                            cost control measures to ensure operations remain within company targets. Maximize bottom-line
                            performance
                            through P L, merchandising, staff management, loss control and inventory management. Successful
                            sales profes-
                            sional with 10+ years experience in large-scale food and retail environments. Implement cost control
                            measures to
                            ensure operations remain targets.</div>
                    </div>
                    <div className="skin6box">
                        <div className="skin6box-upr">SKILLS</div>
                        <div className="skin6box-dwn">
                            <ul>
                                <li>HTML</li>
                                <li>HTML</li>
                                <li>HTML</li>
                                <li>HTML</li>
                                <li>HTML</li>
                            </ul>
                        </div>
                    </div>
                    <div className="box">
                        <div className="inner-box">
                            <div className="skin6-border1">
                                <span><i className="fa-solid fa-user-tie"></i></span> <span>experience</span>
                            </div>
                            <div className="exp-info-skin4">
                                <div className="exp-info-skin4-box">
                                    <div> Juinor developer</div>
                                    <div><span>Flipkart</span> | <span>Uttar pradesh</span></div>
                                </div>
                                <div className="exp-info-skin4-box2">
                                    <div>
                                        <span>&#x26AC;</span> <span>web developer </span>
                                    </div>
                                    <div>
                                        <span>&#x26AC;</span> <span>Product based</span>
                                    </div>
                                    <div>
                                        <span>&#x26AC;</span> <span>Staring date : <span>2022-01-30 </span></span>
                                    </div>

                                    <span>&#x26AC;</span> <span>Ending date : <span>2022-01-30 </span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="inner-box">
                            <div className="skin6-border1">
                                <span> <i className="fa-solid fa-graduation-cap"></i></span> <span>Education</span>
                            </div>
                            <div className="school-info-skin4">
                                <div className="school-info-box1">
                                    <div className="school-info-innerbox1">
                                        <div className="school-info-hd">School Education</div>
                                        <div className="">
                                            <ul>
                                                <li>Kendriya vidhayala</li>
                                                <li>Vikas puri</li>
                                                <li>8.0 CGPA </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="school-info-innerbox2">
                                        <div className="school-info-hd">College Education</div>
                                        <div className="">
                                            <ul>
                                                <li><span>SAITM </span> | <span>Gurgram</span></li>
                                                <li><span>Btech</span> | <span>CSE</span></li>
                                                <li><span>2022-01-30</span> - <span>2022-02-28</span></li>


                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="d-box">
                        <div className="inner-box">
                            <div className="skin6-border1">
                                <span><i className="fa-solid fa-user-tag"></i></span> <span>about</span>
                            </div>
                            <div className="skill-box">
                                <div>
                                    <ul>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-box">
                        <div className="inner-box">
                            <div className="skin6-border1">
                                <span><i className="fa-solid fa-user-tag"></i></span> <span>achievement</span>
                            </div>
                            <div className="skill-box">
                                <div>
                                    <ul>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                        <li>HTML</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skin6;
