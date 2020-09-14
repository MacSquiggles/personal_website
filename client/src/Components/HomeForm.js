import React from 'react';
import MediaQuery  from 'react-responsive';
import history from './history';
import {Router} from 'react-router-dom';

class HomeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: props.darkMode,
    }
    this.goToCooperators = this.goToCooperators.bind(this)
  }

  componentWillReceiveProps(newProps) {
    this.setState({darkMode: newProps.darkMode});
  }

  goToCooperators() {
    
  }

  render() {
    return (
      <div>
        <Router history={history}>
        <MediaQuery query='(min-width: 1225px)'>
        <div className={this.state.darkMode ? "tabContentDark" : "tabContent"}>
            <h3 className="title" >Welcome To My Website</h3>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>
            This website was created to detail the experiences I had during my CO-OP work terms. To date I have
            completed three work terms, two at the Co-operators (Guelph location), and one remotely for Manulife
            Financial (Kitchener location).
            </p>
            <br></br>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>
            I spent my terms at The Cooperators with the Build Automation and 
            Release (BAR) team where we were responsible for the automation of testing, release activities,
             and building/maintaining environments. My hope is by looking through this website, you will 
             learn more about the experiences and skills I gained throughout my Software Engineering CO-OP 
             program at the University of Guelph. To learn more about my first and second work term at The 
             Co-operators, click the button below.</p> <br></br>
             <button
                onClick={function() { history.push("/Cooperators"); }}
              >
                The Co-operators
              </button>
              <br></br>
             <br></br>
             <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>
             I also have complated a four month CO-OP position at Manulife Financial working on the Software Architecture team. 
             Being a COOP student on the architecture team meant I needed to look into new technologies and complete proofs of technology
             to evaluate their potential to be used to improve or replace existing technology within the company.
             To learn more about my experiences and skills gained at my Manulife Financial COOP position, click the button below.
             </p><br></br>
             <button
                onClick={function() { history.push("/Manulife"); }}
              >
                Manulife
              </button>
              <br></br>
             <br></br>
        </div>
        </MediaQuery>

        <MediaQuery query='(max-width: 1224px)'>
        <div className={this.state.darkMode ? "mobileTabContentDark" : "mobileTabContent"}>
            <h3 className="title" >Welcome To My Website</h3>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>
            This website was created to detail the experiences I had during my CO-OP work terms. To date I have
            completed three work terms, two at the Co-operators (Guelph location), and one remotely for Manulife
            Financial (Kitchener location).
            </p>
            <br></br>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>
            I spent my terms at The Cooperators with the Build Automation and 
            Release (BAR) team where we were responsible for the automation of testing, release activities,
             and building/maintaining environments. My hope is by looking through this website, you will 
             learn more about the experiences and skills I gained throughout my Software Engineering CO-OP 
             program at the University of Guelph. To learn more about my first and second work term at The 
             Co-operators, click the button below.</p> <br></br>
             <button
                onClick={function() { history.push("/Cooperators"); }}
              >
                The Co-operators
              </button>
              <br></br>
             <br></br>
             <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>
             I also have complated a four month CO-OP position at Manulife Financial working on the Software Architecture team. 
             Being a COOP student on the architecture team meant I needed to look into new technologies and complete proofs of technology
             to evaluate their potential to be used to improve or replace existing technology within the company.
             To learn more about my experiences and skills gained at my Manulife Financial COOP position, click the button below.
             </p><br></br>
             <button
                onClick={function() { history.push("/Manulife"); }}
              >
                Manulife
              </button>
             <br></br>
        </div>
        </MediaQuery>
        </Router>
      </div>
    );
  }
}


export default HomeForm;