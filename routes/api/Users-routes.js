const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friends').post(addFriend);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;


// const app = require('express').Router();
// const { User  } = require('../../models')

// // Get all users route 

// app.get('/users', async (req, res) => {
//     try {
//       // Using model in route to find all documents that are instances of that model
//       const result = await User.find({});
//       res.status(200).json(result);
//     } catch (err) {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });

// // Get one users route 
//   app.get('/users/:id', async (req, res) => {
//     try {
//       const result = await User.findById({ _id: req.params._id })
//         .populate('thoughts')
//         .populate('friends');
//       res.status(200).json(result);
//     } catch (err) {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });

// // create new user route
// app.post('/users', (req, res) => {
//     const newUser = new User({ username: req.params.username, email: req.params.email, thoughts: req.params.thoughts, friends: req.params.friends });
//     newUser.save();
//     if (newUser) {
//       res.status(200).json(newUser);
//     } else {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });

// //  update user route
// app.put('/users/:id', async (req, res) => {
//     try {
//       const result = await User.findOneAndUpdate({ _id: req.params._id }, { $set: req.body });
//       res.status(200).json(result);
//       console.log(`Deleted: ${result}`);
//     } catch (err) {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });

// // delete user route
// app.delete('/users/:id', async (req, res) => {
//     try {
//       const result = await User.findOneAndDelete({ _id: req.params._id });
//       res.status(200).json(result);
//       console.log(`Deleted: ${result}`);
//     } catch (err) {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });

//   // create new Friend route
// app.post('/users/:userID/friends/:friendId', (req, res) => {
//     const newUser = new Friends({ username: req.params.username, email: req.params.email, thoughts: req.params.thoughts, friends: req.params.friends });
//     newUser.save();
//     if (newUser) {
//       res.status(200).json(newUser);
//     } else {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });
// //  delete friend route
// app.delete('/users/:userID/friends/:friendId', async (req, res) => {
//     try {
//       const result = await Friends.findOneAndDelete({ _id: req.params._id });
//       res.status(200).json(result);
//       console.log(`Deleted: ${result}`);
//     } catch (err) {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });