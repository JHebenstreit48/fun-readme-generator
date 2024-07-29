
  # My Fun README Generator

  ![Static Badge](https://img.shields.io/badge/License-ISC-darkred)

  ## Description

  To create a professional README file generator for this and future projects.

  ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Run the node index.js command and follow the prompts shown in the terminal to generate their README file.

## Usage

Another user can also use their Terminal application in VS Code, GitBash, or another text editor and run the same node index.js command and follow the prompts to generate a README.md file for their project.

## License
  This project is licensed under the [ISC](https://opensource.org/license/isc-license-txt) license.

## Contributions

I used several resources including, but not limited to: Google, blog.bolajiayodei.com, Zoom cloud recordings, Stack Overflow, NPM resource site, Xpert Learning AI, choosealicense.com, shields.io, github.com, and many others. I even asked questions to my classmates Jason, Bryce, and Moe, when I got stuck to help me clear up and get past my point of confusion.

Here are the links I used during the project:

https://blog.bolajiayodeji.com/how-to-create-an-automated-profile-readme-using-nodejs-and-github-actions

https://zoom.us/rec/play/F9IImjQ6EZU-2NUskW236-xar9HF-pVAeYteIs8Wk529gom_1qRMtOLnOmq-ne6fESdEMjrRO54UXKEB.QCe_mAinDEXQuZox

https://www.google.com/search?q=What+is+the+Tests+section+of+a+README.md+file+supposed+to+be+about&sca_esv=f5d76052eac9eedd&ei=-EWlZpyPM6KfwN4P1ZiIIA&
ved=0ahUKEwic68D39ceHAxWiD9AFHVUMAgQQ4dUDCBA&uact=5&oq=What+is+the+Tests+section+of+a+README.md+file+supposed+to+be+about&gs_lp=Egxnd3Mtd2l6LXNlcnAiQldoYXQgaXMgdGhlIFRlc3RzIHNlY3Rpb24gb2YgYSBSRUFETUUubWQgZmlsZSBzdXBwb3NlZCB0byBiZSBhYm91dEipB1AAWJEFcAB4AZABAJgBa6ABwQGqAQMxLjG4AQPIAQD4AQGYAgCgAgCYAwCSBwCgB-cB&sclient=gws-wiz-serp

https://stackoverflow.com/questions/54083539/how-to-create-a-select-drop-down-using-data-from-an-array-of-objects-in-javascri

https://stackoverflow.com/questions/72788530/what-npm-command-creates-a-dist-folder-in-nodejs

https://www.npmjs.com/package/inquirer#question

https://bootcampspot.instructure.com/courses/6643/external_tools/313

https://choosealicense.com/

https://shields.io/

https://github.com/nrwl/nx/issues/4593

https://opensource.org/license/MIT

https://opensource.org/license/apache-2-0

https://www.gnu.org/licenses/gpl-3.0

https://www.google.com/search?q=what+is+a+switch+statment+in+JavaScript&oq=what+is+a+switch+statment+in+JavaScript&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMggIAhAAGBYYHjINCAMQABiGAxiABBiKBTINCAQQABiGAxiABBiKBTINCAUQABiGAxiABBiKBTIKCAYQABiABBiiBDIKCAcQABiABBiiBDIKCAgQABiABBiiBDIKCAkQABiiBBiJBdIBCDgyMDdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8

https://www.google.com/search?q=what+is+the+case+part+of+a+switch+statment+in+JavaScript&sca_esv=ae95a0e0aab0d175&ei=7AyoZpOKIre0wN4Pp9PAqAc&ved=0ahUKEwiTsNL5m82HAxU3GtAFHacpEHUQ4dUDCBA&uact=5&oq=what+is+the+case+part+of+a+switch+statment+in+JavaScript&gs_lp=Egxnd3Mtd2l6LXNlcnAiOHdoYXQgaXMgdGhlIGNhc2UgcGFydCBvZiBhIHN3aXRjaCBzdGF0bWVudCBpbiBKYXZhU2NyaXB0MgoQIRigARjDBBgKMgQQIRgKSKE3UKQFWNg0cAV4AZABAJgBfKABxhqqAQUxMC4yMrgBA8gBAPgBAZgCF6ACgxDCAgoQABiwAxjWBBhHwgIIEAAYgAQYogTCAggQABiiBBiJBcICCBAhGKABGMMEmAMAiAYBkAYIkgcENi4xN6AH_JMB&sclient=gws-wiz-serp


I also got some of the following help from Bryce:

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      console.log(err ? `Error writing file: ${err}` : 'README file has been generated successfully!');
    });
  }

function init() {
    inquirer.prompt(questions).then((answers) => {
      const data = generateMarkdown(answers);
      writeToFile('README.md', data);
    });
  }

  Some of the links previously mentioned were given to me from Bryce. His explains also better helped me understand why I was stuck and that it seemed I was on the right track but missing something. I certainly understand why he gave said suggestions.


## Tests

I used the node index.js command to see if my code was working or if there were any errors outside of the VS Code GitBash errors.
  
## Questions

For any further questions you can contact me at [j.hebenstreit.developer@gmail.com](mailto:j.hebenstreit.developer@gmail.com). You can find projects I have created or participated in at [JHebenstreit48](https://github.com/JHebenstreit48).

