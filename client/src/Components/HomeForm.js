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
            completed five work terms, two at the Co-operators (Guelph location), and one remotely for Manulife
            Financial (Kitchener location), and two remotely for Designware (remote company).
            </p>
              <br></br>
             <br></br>
        </div>
        </MediaQuery>

        <MediaQuery query='(max-width: 1224px)'>
        <div className={this.state.darkMode ? "mobileTabContentDark" : "mobileTabContent"}>
            <h3 className="title" >Welcome To My Website</h3>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>
            This website was created to detail the experiences I had during my CO-OP work terms. To date I have
            completed five work terms, two at the Co-operators (Guelph location), and one remotely for Manulife
            Financial (Kitchener location), and two remotely for Designware (remote company).
            </p>
            <br></br>
             <br></br>
        </div>
        </MediaQuery>
        </Router>
      </div>
    );
  }
}


export default HomeForm;