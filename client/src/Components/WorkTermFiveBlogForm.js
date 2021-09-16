import React from 'react';
import MediaQuery from 'react-responsive';
import history from './history';
import { Router } from 'react-router-dom';

let aboutEmployer = "I worked on the developer team as a Software developer for eight months at Designware this winter and sumer. From working at Designware, I learned many things I did not know about the company and its dynamic. Designware is a startup company so they have a small but powerful team and a welcoming work environment. Designware decided that with the COVID-19 pandemic they would change to be a fully remote company and focus on hiring where the talent was instead of based arround an office building. Because of this, I got the chance to work with people all over including Vancover, Montreal, Arizona, and Hong Kong. Every person at Designware is an important piece in the well oiled machine that is this company and I feel very lucky to have been a part of this experience and will be continuing with them full time once I conclude my studies. Designware is a company that is pushing innovation and has very interesting work but where the team is a family and knows to put you and your mental and physical health first. They also want to make sure their employees are growing and doing work they enjoy and find meaningful, something I felt was lacking in my previous co-op positions at times.";
let aboutEmployer2 = "I did get the opportunity at the end of my co-op term to safely meet some of my coworkers that are within the local area, and the comapny always put effort into doing weekly calls and trivia nights on occasion to keep the team connected. As a startup, Designware works very hard to make sure their product is the best it can be and is on the fore front of innovation since the market does have competitiors, so it is all about timing. Developping some new features and speedily fixing bugs on all fronts where my role at Designware comes into the discussion.";

let myGoals = "The first goal that I created for the winter 2021 semester was to learn how to use and write code in the Golang language. I specifically made this goal because at designware they use Golang for their back-end and I had never used Golang for programming before. It was important for me to pick up the language and quickly so that I could work on bug fixes and features for the company without having to take extra time or add a new language onto their stack. I will say that golang is still one of my least favourite languages to program in, but I did learn it pretty well within the first couple months of my co-op term. During my first four months I did many bugfixes in golang, including practically rewriting all of their billing code and creating an assets queue to upload files to digital ocean (which I discuss in more detail later on). Overall I would say that while I do need to look up a couple syntax related things in golang, I have become fairly proficeint in the language and have definately completed this goal to a fairly high degree.";
let myGoals2 = "The second goal that I created for my winter 2021 term at Designware was to learn how to write code in the Vue.js language properly. I specifically made this goal because at designware they use Vue.js as their front-end language and it is a language I have never coded in before. It was important for me to pick up the language and quickly so that I could work on bug fixes and features for the company without having to take extra time or add a new language onto their stack. I ended up liking Vue.js for front-end coding, although I still prefer React.js (what I used to code this website) better. I managed to learn Vue.js pretty quickly since it is more or less a conjunction of languages I already knew pretty well including HTML, CSS and Javascript. Over the first 4 months at designware I did many bugfixes and even some features within Vue.js such as updating the nav bar styling, and adding breakpoint targeting (discussed in detail later on). On occasion I still need to look up syntax or code for specific components and their styling but I can do most fixes and code most things with very little help which is how I know I have completed this goal.";
let myGoals3 = "My last goal for the winter 2021 term was to Be more active at team building throughout my Co-op. With Designware being a fully remote company (that is now without an office) and having many employees not within the Province, it was important to me to to find ways to connect with my team. I did this by attending all team held events including trivia nights, and keeping my camera on during our weekly team meetings. I also made an effort to reach out to my coworkers in more casual discussion, such as when I was adopting a cat I reached out to my coworker Elderi to discuss good cat products. I think I did a pretty good job over my four month term connecting with my coworkers and making my place among them. I continued to connect with them over the second co-op term and even got the opportunity to meet most of the local team in person at the end of my second term. They are really a great group of people and I look forward to continuing to work with them part time and then full time after school is completed.";

let myGoals4 = "The first goal I made for myself for the summer 2021 semester was to learn about what it takes to estimate and plan project features. To do this goal, I spent some time with Matteo and discussed my goals for the term and the potential for me to continue with designware after school. We discussed the potential for me to become a leader of my own team or group of co-op students in the future and decided it would be a great use of my time to start learning about what it takes to be a team leader. I learned more about estimating tasks and was given a lot more freedom within my tasks so I could do the research part that normally is done ahead of time by management. I feel like I was able to learn a lot through my dynamic data task about independence and leadership and have since been helping our newest co-op students get properly onboarded. I would say I made pretty good progress on this goal, and look forward to developing my leadership skills more as time goes on.";
let myGoals5 = "The second goal that I created for my summer 2021 term at Designware was to improve my critial and creative thinking skills by taking on the database dynamic data feature. As discussed earlier, I was given a lot less direction when tackling this feature which mean't I had to do a lot of research. The most amount of research I had to do was for the front-end part which I am still currently working on part-time. The research I did I will discuss in further detail later on in my report, but I basically had to go through multiple npm packages and see if they would work based on our requirements and design document. I also improved my critical thinking and development skills when working on the API and back-end for the dynamic data project. I got to work more heavlily with docker and also had to think a lot about how to connect all the individual pieces I developed together. Overall I did learn so much from working on this feature, and I will continue to learn as I continue to work and hopefully finish this feature working part time.";
let myGoals6 = "My last goal for the summer 2021 term was to become better at focusing for solid amounts of time during the day and getting things done while still maintaining a better work/life balance. I think this funnily enough is the goal I made the least amount of progress on during my time at designware. Because the job is fully remote and I struggle with insomnia I got very comfortable working whenever I was least tired instead of trying to regulate my sleep and work schedule. I also really wanted to make a good impression and finish my features quickly so I would work extra hours to make sure I was getting things done. While the team really appreciated my efforts, I was spending too much time working and since my desk was in my room I never really felt like I left work. I have been working on making sure I go our for a walk every day and actually take breaks for meals and sign off at a reasonable time. I still have days every once in a while where I work a bit extra in the evenings but it is usually to make up some time where I felt less productive during the day. I also started going to cafes to work during the day which would ensure that I would stay more on task and when I left the cafe I would leave my work for the evening. I still know I can improve this balence, and it will be a struggle working part time with school but I have made progress on it and intend to keep working on it.";

let jobDescription = "My role for winter 2021 through to summer 2021 at Designware was on the Development team. As a startup, the development team is only about 6-8 people and growing and is responsible for  many different projects, namely working on new features on our road map, or making adjustments or bug fixes for existing features. In the winter 2021 semester I was the only co-op student at Designware, but for summer 2021 I had D.J (another co-op student from Guelph) join me on the dev team and Jess and Mathew from Sheridan join us on the design team. I was responsible for working on the dashboard (front-end), back-end, scheduler, and more. In this section of my report, I am going to talk about the three main projects that I worked on for this co-op term. ";

let breakpointTargeting = "The first project I worked on was to build the front-end component for the breakpoint targeting feature in our editor. This feature allows users to design a website/app with different sized screens in mind. The goal of this feature was to have set breakpoints for specific predefined screen sizes (like mobile, laptop, HD, etc) and also allow custom breakpoints where the user could specify the amount of pixels. Luckily I had a mockup-up from the design team to help me, but programmatically this feature did take some work to set up and get working as designed.";
let breakpointTargeting2 = "To get started on this project, I had to become familliar with the requirements for the product. I did this by reviewing the mock-up and having meetings with Andrew (our CEO and designer), and Tim (a co-founder and the lead for the editor). These meetings helped me to see where the project was going and clarify some details missing in the mock-up. For example the minimum and maximum amount of breakpoints that a user can set, and some missing hover or focus states for buttons. After I did this, I spent some time familliarizing myself with how the editor functions in the editor that Tim completed worked. These functions would take the pixel data from the breakpoints and update the current set breakpoint, add new breakpoints, and remove existing breakpoints. These were the helper functions I used to make things work behind the scenese later on.";
let breakpointTargeting3 = "Now that I had a better idea on the feature and how it was supposed to work, I was able to start coding. There used to be three hardcoded breakpoints within the nav bar code, so I started by commenting this out. I decided to comment it out for now in case I could reuse any styling code later on. I decided it would be more modular and make more sense to create a new file in the components folder to keep the viewport code for the breakpoints. This also cleaned up quite a few lines from the UserContainer file and made the code much easier to understand. ";
let breakpointTargeting4 = "I started in this file by copying and pasting the existing code for breakpoints that used to be in UserContainer and then adding in some helper functions. The functions I needed were ones for adding a new breakpoint, deleting a breakpoint, creating a custom breakpoint, selecting a breakpoint, and switching breakpoint views. Tim had all the logic set up within the editor so one of my first steps was to get the file to hook properly up to the editor so I could call the editor functions and send the proper parameters. This involved some changes in function definitions within the Editor.vue file.";
let breakpointTargeting5 = "Once I had all of my functions set up I started on getting the buttons to dynamically populate based on a JSON string retreived from the editor. This JSON string was just an array of all of the current breakpoints, that specified which breakpoint was currently selected (if any). I used v-for within vue to create a series of clickable divs for each breakpoint. Once I had the buttons dynamically being created I was able to move onto the styling. This piece ended up taking the longest amount of time as it was crucial for me to get it perfect. I started by creating different classes for each type of style: unselected, unselected hover, selected, and selected hover. I added in the specific CSS for this within the style tags within the file as you do with vue. Once I had this I moved on to the design of the dropdown menus, the custom breakpoint field took me the longest to do here, but a lot of it was just making adjustments to the positioning of the icons and the size of them. Once I had that styling down I added some last touches such as the tooltip that shows up when you hover over a breakpoint and making the breakpoints show adaptable based on the screen size.";
let breakpointTargeting6 = "Below you can see a demo of the breakpoints within a marketing promo for designware. It ended up being approved by the design team and had little to no bug fixes needed to this date. From this project I learned a lot about vue since this was my first real feature within vue instead of just bug fixes. I also got to learn more about the editor and how it connects to the dashboard. Finally I got to spend some time working with Tim, Andrew and Matteo, which made me much more comfortable working with them later on in my term. I really enjoyed working on this feature and I am proud of how it turned out. The code is pretty modular and the setup makes a lot of sense. I would change very little if I went back to do it again!";

let assetQueue = "The second project I worked on was a Asset Queue Feature upgrade. At Designware we use Digital Ocean to store our images and files that are used within the editor and users projects. Digital Ocean however has rate limitting at 750 requests per second per IP address so we encountered the issue with our old code when uploading a bunch of assets at once. This is because the way it used to work was it would run from the back-end container and all the get and put requests for assets would come from the same IP address. We decided that the best way to do it would be to make some sort of queue to process the upload/copy/delete requests for the assets.";
let assetQueue2 = "To start I did some research on libraries that were compatable with golang that might be useful in creating a queue so I wouldn't have to worry about making a persistant one. I discussed with Matteo the possibility of creating one from scratch by creating a table in our database for the queue but we decided that the file buffer being uploaded might be sensetive information that shouldn't be stored in a database if possible. After a lot of research I found RabbitMQ to be a viable option. I discussed this option with Matteo and he mentioned that we already had RabbitMQ within our stack for our task scheduler which made it an even more appealing option. I then got started on setting up a local RabbitMQ instance to test it out and start building the queue.";
let assetQueue3 = "To get a RabbitMQ instance setup locally I had to install docker and essentially startup a container running with RabbitMQ. One I had this I was able to access the RabbitMQ dashboard via localhost:port where port was the specified port where the instance was running. I could login using the guest username and password and from there I was able to see everything going on within the queue. This was super helpful for debugging. I started by creating functions to create a queue using env variables in the backend golang code. Once I had the queue spinning up properly, I started on a function to add a basic item to the queue. Once I had it adding a default hardcoded message to the queue I worked on sending the file buffer and a serialied struct object containing information about the asset for uploading. This included the type as an enum (0 for upload, 1 for copy, and 2 for delete), as well as details like the URL, buffer, bucket, spacename, etc. All of this info was required by Digital Ocean later when I worked on the upload code. Once I got the adding to the queue working I just adjusted the functions that used to perform these actions to instead just add an item to the queue with the relevant information. This completed all of the code changes in the back-end.";
let assetQueue4 = "Then I set up a new repository for the consumer of the queue. This repository is set up to be easily deployed within a docker container because the way I coded it allows you to be able to spin up multiple consumers and they will divide the queue requests equally among themselves to even the load. I used a loop and goroutines to determine how many tasks were running at the same time and limitted the amount running to be less than the space limit amount. Once I did this, I was able to add functions for dequeuing and then delegating the parsed body to do the asset copy, upload, delete, etc. The consumer connecting to the queue and dequeuing the messages happened in the main.go file but all the specific asset related functions I did within the asset.go file. This kept it modular and a simillar structure to the back-end code.";
let assetQueue5 = "Below you can see an image of the dequeue function and the repository structure for the queue. Once I finished the functionality in the asset queue I just had to test thoughally to make sure it could handle large enough files, not break, and not go over the space limit but process queue messages concurrently. I have had to do a couple bug fixes since I finished but mostly to just add more functionality, such as uploading the compilation zips using the queue which was not supported before. I am still happy with the setup and documentation I did for this task and it seems to be very effective so far. It really helped me to learn golang quickly and this knowledge has even helped me help memebers on my team with questions about goroutines and how synchronous golang is.";

let dynamicData = "Lastly, I will talk about the Dynamic Data feature I got a good start on during the last month or two of my co-op term at Designware. This project had a lot of moving parts and I was unable to fully complete it in the duration of my co-op term, but the plan is I will continue to work on it part time during my studies. This is one of the biggest features that Designware had on their road map and I was super honoured they trusted me enough to get it started. Basically this feature allows users to add a dynamic data element to their projects. The options we want to support include google sheets, google docs, airtable, and postgres (sql). I worked the most on the postgres (sql) option for storing dynamic data for users.";
let dynamicData2 = "The first thing to do here was to understand the requirements and setup goal for the project. I spent a lot of time with Matteo asking questions to gauge the requirements for this task since the design document was not fully completed when I started this task. It was decided that we would need to add code into the back-end and front-end but we would also need to add two new repositories at least for this project. The first new repo is for the API. Using docker, each new project will have a version of this API code deployed and running and its job is to just accept incoming requests from the back-end for all of the database options (google sheets/docs, airtable, postgres, etc). Each project would also have a docker pod deployed for the second repo which is just a postgres instance.";
let dynamicData3 = "For the API repo, I set it up the same way the back-end was setup with the exception of all the docker information. There was a main.go file in the root that defined all of the api end points and then I had a Controllers folder containing files such as create.go, read.go, upload.go, database.go, etc. Within these files I had a function that was basically a switch statement that just took an enum header and decided what function to run. For example it would get to this function in create.go and if the value was 0 it knew that it was to create a table in the postgres database, but if it was 1 it was creating a table in the google sheets, etc. I also created functions to grab or add API key information for the various request types (google, airtable, etc) in the database table for postgres. This was complete with encryption and decryption methods for parsing passwords and secret keys. I did most of the grunt work here, but didn't code the specific functions for google sheets or airtable. My focus was on the postgres (sql) functionaity.";
let dynamicData4 = "The postgres repository I set up had a much simpler setup than the API since it was specifically just for postgres. It was more or less just docker setup for a postgres SQL instance and then functionality for a starting script that would change the default password and username to match the custom username and password defined when the user created their project. This image would be accessable if you had the username and password and accessed it from the api. This allowed me to add functions in the API repo for adding a table, adding a column, adding a row, updating a row, deleting a row, etc. I used the database information to connect to the postgres image hosted in a seperate pod. This was the most complex part of the project so far, and I tested it all using postman since the front-end part of the project was the last piece to work on.";
let dynamicData5 = "Below I have included a video of the start I have on the dynamic data front-end design which is where the user will be able to interact with the database table and access all the functionality we have setup in the background. There is still lots of work to do here but it gives a bit of a teaser to the future and what it will be. Overall I really have enjoyed the challenge of working on this project and it has been super satisfying to see the pieces start to come together. I am looking forward to continuing to work on this project and seeing it all come together. I know this feature will be a game changer for customers and the company so it is exciting that they trusted me to help implement something that is so important.";

let conclusion = "I had a wonderful term and learned a lot more about vue.js, golang, docker/kubernetes and more! I learned two new languages I had never touched before and made a lot of connections with my team. I was able to develop my skills by working on the breakpoint targeting feature, the assets queue, and the dynamic data feature. I really look forward to continuing to work at designware and develop my skills even more within leadership and learn how to better manage a work life balance.";
let aknowledgement = "I would like to thank Matteo for being a great manager, Andrew for being a very kind and welcoming CEO, Jeff, Drew, Tim, Jenna, and El for being a great dev team and always helping me out, Steven and Laurel for being excellent designers, Lucie for being a marketing god and showing me arround Montreal, Lynn for being an HR queen and making sure we all stay afloat, and last (but not least) all the co-ops who made great company during my terms (D.J, Jess, and Mathew). Even though I only met you all in person once at most, I had a wonderful two semesters with you all. I always felt super welcome and like my growth and health was important to you all, and I can honestly say this is the best co-op experience I have ever had. I am really looking forward to sticking with the team and getting to know and grow with you all even more!";

class WorkTermFiveBlogForm extends React.Component {
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
          <MediaQuery query='(min-width: 1000px)'>
            <div className={this.state.darkMode ? "tabContentDark" : "tabContent"}>
              <h3 className="title">Software Developer</h3>
              <p className="placement">Designware</p>
              <div className="postDiv" id="postDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>About Designware</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{aboutEmployer}</p>
                <br></br>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{aboutEmployer2}</p>
              </div>
              <div className="postDiv" id="postDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>W21 My Goals</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>
                  I created three goals for my W21 work term at Designware. These goals were:
                </p>
                <ul>
                  <li style={{textAlign: "left"}}>Learn how to use and write code in the Golang language.</li>
                  <li style={{textAlign: "left"}}>Learn how to write code in the Vue.js language properly.</li>
                  <li style={{textAlign: "left"}}>Be more active at team building throughout my Co-op.</li>
                </ul> <br></br>

                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals3}</p>
              </div>

              <div className="postDiv" id="postDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>S21 My Goals</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>
                  I created three more goals for my S21 work term at Designware. These goals were:
                </p>
                <ul>
                  <li style={{textAlign: "left"}}>Learn about what it takes to estimate and plan project features.</li>
                  <li style={{textAlign: "left"}}>Improve my critial and creative thinking skills by taking on the database dynamic data feature.</li>
                  <li style={{textAlign: "left"}}>Become better at focusing for solid amounts of time during the day and getting things done while still maintaining a better work/life balance.</li>
                </ul> <br></br>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals4}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals5}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{myGoals6}</p>
              </div>
              <div className="postDiv" id="postDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Job Description</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{jobDescription}</p>
                <img  alt="Designware Team" src={require("./Content/team.jpg")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
              </div>
              <div className="postDiv" id="postDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Breakpoint Targeting Feature</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{breakpointTargeting}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{breakpointTargeting2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{breakpointTargeting3}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{breakpointTargeting4}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{breakpointTargeting5}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{breakpointTargeting6}</p>
                <iframe style={{width: "80%", height: "400px"}} src="https://www.youtube.com/embed/igXCyuz98xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="postDiv" id="postDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Asset Queue Feature</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{assetQueue}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{assetQueue2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{assetQueue3}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{assetQueue4}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{assetQueue5}</p>
                <img  alt="Asset Queue" src={require("./Content/assetQueue.png")} style={{border: "1px solid grey", width: "80%", height: "80%"}}/>
              </div>
              <div className="postDiv" id="postDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Dynamic Data Feature</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{dynamicData}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{dynamicData2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{dynamicData3}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{dynamicData4}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{dynamicData5}</p>
                <video style={{width: "80%", height: "400px"}} preload controls>
                  <source src={require("./Content/ToolbarProgress.mov")}/>
                </video>
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
          <MediaQuery query='(max-width: 999px)'>
            <div className={this.state.darkMode ? "mobileTabContentDark" : "mobileTabContent"}>
              <h3 className="title">Software Developer</h3>
              <p className="placement">Designware</p>
              <div className="mobilePostDiv" id="mobilePostDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>About Designware</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{aboutEmployer}</p>
                <br></br>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{aboutEmployer2}</p>
              </div>
              <div className="mobilePostDiv" id="mobilePostDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>My Goals</label>
                <ul className={this.state.darkMode ? "darkText" : "lightText"}>
                  I created four goals for my summer 2020 work term at Designware. These goals were:
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
                <img  alt="Designware Team" src={require("./Content/team.jpg")} style={{border: "1px solid grey", width: "70%", height: "70%"}}/>
              </div>
              <div className="mobilePostDiv" id="mobilePostDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Breakpoint Targeting Feature</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{breakpointTargeting}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{breakpointTargeting2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{breakpointTargeting3}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{breakpointTargeting4}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{breakpointTargeting5}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{breakpointTargeting6}</p>
                <iframe width="400" height="255" src="https://www.youtube.com/embed/igXCyuz98xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="mobilePostDiv" id="mobilePostDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Asset Queue Feature</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{assetQueue}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{assetQueue2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{assetQueue3}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{assetQueue4}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{assetQueue5}</p>
                <img  alt="Asset Queue" src={require("./Content/assetQueue.png")} style={{border: "1px solid grey", width: "70%", height: "70%"}}/>
              </div>
              <div className="mobilePostDiv" id="mobilePostDiv">
                <label className={this.state.darkMode ? "darkText" : "lightText"}>Dynamic Data Feature</label>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{dynamicData}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{dynamicData2}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{dynamicData3}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{dynamicData4}</p>
                <p className={this.state.darkMode ? "darkText" : "lightText"}>{dynamicData5}</p>
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

export default WorkTermFiveBlogForm;
