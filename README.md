# nosql-social-network-api ![GitHub License Badge](https://img.shields.io/badge/License-MIT-yellow)

[Link to Walkthrough Video](#)

![nosql-social-network-api](./images/Screenshot.png)

## Technology Used:

 * node - https://nodejs.org/en/about
 * Insomnia - https://docs.insomnia.rest/insomnia/get-started
 * MongoDB - https://www.mongodb.com/
 * npm - https://www.npmjs.com/
 * express - https://expressjs.com/
 * mongoose - https://www.npmjs.com/package/mongoose

 ## Description

 A NoSQL database for a social network API to handle a large amount of unstructed data. The user will be able to add, update, delete and view specific information using the POST, PUT, DELETE AND GET methods.  

 ## Table of Contents
  
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Badges](#badges)
   * [Tests](#tests)
   * [Contributing](#contributing)
   * [Credits](#credits)

## Installation

This application requires express, and mongoose.  
* To install all dependences, run: npm install
* To load the seeds into the database, run: npm run seed 
* To start the server, run: node server.js

## Usage

Using the POST, PUT, DELETE AND GET methods, the user will be able to add, update, delete and view specific information on the database.

Open insomnia and type in "localhost:3001/api/_" in the address bar. Check out the following routes:

  /api/users  to get all users or create user
  /api/users/:userId  to get one user, update and delete user
  /api/users/:userId/friends/:friendId  to add or delete a friend
  /api/thoughts   to get all thoughts or create thought
  /api/thoughts/:thoughtId  to get one thought, update or delete.
  /api/thoughts/:thoughtId/reactions  to create reaction
  /api/thoughts/:thoughtId/reactions/:reactionId  to delete reaction



## License

 This project is licensed with MIT license

 Link to License - [Website to MIT License]((https://opensource.org/license/mit))

 ## Badges

 ![GitHub License Badge](https://img.shields.io/badge/License-MIT-yellow)

 ## Tests
 
 This application tested the writen code using Insomnia Core application

 ## Contributing

 Contact me if you interested in contributing:

 Check out my [github](https://github.com/AZurek17) page or send me a [email](mailto:andyzurek@gmail.com)

 ## Credits
 * Tutoring Session
 * ChatGPT
 * StudyGroup

 &copy;2023, Written by Andy Zurek