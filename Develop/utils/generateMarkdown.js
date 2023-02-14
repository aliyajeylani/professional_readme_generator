// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license == "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }

  if (license == "APACHE 2.0") {
    return `![License: APACHE 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }

  if (license == "BSD 3") {

    return `![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  }
  if (license == "None") {

    return "";
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license == "MIT") {
    return `(https://opensource.org/licenses/MIT);`
  }

  if (license == "APACHE 2.0") {
    return `(https://opensource.org/licenses/Apache-2.0);`
  }

  if (license == "BSD 3") {

    return `(https://opensource.org/licenses/BSD-3-Clause);`
  }
  if (license == "None") {

    return "";
  }


}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license == "None") {
    return "";
  } else {
    return `### License: Copyright:`
  }


}






// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

${data.description}
## Table of Contents:
* [Installation] (#installation)
* [Usage] (#usage)
* [Credits] (#credits)
* [Tests] (#tests)
* [License] (#license)
* [Questions] (#questions)

In order to install the necessary dependencies, open the console and run the following:
\`\'\`${data.installation}\`\`\`

### Usage:
${data.usage}

### Credits:
${data.credits}

### Tests:
In order to test open the console and run the following:
\`\'\`${data.test}\`\`\`

${renderLicenseSection(data.license)}

### Questions:
If you have any questions contact me on [GitHub] (https://github.com/${data.username})  or at ${data.email})`

}




module.exports = generateMarkdown;
