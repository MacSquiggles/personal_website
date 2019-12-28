import React from 'react';
import MediaQuery  from 'react-responsive';
import { createBrowserHistory } from 'history';
let history = createBrowserHistory();

class HomeForm extends React.Component {
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
        <MediaQuery query='(min-width: 1225px)'>
        <div className={this.state.darkMode ? "tabContentDark" : "tabContent"}>
            <h3 className="title" >Welcome To My Website</h3>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>
            This website was created to detail the experiences I had during my CO-OP work terms, starting 
            at the Co-operators (Guelph location). I spent my term working with the Build Automation and 
            Release (BAR) team where we were responsible for the automation of testing, release activities,
             and building/maintaining environments. My hope is by looking through this website, you will 
             learn more about the experiences and skills I gained throughout my Software Engineering CO-OP 
             program at the University of Guelph. To learn more about my first and second work term at The 
             Co-operators, click the button below.</p> <br></br>

             {/*<Redirect to='/Cooperators' /> */}
             <button
                onClick={() => { history.push('/Cooperators'); window.location.reload();}}
              >
                The Co-operators
              </button>
             <br></br>
        </div>
        </MediaQuery>

        <MediaQuery query='(max-width: 1224px)'>
        <div className={this.state.darkMode ? "mobileTabContentDark" : "mobileTabContent"}>
            <h3 className="title" >Welcome To My Website</h3>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>
            This website was created to detail the experiences I had during my CO-OP work terms, starting 
            at the Co-operators (Guelph location). I spent my term working with the Build Automation and 
            Release (BAR) team where we were responsible for the automation of testing, release activities,
             and building/maintaining environments. My hope is by looking through this website, you will 
             learn more about the experiences and skills I gained throughout my Software Engineering CO-OP 
             program at the University of Guelph. To learn more about my first and second work term at The 
             Co-operators, click the button below.</p> <br></br>

             {/*<Redirect to='/Cooperators' /> */}
             <button
                onClick={() => { history.push('/Cooperators'); window.location.reload();}}
              >
                The Co-operators
              </button>
             <br></br>
        </div>
        </MediaQuery>
      </div>
    );
  }
}


export default HomeForm;