const { Thought } = require('../../models');

const app = require('express').Router();

// Get all thoughts route 

app.get('/thoughts', async (req, res) => {
    try {
      // Using model in route to find all documents that are instances of that model
      const result = await Thought.find({});
      res.status(200).json(result);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });

// Get one thoughts route 
  app.get('/thoughts/:id', async (req, res) => {
    try {
      const result = await Thought.findById({ _id: req.params._id })
      res.status(200).json(result);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });

// create new thought route
app.post('/thoughts', (req, res) => {
    const newThought = new Thought({ thoughtText: "here it is", username: "name", userId: "id"});
    newThought.save();
    if (newThought) {
      res.status(200).json(newThought);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });

// update thought route
app.put('/thoughts/:id', async (req, res) => {
    try {
      const result = await thoughts.findOneAndUpdate({ _id: req.params._id }, { $set: req.body });
      res.status(200).json(result);
      console.log(`Deleted: ${result}`);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });

// delete user route
app.delete('/thoughts/:id', async (req, res) => {
    try {
      const result = await thoughts.findOneAndDelete({ _id: req.params._id });
      res.status(200).json(result);
      console.log(`Deleted: ${result}`);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });

  // create new Friend route
app.post('/thoughts/:thoughtId/reactions', (req, res) => {
    const newThought = new Friends({ username: req.params.username, email: req.params.email, thoughts: req.params.thoughts, friends: req.params.friends });
    newThought.save();
    if (newThought) {
      res.status(200).json(newThought);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });
//  delete friend route
app.delete('/thoughts/:thoughtId/reactions', async (req, res) => {
    try {
      const result = await Thought.findOneAndDelete({ reactionId: req.params._id });
      res.status(200).json(result);
      console.log(`Deleted: ${result}`);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });