import React from 'react';
import MediaQuery  from 'react-responsive';

let aboutEmployer = "The company I worked for in the S19 and F19 semesters was called the Co-operators, which is a Canada wide insurance company. Something very interesting about the Co-operators is that it is actually a cooperative company. This means that the company fundamentally is democratically owned by its members. However, there is a rule that insurance companies can not be cooperative, so the founders created a loophole where they created a cooperative company to own the Co-operators. You can see the cooperative spirit indirectly spread from the roots, up to the branches of the whole company. The Co-operators is very passionate about helping insure Canadians so they feel financially secure, and not just doing what they have to to make a profit. The focus on client satisfaction and support also finds its way into the workers at the company. In my experience, the Co-operators go the extra distance to ensure employee satisfaction, and the betterment of communities. As an example, full time workers get two paid days where they don’t work, and instead volunteer their time to whichever cause they see fit. There are planned community days through the company, or you can pick your own cause to contribute too, as long as it is giving back to the community. This company support creates a positive work environment. Whether it was my team members, people in the cafeteria, or strangers in the elevator, everyone was always very polite, and genuinely happy to be there. At the Guelph location I worked at, a large amount of people working there were part of the IT team. At the Co-operators, people in Computer Science and Software Engineering are needed for a variety of different tasks including: front-end web development, back-end development, functional testing, load testing, automated testing, environment building, and environment maintenance. The team I worked on was the Build Automation and Release team (BAR team), and we were responsible for creating and automating: testing, environments, and releases.";

let myFirstGoals = "I made many goals to start my CO-OP term at the Co-operators, and I tried to make them as well rounded as possible. My plan was to make goals that I could achieve, even if I was being exposed to many different projects. My first term goals were: learn how to work in a disciplined agile environment, learn how to efficiently create React JS applications, learn how to work with a team of people effectively become comfortable with accepting my inability to do everything alone, and become more ambitious and ask/suggest new work when I finish projects. My goal of learning how to work in an agile environment was a fairly short term goal. I had knowledge from my Software Design I, II and II classes that helped me pick up the terminology and concepts quickly. This was a goal I can confidently say I accomplished within a couple months of my first term. Efficiently creating React.js applications was a very long distance goal, that I only accomplished a chunk of during my first term. In my spare time (developing this website, as well as a website for a friend), I gained even more knowledge about coding in React.js. However, one can not become an expert in something in 4 or 8 months, but by the end of my CO-OP I had created a basic front-end web page in React.js with tabs and back-end functionality, but I will talk more later about my discoveries and features later. This tool that I built the front-end for, I had to work extensively with Jared (my teammate). I felt that my time working with him helped me adapt to working with others, and I expanded to other members of the team. By the end of my summer term, I felt I had become comfortable and learned to be a team player and contribute my best efforts for the benefit of the team. Lastly, I wanted to be ambitious with asking for work and suggesting new work. I feel I did well on this goal, I suggested tasks for our backlog, asked for feedback and suggested improvements, and more. However, I do feel that it took the full 8 months to fully accomplish this goal, I was always open to trying new things, whatever needed to be done, I wanted to learn! Overall, I felt I had accomplished most of my goals, or made significant progress on them by the end of the term. ";
let mySecondGoals = "My second term goals were:  improve at showing my work and asking for feedback during the development process of projects,gain a more in depth understanding of a particular language or topic, and improve on my communication with other teams. These goals were important to me for various different reasons, and throughout my work term I created smaller, more skill based goals as I worked on more projects. I found that I made significant progress on all of my first term goals by the end of the term, so I wanted to make goals for my second term that were based on the feedback I received from my first term evaluation. ";

let jobDescription = "For both of my CO-OP terms at the Co-operators, I worked on the Build Automate and Release (BAR) team. On this team, I was challenged with many different tasks. Because our team was responsible for the automation of testing, environment builds, environment releases, and coordinating the resolution of environmental issues, there were many different tasks I took on during my CO-OP. I have grouped these tasks into three main categories: testing automation, environment automation, and web development. These three categories are the focus of my report. I will give a brief description of the tasks, but they will each have their own section below where I will go over in depth the tools, and tricks I learned during my 8 month CO-OP at the Co-operators. ";
let jobDescriptionTwo = "To start, I spent a large amount of time working with various tools and languages to automate testing. I started with Postman (used to test API calls), then worked with Katalon (used test UI), also worked with Java (using selenium webdriver to test UI), and finally worked with the robot framework (python using selenium webdriver to test UI). The main skill I needed to accomplish these testing tasks was adaptability. I learned to be adaptive with programming languages in my various different courses. Something about jumping between Python, Perl, Java, C, and Javascript in my classes has given me the ability to take a piece of code in a language I have never seen, and make some sense of it. This made it easy to take on brand new concepts with a smaller turn around than starting from scratch. I will talk more about what I did for testing automation down below in the \“Testing Automation\” section, another focus of my CO-OP term and report. ";
let jobDescriptionThree = "Also, I spent a lot of time completing environment automation. This is much like testing automation, where you are coding tasks so it can be repeated instead of being done manually, BUT this was done to create new environments. Before this project, there were only some scripts to automate the builds and releases, and even then there were not too many. However, Anthony (my team lead) had a dream to be able to build a new environment for testing from variables with the click of a button. Jordan and I worked to make this happen, starting with little pieces. I worked on automating IIS (web servers), Okta (for authentication), and some Powershell scripts to make it all work. All of this was scheduled through Jenkins pipelines so the steps could be done separate, or all together as desired. I will be talking more about this in the \“Environment Automation\” section of my report (down below), as it was another big focus of my CO-OP (and report). ";
let jobDescriptionFour = "Lastly, I focused on creating a web user interface for the existing client creator scripts my teammate Jared created. Our client creator scripts were used to make batches of clients with different names, emails, and ID’s but with the same types of policies (Commercial, Farm, Auto, and Home) so that they could be used to sign in to various web environments and test new features. I wrote this tool using React.js (for the front-end) and Node.js/Express.js for the middle ware (and the scripts were written with Postman by Jared). I learned knowledge of Node.js and Express.js during CIS*2750, which I had taken the previous semester. However, React.js was very different than the plain javascript and jQuery I used in that class to build my web application. However, I also was using MySQL, so I was able to start with a foundation of knowledge as the syntax and API endpoints were the same (the fetch request being the only difference). What I did not learn from school, I needed to learn on my own. Because of this I would say the skill that was most important to completing this task was diligence. Without continuous trial and error, I never would have been able to create something like this. This was the main project that I worked on over the last eight months, and is the main focus of my work term report, so I will have screenshots of the tool and go more in depth in the \“Web Development\” section below.";
let testingAutomation = "";
let environmentAutomation = "";
let webDevelopment = "";
let conclusion = "In conclusion, I had a great time working at the Co-operators for 8 months last year. I met many wonderful people and learned so much. I gained so much knowledge in testing automation, environment automation, and web development. I felt challenged and accepted as if I was part of the team, and my work was valuable to the company. I also discovered that I really enjoy web development, and may even want to go that way for my career path. I was inspired to make this website for myself, and one for my artist friend as well. I feel very grateful to have been able to be apart of such a good company, and on such a lovely team. ";
let aknowledgement = "I would like to say an acknowledgement for my team: Jared, Jordan, Andrew W, Walter, Nash, Anthony, Paula, Jennifer, Naga, Andrew D, and Mahavir. I would also like to give an extra thank you to Anthony for mentoring me over my term, Jared for working with my on the Client Creator Tool, and Jordan for working on most of the Environment Automation tasks with me. Thank you all so much for your time and support over the last 8 months, I enjoyed working with you all so much!";

class WorkTermOneBlogForm extends React.Component {
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
      <MediaQuery query='(min-width: 1225px)'>
      <div className={this.state.darkMode ? "tabContentDark" : "tabContent"}>
          <h3 className="title">Jr. Systems Developer</h3>
          <p className="placement">The Co-operators</p> 
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>About The Co-operators</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{aboutEmployer}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>My Summer 2019 Goals</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{myFirstGoals}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>My Fall 2019 Goals</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{mySecondGoals}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Job Description</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescription}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescriptionTwo}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescriptionThree}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescriptionFour}</p> <br></br>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Testing Automation</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{testingAutomation}</p> 
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Environment Automation</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{environmentAutomation}</p> 
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Web Development</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopment}</p> 
            <img  alt="Dark Mode Create Client" src={require("./MyText/Dark_Create.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Dark Mode View Client" src={require("./MyText/Dark_View.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Expandable Client Policy Options" src={require("./MyText/ExpandablePolicyOptions.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Light All Clients View" src={require("./MyText/AllClients.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Adding New Job Request Light" src={require("./MyText/AddingJobRequest.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Pagination" src={require("./MyText/Pagination_RequestJSON.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Light Download to CSV" src={require("./MyText/DownloadToCSV.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Downloaded CSV" src={require("./MyText/DownloadedCSV.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Conclusions</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{conclusion}</p> 
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Aknowledgements</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{aknowledgement}</p> 
            <img  alt="Xmas sweaters" src={require("./MyText/christmasSweaters.png")} style={{border: "1px solid grey", width: "50%", height: "50%"}}/>
            <img  alt="Xmas party" src={require("./MyText/xmasParty.JPG")} style={{border: "1px solid grey", width: "50%", height: "50%"}}/>
          </div>
    </div>
    </MediaQuery>
    <MediaQuery query='(max-width: 1224px)'>
        <div className={this.state.darkMode ? "mobileTabContentDark" : "mobileTabContent"}>
          <h3 className="title">Jr. Systems Developer</h3>
          <p className="placement">The Co-operators</p> 
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>About The Co-operators</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{aboutEmployer}</p>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>My Summer 2019 Goals</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{myFirstGoals}</p>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>My Fall 2019 Goals</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{mySecondGoals}</p>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Job Description</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescription}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescriptionTwo}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescriptionThree}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescriptionFour}</p> <br></br>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Testing Automation</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{testingAutomation}</p> 
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Environment Automation</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{environmentAutomation}</p> 
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Web Development</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopment}</p> 
            <img  alt="Dark Mode Create Client" src={require("./MyText/Dark_Create.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Dark Mode View Client" src={require("./MyText/Dark_View.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Expandable Client Policy Options" src={require("./MyText/ExpandablePolicyOptions.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Light All Clients View" src={require("./MyText/AllClients.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Adding New Job Request Light" src={require("./MyText/AddingJobRequest.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Pagination" src={require("./MyText/Pagination_RequestJSON.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Light Download to CSV" src={require("./MyText/DownloadToCSV.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Downloaded CSV" src={require("./MyText/DownloadedCSV.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Conclusions</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{conclusion}</p> 
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Aknowledgements</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{aknowledgement}</p> 
            <img  alt="Xmas sweaters" src={require("./MyText/christmasSweaters.png")} style={{border: "1px solid grey", width: "50%", height: "50%"}}/>
            <img  alt="Xmas party" src={require("./MyText/xmasParty.JPG")} style={{border: "1px solid grey", width: "50%", height: "50%"}}/>
          </div>
    </div>
    </MediaQuery>
    </div>
    );
  }
}

export default WorkTermOneBlogForm;
