# Weekend Movie Saga Johnny
## Description
_Duration: One Weekend_

With this app, the main objective was making a movie list that when clicking on an image will take you to the page of the image you clicked on to see the descriptions. The other objective was to add a movie with a movie name, image url, and a description. How this was solved as using saga functions in the index.js, setting up router inputs to store the information on a database, and making the different pages that pull down information on specific movies. By using a map function to get and push the data the user has either added or gotten we solved this problem.

Screen Shot
Include one or two screen shots of your project here (optional). Remove if unused.

## Prerequisites
Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [Redux.js](https://redux.js.org/)
- [PostgreSQL](https://www.postgresql.org/)


## Installation

Create a database named saga_movies_weekend,

The queries in the tables.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,

1. Open up your editor of choice and run an npm install
2. Run npm run server in your terminal
3. Run npm run client in your terminal
4. The npm run client command will open up a new browser tab for you!


Usage

1. npm install
2. Create your database with the information in database.sql
3. Make sure your database is connected and running
4. Start your server and client with npm run server and npm run client
5. Go to localhost 3000

## Built With

    material-ui
    axios
    pg
    react
    react-dom
    react-redux
    react-router-dom
    react-scripts
    redux
    redux-logger
    redux-saga

## Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.
