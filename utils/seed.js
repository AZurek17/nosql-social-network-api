const connection = require("../config/connection");
const { User, Thought } = require("../models");

const users = [
  {
      username: 'Andy',
      email: 'andy@gmail.com'
  },
  {
      username: 'Rosa',
      email: 'rosa@gmail.com'
  },
  {
      username: 'Lillian',
      email: 'lillian@gmail.com'
  },
  {
      username: 'Nathan',
      email: 'nathan@gmail.com'
  },
  {
      username: 'Daniel',
      email: 'daniel@gmail.com'
  },
]

const appDescriptions = [
  'Decision Tracker',
  'Find My Phone',
  'Learn Piano',
  'Starbase Defender',
  'Tower Defense',
  'Monopoly Money Manager',
  'Movie trailers',
  'Hello world',
  'Stupid Social Media App',
  'Notes',
  'Messages',
  'Email',
  'Compass',
  'Firefox',
  'Running app',
  'Cooking app',
  'Poker',
  'Deliveries',
];

//Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// // Gets a random full name
// const getRandomUser = () =>
//   `${getRandomArrItem(users)} ${getRandomArrItem(email)}`;

  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(appDescriptions),
        username: getRandomArrItem(users),
      });
    }
    return results;
  };  

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }

  await Thought.deleteMany({});
  await User.deleteMany({});

  const thoughts = getRandomThoughts(5);

  await Thought.collection.insertMany(thoughts);
  await User.collection.insertMany(users);
 
  console.table(users);
  // console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
