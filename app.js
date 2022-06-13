//pull in modules
const inquirer = require('inquirer');
const fs = require('fs');


//pull in code from other files
const fileGenerator = require('./src/file-generator.js');
const { writeFile, copyFile } = require('./src/file-generator.js'); 


//Setup prompt function in window to collect needed README information
const promptUser = (questionData) => {

    if (!questionData) {
        questionData = [];
    };

    return inquirer.prompt([



    //GETTING name
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
    },
    //GETTING github username
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your github username!');
              return false;
            }
          }
    },
//GETTING TITLE
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter the title!');
              return false;
            }
          }
    },
//GETTING DESCRIPTION
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a project description:',
        validate: descInput => {
            if (descInput) {
              return true;
            } else {
              console.log('Please enter the description!');
              return false;
            }
          }
    },
//GETTING Install Instructions
    {
        type: 'input',
        name: 'install',
        message: 'Please enter installation instruction - particularly any NPM modules to install:',
        validate: installInput => {
            if (installInput) {
            return true;
            } else {
            console.log('Please enter the instructions!');
            return false;
            }
        }
    },
    //GETTING Usage Instructions
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage instruction - how to try the application:',
        validate: usageInput => {
            if (usageInput) {
            return true;
            } else {
            console.log('Please enter the instructions!');
            return false;
            }
        }
    },
    //GETTING License Info
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Please select the applicable licenses:',
        choices: ['Open Source','Private']
    },
    //GETTING Contibuting info
    {
        type: 'input',
        name: 'contribute',
        message: 'Please enter the name(s) of all project contributors:',
        validate: installInput => {
            if (installInput) {
            return true;
            } else {
            console.log('Please enter the contributors names!');
            return false;
            }
        }
    },
    //GETTING TEST info
    {
        type: 'input',
        name: 'test',
        message: 'Please enter any information about testing of this application here:',
        validate: installInput => {
            if (installInput) {
            return true;
            } else {
            console.log('Please enter the testing information!');
            return false;
            }
        }
    },
    //GETTING Questions
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter current outstanding questions that you would like to have in your Read Me file:',
        validate: installInput => {
            if (installInput) {
            return true;
            } else {
            console.log('Please enter any questions or type N/A!');
            return false;
            }
        }
    }
]).then(questionData => {
    return questionData;
});
};

promptUser()
.then(questionAnswers => {
    return fileGenerator(questionAnswers);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });