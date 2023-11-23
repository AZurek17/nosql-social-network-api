
const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Adam',
        email: 'adam@gmail.com',
    },
    {
        username: 'Andy',
        email: 'andy@gmail.com'
    },
    {
        username: 'John',
        email: 'john@gmail.com'
    },
    {
        username: 'Ryan',
        email: 'ryan@gmail.com'
    },
    {
        username: 'darek',
        email: 'darek@gmail.com'
    },
    {
        username: 'Lillian',
        email: 'lillian@gmail.com'
    },
    {
        username: 'Chris',
        email: 'chris@gmail.com'
    },
    {
        username: 'Rosa',
        email: 'rosa@gmail.com'
    },
    {
        username: 'Daniel',
        email: 'daniel@gmail.com'
    },
    {
        username: 'Nathan',
        email: 'nathan@gmail.com'
    },
    {
        username: 'Kevin',
        email: 'kevin@gmail.com'
    },
  ]

  connection.on('error', (err) => err);

  connection.once('open', async () => {
      console.log('connected');
      // await Thought.deleteMany({});
      // await User.deleteMany({});
    
      await User.collection.insertMany(users);
  
      console.info('Seeding complete! 🌱');
      process.exit(0);
    });
  