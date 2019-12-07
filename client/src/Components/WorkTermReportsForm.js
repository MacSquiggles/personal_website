import React from 'react';
import { withRouter } from 'react-router-dom';
import MediaQuery  from 'react-responsive';

const Button = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/Cooperators'); window.location.reload(); }}
  >
    The Co-operators
  </button>
));

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
        <MediaQuery query='(max-width: 1224px)'>
        <div className={this.state.darkMode ? "tabContentDark" : "tabContent"}>
            <h3 className="title" >Work Term Reports</h3>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>
            To learn more about my first and second work term at The 
             Co-operators, click the button below.</p> <br></br>
             <Button />
             <br></br>
        </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 1225px)'>
        <div className={this.state.darkMode ? "tabContentDark" : "tabContent"}>
            <h3 className="title" >Work Term Reports</h3>
            <p style={{paddingLeft: "30px", paddingRight: "30px"}} className={this.state.darkMode ? "darkText" : "lightText"}>
            To learn more about my first and second work term at The 
             Co-operators, click the button below.</p> <br></br>
             <Button />
             <br></br>
        </div>
        </MediaQuery>
      </div>
    );
  }
}


export default WorkTermReportsForm;