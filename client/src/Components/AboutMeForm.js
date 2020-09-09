import React from 'react';
import { Grid } from 'gymnast'
import MediaQuery  from 'react-responsive';
import history from './history';
import {Router} from 'react-router-dom'

let myDescription = require("./Content/AboutMe_MyDescription");

class AboutMeForm extends React.Component {
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
      <MediaQuery query='(min-width: 1451px)'>
        <div className={this.state.darkMode ? "tabContentDark" : "tabContent"}>
          <h3 className="title" >About Me</h3>         
              <Grid marginLeft={10} marginRight={10} marginTop={0}>
                  <Grid size={5} >
                  <img  alt="Mackenzie Quigley" src={require("./Content/mePicture.jpg")} style={{width: "280px", height: "400px"}}/>
                  </Grid>
                  <Grid size={6}>
                    <p className={this.state.darkMode ? "darkText" : "lightText"}>{myDescription.Text}</p>
                  </Grid>
              </Grid>
              </div>
      </MediaQuery>
            <MediaQuery query='(max-width: 1450px)'>
              <div className={this.state.darkMode ? "mobileTabContentDark" : "mobileTabContent"}>
              <h3 className="title" >About Me</h3> 
                  <p className={this.state.darkMode ? "darkText" : "lightText"}>{myDescription.Text}</p>
                  <img  alt="Mackenzie Quigley" src={require("./Content/mePicture.jpg")} style={{width: "180px", height: "250px"}}/>
            </div>
            </MediaQuery>
            </Router>
        </div>
    );
  }
}

export default AboutMeForm;