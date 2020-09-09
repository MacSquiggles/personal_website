import React from 'react';
import MediaQuery  from 'react-responsive';
import history from './history';
import {Router} from 'react-router-dom';

let aboutEmployer = "The company I worked for in the S20 semester was called Manulife Financial, which is a ";

let myGoals = "I made many goals to start my CO-OP term at Manulife, ";

let jobDescription = "For my CO-OP terms at Manulife, I worked on ";

let firstTopic = "During my CO-OP at Manulife, ";

let secondTopic = "A big portion of the work I did at Manulife";

let thirdTopic = "A large part of my work term was spent ";

let conclusion = "In conclusion, ";
let aknowledgement = "I would like to say an acknowledgement for my team: ";

class WorkTermThreeBlogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: props.darkMode,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({darkMode: newProps.darkMode});
}

  render() {
    return (
      <div>
        <Router history={history}>
      <MediaQuery query='(min-width: 1225px)'>
      <div className={this.state.darkMode ? "tabContentDark" : "tabContent"}>
          <h3 className="title">Full Stack Engineer</h3>
          <p className="placement">Manulife Financial</p> 
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>About Manulife Financial</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{aboutEmployer}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>My Goals</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Job Description</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescription}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>First Topic</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{firstTopic}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Second Topic</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{secondTopic}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Web Development</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{thirdTopic}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Conclusions</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{conclusion}</p> 
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Aknowledgements</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{aknowledgement}</p> 
          </div>
    </div>
    </MediaQuery>
    <MediaQuery query='(max-width: 1224px)'>
        <div className={this.state.darkMode ? "mobileTabContentDark" : "mobileTabContent"}>
          <h3 className="title">Full Stack Engineer</h3>
          <p className="placement">Manulife Financial</p> 
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>About Manulife Financial</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{aboutEmployer}</p>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>My Goals</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals}</p>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Job Description</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescription}</p>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>First Topic</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{firstTopic}</p>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Second Topic</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{secondTopic}</p>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
          <label className={this.state.darkMode ? "darkText" : "lightText"}>Third Topic</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{thirdTopic}</p>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Conclusions</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{conclusion}</p> 
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Aknowledgements</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{aknowledgement}</p> 
            </div>
    </div>
    </MediaQuery>
    </Router>
    </div>
    );
  }
}

export default WorkTermThreeBlogForm;
