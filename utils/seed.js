const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts, getThoughtReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [];
  

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const username = fullName
      .toLowerCase()
      .split(' ')
      .join('');  
    const email = `${ username }@gmail.com`;
    const thoughts = getRandomThoughts(3);
    const friends = [];
    // Add friends
    for (let j = 0; j < 3; j++) {
      const friend = getRandomName();
      friends.push(friend);
    }

    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  }
const thoughts = [];
for (let i = 0; i < 20; i++) {
  const thoughtText = getRandomThoughts();
  const username = getRandomName();
  const reactions = getThoughtReactions(3);
  thoughts.push({
    thoughtText,
    username,
    reactions,
  });
}

  // await User.collection.insertMany(users);
  // await Thought.collection.insertMany(thoughts);

    // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});



// connection.on('error', (err) => err);

// connection.once('open', async () => {
//   console.log('connected');
//   // Delete the collections if they exist
//   let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
//   if (thoughtCheck.length) {
//     await connection.dropCollection('thoughts');
//   }
  
//   let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
//   if (userCheck.length) {
//     await connection.dropCollection('users');
//   }

//   const users = [];
  

//   for (let i = 0; i < 20; i++) {
    
//     const fullName = getRandomName();
//     const username = fullName
//       .toLowerCase()
//       .split(' ')
//       .join('');  
//     const email = `${ username }@gmail.com`;
//     const thoughts = getRandomThoughts(3);
//     const friends = [];
//     // Add friends
//     for (let j = 0; j < 3; j++) {
//       const friend = getRandomName();
//       friends.push(friend);
//     }

//     users.push({
//       username,
//       email,
//       thoughts,
//       friends,
//     });

//   }

//   // await User.collection.insertMany(users);
//   // await Thought.collection.insertOne(thoughts);

//   console.table(users);
//   console.table(Thought);
//   // loop through the saved applications, for each application we need to generate a application response and insert the application responses
//   console.table(users);
//   console.table(thoughts);
//   console.info('Seeding complete! 🌱');
//   process.exit(0);
// });
