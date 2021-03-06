# Building a React App with React Context, instead of Redux

Building with the new React Context (now in production), as an alternative to using Redux for state management

## Resource

Based off this tutorial
[https://medium.com/octopus-labs-london/replacing-redux-with-react-hooks-and-context-part-1-11b72ffdb533]

## Setup

- run `npm install`

## Run locally

- cd into `/no-redux`
- run `npm start`
- open `localhost:3000` in your browser, if it does not automically open

## Steps for Building 
(notes)

1. Replace Redux store: Create a new file called `Store.js`
This stores the default values of state, and passes that data down to any components that are in App.js. Think of this as the top level wrapper, making all the values available to any component.
1. Replace Redux store: Create state
1. Replace Redux store: Create reducer, which is a function
1. Replace Redux store: Create actions
1. Replace Redux store: see steps necessary to create this file in `src/Store.js` (follow the comments in that file)


*"The provider has all the data and the consumer consumes it"*

A `consumer` is any component that we connect to Context, to use the Provider's data (so, really any component)



