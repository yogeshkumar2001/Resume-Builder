import React, { Component } from "react";
import ReactToPdf from "react-to-pdf";
import firebaseApp from "../../firebase/firebaseConfig";
import "./Final.css";
import Resume1 from "./Resume1";
import Skin1 from "../Skins/skin1";
import Skin2 from "../Skins/skinv";
import Skin3 from "../Skins/skin3";
import Skin4 from "../Skins/skin4";
import Skin5 from "../Skins/skin5";
import Skin6 from "../Skins/skin6";
import Skin7 from "../Skins/skin7";
import Skin8 from "../Skins/skin8";
import { Link } from "react-router-dom";

class Final extends React.Component {
  resume = React.createRef();
  state = {
    finalDetails: {
      contactDetails: {
        city: "new delhi",
        country: "",
        email: "kajal@gmail.com",
        fname: "kajal",
        lname: "arya",
        phone: "9599493681",
        pin: "110059",
        profession: "android developer",
        state: "dehi",
        street: "",
        summary: "summary",
      },
      educationDetails: {},
      experienceDetails: {},
      skills: "",
      about: {},
      skillsArr: [],
      achievementArr: [],
      hobbiesArr: [],
      skinId: "",
      skinPath: ""
    },
    skinId: "",
    confirm: false,
    mobile: false
  }
  componentDidMount() {
    console.log("inside cdm of final.jsx");
    let lcSkinId = JSON.parse(localStorage.getItem("skinId"));
    console.log(lcSkinId);
    if (lcSkinId) {
      this.setState({
        skinId: lcSkinId
      })
    }
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
    let skinPath = JSON.parse(window.localStorage.getItem("skinPath"));
    let oldfinalDetails = this.state.finalDetails;
    console.log(oldfinalDetails)
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
        hobbiesArr: hobbiesArr,
        skinId: lcSkinId,
        skinPath: skinPath
      },
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // true for mobile device
      // document.getElementsByClassName("navbar")[0].style.background = "green";
      this.setState({
        mobile: true
      })
    } else {
      // false for not mobile device
      // let navbar = document.getElementsByClassName("navbar");
      // console.log(navbar);
      // navbar[0].style.background="green"
      // document.getElementsByClassName("navbar")[0].style.background = "red";
      this.setState({
        mobile: false
      })
    }
    if (this.state.mobile) {

    }
  }
  saveUserInfo = async () => {
    localStorage.setItem("finalDetails", JSON.stringify(this.state.finalDetails));
    let selectResumeId = localStorage.getItem("selectedResumeId");
    if (selectResumeId) {
      await firebaseApp.firestore().collection("resumes").doc(selectResumeId).update({
        finalDetails: this.state.finalDetails
      });
      window.confirm("Your Resume is Saved");
      this.setState({
        confirm: true
      })
      localStorage.removeItem("selectedResumeId");
    }

  }


  render() {
    console.log("isnide final");
    let skinId = this.state.skinId;
    let tskin;
    if (skinId == "skin1") {
      tskin = <Skin1 refProp={this.resume} mobile={this.state.mobile}></Skin1>
    } else if (skinId == "skin2") {
      tskin = <Skin2 refProp={this.resume} mobile={this.state.mobile}></Skin2>
    } else if (skinId == "skin3") {
      tskin = <Skin3 refProp={this.resume} mobile={this.state.mobile}></Skin3>
    } else if (skinId == "skin4") {
      tskin = <Skin4 refProp={this.resume} mobile={this.state.mobile}></Skin4>
    } else if (skinId == "skin5") {
      tskin = <Skin5 refProp={this.resume} mobile={this.state.mobile}></Skin5>
    } else if (skinId == "skin6") {
      tskin = <Skin6 refProp={this.resume} mobile={this.state.mobile}></Skin6>
    } else if (skinId == "skin7") {
      tskin = <Skin7 refProp={this.resume} mobile={this.state.mobile}></Skin7>
    } else if (skinId == "skin8") {
      tskin = <Skin8 refProp={this.resume} mobile={this.state.mobile}></Skin8>
    }
    else {
      tskin = <Resume1 refProp={this.resume}></Resume1>
    }

    return (
      <div className="final">
        {
          this.state.confirm == false ? (<div className="resume-view-container">
            <div className="resume-view" >
              <React.Fragment>
                {this.state.mobile == true ? <h1>download your resume for view </h1> : ""}
                {tskin}
                {/* {this.state.mobile ==true ? (h1)} */}
              </React.Fragment>
            </div>
            <ReactToPdf targetRef={this.resume} filename="resume.pdf">
              {({ toPdf }) => (
                <div className="download-view">
                  <div className={this.state.mobile ? "download-view-mobile" : "download-btn"} onClick={toPdf}>Download Resume</div>
                  <div className={this.state.mobile ? "download-view-mobile" : "download-btn"} onClick={this.saveUserInfo}>Save Resume</div>

                </div>

              )}
            </ReactToPdf>

          </div>) : (<div className="user-form">
            <div className="headings">{this.state.finalDetails.contactDetails.fname}</div>
            <hr style={{ margin: "2% 3% 0% 3%" }} />
            <div className="headings">
              <i class="far fa-check-circle"></i>
            </div>

            <div className="order-confirmation">
              <div className="confirm-img">
                <img src="./images/confirm.png" alt="" />
              </div>
              <div className="headings">
                “Thank you for choosing to fly with us”
              </div>
              <div className="order-deatils">
                Your Resume Is Ready
                <div className="order-info">
                </div>
              </div>

              <Link to="/" className="wb-btn">
                Home
              </Link>
            </div>
          </div>)
        }
      </div>
    );
  }
}

export default Final;
