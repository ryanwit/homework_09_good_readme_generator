// function to generate markdown for README

function renderLicenseBadge (userLicense) {

}

function renderLicenseLink (userLicense) {

}

function renderLicenseSection (userLicense) {
  
}



function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
    ${userProject}
  ## Table of Contents
    [License] 
    [Contributing]
    [Tests]
    [Questions]

  ## Installation
      ${userInstDepend}
  ## Usage
      ${userRepo}
  ## License
    This project is licensed under the ${userLicense} license.
  ## Contributing 
    ${userConRepo}
  ## Tests
    ${userRunTests}
  ## Questions
    Please contact ${userEmail} for any questions
    


`;
}

module.exports = generateMarkdown;
