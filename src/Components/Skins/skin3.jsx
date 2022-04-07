import React, { Component } from 'react';
import "./skin3.css";
class Skin3 extends Component {
    state = {
        finalDetails: {
            contactDetails: {},
            educationDetails: {},
            experienceDetails: {},
            skills: "",
            about: {},
            skillsArr: [],
            achievementArr: [],
            hobbiesArr: []
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
                achievementArr: achievementArr,
                hobbiesArr: hobbiesArr
            },
        });
    }
    render() {
        let CDetails = this.state.finalDetails.contactDetails;
        let edu = this.state.finalDetails.educationDetails;
        let exp = this.state.finalDetails.experienceDetails;
        let skillsArr = this.state.finalDetails.skillsArr;
        let about = this.state.finalDetails.about;
        let achievementArr = this.state.finalDetails.achievementArr;
        let hobbiesArr = this.state.finalDetails.hobbiesArr;
        return (
            <div class="skin3-cont" ref={this.props.refProp}>
                <div class="skin3-incon">
                    <div class="skin3b1">
                        <div class="hbox1">
                            YK
                        </div>
                        <div class="hbox2">
                            <span>{CDetails.fname}</span>
                            <span style={{ marginLeft: "2%" }}>{CDetails.lname}</span>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="skin3b2">
                        <div class="skin3bl">
                            <div class="skin3p">PROFESSIONAL SUMMARY</div>
                            <div class="skin3p">PERSONAL DETAILS</div>
                            <div class="skin3p">EDUCATION DETAILS</div>
                            <div class="skin3p">EXPERIENCE DETAILS</div>
                            <div class="skin3p">SKILLS</div>
                            <div class="skin3p">ABOUT</div>
                            <div class="skin3p">HOBBIES</div>

                        </div>
                        <div class="skin3br">
                            <div class="skin3pd1">{CDetails.summary}</div>
                            <div class="skin3pd1">
                                <div class="dp1">
                                    <ul>
                                        <li><span>EMAIL : </span>{CDetails.email}</li>
                                        <li><span>PHONE : </span>{CDetails.phone}</li>
                                        <li><span>PROFESSION : </span>{CDetails.profession}</li>
                                    </ul>
                                </div>
                                <div class="pd2">
                                    <ul>
                                        <li><span>CITY : </span>{CDetails.city}</li>
                                        <li><span>STATE : </span>{CDetails.state}</li>
                                        <li><span>PIN : </span>{CDetails.pin}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="skin3pd1">
                                <ul>
                                    <li><span>SCHOOL : </span>{edu.school}</li>
                                    <li><span>LOCATION : </span>{edu.schoolLocation}</li>
                                    <li><span>CGPA : </span>{edu.schoolCgpa}</li>
                                </ul>
                                <ul class="skin5-cl-ul">
                                    <li><span>COLLEGE : </span>{edu.collegeName}</li>
                                    <li><span>LOCATION : </span>{edu.collegeLocation}</li>
                                    <li><span>CGPA : </span>{edu.collegeCgpa}</li>
                                    <li><span>DEGREE : </span>{edu.degree}</li>
                                    <li><span>STREAM : </span>{edu.field}</li>
                                </ul>
                            </div>
                            <div class="skin3pd1">
                                <ul>
                                    <li><span>COMPANY : </span>{exp.companyName}</li>
                                    <li><span>JOB TITLE : </span>{exp.jobTitle}</li>
                                    <li><span>POSITION : </span>{exp.position}</li>
                                </ul>
                                <ul class="skin5-ex-ul">
                                    <li><span>START DATE : </span>{exp.startDate}</li>
                                    <li><span>END DATE : </span>{exp.endDate}</li>
                                    <li><span>CITY : </span>{exp.state}</li>
                                </ul>
                            </div>
                            <div class="skin3pd1">
                                <ul>
                                    {skillsArr.map(skill => {
                                        return (<li>{skill}</li>)
                                    })}
                                </ul>
                            </div>
                            <div class="skin3pd1">

                                {achievementArr.map(achievement => {
                                    return (<ul>
                                        <li>{achievement}</li>
                                    </ul>)
                                })}
                            </div>
                            <div class="skin3pd1">
                                {hobbiesArr.map(hobbie => {
                                    return (<ul>
                                        <li>{hobbie}</li>
                                    </ul>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Skin3;
