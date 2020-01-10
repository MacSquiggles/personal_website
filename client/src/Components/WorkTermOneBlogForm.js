import React from 'react';
import MediaQuery  from 'react-responsive';

let aboutEmployer = "The company I worked for in the S19 and F19 semesters was called the Co-operators, which is a Canada wide insurance company. Something very interesting about the Co-operators is that it is actually a cooperative company. This means that the company fundamentally is democratically owned by its members. However, there is a rule that insurance companies can not be cooperative, so the founders created a loophole where they created a cooperative company to own the Co-operators. You can see the cooperative spirit indirectly spread from the roots, up to the branches of the whole company. The Co-operators is very passionate about helping insure Canadians so they feel financially secure, and not just doing what they have to to make a profit. The focus on client satisfaction and support also finds its way into the workers at the company. In my experience, the Co-operators go the extra distance to ensure employee satisfaction, and the betterment of communities. As an example, full time workers get two paid days where they don’t work, and instead volunteer their time to whichever cause they see fit. There are planned community days through the company, or you can pick your own cause to contribute too, as long as it is giving back to the community. This company support creates a positive work environment. Whether it was my team members, people in the cafeteria, or strangers in the elevator, everyone was always very polite, and genuinely happy to be there. At the Guelph location I worked at, a large amount of people working there were part of the IT team. At the Co-operators, people in Computer Science and Software Engineering are needed for a variety of different tasks including: front-end web development, back-end development, functional testing, load testing, automated testing, environment building, and environment maintenance. The team I worked on was the Build Automation and Release team (BAR team), and we were responsible for creating and automating: testing, environments, and releases.";

let myFirstGoals = "I made many goals to start my CO-OP term at the Co-operators, and I tried to make them as well rounded as possible. My plan was to make goals that I could achieve, even if I was being exposed to many different projects. My first term goals were: learn how to work in a disciplined agile environment, learn how to efficiently create React JS applications, learn how to work with a team of people effectively become comfortable with accepting my inability to do everything alone, and become more ambitious and ask/suggest new work when I finish projects. My goal of learning how to work in an agile environment was a fairly short term goal. I had knowledge from my Software Design I, II and II classes that helped me pick up the terminology and concepts quickly. This was a goal I can confidently say I accomplished within a couple months of my first term. Efficiently creating React.js applications was a very long distance goal, that I only accomplished a chunk of during my first term. In my spare time (developing this website, as well as a website for a friend), I gained even more knowledge about coding in React.js. However, one can not become an expert in something in 4 or 8 months, but by the end of my CO-OP I had created a basic front-end web page in React.js with tabs and back-end functionality, but I will talk more later about my discoveries and features later. This tool that I built the front-end for, I had to work extensively with Jared (my teammate). I felt that my time working with him helped me adapt to working with others, and I expanded to other members of the team. By the end of my summer term, I felt I had become comfortable and learned to be a team player and contribute my best efforts for the benefit of the team. Lastly, I wanted to be ambitious with asking for work and suggesting new work. I feel I did well on this goal, I suggested tasks for our backlog, asked for feedback and suggested improvements, and more. However, I do feel that it took the full 8 months to fully accomplish this goal, I was always open to trying new things, whatever needed to be done, I wanted to learn! Overall, I felt I had accomplished most of my goals, or made significant progress on them by the end of the term. ";
let mySecondGoals = "I felt that I made significant progress on all of my first term goals by the end of the term, so I wanted to make goals for my second term that were based on the feedback I received from my first term evaluation. My second term goals were: improve at showing my work and asking for feedback during the development process of projects, gain a more in depth understanding of a particular language or topic, and improve on my communication with other teams. These goals were important to me for various different reasons, and throughout my work term I created smaller, more skill based goals as I worked on more projects. I chose to make showing more of my work as a goal in direct response to to some feedback I received from my team lead. I tried to put more of an effort into giving him updates daily, or sometimes more. I felt I did well at this, and my feedback given at the end reflected my improvement. I spent a lot of my second term working on environment automation. While this involved putting some smaller, unique pieces together, it was nice to specialize in one project. I felt like the end goal was much clearer to me, and I was able to grasp how environments work much better than before. Overall, I could have done more for this goal, but in the spirit of also being open to new things, I did not want to hinder my learning in exchange for more expertise in one area. Because of this, I think I made good progress on my goal considering the circumstances. My last goal was to improve my communication with other teams, which I felt I did very well. I branched out much more from my team, and networked and worked with other teams. This helped me understand the company dynamic much better, and overall gave me many more connections in the company. All in all, I felt I did a good job of accomplishing my goals, or at least making significant progress on them.";
let jobDescription = "For both of my CO-OP terms at the Co-operators, I worked on the Build Automate and Release (BAR) team. On this team, I was challenged with many different tasks. Because our team was responsible for the automation of testing, environment builds, environment releases, and coordinating the resolution of environmental issues, there were many different tasks I took on during my CO-OP. I have grouped these tasks into three main categories: testing automation, environment automation, and web development. These three categories are the focus of my report. I will give a brief description of the tasks, but they will each have their own section below where I will go over in depth the tools, and tricks I learned during my 8 month CO-OP at the Co-operators. ";
let jobDescriptionTwo = "To start, I spent a large amount of time working with various tools and languages to automate testing. I started with Postman (used to test API calls), then worked with Katalon (used test UI), also worked with Java (using selenium webdriver to test UI), and finally worked with the robot framework (python using selenium webdriver to test UI). The main skill I needed to accomplish these testing tasks was adaptability. I learned to be adaptive with programming languages in my various different courses. Something about jumping between Python, Perl, Java, C, and Javascript in my classes has given me the ability to take a piece of code in a language I have never seen, and make some sense of it. This made it easy to take on brand new concepts with a smaller turn around than starting from scratch. I will talk more about what I did for testing automation down below in the \“Testing Automation\” section, another focus of my CO-OP term and report. ";
let jobDescriptionThree = "Also, I spent a lot of time completing environment automation. This is much like testing automation, where you are coding tasks so it can be repeated instead of being done manually, BUT this was done to create new environments. Before this project, there were only some scripts to automate the builds and releases, and even then there were not too many. However, Anthony (my team lead) had a dream to be able to build a new environment for testing from variables with the click of a button. Jordan and I worked to make this happen, starting with little pieces. I worked on automating IIS (web servers), Okta (for authentication), and some Powershell scripts to make it all work. All of this was scheduled through Jenkins pipelines so the steps could be done separate, or all together as desired. I will be talking more about this in the \“Environment Automation\” section of my report (down below), as it was another big focus of my CO-OP (and report). ";
let jobDescriptionFour = "Lastly, I focused on creating a web user interface for the existing client creator scripts my teammate Jared created. Our client creator scripts were used to make batches of clients with different names, emails, and ID’s but with the same types of policies (Commercial, Farm, Auto, and Home) so that they could be used to sign in to various web environments and test new features. I wrote this tool using React.js (for the front-end) and Node.js/Express.js for the middle ware (and the scripts were written with Postman by Jared). I learned knowledge of Node.js and Express.js during CIS*2750, which I had taken the previous semester. However, React.js was very different than the plain javascript and jQuery I used in that class to build my web application. However, I also was using MySQL, so I was able to start with a foundation of knowledge as the syntax and API endpoints were the same (the fetch request being the only difference). What I did not learn from school, I needed to learn on my own. Because of this I would say the skill that was most important to completing this task was diligence. Without continuous trial and error, I never would have been able to create something like this. This was the main project that I worked on over the last eight months, and is the main focus of my work term report, so I will have screenshots of the tool and go more in depth in the \“Web Development\” section below.";

let testingAutomation = "During my CO-OP at the Co-operators, we went through many different frameworks. To start, our regression framework had been coded in Java, using a selenium driver, where it would take an excel sheet as input and determine proper output after completing a custom action using an x-path. There were a few problems with this framework, the first being that git does not handle excel sheets very well. After changing the same sheet, there would be terrible merge conflicts, making it very difficult for anyone to work on the same test at the same time. Secondly, there were a lot of unknown rules, such as: each box must have whitespace, and there must be a specific format for the spreadsheet. Lastly, the framework was very slow. In one environment, the regression test would take about 16 hours to run from start to finish. Our goal was to be able to run our regression test daily so we would know when changes had been made that had caused bugs much sooner. With this in mind, our current framework was just not cutting it.";
let testingAutomationTwo = "We then moved to writing action keywords in Java (similar to before), but writing Java files to complete the code, sending the expected value, and the locator, and comparing the results to determine pass or fail. While this was much faster (one environment in one language would take about 45 minutes!) it was not feasible for non-developers to write tests. To solve this problem, we came up with a final framework, Mahavir did a tech spike, and suggested we go with the Robot framework. The Robot framework was a higher level, written language version of python, and was very easy to use. We especially liked the logging that came with the tool, as it dynamically created HTML reporting in an easy to read format displaying the pass/fail results of a test suite. I spent some time helping other teams learn this framework, and writing tests in it as well.";
let testingAutomationThree = "The main tests that I worked on in the Robot framework were the Client Verification Flow tests. The task was basically to write tests simulating the flow of registering for the Co-operators website. Writing the tests became fairly easy once I got used to the framework and our best practices (removing language in a CSV file, custom keywords, passing variables, etc), the difficult part was doing custom client creation. As mentioned previously, we had a set of scripts that Jared had written in Postman to create clients. Postman is tool that basically creates JSON API requests that can be run through the postman application, or through Javascript (Newman). The problem was that the client verification flow tests required me to make a copy of an existing client that was able to sign in, and a thin file client (a client that does not have sufficient credit history to register). To do this I had to become familiar with Postman as well, and I took the existing scripts for client creation, and modified them to create the custom clients I needed. I also ended up writing health check like tests to check the endpoints of the website using postman.";
let testingAutomationFour = "All of our tests were to be run on Jenkins on a schedule so that they would run automatically every day. Learning how to use Jenkins was one of the coolest things I felt I was able to learn during my CO-OP at the Co-operators. I learned how to make jobs, pipelines, pass parameters, make properties files, archive files, schedule jobs, trigger jobs from a pipeline, run stages in parallel, and more. By the time I had left, we had one pipeline for each environment (one in English and one in French) that would run all tests related to that environment. This included the regression tests, our old framework tests, our API tests, and client verification flow tests. Before each test, Jenkins would create a new client using the same scripts as the client creator tool (or my custom ones). The regression was taking less than 35 minutes, and running all tests would take about 50 minutes or so to complete. We had easily accomplished our goal of having all tests for every environment (in English and French) running daily. ";
let testingAutomationFive = "All in all, I would say that all of what I learned in testing automation was brand new. However, I was able to pick up Postman much quicker after learning about API calls and endpoints in CIS*2750. The terminology of get/post/put requests was something I did not need to learn, and brought with me to the task. Also, when working with our second Java framework, I already had learned Java for CIS*2430 (Object Oriented Programming). These little snippets of knowledge helped me get started on my tasks, and made it easier for me to understand new concepts. Because of this, I would say the most important skills I needed to complete my testing was probably organization, perseverance, initiative and adaptability. Making use of these skills and attitudes helped me achieve my tasks, and  allowed me to learn as much as possible during my CO-OP term at the Co-operators.";

let environmentAutomation = "A big portion of the work I did at the Co-operators was start the automation of environment creation. Prior to this epic task, there were only scripts to help with building/deploying aspects of each environment for a release. However, my team lead Anthony had a dream to make environments on the fly, based on a set of variables with the click of a button. While we did not fully achieve this goal by the time I finished my term, I contributed many small pieces to the project as a whole. ";
let environmentAutomationTwo = "The first task I did was using Robot framework (a higher level, written language version of python) to automate the creation of Okta applications, groups, tokens, and policies. Okta is a seperate company that is used to authenticate users through the Co-operators sign on. This process ran at the very start of our Jenkins pipeline, and generated variables that were injected later to the build processes and config files. I also worked on a C# program to automate the IIS set up, or remove for any number of sites with any number of bindings, virtual directories, and app pools. A template was made for each machine that needed IIS to be set up, and at the very start of the Jenkins pipeline, it would delete everything within the template. Then after everything else had been set up, it would run at the very end to re-setup everything it had deleted. This would remove the need to restart applications and app pools after making changes, and ensure that if someone had changed any settings of the IIS objects, they would be reset to the defaults the next time the program was run.";
let environmentAutomationThree = "I also wrote a few powershell scripts for deleting and copying content to remote computers. We templated out all of the config files by comparing a developer environment setup to the production set up. Once we had made variables out of all the unique values, we made a step in our Jenkins pipeline to inject the variables from a properties file into the config files. Once the files were all completed, we needed to have powershell scripts that would zip the new files, copy the zips over to a remote computer from the Jenkins workspace, and unzip them in the proper location, then delete the zip. We were able to use this script with minimal changes in multiple stages of our environment creation pipeline, and we wrote it in a way that Jenkins could run the same script, but with different variables in parallel. By being able to run stages in parallel, we were able to reduce the amount of time significantly. By the time I finished my CO-OP, the whole creation would take less than 30 minutes and would copy over all sitecore files, setup IIS, create Okta data, create dynamic config files and copy them over, setup NGINX on a docker instance, and build and deploy all code. While there were still quite a few pieces to still complete, I felt Jordan and I made good progress on the epic project, and I know it is something my team will continue to work on in my absence.";
let environmentAutomationFour = "To summarize, I would say that a good portion of what I learned about environment automation was brand new. However, I was able to work on the IIS automation much quicker because of studying C# in highschool. I also learned in CIS*3110 (Operating Systems) the idea of threading, sequence, and parallelizing tasks, which helped me when learning how to schedule tasks and stages in Jenkins. I also felt that my CIS*3110 knowledged helped me when writing Powershell scripts and IIS automation, as I could imagine lines of code executing remotely as tasks and processes, which helped me understand why some tasks could not be run at the same time. For example, I discovered that my IIS automation program could not run at the same time on the same computer, as it would be trying to access and modify the same config files. Generally, my knowledge from school, while it did not contribute to the end product, helped me get started on my tasks, and made it easier to relate the outcomes to the internal functions of the computer. Because of this, I would say the most important skills I needed to complete my environment automation tasks were probably persistence, initiative and adaptability. Because of these attributes, I was able to achieve my tasks, and take on some very cool projects that I will never forget.";


let webDevelopment = "A large part of my work term was spent creating a web application for creating clients. There were more than 14 environments used and they were continually going through releases of new features and code updates. In order to test most of the functionality, one would need to sign in to these environments using testing clients. This sounds easy enough, however, making a new client to test with in an environment would manually take about 45 minutes, depending on the policies needed. Also, these environments required clients with different back-end types in order to properly sign in. For example, DEV04 required a DEV4 back-end, but SIT01 required a SIT back-end. Jared, my teammate, created scripts to automate the creation of clients in each environment, with Auto and Home policies (we later added Commercial and Farm). He used Postman scripts, which a developer could fairly easily run using Newman, or through Postmans downloadable interface and examining the console output. But, not only would this be time consuming, but it had restricted the testing to be done by developers. This was not ideal because many analysts were taking on testing to allow developers to have more time to do their work. This created a need for a simple interface where the user could select what they wanted, and it would spit out the client data (username, password, BOID, and policies). This is where the tool, and I, came into the picture.";
let webDevelopmentTwo = "The language I used to code the front-end was Javascript, particularly React.js. While the scripts made up most of the back-end, we wanted to create a restful API. The idea was that the React.js front-end would be separate, and request/input data only through get/post requests to a Node.js and Express.js file holding a bunch of endpoints. These endpoints would input the request data into a JOBs database, and display data from the JOBs database, or the CLIENTs database (done through MySQL). The back-end, Newman.js and Postman, would then connect to the database, grab all new JOB rows in the JOBs table, and dynamically create a script to run to create the clients requested. After completing the scripts, the info would be added as a new row in the CLIENTs table, which could then be looked at from the front-end. I decided to connect the JOBs and CLIENTs table by the job_id value, which was unique for each job. This made it easy to make queries on both tables. For example, the user when making a request for clients would receive the job_id value, and then could check on their jobs. If their jobs were completed it could easily show the client data by looking the clients up by the job_id, or show the request information if the job had not yet completed. It also allowed us to alleviate the stress on the computer it was being hosted on, as we could run the scripts on a schedule. This meant that clients would be created every 15 minutes, instead of continuously checking for new jobs and running requests as they came in. See the image below to see the message a user would see after creating a job request. ";

let webDevelopmentFour = "In addition, keeping the front-end and back-end separate would keep the database values secret from the front-end, and thus be very difficult to hack through the browser. It was an ideal model for security, modularity, and protection of data. Below are some pictures of the view tab, where users can search up information about their clients (in the database) and have it returned into a visually pleasing table on the page.";
let webDevelopmentFive = "To complete this ideal model, I needed some background in Javascript, which I had learned through CIS*2750 the previous semester. Particularly, I used my Node.js, Express.js, and MySQL knowledge. However, even with some skills in Javascript, coding this app in React.js was much more in depth than what I completed in any class. React.js has so many interesting and complex topics such as states and mapping. These two concepts I am most excited to have learned in my time at the Co-operators, and I am using these skills, even on this website. React.js uses states to let the page know about certain characteristics of a component. For example: you might use a state for a checkbox, and set it to true when it is checked, and false when it is not. Now, if I want to build components based on this checkbox, I can just confirm the value of this.state.checkbox and render differently depending on its boolean value. Below I have a picture (in dark mode) of what the client creator tool looked like without checking any policy types off. In contrast, the next picture shows (in light mode) how when you select policies, additional options come up for each policy type, allowing the user to customize their client further. Hiding the information from users unless needed is a good example of Hick’s law, a design concept learned within my CIS*2170 (UI design) class.";
let webDevelopmentSix = "For mapping, you can receive a JSON string from an API call, and have a table automatically render to the proper size and have the proper info by using mapping. You can see examples of this above (and below) in the View tab. I also added some additional features such as: a light/dark mode, a pagination to navigate through the tables, and a download to CSV file option for client data. All of these functionalities are pictured below.";
let webDevelopmentSeven = "In the end, this tool allowed one to make up to 8 clients at a time, with home, auto, commercial, and farm policies, in 5 minutes or less, when it would originally take 45 minutes to create one client. By the end of my CO-OP at the Co-operators, the tool had over 600 job requests, and 1000 clients created. My team lead estimated that this tool saved the company about 384 days worth of salary pay a year, based on the amount of people using the tool, and the amount of time it would have taken them to create the clients manually. Overall, I learned a lot of the skills I needed to complete this task as I was doing it, so the entry level for technical skill was not too high. However, I did need determination, ambition, and the ability to ask for feedback and help when I needed it.";

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
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescriptionFour}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Testing Automation</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{testingAutomation}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{testingAutomationTwo}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{testingAutomationThree}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{testingAutomationFour}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{testingAutomationFive}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Environment Automation</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{environmentAutomation}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{environmentAutomationTwo}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{environmentAutomationThree}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{environmentAutomationFour}</p>
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Web Development</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopment}</p> <br></br>

            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopmentTwo}</p> <br></br>
            
            <img  alt="Adding New Job Request Light" src={require("./MyText/AddingJobRequest.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>

            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopmentFour}</p> 
            <img  alt="Dark Mode View Client" src={require("./MyText/Dark_View.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Light All Clients View" src={require("./MyText/AllClients.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopmentFive}</p> <br></br>
            <img  alt="Dark Mode Create Client" src={require("./MyText/Dark_Create.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Expandable Client Policy Options" src={require("./MyText/ExpandablePolicyOptions.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 

            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopmentSix}</p> 
            <img  alt="Pagination" src={require("./MyText/Pagination_RequestJSON.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Light Download to CSV" src={require("./MyText/DownloadToCSV.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Downloaded CSV" src={require("./MyText/DownloadedCSV.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>

            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopmentSeven}</p> 
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Conclusions</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{conclusion}</p> 
          </div>
          <div className="postDiv" id="postDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Aknowledgements</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{aknowledgement}</p> 
            <img  alt="Xmas sweaters" src={require("./MyText/christmasSweaters.png")} style={{border: "1px solid grey", width: "50%", height: "50%"}}/>
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
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescriptionFour}</p>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Testing Automation</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{testingAutomation}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{testingAutomationTwo}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{testingAutomationThree}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{testingAutomationFour}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{testingAutomationFive}</p>
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Environment Automation</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{environmentAutomation}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{environmentAutomationTwo}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{environmentAutomationThree}</p> <br></br>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{environmentAutomationFour}</p> 
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
          <label className={this.state.darkMode ? "darkText" : "lightText"}>Web Development</label>
          <label className={this.state.darkMode ? "darkText" : "lightText"}>Web Development</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopment}</p> <br></br>

            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopmentTwo}</p> <br></br>
            
            <img  alt="Adding New Job Request Light" src={require("./MyText/AddingJobRequest.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>

            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopmentFour}</p> 
            <img  alt="Dark Mode View Client" src={require("./MyText/Dark_View.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Light All Clients View" src={require("./MyText/AllClients.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopmentFive}</p> <br></br>
            <img  alt="Dark Mode Create Client" src={require("./MyText/Dark_Create.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Expandable Client Policy Options" src={require("./MyText/ExpandablePolicyOptions.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 

            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopmentSix}</p> 
            <img  alt="Pagination" src={require("./MyText/Pagination_RequestJSON.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Light Download to CSV" src={require("./MyText/DownloadToCSV.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/> 
            <img  alt="Downloaded CSV" src={require("./MyText/DownloadedCSV.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>

            <p className={this.state.darkMode ? "darkText" : "lightText"}>{webDevelopmentSeven}</p> 
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Conclusions</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{conclusion}</p> 
          </div>
          <div className="mobilePostDiv" id="mobilePostDiv">
            <label className={this.state.darkMode ? "darkText" : "lightText"}>Aknowledgements</label>
            <p className={this.state.darkMode ? "darkText" : "lightText"}>{aknowledgement}</p> 
            <img  alt="Xmas sweaters" src={require("./MyText/christmasSweaters.png")} style={{border: "1px solid grey", width: "50%", height: "50%"}}/>
          </div>
    </div>
    </MediaQuery>
    </div>
    );
  }
}

export default WorkTermOneBlogForm;
