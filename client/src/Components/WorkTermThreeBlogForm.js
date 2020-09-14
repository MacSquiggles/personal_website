import React from 'react';
import MediaQuery  from 'react-responsive';
import history from './history';
import {Router} from 'react-router-dom';

let aboutEmployer = "I worked on the Architecture team as a Full-Stack Engineer for four months at Manulife Financial this summer. From working at Manulife, I learned many things I did not know about the company and its dynamic. Although Manulife is a global corporation, they have a very relaxed and welcoming work environment. I had the chance to tour the building before COVID and they keep free coffee/tea machines everywhere for employees, and recently invested in transforming their office space to support more agile work areas. It is clear that the leadership at Manulife cares about the satisfaction of their customers, and their employees. Throughout the term, the vice president, and the president of the Canadian division were part of various events. They organized many events to try and keep morale alive even though we lacked the aspect of in person interaction. They organized fitness sessions, fireside chats, and made sure to properly address and make progress on movements such as BLM. ";
let aboutEmployer2 = "While it was legally safe to go back to work before the end of my term, Manulife decided to prolong going back to reduce the risk to their employees. Additionally, they planned to have a phased return to work, only allowing 1/5th of the workers to return at a time to limit the spread. Often insurance and financial companies fall a bit behind in the technology departments, namely because technology was never a huge part of a company's success until the last 30 or so years. However, Manulife will continually be looking towards new solutions to current problems, and replacing outdated or legacy code with more efficient modern solutions. This is where my role at Manulife comes into the discussion.";

let myGoals = "I made many goals to start my CO-OP term at Manulife, ";

let jobDescription = "My role during summer 2020 at Manulife Financial was on the Architecture team. The software architects take on many different projects that have many different project owners and generally hope to look into new technology, and potentially replace/upgrade old technology in some way. I was placed on a team we called the Remote Architects 2020 with  other COOP students. We were split into 4 teams of one or two people and were working on different projects. I was paired with Jason and we worked on two projects together during the summer 2020 semester. In this section of my report, I am going to talk about the two projects that we worked on, and the tech challenge I completed this term. ";

let firstTopic = "During my CO-OP at Manulife, ";

let secondTopic = "A big portion of the work I did at Manulife";

let thirdTopic = "A large part of my work term was spent ";

let conclusion = "I had a wonderful term and learned a lot more about React.js web development through my first project, and through completing (and winning the audience vote) for the COOP Tech Challenge. I also learned so much about using various technologies in Azure and getting an API to be production-ready on my second project. While working remotely had its challenges, I am so grateful to have had this experience, and the opportunity to connect with so many wonderful people.";
let aknowledgement = "I would like to thank Mike Van Hooydonk for being a great manager, Mihaela Bota for being a wonderful scrum master, Jamie Beach and Steve Sare for being great product owners, and last (but not least) Jason Lin for being an amazing and reliable partner throughout my term. Also, a big shout out to the other COOPs on the architecture team (Qi Yang Yolanda Chen, Pulkit Madan, Ketan Vasudeva, Vanshaj Verma), and to my tech challenge team (Ram Keerthy Athinarayanan, Etienne Caronan, Phiriyangha Panchalingam, Shuhao Liu, Vab Kapoor). Even though we never actually met in person, I had a wonderful semester with you all, and wish you all the best luck going forward!";

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
            <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{aboutEmployer2}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>My Goals</label>
            <ul className={this.state.darkMode ? "darkText" : "lightText"}>
            I created four goals for my summer 2020 work term at Manulife Financial. These goals were:
<li>Learn how to communicate properly with my team even when working remotely for the duration of my term.</li>
<li>Learn how to properly document tech spikes I perform using confluence and Jira. This needs to be done thoroughly enough that I leave adequate resources behind for others who may take over work on my projects.</li>
<li>Learn how to solve problems by becoming better at brainstorming solutions and learning about new technologies.</li>
<li>I hope that through my CO-OP position I can be seen as a leader, and someone other CO-OP's can comfortably go to with questions.</li>  
            </ul>
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
            <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{aboutEmployer2}</p>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>My Goals</label>
            <ul className={this.state.darkMode ? "darkText" : "lightText"}>
            I created four goals for my summer 2020 work term at Manulife Financial. These goals were:
<li>Learn how to communicate properly with my team even when working remotely for the duration of my term.</li>
<li>Learn how to properly document tech spikes I perform using confluence and Jira. This needs to be done thoroughly enough that I leave adequate resources behind for others who may take over work on my projects.</li>
<li>Learn how to solve problems by becoming better at brainstorming solutions and learning about new technologies.</li>
<li>I hope that through my CO-OP position I can be seen as a leader, and someone other CO-OP's can comfortably go to with questions.</li>  
            </ul>
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
