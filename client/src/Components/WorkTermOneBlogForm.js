import React from 'react';
import MediaQuery  from 'react-responsive';

let aboutEmployer = "The company I worked for this work term was called the Co-operators, which is a Canada wide insurance company. " +
"The interesting thing about the Co-operators is that they are actually a cooperative company. What this means is that in a way, " +
"the company fundamentally is democratically owned by its members. There is a rule that insurance companies can not directly be " +
"cooperative, so the loophole they found with the Co-operators is to have a cooperative own the Co-operators . You can see the " +
"cooperative spirit indirectly spread from the roots, up to the branches of the whole company. For a corporation, the Co-operators " +
"takes a lot of pride in helping insure Canadians so they feel financially secure, and not just doing what they have to to make a " +
"profit. The focus on client satisfaction and support also finds its way into the workers at the company. In my experience, the " +
"Co-operators go the extra distance to ensure employee satisfaction, and the betterment of communities. As an example, full " +
"time workers get two paid days where they don’t come into work, and volunteer their time to whichever cause they see fit. " +
"There are planned community days through the company, or you can pick your own cause to contribute too, as long as it is " +
"giving back to the community. This company support really creates a positive work environment. My whether it was my team members, " +
"people in the cafeteria, or strangers in the elevator, everyone was always very polite, and seemed genuinely happy to be there." + 
"At the Guelph location where I worked, a large amount of the people working there were part of the IT team. At the Co-operators, " +
"people in Computer Science and Software Engineering are needed for a variety of different tasks including: front-end web development, " +
"back-end development, functional testing, load testing, automated testing, environment building, and environment maintenance. The " +
"team I worked on was the Build Automation and Release team (BAR team)," +
" and we were responsible for creating and automating: testing, environments, and releases.";

let myGoals = "I made five goals to tackle within my first work term at the Co-operators. These goals were: learn " +
"how to work in a disciplined agile environment, learn how to efficiently create React JS applications, learn how to work with a team of people effectively become comfortable with accepting my inability to do everything alone, and become more ambitious and ask/suggest new work when I finish current projects. All of these goals were important to me for various different reasons, and throughout my work term I created smaller, more skill based goals as I worked on more projects."

let jobDescription = "For my first Co-op term at the Co-operators, I worked on the Build Automation and Release "+
"(BAR) team. Specifically on this team, I was tasked with creating a user interface for our client creator scripts."+
" Our client creator scripts are used to batch make clients with different names, emails, and ID’s but with the"+
"same types of policies that can be used to test on the various web environments. For example, if you want to check"+
" on the DEV04 website that your new feature that shows the home policy works, you need to create a client with a"+
" home policy and sign into your environment to check. This tool (the UI and the scripts) allowed one to make up to"+
" 10 clients at a time, with home, auto, and farm policies, in 5 minutes or less, when it would originally take 45"+
" minutes to create one client. This was the main project that I worked on over the last four months. The language "+
"I used to code the front end was Javascript, particularly React.js. To do this, I needed a bit of background in "+
"Javascript, which I had learned through CIS*2750 the previous semester. However, even with some skills in "+
"Javascript, coding this app in React.js was much more in depth than what I completed in any class. React.js has "+
"so many interesting and complex topics such as states and mapping. These two concepts I am most excited to have "+
"learned in my time at the Co-operators, and I am using these skills, even on this website. React.js uses states "+
"to let the page know about certain characteristics of a component. For example: you might use a state for a "+
"checkbox, and set it to true when it is checked, and false when it is not. Now, if I want to build components "+
"based on this checkbox, I can just confirm the value of this.state.checkbox and render differently depending on "+
"its boolean value. For mapping, you can receive a JSON string from an API call, and have a table automatically "+
"render to the proper size and have the proper info by using mapping. On this website, I use states and mapping to"+
" store the posts that I have saved into my database, and display them as requested on the screen. Overall, I "+
"learned a lot of the skills I needed to complete this task as I was doing it, so the entry level for technical"+
" skill was not too high. However, I did need determination, "+
"ambition, and the ability to ask for feedback and help when I needed it."+
"Additionally, I also spend a large amount of time working with various tools and languages to automate testing. " +
"I started with Postman (used to test API calls), then worked with Katalon (used test UI), also worked with Java " +
"(using selenium webdriver to test UI), and finally worked with the robot framework (python using selenium webdriver " +
"  to test UI). The main skill I needed to accomplish these testing tasks was adaptability. I learned to be adaptive " +
" with programming languages in my various different courses. Something about jumping between Python, Perl, Java," +
" C, and Javascript in my classes" +
" has given me the ability to take a piece of code in a language I have never seen, and make some sense of it. ";

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
          <p className="placement">The Co-operators</p> <br></br>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>About The Co-operators</label>
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
    </div>
    </MediaQuery>
    <MediaQuery query='(max-width: 1224px)'>
        <div className={this.state.darkMode ? "mobileTabContentDark" : "mobileTabContent"}>
          <h3 className="title">Jr. Systems Developer</h3>
          <p className="placement">The Co-operators</p> <br></br>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>About The Co-operators</label>
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
    </div>
    </MediaQuery>
    </div>
    );
  }
}

export default WorkTermOneBlogForm;
