![ESTUDANTINDER](https://raw.githubusercontent.com/Estudantinder/estudantinder-mobile/main/.github/README.png)

# Estudantinder Mobile App

[![Expo](https://img.shields.io/badge/Code-Expo-informational?style=flat&logo=expo&logoColor=white&color=4630eb)](https://expo.io/@cauaspinheiro/projects/estudantinder-mobile)
[![Maintainability](https://api.codeclimate.com/v1/badges/402cd236daf2d3038dd3/maintainability)](https://codeclimate.com/github/Estudantinder/estudantinder-mobile/maintainability)

Languages: [![EN](/.github/EN.png)**EN**](/README.md) | [![BR](/.github/BR.png)**BR**](/README.pt-br.md)

Estudantinder deals with the search and encounter of other students, in order to increasingly develop their autonomy in their studies. See [Estudantinder's official website](https://estudantinder.com.br/) for more information.

## Usage

### Android

The easiest way to use the app is to download the apk from [Estudantinder's official website](https://estudantinder.com.br/)

If you have the [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) application installed on your phone, you can open it by following link:

**https://expo.io/@cauaspinheiro/projects/estudantinder-mobile**

### IOS

Due to Apple's development policies, there is no way to use the Estudantinder as an standalone app on the Iphone, instead you can download the [Expo Go](https://apps.apple.com/br/app/expo-go/id982107779) app and run the project through this link:

**https://expo.io/@cauaspinheiro/projects/estudantinder-mobile**

## Installation

You will need some tools to run the project locally. If you just want to access the app, see the topic [Usage](#usage)

### GIT

- Install git on your machine: https://git-scm.com/downloads
- With git installed on your machine, clone the repository using the **Code** button at https://github.com/Estudantinder/estudantinder-mobile

### NodeJS

- Download the LTS version of the node at https://nodejs.org/en/
- To test whether node is installed on your machine, run the following `node -v` command. The NodeJS version should appear

### Yarn

- Download the newest version of yarn at https://classic.yarnpkg.com/en/docs/install
- To test whether yarn is installed on your machine, run the following `yarn -v` command. The version of Yarn should appear

### Installing the packages

- Inside the project folder, run the following command: `yarn`

### Estudantinder API

Follow all the topics needed to install the API in the [official API repository](https://github.com/Estudantinder/estudantinder-api)

**Tip!** Save the host the API uses (ex: `http://localhost:3000`), as you will need them in the next topic

### Environment Variables

Inside the project folder, you will see a file called `.env.example.ts`, inside it, you must follow all the instructions that are requested.

### Expo

Follow all instructions on the [official Expo website](https://docs.expo.io/get-started/installation/)

---

**Well done!** You can now start using the API, go to the [Scripts](#scripts) tab to see which scripts are available for use

## Scripts

All of these scripts can be run on your machine using yarn

The script parameters will be represented with a `$` prefix

### ct

```shell script
yarn ct
```

Makes commits faster and more efficient using [Commitizen](https://github.com/commitizen/cz-cli)

**Before running the script:** Run automated testing of files on stage by git

### start

```shell script
yarn start
```

Runs the application locally using expo, for more details, see the [official Expo documentation](https://docs.expo.io/get-started/create-a-new-app/#starting-the-development-server)

### deploy

```shell script
yarn deploy $branch
```

[Publish](https://docs.expo.io/workflow/publishing/) the project for the release channel specified by `$branch`. It also pushes files to github

**Parâmetros necessários:**

- $branch: [Release channel](https://docs.expo.io/distribution/release-channels/) to be done the build
  - Example: `yarn deploy main`

### build:android

```shell script
yarn build:android $branch
```

Does the **Android** [build](https://docs.expo.io/distribution/building-standalone-apps/) the project for the release channel specified by `$branch`. It also pushes files to github

Reminder: This also causes the expo to publish the version for OTA, that is, the old applications will be automatically updated to this new version when opened.

**Required parameters:**

- $branch: [Release channel](https://docs.expo.io/distribution/release-channels/) to be done the build
  - Example: `yarn build:android main`

### build:ios

```shell script
yarn build:ios $branch
```

Does the **iOS** [build](https://docs.expo.io/distribution/building-standalone-apps/) of the project for the release channel specified by `$branch`. It also pushes files to github

Reminder: This also causes the expo to publish the version for OTA, that is, the old applications will be automatically updated to this new version when opened.

**Required parameters:**

- $branch: [Release channel](https://docs.expo.io/distribution/release-channels/) to be done the build
  - Example: `yarn build:ios main`

### verify

```shell script
yarn verify
```

Checks if Typescript (not Expo) can compile the project normally, use this command only to check if there is no Typescript error in the code

### test

```shell script
yarn test
```

Runs tests locally in the test environment using [Jest](https://jestjs.io/docs/getting-started) in verbose mode.

Optionally, you can pass [any parameter accepted by Jest](https://jestjs.io/docs/cli#options)

### jest

```shell script
yarn jest
```

Runs tests locally in the test environment using [Jest](https://jestjs.io/docs/getting-started) without any additional configuration.

Optionally, you can pass [any parameter accepted by Jest](https://jestjs.io/docs/cli#options)

### test:quiet

```shell script
yarn test:quiet
```

Runs the tests locally in the test environment using [Jest](https://jestjs.io/docs/getting-started) notifying as soon as all tests are completed.

Optionally, you can pass [any parameter accepted by Jest](https://jestjs.io/docs/cli#options)

### test:ci

```shell script
yarn test:ci
```

Runs tests locally in the test environment using [Jest](https://jestjs.io/docs/getting-started) generating reports on test coverage.

Optionally, you can pass [any parameter accepted by Jest](https://jestjs.io/docs/cli#options)

### test:badges

```shell script
yarn test:badges
```

Runs the tests locally in the test environment using [Jest](https://jestjs.io/docs/getting-started) generating reports on test coverage and then generating badges to be used by github.

Optionally, you can pass [any parameter accepted by Jest](https://jestjs.io/docs/cli#options)

### repo

```shell script
yarn repo
```

Opens the project repository using the machine's default browser

### Husky

The husky is a tool for running scripts based on [git-hooks](https://githooks.com/).

Here is each command used by the husky in this project:

- `pre-commit`

  - Runs the project linter on staged files using [lint-staged](https://github.com/okonet/lint-staged)

- `commit-msg`

  - Runs the commit message linter using [commitlint](https://commitlint.js.org/)

- `pre-push`
  - Runs the [verify](https://github.com/estudantinder/estudantinder-mobile#verify) script and run all tests.

## Used tools

You can see all the project's dependencies at the following link: https://github.com/Estudantinder/estudantinder-mobile/network/dependencies

## Rest API (Backend)

You can see the backend application in the following repository: https://github.com/Estudantinder/estudantinder-api

## Website

You can see the web application in the following repository:

https://github.com/Cauaspinheiro/estudantinder-web
