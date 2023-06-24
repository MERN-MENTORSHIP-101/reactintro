

# Intro into React js

This is the first introduction to react js 

### Installation of React js

You first need to ensure you have the latest and recommended version of node js , if not head to 

- [Node js installation](https://nodejs.org/en)

Now lets create our first React project you can either use vite or CRA , for our case we shall use vite which is the much faster than CRA

You can head to official vite documentation
- [Vite](https://vitejs.dev/guide/)

You can use either the following links below
Incase you are npm
```
npm create vite@latest

```
Incase you are using yarn

```
yarn create vite
```
The commands will create for you a simple React Application.Soon you will get to know about folder structures and files that have been created.

## Installation

Install my-project with npm OR YARN

```
  npm install my-project
  cd my-project


```

Install dependencies

```
    npm install
    or 
    yarn add
```
    
## Folder structure

- src: This is the main folder where most of your application code resides.
- main.jsx: The entry point of your application that renders the root component.
- App.jsx: The root component that contains the overall structure of your application
- Components This folder contains reusable UI components that are used throughout the application.Should be in capital letter
- Pages: Pages or views of your application, each representing a different route or screen.
- Styles(App.css,index.css): CSS or styling-related files, such as global styles or CSS modules. You can include them into one folder styles
- Assets: Static assets like images, fonts, or other media files.
- .gitignore: File which prevent pushing files to github eg nodemodules,.env


# Navigation

## React Router DOM

It is a popular library which does help in handling routing and redirecting user from one page to another

- [React Router Dom](https://reactrouter.com/en/main/start/tutorial)


#### Installation

```
npm i react-router-dom
or 
yarn add react-router-dom
```

```
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
```

####  Key Concepts
Router: The Router component is the root component that wraps your application and provides routing functionality.We do import it from BrowserRouter

Route: The Route component defines a route in your application. It renders a specific component when the current URL matches its specified path. You can use the exact prop to ensure an exact match.

Routes: The Routes component is used to group Route components. It renders only the first Route that matches the current URL, allowing you to handle exclusive routes.

Link and NavLink: The Link component is used to navigate between different routes. It renders an anchor tag (<a>) that changes the URL without causing a full page refresh. The NavLink component is similar to Link, but it allows you to apply additional styling or classes when the link is active.

Route Parameters: You can define dynamic segments in the route path by using parameters. For example, /users/:id can match paths like /users/1 or /users/2. You can access these parameters in the component rendered by the Route


# Running React App

 ### Working with Vite Application
```
 npm run dev
 or
 yarn run dev
```

  ### CRA Create React App
  ```
  npm start
  or
  yarn run start

  ```


