const app = require('express').Router();

// Get all users route 

app.get('/users', async (req, res) => {
    try {
      // Using model in route to find all documents that are instances of that model
      const result = await User.find({});
      res.status(200).json(result);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });

// Get one users route 
  app.get('/users/{_id}', async (req, res) => {
    try {
      const result = await User.findById({ _id: req.params._id })
        .populate('thoughts')
        .populate('friends');
      res.status(200).json(result);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });

// create new user route
app.post('/users', (req, res) => {
    const newUser = new User({ username: req.params.username, email: req.params.email, thoughts: req.params.thoughts, friends: req.params.friends });
    newUser.save();
    if (newUser) {
      res.status(200).json(newUser);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });

// Post update user route
app.update('/users/{_id}', async (req, res) => {
    try {
      const result = await Users.findOneAndUpdate({ _id: req.params._id }, { $set: req.body });
      res.status(200).json(result);
      console.log(`Deleted: ${result}`);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });

// Post delete user route
app.delete('/users/{_id}', async (req, res) => {
    try {
      const result = await Users.findOneAndDelete({ _id: req.params._id });
      res.status(200).json(result);
      console.log(`Deleted: ${result}`);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });

  // create new Friend route
app.post('/users/:userID/friends/:friendId', (req, res) => {
    const newUser = new Friends({ username: req.params.username, email: req.params.email, thoughts: req.params.thoughts, friends: req.params.friends });
    newUser.save();
    if (newUser) {
      res.status(200).json(newUser);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });
//  delete friend route
app.delete('/users/:userID/friends/:friendId', async (req, res) => {
    try {
      const result = await Friends.findOneAndDelete({ _id: req.params._id });
      res.status(200).json(result);
      console.log(`Deleted: ${result}`);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });