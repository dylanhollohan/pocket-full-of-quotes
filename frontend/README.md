# Front-end To-do (in order of priority):

1. quote delete button (greyed out if none are selected)
1. multi-delete backend call for when selectedQuote.length > 1
1. need a tutorial state for when they have never added a quote.
1. add 3 sample quotes once they successfully signup/login for the first time (store login count on the user?)
1. add JWT to included technologies list
1. create custom theme MUI for grey colors
1. create API layer that abstracts axios calls into a client
1. option to display no dates, created date, or last edited date
1. clean up passwords to use visibility toggle iconbutton from materialUI

# Regarding CORS, Cookies, Axios, JWT and other:

This article sort of saved the day when all hope was lost that I couldn't store cookies that had been sent from one local port (backend) to a different local port:
https://11kesarwaniyash.medium.com/json-web-token-with-cookies-55135cd978dd

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
