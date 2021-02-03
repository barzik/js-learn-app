Site for displaying markdown files, with code examples and in RTL.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install & Usage 

`npm ci` to install. Use the following scripts to run, test, and build. The bundled build can be placed on every server, even on WordPress.

Place all markdown files in directories inside src/docs. See the example data for information on structure. In order to pull a GitHub repository to that location, please run `pull-md.js` with an environment variable: JS_LEARN_APP: git@github.com:your-md-repo-location
for example:
`JS_LEARN_APP="git@github.com:barzik/js-learn-heb-md.git" node pull-md.js`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run coverage`
Runs the coverage tests and the tests.

### `npm run e2e`

Launches the e2e coverage (with the server, if not already started).

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build-md-json`

Builds the JSON file that contains the structure of the markdown files in the docs directory. It runs automatically with `start,` `test,` and `build.`
