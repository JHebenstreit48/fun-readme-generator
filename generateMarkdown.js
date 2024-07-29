// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseInformation) {
  switch(licenseInformation) {
    case 'MIT':
      return '![Static Badge](https://img.shields.io/badge/License-MIT-yellow)';
    
      case 'GNU GPLv3':
        return '![Static Badge](https://img.shields.io/badge/License-GNU%20GPLv3-blue)';

      case 'Apache License 2.0':
      return '![Static Badge](https://img.shields.io/badge/License-Apache%20License%202.0-green)';

      case 'ISC':
      return '![Static Badge](https://img.shields.io/badge/License-ISC-darkred)';

      case 'none':
        return '';

      default:
        return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseInformation) {
  switch(licenseInformation) {
    case 'MIT':
      return 'https://opensource.org/license/MIT';
    
      case 'GNU GPLv3':
        return 'https://www.gnu.org/licenses/gpl-3.0';

      case 'Apache License 2.0':
      return 'https://opensource.org/license/apache-2-0';

      case 'ISC':
      return 'https://opensource.org/license/isc-license-txt';

      case 'none':
        return '';

      default:
        return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseInformation) {
  if (!licenseInformation || licenseInformation === 'none') {
    return '';
  }
  return `## License
  This project is licensed under the [${licenseInformation}](${renderLicenseLink(licenseInformation)}) license.`
  
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  # ${data.projectName}

  ${renderLicenseBadge(data.licenseInformation)}

  ## Description

  ${data.projectDescription}

  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installationInstructions}

## Usage

${data.usageInstructions}

${renderLicenseSection(data.licenseInformation)}

## Contribution Instructions

${data.contributions}

## Tests

${data.testInstructions}
  
## Questions

For any further questions you can contact me at [${data.emailAddress}](mailto:${data.emailAddress}). You can find projects I have created or participated in at [${data.gitHub}](https://github.com/${data.gitHub}).

`;
}

export default generateMarkdown;
