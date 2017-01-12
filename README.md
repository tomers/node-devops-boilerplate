node-devops-boilerplate
=======================


A simple boilerplate from **Node.js** web applications.

This project focuses on a showcasing a usable Continuous Integration / Continuous Deployment (CI-CD) process.
This boilerplate is not opinionated as for the type of application, thus express was ommitted.

The project borrowed from and is heavily inspired from the following sources:

- [Egghead.io - How to Write an Open Source JavaScript Library](https://egghead.io/courses/how-to-write-an-open-source-javascript-library)
- [KunalKapadia/express-mongoose-es6-rest-api](https://github.com/KunalKapadia/express-mongoose-es6-rest-api)
- [sahat/hackathon-starter](https://github.com/sahat/hackathon-starter)
- [awslabs/eb-node-express-sample](https://github.com/awslabs/eb-node-express-sample)

Features
--------

- **Pre-commit hooks** to ensure 100% test pass rate
- **Coverage tests** to ensure 100% code coverage by tests
- Fully working **CI/CD process** using [Circle CI](https://circleci.com/) web service
- **Deployment** to [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) service

Technologies used
-----------------

### For building
[Yarn](https://yarnpkg.com/): a fast, reliable, and secure dependency management

### For testing
[Mocha](https://mochajs.org/): a feature-rich JavaScript test framework
[Chai](http://chaijs.com/): a BDD / TDD assertion library
[Istanbul](https://istanbul.js.org/): a JavaScript test coverage tool
[ESLint](http://eslint.org/): a pluggable linting utility

### For deployment
[Codecov](https://codecov.io/): a code coverage service
[Circle CI](https://circleci.com/): a continuous integration and delivery platform
[AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/): an easy-to-use service for deploying and scaling web applications and services

Getting Started
---------------

The easiest way to get started is to clone the repository:

Get the latest snapshot:
```bash
git clone https://github.com/tomers/node-devops-boilerplate.git myproject

# Change directory
cd myproject
```

Install yarn:
```js
npm install -g yarn
```

Install dependencies:
```bash
yarn
```

#### Create a GitHub project
Create a new GitHub project and commit your code to it.

#### Create a [Codecov](https://codecov.io/) project
Simply enter the [Codecov](https://codecov.io/) website and follow instructions. It should be rather straightforward.

#### Create a Circle CI build
After you have created your GitHub project, sign-up to [Circle CI](https://circleci.com/), then create a new project.
Add the following environment variables in the project settings console:

- **AWS_ACCESS_KEY_ID** ([how to get](http://stackoverflow.com/questions/21440709/how-do-i-get-aws-access-key-id-for-amazon))
- **AWS_SECRET_ACCESS_KEY**
- **CODECOV_TOKEN** ([how to get](http://docs.codecov.io/reference#usage))

#### Create an AWS Elastic Beanstalk application
Follow instructions [here](https://github.com/awslabs/eb-node-express-sample/blob/master/README.md).

#### Test your setup
Commit any code change to your repository and push the changes back to Github.
Verify the build is monitored by [Circle CI](https://circleci.com/).


Yarn vs NPM
-----------
This project includes a `yarn.lock` file by default and as project dependencies are updated, this file will be updated to reflect those changes.

To upgrade your local dependencies using Yarn, simply run `yarn upgrade`. This will update all dependencies to their latest version based on the [version range](https://docs.npmjs.com/getting-started/semantic-versioning#semver-for-consumers) specified in the `package.json` file. The yarn.lock file will be recreated as well.
For further information, please see the official documention for [managing dependencies](https://yarnpkg.com/en/docs/managing-dependencies) and [upgrading dependencies](https://yarnpkg.com/en/docs/cli/upgrade). This [Yarn vs NPM](https://www.sitepoint.com/yarn-vs-npm/) article by SitePoint also has some very useful information.
