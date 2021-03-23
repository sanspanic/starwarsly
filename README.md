# :ringed_planet: :star: StarWarsExplorer :star: :ringed_planet:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

##### 1. `npm start` Runs the app in the development mode.

##### 2. `npm test` Launches the test runner in the interactive watch mode.

##### 3. `npm run build` Builds the app for production to the `build` folder.

## Notable Libraries 
* `redux` to manage state
* `redux-thunk` to handle async reducers
* `redux-persist` to save redux store in local storage

## Features

App contains information about Star Wars saga retrieved from [SWAPI](https://swapi.dev/). The user can explore each of the movies and learn about the Planets and People featured within. Initially, the user is displayed a list of of characters, planets and movies, where each is labelled as "unknown". Once the user has clicked on a character, planet, or movie, they are redirected to a details page where more information about the respective character/planet/movie is shown. The now explored character/planet/movie will show up under its own name as opposed to "unknown" in all lists. 

## Approach

1. API requests are made using `redux-thunk` 
2. Movie information retrieved from API is saved in redux store, which is also persisted to localStorage using `redux-persist`
3. API called whenever user interacts with movie, planet or character for the first time. 
4. Until explored, each item (movie, character or planet) listed as "Unknown". When first explored, API call made, information saved to store. 
5. Once explored, titles of items are retrieved from store. 
	* Previously explored films are rendered in `FilmList.js` which maps over the store of films
	* Previously explored characters are rendered in `PersonList.js`
	* Previously explored planets are rendered in `PlanetList.js`

