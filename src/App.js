// npm install firebase
// import firebaseApp from "./firebase/firebaseConfig";
import React, { Component } from "react";
// import { useHistory } from "react-router-dom";
import firebaseApp from "./firebase/firebaseConfig";
import Skin from "./Components/Skins/skin11.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";
import SignIn from "./Components/SignIn/SignIn";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/About/About";
import Templates from "./Components/Templates/Templates";
// import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/SignUp/Signup";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import MyResume from "./Components/MyResumes/MyResume";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Final from "./Components/Finalize/Final.jsx";
import UserProfile from "./Components/UserProfile/userProfile";
import WbAbout from "./Components/WbAbout/WbAbout";
class App extends Component {
  state = {
    isAuth: false,
    user: null,
    selectedResumeId: "",
    isTAPage: false,
    error: "",
  };

  setResumeId = (id) => {
    this.setState({
      selectedResumeId: id,
    });
    localStorage.setItem("selectedResumeId", JSON.stringify(id));
  };

  logout = () => {
    firebaseApp
      .auth()
      .signOut()
      .then((obj) => {
        console.log("Signed Out !!!!");
        this.setState({
          isAuth: false, //           user: null,
        });
        localStorage.setItem("isAuth", false);
      });
  };

  login = (id, pw) => {
    // log in to firebase !!!!
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(id, pw)
      .then((obj) => {
        console.log("logged in");
        console.log(obj.user);
        this.setState({
          isAuth: true,
        });
      })
      .catch((error) => {
        console.log("inside catch of login");
        console.log(error);
        this.setState({
          error: error.message,
        });
      });
  };
  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(async (user) => {
      console.log("Inside auth state changed !!");
      let selectResumeId = null;
      let resumeDetails = null;
      // check if logged in ??
      if (user) {
        // get selected resumeId
        let doc = await firebaseApp
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get();
        let resumes = doc.data()["Resumes"];
        for (let i = 0; i < resumes.length; i++) {
          if (resumes[i].isSelected) {
            selectResumeId = resumes[i].resumeId;
            break;
          }
        }

        // get resume details
        if (selectResumeId) {
          let resumeInfo = await firebaseApp
            .firestore()
            .collection("resumes")
            .doc(selectResumeId)
            .get();
          resumeDetails = resumeInfo.data();
        }
        if (user) {
          let isAuth = true;
          let userId = user.uid;
          // let selectedResumeId=(this.state.selectedResumeId !=null ? (this.state.selectedResumeId) : (""));
          // console.log("selectedResumeid ibf " + selectResumeId)
          localStorage.setItem("isAuth", JSON.stringify(isAuth));
          localStorage.setItem("user", JSON.stringify(userId));
          // localStorage.getItem("selectedResumeId" , JSON.stringify(selectedResumeId));
        }
        let selectedResumeIdFromLC = localStorage.getItem("selectedResumeId");
        this.setState({
          isAuth: user ? true : false,
          user: user ? user.uid : null,
          selectResumeId: selectedResumeIdFromLC ? selectedResumeIdFromLC : "",
        });
      }
    });
  }

  render() {
    // let { isAuth } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar
            isAuth={this.state.isAuth}
            logout={this.logout}
            IsTAPage={this.IsTAPage}
            isTAPage={this.state.isTAPage}
          />
          <Switch>
            <Route path="/home" exact>
              <LandingPage isAuth={this.state.isAuth}></LandingPage>
            </Route>
            <Route path="/myresume" exact>
              {this.state.isAuth == true ? (
                <MyResume isAuth={this.state.isAuth}></MyResume>
              ) : (
                <Redirect to="/home"></Redirect>
              )}
            </Route>

            <Route path="/templates" exact>
              <Templates
                isAuth={this.state.isAuth}
                uid={this.state.user}
                setResumeId={this.setResumeId}
                IsTAPage={this.IsTAPage}
              ></Templates>
            </Route>
            <Route path="/contact" exact>
              {this.state.isAuth == true ? (
                <Contact
                  isAuth={this.state.isAuth}
                  uid={this.state.user}
                  selectedResumeId={this.state.selectedResumeId}
                ></Contact>
              ) : (
                <Redirect to="/home"></Redirect>
              )}
            </Route>
            <Route path="/edu" exact>
              {this.state.isAuth == true ? (
                <Education
                  isAuth={this.state.isAuth}
                  uid={this.state.user}
                  selectedResumeId={this.state.selectedResumeId}
                ></Education>
              ) : (
                <Redirect to="\home"></Redirect>
              )}
            </Route>
            <Route path="/exp" exact>
              {this.state.isAuth == true ? (
                <Experience
                  isAuth={this.state.isAuth}
                  login={this.login}
                ></Experience>
              ) : (
                <Redirect to="\home"></Redirect>
              )}
            </Route>
            <Route path="/skills" exact>
              {this.state.isAuth == true ? (
                <Skills isAuth={this.state.isAuth} login={this.login}></Skills>
              ) : (
                <Redirect to="\home"></Redirect>
              )}
            </Route>
            <Route path="/about" exact>
              {this.state.isAuth == true ? (
                <About isAuth={this.state.isAuth} login={this.login}></About>
              ) : (
                <Redirect to="\home"></Redirect>
              )}
            </Route>
            <Route path="/final" exact>
              {this.state.isAuth == true ? (
                <Final isAuth={this.state.isAuth} login={this.login}></Final>
              ) : (
                <Redirect to="\home"></Redirect>
              )}
            </Route>
            <Route path="/user-profile" exact>
              {this.state.isAuth == true ? (
                <UserProfile
                  isAuth={this.state.isAuth}
                  login={this.login}
                ></UserProfile>
              ) : (
                <Redirect to="/home"></Redirect>
              )}
            </Route>
            <Route path="/about-page" exact>
              {this.state.isAuth == true ? (
                <WbAbout
                  isAuth={this.state.isAuth}
                  login={this.login}
                  IsHomePage={this.IsHomePage}
                ></WbAbout>
              ) : (
                <Redirect to="/home"></Redirect>
              )}
            </Route>
            <Route path="/signin" exact>
              <SignIn
                error={this.state.error}
                isAuth={this.state.isAuth}
                login={this.login}
              ></SignIn>
            </Route>
            <Route path="/signup" exact>
              <SignUp isAuth={this.state.isAuth} login={this.login}></SignUp>
            </Route>
            <Route path="*" exact>
              <Redirect to="/home"></Redirect>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
