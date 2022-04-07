import React, { Component } from "react";
import "./Templates.css";
import firebaseApp from "../../firebase/firebaseConfig";
import firebase from "firebase";
import initialState from "../../util/initialState";
import { Link } from "react-router-dom";
import skin1 from  "../../assets/images/skin1.png"
import skin2 from  "../../assets/images/skin2.png"
import skin3 from  "../../assets/images/skin3.svg"
import skin4 from  "../../assets/images/skin4.svg"
import skin5 from  "../../assets/images/skin5.svg"
import skin6 from  "../../assets/images/skin6.svg"
import skin7 from  "../../assets/images/skin7.svg"
import skin8 from  "../../assets/images/skin8.svg"

class Templates extends Component {
  state = {
    skins: [
      { id: "skin1", path: skin1 },
      { id: "skin2", path: skin2 },
      { id: "skin3", path: skin3 },
      { id: "skin4", path: skin4 },
      { id: "skin5", path: skin5 },
      { id: "skin6", path: skin6},
      { id: "skin7", path: skin7 },
      { id: "skin8", path: skin8 },
    ],
    isAuth: null,
  };

  handleChooseTemplate = async (e) => {
    let skinId = e.target.id;
    localStorage.setItem("skinPath", JSON.stringify(e.target.attributes[2].nodeValue));
    localStorage.setItem("skinId", JSON.stringify(skinId));
    // get skinID
    let selectResumeId;
    selectResumeId = localStorage.getItem("selectedResumeId");
    console.log(selectResumeId);
    let resumeId;
    if (!selectResumeId) {
      let addObj = await firebaseApp.firestore().collection("resumes").add({ skinId: skinId, ...initialState });
      resumeId = addObj.id;
      await firebaseApp.firestore().collection("users").doc(this.props.uid).update({
        Resumes: firebase.firestore.FieldValue.arrayUnion(resumeId)
      })
      console.log("resume id " + resumeId);
      localStorage.setItem("selectedResumeId", resumeId);
    }
  };
  componentDidMount() {
    let userAuth = JSON.parse(localStorage.getItem("isAuth"));
    if (userAuth) {
      this.setState({
        isAuth: true
      })
    }
  }

  render() {
    return (
      <div className="templates-container" >
        <div className="templates-welcome">
          <div className="temp-wel-cont">
            <h1>Our Templates</h1>
          </div>
        </div>
        <div className="templates">

          {this.state.skins.map((skin) => {
            return (
              <div key={skin.id} className="template">
                <div className="template-image">
                  <img src={skin.path} alt="" />
                </div>
                <Link to="/contact">
                  <div
                    className="choose-template"
                    id={skin.id}
                    path={skin.path}
                    onClick={(e) => this.handleChooseTemplate(e)}
                  >
                    Choose Template
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Templates;
