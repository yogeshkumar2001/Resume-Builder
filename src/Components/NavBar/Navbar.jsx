import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

import "./Navbar.css";

class Navbar extends Component {
  state = {
    isAuth: false,
    mobile: false
    // isHomePage: false
  };
  componentWillReceiveProps(props) {
    this.setState({
      isAuth: props.isAuth,
    })
  }
  openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }
  closeNav = () => {

    document.getElementById("myNav").style.width = "0%";
  }
  componentDidMount() {
    // this.props.IsHomePage();
    // window.location.reload();
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
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.mobile == true ? (<React.Fragment>
            <div id="myNav" className="overlay">
              <a href="javascript:void(0)" className="closebtn" onClick={() => { this.closeNav() }}>&times;</a>
              <div class="overlay-content">
                <Link to="/home">Home</Link>
                <Link to="/about-page">About</Link>
                <Link to="/templates">Templates</Link>
                <Link to="/user-profile">Profile</Link>
                <Link to="/myresume">My Resumes</Link>
                {this.state.isAuth == false ? <Link to="/signin">Sign In</Link> : <></>}
                <Link to="/signup">Sign Up</Link>
                {this.state.isAuth == true ? <Link to="/signup">Logout</Link> : <div></div>}
                
              </div>
            </div>
            <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => { this.openNav() }}>&#9776; open</span></React.Fragment>) : (<React.Fragment><div className="navbar"  >

              <div className="logo" >
                <Link to="/">
                  <img src={logo} alt="" />
                  <span style={{ marginLeft: "4%" }}>Resume Builder</span>
                </Link>
              </div>
              {this.state.isAuth ? (
                <div className="navlinks">
                  <ul>
                    <li>
                      <Link to="/templates">Templates</Link>
                    </li>
                    <li>
                      <Link to="/about-page">About</Link>
                    </li>
                    <li>
                      <Link to="/user-profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/myresume">My Resumes</Link>
                    </li>
                    <li>
                      <Link to="/home" onClick={this.props.logout}>Logout</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="navlinks">
                  <ul>
                    <li>
                      <Link to="/about-page">About</Link>
                    </li>
                    <li>
                      <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                      <Link to="/signin">Sign In</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div></React.Fragment>)
        }
      </React.Fragment>
    );
  }
}

export default Navbar;
