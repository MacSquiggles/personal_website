import React from 'react';
import MediaQuery from 'react-responsive';
import history from './history';
import { Router } from 'react-router-dom';

let aboutEmployer = "I worked on the Architecture team as a Full-Stack Engineer for four months at Manulife Financial this summer. From working at Manulife, I learned many things I did not know about the company and its dynamic. Although Manulife is a global corporation, they have a very relaxed and welcoming work environment. I had the chance to tour the building before COVID and they keep free coffee/tea machines everywhere for employees, and recently invested in transforming their office space to support more agile work areas. It is clear that the leadership at Manulife cares about the satisfaction of their customers, and their employees. Throughout the term, the vice president, and the president of the Canadian division were part of various events. They organized many events to try and keep morale alive even though we lacked the aspect of in person interaction. They organized fitness sessions, fireside chats, and made sure to properly address and make progress on movements such as BLM. ";
let aboutEmployer2 = "While it was legally safe to go back to work before the end of my term, Manulife decided to prolong going back to reduce the risk to their employees. Additionally, they planned to have a phased return to work, only allowing 1/5th of the workers to return at a time to limit the spread. Often insurance and financial companies fall a bit behind in the technology departments, namely because technology was never a huge part of a company's success until the last 30 or so years. However, Manulife will continually be looking towards new solutions to current problems, and replacing outdated or legacy code with more efficient modern solutions. This is where my role at Manulife comes into the discussion.";

let myGoals = "The first goal that I created for the summer 2020 semester was to learn how to communicate properly with my team. I specifically made this goal in reference to the fact that I would be working remotely for the duration of my term. In my summer 2019 to fall 2019 COOP position at The Cooperators last year, I only worked from home for a single day, when I was too sick to come into work. This was a very stark change going into summer 2020 knowing that I would be working remotely the whole time. I knew that it would be a challenge for me to not feel like I was badgering members of my team, but also knew it would be important the way and amount I communicated with others. Because all interactions were online, a lot of which were done through various messaging services, I could not rely on tone or feeling to be conveyed properly. This made it incredibly important for me to improve my communication skills and learn what information is crucial to include, and how to communicate in a way that is friendly and inviting, but still concise and valuable. I also learned how to properly use various messaging/meeting technologies, and through time noted which ones to use for specific people based on their preferences. Lastly, by the end of the term I felt like I could update my manager and project manager an appropriate amount so they would feel confident in the work I was completing remotely, but not overwhelmed by the amount of attention I required. The skills of online communication that I learned this term will forever be valuable to me moving forward. There is always room to grow when it comes to communication skills, but the leaps and bounds I took this term will make me a better employee and coworker in my future placements.";
let myGoals2 = "The second goal that I created for my summer 2020 term at manulife was to learn how to properly document tech spikes I perform using confluence and Jira. The main reason this was important was because the first project I completed in my summer 2020 term was a tech spike. After completing the tech spike, I was expected to leave adequate resources behind for others who may take over work on my projects, or look into an open source solution in the future. To tackle this goal I first took a look at existing documentation for various techspikes, and even reached out to my supervisor Mike to send some completed Confluence pages for me to base my documentation off of. By the end of our first project, Jason and I clearly had our pros/cons of various software we researched available on various different confluence pages. We also had comments and documentation explaining the code that we created and the technologies used to run it. From a broader standpoint, I learned how to document an incomplete project as well. The second project I worked on we were not able to get it ready for production in time before the end of our COOP term. Because of this, I also had to learn to properly document an incomplete project so that the next COOP student or team could take over the project and clearly see what work was done, and what direction the project was headed in. Before leaving my term, I had a coworker look over my documentation and suggest any improvements, and made some last minute fixes to clarify details about the project. In the end, my supervisor and project owners were quite pleased with the level of detail I left in my documentation for the projects that I worked on this semester. Learning how to document concisely but clearly is definitely a very important skill to have. When I have future job positions, I will have to produce documentation to some degree, no matter what project I am working on. Because of this, I really appreciate the opportunity to learn how to document tech spikes and incomplete projects during my summer 2020 COOP term.";
let myGoals3 = "My next goal for the summer 2020 term was to learn how to solve problems by becoming better at brainstorming solutions and learning about new technologies. This is a skill that is difficult to gauge in terms of progress, but is very important in the workplace. While school is very important and has taught me a lot, school can be extremely structured in terms of the projects and curriculum. Because of this, it is very rare that I would get to decide things like what language I want to complete a project in, or what libraries I want to use to accomplish a task. Being in a COOP position, you are expected to be able to complete research on various options to solve a problem, and determine the pros and cons of each. This is a skill that I just started to learn in my last COOP position at the Cooperators, and I wanted to work on improving during my term at Manulife. I had the perfect opportunity to do this during my first project, a tech spike on session capture technology. Our goal was to make an open source version of a session capture technology such as logrocket, but how we got there was entirely up to us. We had to research available software built by companies, the price of these solutions, and also research the open source libraries that could be used to build an adequate solution ourselves. After doing this research we were tasked to actually build the open source solution that we came up with. I felt like this project really helped me to look more logically at a variety of different options, and helped me with my research skills. While our open source solution was not implemented, it was still very useful to go through the research and brainstorming process. Being a better researcher and brainstormer will definitely help me when I have to complete tech spikes or look into unfamiliar technologies in future job positions.";
let myGoals4 = "The last goal I made for myself this summer was that I hoped that through my CO-OP position I could be seen as a leader, and someone other CO-OP's can comfortably go to with questions. This goal I felt like I made the most progress on in the whole term. I was lucky enough to have a partner to work with for the duration of my term, Jason. Jason was a very big help on the projects we worked on, but it was his very first COOP position. I took great pleasure in showing him some of the ropes of working in COOPs, and tried my best to be someone he could approach and ask questions to openly. While I often did not have all the answers, I did notice that he would sometimes ask me to explain certain concepts or the reasoning/structure behind code I had written. While I did not work with him on any projects directly, Ketan was a COOP student also on the architecture team that I also tried to help out/mentor this semester. While I am no expert in web development, I have made over 4 complete react.js/node.js web applications to date, and therefore had the most web development experience of the COOP students on our team. Ketan was tasked with building a security tool web application in react.js/node.js so our supervisors suggested that Ketan use me as a mentor of sorts to go to for questions. We spent a lot of time debugging issues or talking about the direction of his project and possible packages/components that he could use moving forward. It was a nice feeling to be able to share some of my knowledge with someone else for once, and very satisfying to see his confidence in his web development skills grow as he learned and became more comfortable coding. Overall, I really enjoyed being more of a leader/mentor this semester and it taught me a lot about myself. I hope that these leadership skills can be something I use in everyday life in school projects and in job placements in the future. ";

let jobDescription = "My role during summer 2020 at Manulife Financial was on the Architecture team. The software architects take on many different projects that have many different project owners and generally hope to look into new technology, and potentially replace/upgrade old technology in some way. I was placed on a team we called the Remote Architects 2020 with  other COOP students. We were split into 4 teams of one or two people and were working on different projects. I was paired with Jason and we worked on two projects together during the summer 2020 semester. In this section of my report, I am going to talk about the two projects that we worked on, and the tech challenge I completed this term. ";

let sessionCapture = "The first project we worked on was a tech spike, also known as a proof of technology, on session capture technology. Session capture technology is often purchased from specific companies such as Logrocket, and can be useful for many reasons. The idea behind session capture technology is if you can record how the user interacts with your website, you can see many of the pitfalls that you might otherwise be blind to. From a banking standpoint, recording these transactions can help you determine if fraudulent activity is occurring (i.e did someone change their password 4 times today?). It is also useful for web design because you can see if people are using your site in ways you would not expect, or even gauge if someone is “rage clicking” due to a lack of clarity in your design. For all of these reasons, Jason and I were tasked with doing research on the existing companies producing session capture technology and their pros/cons, as well as creating an open source version of our own. The big star of our open source version ended up being an existing npm package: rrweb.io.";
let sessionCapture2 = "To get started on this project, we first made a very simple website that we could use to test our open source option with. We used React.js for this website and required at a minimum to have: multiple screens/routes, a login system, a password changing system, other options for editing “bank” information. We used node.js to keep our endpoints, and used MongoDB to store our fake account information. For our database collections we used one for login/account information, and one for keeping track of sessions. A session would start when a user logs into their account, and end when they logged out, or exited the page. This posed a new challenge, how do we know when the user has exited the page? This made it mandatory for our solution to be updating in real-time, meaning every few seconds, the database automatically updates with the users new information. Once we had this website down, we could start playing around with rrweb, the solution we found for capturing video for the users session.";
let sessionCapture3 = "Rrweb.io was chosen to be used within our project because it was an npm open source package that came with a recorder and video player. We were able to use the rrweb.io recorder to capture events in a user session and save them to the database. We then were able to work on the second major part of this assignment: creating a web application to query for and view user session information. Recording the users' events was not going to be very useful unless we could build an application that various teams could use to view and look up information for specific users/IP addresses. As shown below, we kept the logging tool very simple, as it was built for a proof of concept, meaning our goal was to prove what was possible, not to make a production ready product. Below you can see that we included a “Search by” field where the user could select various information about the session to query by, and the “Search for” field where the user could enter in the value to search for. It is not shown here, but we also implemented a custom query option where the user could query by multiple fields, and specify operators such as: and, or, not, contains, starts with, etc.";
let sessionCapture4 = "Once the user types in the information they want to search for, they can click the enter button. The results from the query will then load on the page and give the user the option to download all of the query results, or they can scroll through the results and view the information. ";
let sessionCapture5 = "As pictured below, for each session it displays the fake username, IP address, session ID and the start time of the session (i.e when the user logged in). Below that general information is a chart containing all of the event information, such as when the user logged in/out, or changed any of their information. The user then has the option to download the session data (i.e everything kept within the chart), or view the session (i.e view the events in the rrweb.io replayer).";
let sessionCapture6 = "Pictured below is an image of the rrweb.io replayer which shows a video of the users session. This replayer has many options such as playing at certain speeds, and skipping inactivity (i.e moments in which the user was not active in their session for long periods of time). Also pictured below is a view of this player in fullscreen mode. ";
let sessionCapture7 = "Lastly, pictured below are examples (for fake user test123) of what downloading a specific session looks like. You can see that all the information in the chart on the website gets put into a .csv file with all the fields and user information. This was also important for this specific project in case various teams wanted to download the data and run their own analysis on it. The first image shows downloading all the sessions for the query username=test123, and the second image shows downloading a specific session where username =test123.";
let sessionCapture8 = "Overall, I learned a lot completing this project. Not only did I get to learn how to properly conduct and document proof of technologies, I also got experience working with a partner on a coding project remotely. Additionally, working with rrweb.io was something very cool to implement, and I also learned more about react.js. I think that school really helped me succeed in this project because I have been taught how to work with groups or pairs of people in all of my software design projects. Additionally, my business courses at university also helped me with the research aspect of this project. In my business courses such as corporate social responsibility and human resources and organizational behaviour, I have had to do many research projects and papers. However, a lot of the actual coding skills were ones that I had learned and developed primarily in my past CO-OP position at The Cooperators when I made my first react.js web application. One of the new skills I gained in this project was experience working with noSQL databases, specifically mongoDB. I learned how to store information properly and set up/connect to a mongoDB from a node.js backend. Overall, I really enjoyed working on this project, and while it is not currently being used by Manulife, I hope that our time spent on our solution can be useful to the company in the future.";

let bankAPI = "The second project we worked on was a bank information API upgrade. They had an existing system for this API, but it was in need of an upgrade, so Jason and I were tasked at converting it to a newer, more adaptable solution. What we decided to do was create a node.js program using express.js that connects to an Azure SQL database. This node.js program would only query the database for certain banking information that is normally stored in the file we are hoping to replace. The database will contain all of the banking information normally kept in the file behind mainframe, allowing the data to be accessible, even when the site is down for maintenance purposes. The main piece of this project was configuring a way to parse and transfer the information from the file, into the Azure SQL database. For this, we used Azure Data Factory.";
let bankAPI2 = "To start with we created two linked services within azure data factory, one that connected to the file we wanted to transfer, and one that connected to the azure sql database. Our goal for this was to end up with the information formatted into two seperate tables: Bank and Branch. The Bank table would contain basic information about the bank such as the institution number, and the english and french name. The Branch table would contain more details such as the address, as well as the transit number. The Branch table would also connect to the Bank table through the institution number. This would make it very easy to look up specific Bank and Branch information through the node.js api we created. Once we had our two linked services and our database structure figured out, we could start on the azure data factory pipeline.";
let bankAPI3 = "The ADF pipeline needed three data flows in total. The first data flow was to extract all the information from the non delimited file, and put it into delimited csv files. The second was to extract the bank information and update all of the new/modified rows. The third, and final, data flow was to extract the branch information and update all of the new/modified rows. Below is a picture of the final data flow for the extraction of the current file. We uploaded the current file to Azure data lake storage gen 2, which is where the linked service, and the source of the data flow connected to. One of the major challenges with this data flow was that the file we were to parse had no constant delimiter. The columns in the file were divided up by the character value. Because of this, we wanted our first step to just be making custom delimiters to derive all the column values, and writing the bank and branch information to their own csv files with comma delimiters. This would make putting the data into the SQL database much easier.";
let bankAPI4 = "Next, we have the data flow for adding the bank information to the SQL database table for the banking information. As seen below, this data flow was much more complicated than the last one. Because we had a field in our database to hold the last updated time, we did not just want to overwrite the database information every single time the program was run. This would make it much more difficult to see if something was wrongfully changed and when. Because of this we needed to have two sources, the first was the csv file that we wrote the bank information to, and the second was the current SQL database table holding the bank information. Then using a series of checks, we separated the information that was new and needed to be added from the information which was modified or needed to be updated. Using this method, we could disregard all information that was already existing in the database. Then we simply updated/added the information as needed to the bank database table in the SQL database.";
let bankAPI5 = "The last data flow that we created was the branch csv file to branch sql database flow. This flow is shown below, and as you can see, it is very similar to the branch flow. The two sources come from the branch csv file and the branch table from the SQL database. The new and updated information is then extracted and updated/added to the database accordingly. ";
let bankAPI6 = "Below is a picture of the final pipeline, clearly showing the three steps and how they connect together. It was important that the bank and branch information be updated separately because the branch information linked to the bank information. Because of this, if a new bank was created, the branch information would need to be added after the new bank was added or it would try to link the row to a non-existing bank. In the end the pipeline worked as planned and our project owner was very pleased with the final result that we came up with.";
let bankAPI7 = "Overall, this project was one of the most exciting things I got to tackle this term. While my other projects allowed me to grow some of my existing development skills, this project challenged me to learn new things. I learned so much about using Azure technologies (SQL, ADF, ADLS), and about getting a program ready for production. We implemented so many little steps, such as getting a Jenkins Generic Pipeline set up, storing our environment variables in a specific config file git repo, using custom logging, and implementing various testing. Most of my skills that came in handy for this project were developed at my last CO-OP position at The Cooperators, particularly the Jenkins and testing development. However, my experience working with an SQL database in CIS*2750 really helped me when creating the node.js and express.js program used to connect and query the Azure SQL database. I really enjoyed working on this project, and it was very nice to develop and learn some new skills outside of my normal comfort zone of web development.";

let techChallenge = "Lastly, I will talk about the tech challenge that I worked on with a group of 5 other COOP students in the Canadian division of Manulife Financial this summer. The goal of this challenge was to come up with a way to improve the current hiring process at Manulife with some sort of technical solution. We all signed up for the challenge and were placed into groups based on the skills of the various members (i.e some business analysts, some developers, etc). Our idea was a mesh of a few different ideas that we came up with when brainstorming solutions. We settled on a resume screening web application that would use machine learning in the backend to parse applicant information. We came up with a bunch of features we would want to implement in a minimally viable solution. The main part of our solution was to be able to upload packages of resumes and have it give a ranking or score based on how well it matches the skills for that job position. To do this we needed to create a database and have a collection to store information regarding the job position, package uploads, and candidates. However, once we did this, we wanted to also allow the hiring committee members to schedule and keep track of interviews with candidates. To do this we had to add collections containing the data for hiring committee members (with availability), and interviews. Then, once we had that functionality working, we thought to complete the whole circle, hiring managers should be able to mark which interviewed candidates were sent offers, or were ranked as a second or third choice for the role. Once the number of candidates were hired they could finally close the job position. Now I will give a quick tour of the end product for our tech challenge.";
let techChallenge2 = "To start with we have our dashboard, the home page for our web application. Our goal here was to show what the status of the job positions were at a glance so that committee members would know how much work needed to still be completed. On the left hand side you can also see a view of the menu and the main pages you can navigate to.";
let techChallenge3 = "Next we have the main page showing all the open/current job positions. From here you can click on an existing position, or you can click on the green plus button to add a position. As seen below, the add position page allows the user to type in all the important information for the job position to be saved to the database.";
let techChallenge4 = "Once the job position is made, you can start to upload packages by clicking on the plus button near the upload packages section of the job position page. From here you can upload a package and select what school the package belongs to. This will use machine learning in the backend to extract information and give the candidates a ranking based on the skills listed in the job position.";
let techChallenge5 = "Once there are candidates that have been uploaded and parsed, you can go into the hiring committee members and add interview time slots that the member is available for. Once you have these time slots made, you can schedule interviews for specific candidates, which will actually send out an email with the calendar invitation for the time and location. ";
let techChallenge6 = "Once the interviews are completed, you can rank your candidates interviews based on if they have a pending/accepted offer or are your second/third choice to hire. Once you have hired all the candidates you need for the position, you can “close” the job position. Don’t worry though, it does not get rid of the job position, it just changes the status and makes the fields uneditable, but you can always look back at the job positions and see who was hired, or almost hired for which jobs. ";
let techChallenge7 = "Not only did this solution adequately solve many issues with the current hiring process, it also helped solve another issue: finding a way to track or keep in touch with previously hired COOPs. Having a database allowed us to store a record of who was hired for each job, and also who was interviewed in general, and who was considered the second or third choice. My role in my team was to be the sole frontend developer for our web application. I built all the react.js code and API calls to the backend that made the web application user friendly for hiring committee members who may not have coding skills. My teammates worked on the machine learning backend using python to appropriately rank the candidates and create/update information accordingly in our noSQL database. We also had two team members responsible for acting as the scrum master/project owners and UX designers of the application. We would meet every week for at least an hour as a team to discuss what had been done, and the priority of what needed to be done next. Through this project, we had the opportunity to present to a panel of judges, where we won the audience vote. We were then given the opportunity to present in front of the whole Manulife leadership team! ";
let techChallenge8 = "Overall, I am very proud of what we managed to build in the short time frame of two months! We worked together very well as a team, and I hope that Manulife will implement our solution and truly improve the hiring process at Manulife. Once again, my ability to work well with groups comes from my university courses working with teams of people in software design. Most of my web development knowledge was gained from my CO-OP position last year at The Cooperators, and through my personal projects, such as this website which was also built using React.js. Without all of these skills, I don’t think we would have been able to pull off such a clean solution in such a short amount of time. I hope that someday Manulife can implement our project to improve the hiring process for both CO-OP students, and the hiring committee.";

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
    this.setState({ darkMode: newProps.darkMode });
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
                </ul> <br></br>

                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals3}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals4}</p>
              </div>
              <div className="postDiv" id="postDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Job Description</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescription}</p>
              </div>
              <div className="postDiv" id="postDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Session Capture Proof of Technology</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture3}</p>
                <img  alt="Logger tool home" src={require("./Content/sessionCapture/loggerTool1.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture4}</p>
                <img  alt="Search for test" src={require("./Content/sessionCapture/loggerTool2.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture5}</p>
                <img  alt="First session for test" src={require("./Content/sessionCapture/loggerTool3.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="Second session for test" src={require("./Content/sessionCapture/loggerTool4.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture6}</p>
                <img  alt="Session video player" src={require("./Content/sessionCapture/loggerTool5.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="Full screen viewer" src={require("./Content/sessionCapture/loggerTool6.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture7}</p>
                <img  alt="Full session csv file" src={require("./Content/sessionCapture/spreadsheet1.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="Specific session csv file" src={require("./Content/sessionCapture/spreadsheet2.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture8}</p>
              </div>
              <div className="postDiv" id="postDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Bank Information API</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI3}</p>
                <img  alt="Parse file data flow" src={require("./Content/bankAPI/bank1.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI4}</p>
                <img  alt="Bank data flow" src={require("./Content/bankAPI/bank2.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI5}</p>
                <img  alt="Branch data flow" src={require("./Content/bankAPI/bank3.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI6}</p>
                <img  alt="Full ADF pipeline" src={require("./Content/bankAPI/bank4.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI7}</p>
              </div>
              <div className="postDiv" id="postDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Tech Challenge 2020</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge2}</p>
                <img  alt="Dashboard" src={require("./Content/techChallenge/tech1.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge3}</p>
                <img  alt="Open job positions" src={require("./Content/techChallenge/tech2.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="Add new position" src={require("./Content/techChallenge/tech3.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="View job position" src={require("./Content/techChallenge/tech4.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge4}</p>
                <img  alt="Upload a package" src={require("./Content/techChallenge/tech5.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="Show candidates" src={require("./Content/techChallenge/tech6.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge5}</p>
                <img  alt="Committee member" src={require("./Content/techChallenge/tech7.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="Add interview time" src={require("./Content/techChallenge/tech8.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge6}</p>
                <img  alt="Closed job positions" src={require("./Content/techChallenge/tech9.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge7}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge8}</p>
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
                </ul> <br></br>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals3}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals4}</p>
              </div>
              <div className="mobilePostDiv" id="mobilePostDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Job Description</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescription}</p>
              </div>
              <div className="mobilePostDiv" id="mobilePostDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Session Capture Proof of Technology</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture3}</p>
                <img  alt="Logger tool home" src={require("./Content/sessionCapture/loggerTool1.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture4}</p>
                <img  alt="Search for test" src={require("./Content/sessionCapture/loggerTool2.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture5}</p>
                <img  alt="First session for test" src={require("./Content/sessionCapture/loggerTool3.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="Second session for test" src={require("./Content/sessionCapture/loggerTool4.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture6}</p>
                <img  alt="Session video player" src={require("./Content/sessionCapture/loggerTool5.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="Full screen viewer" src={require("./Content/sessionCapture/loggerTool6.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture7}</p>
                <img  alt="Full session csv file" src={require("./Content/sessionCapture/spreadsheet1.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="Specific session csv file" src={require("./Content/sessionCapture/spreadsheet2.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{sessionCapture8}</p>
              </div>
              <div className="mobilePostDiv" id="mobilePostDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Bank Information API</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI3}</p>
                <img  alt="Parse file data flow" src={require("./Content/bankAPI/bank1.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI4}</p>
                <img  alt="Bank data flow" src={require("./Content/bankAPI/bank2.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI5}</p>
                <img  alt="Branch data flow" src={require("./Content/bankAPI/bank3.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI6}</p>
                <img  alt="Full ADF pipeline" src={require("./Content/bankAPI/bank4.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{bankAPI7}</p>
              </div>
              <div className="mobilePostDiv" id="mobilePostDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Tech Challenge 2020</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge2}</p>
                <img  alt="Dashboard" src={require("./Content/techChallenge/tech1.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge3}</p>
                <img  alt="Open job positions" src={require("./Content/techChallenge/tech2.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="Add new position" src={require("./Content/techChallenge/tech3.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="View job position" src={require("./Content/techChallenge/tech4.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge4}</p>
                <img  alt="Upload a package" src={require("./Content/techChallenge/tech5.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="Show candidates" src={require("./Content/techChallenge/tech6.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge5}</p>
                <img  alt="Committee member" src={require("./Content/techChallenge/tech7.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <img  alt="Add interview time" src={require("./Content/techChallenge/tech8.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge6}</p>
                <img  alt="Closed job positions" src={require("./Content/techChallenge/tech9.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge7}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{techChallenge8}</p>
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
