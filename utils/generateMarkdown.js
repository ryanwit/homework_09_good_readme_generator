// function to generate markdown for README

function renderLicenseBadge (userLicense) {
  return`![GitHub license](https://img.shields.io/badge/License-${userLicense}-blue.svg)`
}

// 
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.userLicense)}
  # ${data.projectTitle}

  ## Description
    ${data.userProject}
    
  ## Table of Contents
* [License](#license)

* [Contributing](#contributing)
  
* [Tests](#tests)
  
* [Questions](#questions)

  ## Installation
    ${data.userInstDepend}
  ## Usage
    ${data.userRepo}
  ## License
    This project is licensed under the ${data.userLicense} license.
  ## Contributing 
    ${data.userConRepo}
  ## Tests
    ${data.userRunTests}
  ## Questions
    Please contact ${data.userEmail} for any questions - link github
    


`;
}

module.exports = generateMarkdown;
