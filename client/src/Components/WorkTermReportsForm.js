import React from 'react';
import history from './history';
import {Router} from 'react-router-dom'
let introText = "Welcome to my work term reports page. I will be keeping all of my work term reports from all of my CO-OP terms here. Each term that I complete, I will add another button linking to it, as well as add an additional row to my dropdown button for the Work Term Reports tab. These work term reports have been written following the University Of Guelph guidelines."
let cooperatorsText = "So far I have worked five CO-OP terms, two at the Co-operators for S19 and F19, one at Manulife Financial for S20 and two at Designware for W21 and S21. To see my work term report and learn more about my work terms at The Co-operators, click the button below.";
let manulifeText = "In May of 2020, I started a four month CO-OP position at Manulife Financial working on the Software Architecture team. This work term report is all about the new technologies I learned, the people I met, and the struggles of working remotely in a global pandemic. Throughout this term I learned many things, and I am excited to share those failures and discoveries with you."
let designwareText = "In January of 2021, I started an eight month CO-OP position at Designware working on the development team. This work term report is all about the new projects/features I took on, the team I became a part of, and the struggles of working remotely. Working at designware showed me a new co-op experience like I have never had before and I am excited to share the experiences I had that ultimately made me want to stick with them and sign a contract for after school."

class WorkTermReportsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: props.darkMode,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({darkMode: newProps.darkMode});
}

  render() {
    return (
      <div>
        <Router history={history}>
        <div className={this.state.darkMode ? "tabContentDark" : "tabContent"}>
            <h3 className="title" >Work Term Reports</h3>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>{introText}</p>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>{cooperatorsText}</p> <br></br>
            <button
              type='button'
              onClick={() => { history.push('/Cooperators') }}
            >
              The Co-operators
            </button>
            <br></br>
            <br></br>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>{manulifeText}</p> <br></br>
            <button
              type='button'
              onClick={() => { history.push('/Manulife') }}
            >
              Manulife
            </button>
             <br></br>
             <br></br>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>{designwareText}</p> <br></br>
            <button
              type='button'
              onClick={() => { history.push('/Designware') }}
            >
              Designware
            </button>
            <br></br>
             <br></br>
        </div>
        </Router>
      </div>
    );
  }
}

export default WorkTermReportsForm;