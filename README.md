# Author: Mackenzie Quigley
# Email: mackenziequigley@outlook.com
# Secondary Email: mquigl01@uoguelph.ca

# About the Project:
This project is my personal website that I am using to store my work term reports for my COOP program in Software Engineering at the University of Guelph. This website will likely evolve over time to be my personal project portfolio, containing details about my personal projects, work experience, and more. 

## Cloning
`git clone https://github.com/mquigl01/PersonalWebsite.git` 

## Running things
Once you have the repository cloned, you will notice the windows batch files in the root directory of the repository:
* test.bat
* gitDeploy.bat
* herokuDeploy.bat
These files can be used to make your life easier when running and pushing code.
To run the repository, all you need to do (if you are on windows) is double click on the test.bat file.
This file will install all the npm packages required, and then run the backend and the frontend concurrently.
If you are not on windows, or these batch files are not working for you, simply run the following commands:
In the root directory (PersonalWebsite/): `npm install`
In the client foler (PersonalWebsite/client/): `npm install`
In the root directory (PersonalWebsite/): `npm run dev`

## Making and Deploying Changes
Make sure when you clone the repository that you create or switch to a branch before making changes to the code. For example:
`git checkout -b feature/addResume`
Would create a new branch called feature/addResume based off of the master branch. 
When you make changes to this branch, you can commit them by running the following commands:
`git add .`
`git commit -m "My commit message" `
`git push origin feature/addResume`
When you have thoughally tested your changes and are ready to merge with master you can do:
`git checkout master`
`git pull`
`git pull origin feature/addResume`
`git add .`
`git commit -m "Meging message" `
`git push`
Note that you may have merge conflicts to sort out before you add, commit, and push the new changes. Making a new branch is required in order to reduce the risk of pushing buggy code to the master branch, where a working version should always be.

If you want to push from the master branch to heroku (i.e deploy your changes), you can simply double click on the herokuDeploy.bat file as long as you are set up and logged in to heroku. If you do not have heroku set up for this repository, contact Mackenzie Quigley (mackenziequigley@outlook.com)

## Frontend Set Up
All the frontend code is kept within the client folder in the repository. The frontend was written with React.js, and here is the project structure:
* public: keeps the html file that react builds off of as well as the browser window favicon and loading css
* src: keeps all the react.js code
    * src/index.js: binds the react code to the html file root div using ReactDOM
    * src/App.js: creates the header and footer and uses react router to toggle between tabs and switch between different content acordingly
    * src/App.css: keeps all the css styling for App.js including the header and footer styling
    * src/Components: keeps all the content to be used within the App.js file
        * src/Components/AboutMeForm.js: keeps the content seen when the about me page is being viewed
        * src/Components/Contact.js: keeps the content seen when the contact me page is being viewed
        * src/Components/history.js: keeps a record of the history of the users paths so new routes can be pushed, and the user can go back
        * src/Components/HomeForm.js: keeps the content seen when the home page is being viewed
        * src/Components/WorkTermReportsForm.js: keeps the content seen when the work term reports general page is being viewed
        * src/Components/WorkTermOneBlogForm.js: keeps the content seen when the Cooperators work term report is being viewed
        * src/Components/WorkTermThreeBlogForm.js: keeps the content seen when the Manulife Financial work term report is being viewed
        * src/Components/Content: stores all the images and text used throughout the site (such as the image of me on the about me page, or the screen shots on the work term one page)


## Backend Set Up
Currently the backend of this project has been coded with Node.js.
Currently this backend is only being used for the contact me page, where it uses a business email to send me personally the content the user entered within the contact me page. However, this backend holds the potential for a database, or for making requests to external resources that could be used within my site (such as photos, projects, or documents).
* server.js: this file includes all parts of the backend. It runs on port 5000 and listens for incoming requests from the frontend. Currently this file only runs functionality to email me personally information passed from the frontend, but it is kept here for future potential