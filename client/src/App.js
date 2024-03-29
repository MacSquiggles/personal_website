import React from 'react';
import Modal from 'react-modal';
import AboutMeForm from "./Components/AboutMeForm";
import HomeForm from "./Components/HomeForm";
import ContactForm from "./Components/Contact";
import WorkTermReportsForm from "./Components/WorkTermReportsForm";
import WorkTermOneBlogForm from "./Components/WorkTermOneBlogForm";
import WorkTermThreeBlogForm from "./Components/WorkTermThreeBlogForm";
import WorkTermFiveBlogForm from "./Components/WorkTermFiveBlogForm";
import { Route, Link, Switch, Router } from 'react-router-dom'
import history from './Components/history';
import MediaQuery from 'react-responsive';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import { SocialIcon } from 'react-social-icons';
import { Transform } from 'react-animation-components';
import 'bootstrap/dist/css/bootstrap.css';
import SwitchToggle from "react-switch";
import './App.css';

import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


let myModalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    height: '400px',
    width: '900px',
    position: 'fixed',
    alignItems: 'center',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

const mobileOptions = {
  backgroundColor: "white",
  color: 'black',
  textAlign: 'center',
  fontSize: '20px',
  textDecoration: 'none',
  border: "1px solid grey",
}

const dropDownTabStyleDark = {
  backgroundColor: "transparent",
  color: '#5299ba',
  textAlign: 'center',
  fontSize: '24px',
  marginLeft: "20px",
  marginRight: "20px",
  textDecoration: 'none',
};

const dropDownHoverTabStyleDark = {
  color: 'white',
  textAlign: 'center',
  fontSize: '24px',
  marginLeft: "20px",
  marginRight: "20px",
  textDecoration: 'none',
  borderBottom: "3px solid white"
};

const dropDownItemStyle = {
  backgroundColor: "transparent",
  color: '#5299ba',
  textAlign: 'center',
  fontSize: '24px',
  marginLeft: "10px",
  marginRight: "10px",
  textDecoration: 'none'
};

const dropDownItemHoverTabStyle = {
  color: 'black',
  textAlign: 'center',
  fontSize: '24px',
  marginLeft: "10px",
  marginRight: "10px",
  textDecoration: 'none',
  borderBottom: "3px solid black"
};

const tabStyle = {
  backgroundColor: "transparent",
  color: 'white',
  textAlign: 'center',
  fontSize: '26px',
  marginLeft: "20px",
  marginRight: "20px",
  textDecoration: 'none',
  borderBottom: "3px solid transparent"
};

const hoverTabStyle = {
  color: 'black',
  textAlign: 'center',
  fontSize: '26px',
  marginLeft: "20px",
  marginRight: "20px",
  textDecoration: 'none',
  borderBottom: "3px solid black"
};

const tabStyleDark = {
  backgroundColor: "transparent",
  color: '#5299ba',
  textAlign: 'center',
  fontSize: '26px',
  marginLeft: "20px",
  marginRight: "20px",
  textDecoration: 'none',
  borderBottom: "3px solid transparent"
};

const hoverTabStyleDark = {
  color: 'white',
  textAlign: 'center',
  fontSize: '26px',
  marginLeft: "20px",
  marginRight: "20px",
  textDecoration: 'none',
  borderBottom: "3px solid white"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: "",
      description: "",
      username: "",
      password: "",
      hoverHome: false,
      hoverAboutMe: false,
      hoverContactMe: false,
      modalIsOpen: false,
      menuOpen: false,
      hoverCooperators: false,
      selectReport: false,
      darkMode: false,
      hoverArrow: false,
      isOpen: false,
      hoverManulife: false,
      hoverDesignware: false,
    };
    this.toggle = this.toggle.bind(this);

    this.changeDropDown = this.changeDropDown.bind(this);
    this.addPosts = this.addPosts.bind(this);
    this.validateUser = this.validateUser.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);

    this.hoverHomeOn = this.hoverHomeOn.bind(this);
    this.hoverHomeOff = this.hoverHomeOff.bind(this);
    this.selectHome = this.selectHome.bind(this);

    this.hoverAboutMeOn = this.hoverAboutMeOn.bind(this);
    this.hoverAboutMeoff = this.hoverAboutMeoff.bind(this);
    this.selectAboutMe = this.selectAboutMe.bind(this);

    this.hoverContactMeOn = this.hoverContactMeOn.bind(this);
    this.hoverContactMeoff = this.hoverContactMeoff.bind(this);
    this.selectContactMe = this.selectContactMe.bind(this);

    this.selectReport = this.selectReport.bind(this);

    this.closeModal = this.closeModal.bind(this);

    this.hoverArrowOn = this.hoverArrowOn.bind(this);
    this.hoverArrowOff = this.hoverArrowOff.bind(this);

    this.hoverCooperatorsOn = this.hoverCooperatorsOn.bind(this);
    this.hoverCooperatorsOff = this.hoverCooperatorsOff.bind(this);
    this.selectCooperators = this.selectCooperators.bind(this);

    this.hoverManulifeOn = this.hoverManulifeOn.bind(this);
    this.hoverManulifeOff = this.hoverManulifeOff.bind(this);
    this.selectManulife = this.selectManulife.bind(this);

    this.hoverDesignwareOn = this.hoverDesignwareOn.bind(this);
    this.hoverDesignwareOff = this.hoverDesignwareOff.bind(this);
    this.selectDesignware = this.selectDesignware.bind(this);

    this.changeDark = this.changeDark.bind(this);
    this.goToSite = this.goToSite.bind(this);
  }
  async hoverArrowOn() {
    await this.setState({ hoverArrow: true });
  }
  async hoverArrowOff() {
    await this.setState({ hoverArrow: false });
  }

  async goToSite() {
    await this.setState({ hoverArrow: true });
  }

  async changeDark() {
    let current = this.state.darkMode;
    await this.setState({ darkMode: !current });
  }

  async selectReport() {
    this.setState({ 
      hoverCooperators: false,
      selectReport: true,
      hoverAboutMe: false,
      hoverHome: false,
      hoverContactMe: false,
      hoverManulife: false,
      hoverDesignware: false
    });
    await history.push("/WorkTermReports");
  }

  async selectCooperators() {
    this.setState({ 
      hoverCooperators: true,
      selectReport: true,
      hoverAboutMe: false,
      hoverHome: false,
      hoverContactMe: false,
      hoverManulife: false,
      hoverDesignware: false
    });
    await history.push("/Cooperators");
  }
  hoverCooperatorsOn() {
    this.setState({ hoverCooperators: true });
  }
  hoverCooperatorsOff() {
    if (history.location.pathname !== "/Cooperators") {
      this.setState({ hoverCooperators: false });
    }
  }

  changeDropDown(e) {
    this.setState({ selectedOption: e.target.value });
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // Closes the modal that alerts the client they are making an insurance-less client
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  async selectHome() {
    this.setState({ 
      hoverCooperators: false,
      selectReport: false,
      hoverAboutMe: false,
      hoverHome: true,
      hoverContactMe: false,
      hoverManulife: false,
      hoverDesignware: false
    });
    await history.push("/");
  }

  hoverHomeOn() {
    this.setState({ hoverHome: true });
  }

  hoverHomeOff() {
    if (history.location.pathname !== "/") {
      this.setState({ hoverHome: false });
    }
  }


  async selectAboutMe() {
    this.setState({ 
      hoverCooperators: false,
      selectReport: false,
      hoverAboutMe: true,
      hoverHome: false,
      hoverContactMe: false,
      hoverManulife: false,
      hoverDesignware: false
    });
    await history.push("/AboutMe");
  }

  hoverAboutMeOn() {
    this.setState({ hoverAboutMe: true });
  }

  hoverAboutMeoff() {
    if (history.location.pathname !== "/AboutMe") {
      this.setState({ hoverAboutMe: false });
    }
  }


  async selectManulife() {
    this.setState({ 
      hoverCooperators: false,
      selectReport: true,
      hoverAboutMe: false,
      hoverHome: false,
      hoverContactMe: false,
      hoverManulife: true,
      hoverDesignware: false
    });
    await history.push("/Manulife");
  }

  hoverManulifeOn() {
    this.setState({ hoverManulife: true });
  }

  hoverManulifeOff() {
    if (history.location.pathname !== "/Manulife") {
      this.setState({ hoverManulife: false });
    }
  }

  async selectDesignware() {
    this.setState({ 
      hoverCooperators: false,
      selectReport: true,
      hoverAboutMe: false,
      hoverHome: false,
      hoverContactMe: false,
      hoverManulife: false,
      hoverDesignware: true 
    });
    await history.push("/Designware");
  }

  hoverDesignwareOn() {
    this.setState({ hoverDesignware: true });
  }

  hoverDesignwareOff() {
    if (history.location.pathname !== "/Designware") {
      this.setState({ hoverDesignware: false });
    }
  }

  async selectContactMe() {
    this.setState({ 
      hoverCooperators: false,
      selectReport: false,
      hoverAboutMe: false,
      hoverHome: false,
      hoverContactMe: true,
      hoverManulife: false,
      hoverDesignware: false
    });
    await history.push("/ContactMe");
  }

  hoverContactMeOn() {
    this.setState({ hoverContactMe: true });
  }

  hoverContactMeoff() {
    if (history.location.pathname !== "/ContactMe") {
      this.setState({ hoverContactMe: false });
    }
  }

  handleStateChange = async (e) => {
    await this.setState({ [e.target.id]: e.target.value });
  }

  validateUser = async (e) => {
    if (this.state.username !== "" && this.state.password !== "") {
      if (this.state.title !== "" && this.state.date !== "" && this.state.description !== "") {
        let response = await checkUser(this.state.username, this.state.password);

        if (response.error === "Verified") {
          console.log("Verified");
          let sendPost = await addPost(this.state.title, this.state.date, this.state.description);
          console.log(sendPost.error);

          if (sendPost.error === "Success") {
            this.setState({ modalIsOpen: false });
            this.seePosts();
          }
          else {
            alert('Invalid Login. Please try again.');
          }
        }
        else {
          alert('Invalid Login. Please try again.');
        }
      }
      else {
        alert("Please enter in a title, date and decription for your post.");
      }
    }
    else {
      alert("Please enter your username and password");
    }
  }

  addPosts = (e) => {
    this.setState({ modalIsOpen: true });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return (
      <div style={{ textAlign: "center"}}>
          <div className="App" style={this.state.darkMode ? { backgroundColor: "black" } : { backgroundColor: "white" }}>
          <Router history={history}>
              <MediaQuery query='(min-width: 1225px)'>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  style={myModalStyle}
                  contentLabel="New Post"
                >
                  <form>
                    <label>Name:</label> <input type="text" onChange={this.handleStateChange} id={"username"} value={this.state.username} /> <br></br>
                    <label>Password:</label> <input type="text" onChange={this.handleStateChange} id={"password"} value={this.state.password} /> <br></br>
                    <label>Title:</label> <input type="text" onChange={this.handleStateChange} id={"title"} value={this.state.title} /> <br></br>
                    <label>Date:</label> <input type="date" onChange={this.handleStateChange} id={"date"} value={this.state.date} /> <br></br>
                    <br></br><label>Description:</label><br></br> <textarea rows="5" cols="60" className="descriptionBox" type="text" onChange={this.handleStateChange} id={"description"} value={this.state.description} /> <br></br>
                    <button className="cancelButton" onClick={this.closeModal}>Cancel</button>
                    <button onClick={this.validateUser} >Save</button>
                  </form>
                </Modal >
              </MediaQuery>


              <div>
                <div style={{ display: "block"}}>
                  <MediaQuery query='(min-width: 1225px)'>
                    <div className={this.state.darkMode ? "myDarkHeader" : "myheader"}>

                      <Transform enterTransform="translateY(20px)" in>
                        <p style={this.state.darkMode ? { fontSize: "20px", margin: "auto", color: "#5299ba", float: "left", position: "fixed", fontWeight: "bold", marginLeft: "20px" } : { fontSize: "20px", color: "black", float: "left", position: "fixed", fontWeight: "bold", margin: "auto", marginLeft: "20px" }}>
                        Mackenzie Quigley </p>
                        <br/>
                        <p style={this.state.darkMode ? { fontSize: "40px", margin: "auto", color: "#5299ba", float: "left", position: "fixed", fontWeight: "bold", marginLeft: "70px" } : { fontSize: "40px", color: "black", float: "left", position: "fixed", fontWeight: "bold", margin: "auto", marginLeft: "70px" }}><i class="fas fa-laptop-code"></i></p>
                      </Transform>

                      {!this.state.darkMode &&

                        <Nav className="tabHeader">


                          <Transform enterTransform="translateY(20px)" in>
                            {history.location.pathname === "/" &&
                              <Link
                                style={hoverTabStyle}
                                to="/">
                                <i class="fas fa-home"></i> Home
                            </Link>
                            }
                            {history.location.pathname !== "/" &&
                              <Link
                                style={this.state.hoverHome ? hoverTabStyle : tabStyle}
                                onMouseEnter={this.hoverHomeOn}
                                onMouseLeave={this.hoverHomeOff}
                                onClick={this.selectHome}
                                to="/">
                                <i class="fas fa-home"></i> Home
                              </Link>
                            }


                            <UncontrolledDropdown nav inNavbar>
                              <DropdownToggle nav color="white">
                                {(history.location.pathname !== "/WorkTermReports" && history.location.pathname !== "/Cooperators" && history.location.pathname !== "/Manulife" && history.location.pathname !== "/Designware") &&
                                  <Link
                                    style={this.state.hoverReports ? hoverTabStyle : tabStyle}
                                    onClick={this.selectReport}
                                    to="/WorkTermReports">
                                    <i class="fas fa-briefcase"></i> Reports<i class="fas fa-caret-down"></i>
                                    </Link>
                                }

                                {(history.location.pathname === "/WorkTermReports" || history.location.pathname === "/Cooperators" || history.location.pathname === "/Manulife" || history.location.pathname === "/Designware") &&
                                  <Link
                                    style={hoverTabStyle}
                                    onClick={this.selectReport}
                                    to="/WorkTermReports">
                                    <i class="fas fa-briefcase"></i> Reports <i class="fas fa-caret-down"></i>
                                </Link>
                                }
                              </DropdownToggle>
                              <DropdownMenu center style={{ width: "200px", marginLeft: "20px", textAlign: 'center' }}>
                                <DropdownItem className="dropdownItems">
                                  {history.location.pathname === "/Cooperators" &&
                                    <div>
                                      <Link style={dropDownItemHoverTabStyle} onMouseEnter={this.hoverCooperatorsOn} onMouseLeave={this.hoverCooperatorsOff} onClick={this.selectCooperators} to="/Cooperators">Co-operators</Link> <br></br>
                                    </div>
                                  }
                                  {history.location.pathname !== "/Cooperators" &&
                                    <div>
                                      <Link style={this.state.hoverCooperators ? dropDownItemHoverTabStyle : dropDownItemStyle} onMouseEnter={this.hoverCooperatorsOn} onMouseLeave={this.hoverCooperatorsOff} onClick={this.selectCooperators} to="/Cooperators">Co-operators</Link> <br></br>
                                    </div>
                                  }
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="dropdownItems">
                                  {history.location.pathname === "/Manulife" &&
                                    <div>
                                      <Link style={dropDownItemHoverTabStyle} onMouseEnter={this.hoverManulifeOn} onMouseLeave={this.hoverManulifeOff} onClick={this.selectManulife} to="/Manulife">Manulife</Link> <br></br>
                                    </div>
                                  }
                                  {history.location.pathname !== "/Manulife" &&
                                    <div>
                                      <Link style={this.state.hoverManulife ? dropDownItemHoverTabStyle : dropDownItemStyle} onMouseEnter={this.hoverManulifeOn} onMouseLeave={this.hoverManulifeOff} onClick={this.selectManulife} to="/Manulife">Manulife</Link> <br></br>
                                    </div>
                                  }
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="dropdownItems">
                                  {history.location.pathname === "/Designware" &&
                                    <div>
                                      <Link style={dropDownItemHoverTabStyle} onMouseEnter={this.hoverDesignwareOn} onMouseLeave={this.hoverDesignwareOff} onClick={this.selectDesignware} to="/Designware">Designware</Link> <br></br>
                                    </div>
                                  }
                                  {history.location.pathname !== "/Designware" &&
                                    <div>
                                      <Link style={this.state.hoverDesignware ? dropDownItemHoverTabStyle : dropDownItemStyle} onMouseEnter={this.hoverDesignwareOn} onMouseLeave={this.hoverDesignwareOff} onClick={this.selectDesignware} to="/Designware">Designware</Link> <br></br>
                                    </div>
                                  }
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>


                            {history.location.pathname === "/AboutMe" &&
                              <Link
                                style={hoverTabStyle}
                                to="/AboutMe">
                                <i class="fas fa-id-card"></i> About
                  </Link>
                            }

                            {history.location.pathname !== "/AboutMe" &&
                              <Link
                                onClick={this.selectAboutMe}
                                style={this.state.hoverAboutMe ? hoverTabStyle : tabStyle}
                                onMouseEnter={this.hoverAboutMeOn}
                                onMouseLeave={this.hoverAboutMeoff}
                                to="/AboutMe">
                                <i class="fas fa-id-card"></i> About
                  </Link>
                            }


                            {history.location.pathname === "/ContactMe" &&
                              <Link
                                style={hoverTabStyle}
                                to="/ContactMe">
                                <i class="fas fa-envelope"></i> Contact
                  </Link>
                            }

                            {history.location.pathname !== "/ContactMe" &&
                              <Link
                                onClick={this.selectContactMe}
                                style={this.state.hoverContactMe ? hoverTabStyle : tabStyle}
                                onMouseEnter={this.hoverContactMeOn}
                                onMouseLeave={this.hoverContactMeoff}
                                to="/ContactMe">
                                <i class="fas fa-envelope"></i> Contact
                  </Link>
                            }
                          </Transform>
                        </Nav>

                      }


                      {this.state.darkMode &&

                        <Nav className="tabHeader">

                          <Transform enterTransform="translateY(20px)" in>
                            {history.location.pathname === "/" &&
                              <Link
                                style={hoverTabStyleDark}
                                to="/">
                                <i class="fas fa-home"></i> Home
                    </Link>
                            }

                            {history.location.pathname !== "/" &&
                              <Link
                                style={this.state.hoverHome ? hoverTabStyleDark : tabStyleDark}
                                onMouseEnter={this.hoverHomeOn}
                                onMouseLeave={this.hoverHomeOff}
                                onClick={this.selectHome}
                                to="/">
                                <i class="fas fa-home"></i> Home
                    </Link>
                            }

                            <UncontrolledDropdown nav inNavbar>
                              <DropdownToggle nav caret color="white">
                                {(history.location.pathname !== "/WorkTermReports" && history.location.pathname !== "/Cooperators") &&
                                  <Link
                                    style={this.state.hoverReports ? hoverTabStyleDark : tabStyleDark}
                                    onClick={this.selectReport}
                                    to="/WorkTermReports">
                                    <i class="fas fa-briefcase"></i> Reports
                                    </Link>
                                }

                                {(history.location.pathname === "/WorkTermReports" || history.location.pathname === "/Cooperators") &&
                                  <Link
                                    style={hoverTabStyleDark}
                                    onClick={this.selectReport}
                                    to="/WorkTermReports">
                                    <i class="fas fa-briefcase"></i> Reports
                                </Link>
                                }
                              </DropdownToggle>
                              <DropdownMenu center style={{ borderBottom: "1px solid #5299ba", borderLeft: "1px solid #5299ba", borderRight: "1px solid #5299ba", width: "200px", marginLeft: "20px", textAlign: 'center', backgroundColor: "black" }}>
                                <DropdownItem className="dropdownItems">
                                  {history.location.pathname === "/Cooperators" &&
                                    <div>
                                      <Link style={dropDownHoverTabStyleDark} onMouseEnter={this.hoverCooperatorsOn} onMouseLeave={this.hoverCooperatorsOff} onClick={this.selectCooperators} to="/Cooperators">Co-operators</Link> <br></br>
                                    </div>
                                  }
                                  {history.location.pathname !== "/Cooperators" &&
                                    <div>
                                      <Link style={this.state.hoverCooperators ? dropDownHoverTabStyleDark : dropDownTabStyleDark} onMouseEnter={this.hoverCooperatorsOn} onMouseLeave={this.hoverCooperatorsOff} onClick={this.selectCooperators} to="/Cooperators">Co-operators</Link> <br></br>
                                    </div>
                                  }
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="dropdownItems">
                                  {history.location.pathname === "/Manulife" &&
                                    <div>
                                      <Link style={dropDownTabStyleDark} onMouseEnter={this.hoverManulifeOn} onMouseLeave={this.hoverManulifeOff} onClick={this.selectManulife} to="/Manulife">Manulife</Link> <br></br>
                                    </div>
                                  }
                                  {history.location.pathname !== "/Manulife" &&
                                    <div>
                                      <Link style={this.state.hoverManulife ? dropDownHoverTabStyleDark : dropDownTabStyleDark} onMouseEnter={this.hoverManulifeOn} onMouseLeave={this.hoverManulifeOff} onClick={this.selectManulife} to="/Manulife">Manulife</Link> <br></br>
                                    </div>
                                  }
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="dropdownItems">
                                  {history.location.pathname === "/Designware" &&
                                    <div>
                                      <Link style={dropDownTabStyleDark} onMouseEnter={this.hoverDesignwareOn} onMouseLeave={this.hoverDesignwareOff} onClick={this.selectDesignware} to="/Designware">Designware</Link> <br></br>
                                    </div>
                                  }
                                  {history.location.pathname !== "/Designware" &&
                                    <div>
                                      <Link style={this.state.hoverDesignware ? dropDownHoverTabStyleDark : dropDownTabStyleDark} onMouseEnter={this.hoverDesignwareOn} onMouseLeave={this.hoverDesignwareOff} onClick={this.selectDesignware} to="/Designware">Designware</Link> <br></br>
                                    </div>
                                  }
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>

                            {history.location.pathname === "/AboutMe" &&
                              <Link
                                style={hoverTabStyleDark}
                                to="/AboutMe">
                                <i class="fas fa-id-card"></i> About
                  </Link>
                            }

                            {history.location.pathname !== "/AboutMe" &&
                              <Link
                                onClick={this.selectAboutMe}
                                style={this.state.hoverAboutMe ? hoverTabStyleDark : tabStyleDark}
                                onMouseEnter={this.hoverAboutMeOn}
                                onMouseLeave={this.hoverAboutMeoff}
                                to="/AboutMe">
                                <i class="fas fa-id-card"></i> About
                  </Link>
                            }


                            {history.location.pathname === "/ContactMe" &&
                              <Link
                                style={hoverTabStyleDark}
                                to="/ContactMe">
                                <i class="fas fa-envelope"></i> Contact
                  </Link>
                            }

                            {history.location.pathname !== "/ContactMe" &&
                              <Link
                                onClick={this.selectContactMe}
                                style={this.state.hoverContactMe ? hoverTabStyleDark : tabStyleDark}
                                onMouseEnter={this.hoverContactMeOn}
                                onMouseLeave={this.hoverContactMeoff}
                                to="/ContactMe">
                                <i class="fas fa-envelope"></i> Contact
                  </Link>
                            }
                          </Transform>
                        </Nav>
                      }
                    </div>
                  </MediaQuery>

                  <MediaQuery query='(max-width: 1224px)'>
                    <div className="tabheader_mobile">
                      <div className={this.state.darkMode ? "myDarkHeader_mobile" : "myheader_mobile"}>
                        <div style={{ padding: "20px", float: "left" }}>
                          <CheeseburgerMenu
                            isOpen={this.state.menuOpen}
                            closeCallback={this.closeMenu.bind(this)}>
                            <br/>
                            <Link onClick={this.closeMenu.bind(this)} style={{ textDecoration: "none" }} to="/">
                              <p style={{ mobileOptions }}><i class="fas fa-home"></i> Home</p>
                            </Link>
                            <br/>
                            <Link onClick={this.closeMenu.bind(this)} style={{ textDecoration: "none" }} to="/Cooperators">
                              <p style={{ mobileOptions }}><i class="fas fa-briefcase"></i> Co-operators</p>
                            </Link>
                            <br/>
                            <Link onClick={this.closeMenu.bind(this)} style={{ textDecoration: "none" }} to="/Manulife">
                              <p style={{ mobileOptions }}><i class="fas fa-briefcase"></i> Manulife</p>
                            </Link>
                            <br/>
                            <Link onClick={this.closeMenu.bind(this)} style={{ textDecoration: "none" }} to="/Designware">
                              <p style={{ mobileOptions }}><i class="fas fa-briefcase"></i> Designware</p>
                            </Link>
                            <br/>
                            <Link onClick={this.closeMenu.bind(this)} style={{ textDecoration: "none" }} to="/AboutMe">
                              <p style={{ mobileOptions }}><i class="fas fa-id-card"></i> About</p>
                            </Link>
                            <br/>
                            <Link onClick={this.closeMenu.bind(this)} style={{ textDecoration: "none" }} to="/ContactMe">
                              <p style={{ mobileOptions }}><i class="fas fa-envelope"></i> Contact</p>
                            </Link>
                          </CheeseburgerMenu>

                          <HamburgerMenu
                            isOpen={this.state.menuOpen}
                            menuClicked={this.openMenu.bind(this)}
                            width={42}
                            height={34}
                            strokeWidth={3}
                            rotate={0}
                            color={this.state.darkMode ? "#5299ba" : "black"}
                            borderRadius={0}
                            animationDuration={0.5}
                          />
                        </div>
                        <div style={{ marginRight: "40px",  float: "center"}}>
                          <p style={this.state.darkMode ? { fontSize: "20px", color: "#5299ba", fontWeight: "bold" } : { fontSize: "20px", color: "black", fontWeight: "bold" }}>
                          Mackenzie Quigley </p>
                          <p style={this.state.darkMode ? { marginRight: "10px", marginTop: "-20px", fontSize: "40px", color: "#5299ba", fontWeight: "bold" } : { marginRight: "10px", marginLeft: "-10px", marginTop: "-20px", fontSize: "40px", color: "black", fontWeight: "bold" }}> <i class="fas fa-laptop-code"></i></p>
                        </div>
                      </div>
                    </div>
                  </MediaQuery>
                </div>

                <MediaQuery query='(min-width: 1225px)'>
                  <div style={{ marginTop: "100px" }} />
                </MediaQuery>

                <Switch>
                  <Route exact path="/"><HomeForm darkMode={this.state.darkMode} /></Route>
                  <Route exact path="/WorkTermReports"> <WorkTermReportsForm darkMode={this.state.darkMode}/> </Route>
                  <Route exact path="/Cooperators"> <WorkTermOneBlogForm darkMode={this.state.darkMode} /> </Route>
                  <Route exact path="/Manulife"> <WorkTermThreeBlogForm darkMode={this.state.darkMode} /> </Route>
                  <Route exact path="/Designware"> <WorkTermFiveBlogForm darkMode={this.state.darkMode} /> </Route>
                  <Route exact path="/ContactMe"> <ContactForm darkMode={this.state.darkMode} /> </Route>
                  <Route exact path="/AboutMe"><AboutMeForm darkMode={this.state.darkMode} /></Route>
                </Switch>
              </div>


              <div style={{ margin: "50px", borderTop: "1px solid grey" }}>
                <SocialIcon style={{ margin: "20px", width: "30px", height: "30px" }} url="https://www.linkedin.com/in/mackenzie-quigley-9680ba14a/" />
                <br></br><label className={this.state.darkMode ? "darkText" : "lightText"} style={{ backgroundColor: "transparent", fontSize: "20px" }}>Designed and Created By Mackenzie Quigley</label> <br></br>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>Dark Mode:</p><SwitchToggle onChange={this.changeDark} checked={this.state.darkMode} />
                <br></br><button style={{ float: "right" }} onClick={this.addPosts} className="AddPost" id="AddPost">+</button> <br></br>
              </div>
            </Router>
          </div>
      </div>
    );
  }
}

async function checkUser(username, password) {
  let info = {};
  info.username = username;
  info.password = password;
  console.log(info);

  let data = {};

  await (async () => {
    const rawResponse = await fetch('/api/v1/checkUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    });
    data = await rawResponse.json();
  })();

  return data;
}


async function addPost(title, date, description) {
  let info = {};
  info.title = title;
  info.description = description;
  info.date = date;

  console.log(info);

  let data = {};

  await (async () => {
    const rawResponse = await fetch('/api/v1/addPost', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    });
    data = await rawResponse.json();
  })();

  return data;
}


export default App;
