const { User, Thought } = require("../models");

const userController = {
  // get all users
  getUsers(req, res) {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
    },

  // get one user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.id })
    .then((user) => !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user))
    .catch((err) => res.status(500).json(err));
    },

  // create user
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },

  // update user by id
  updateUser( req, res ) {
    User.findOneAndUpdate({
      _id: req.params.id
  }, {
      $set: req.body
  }, {
      runValidators: true,
      new: true
  }).then((user) => {
      !user ? res.status(404).json({ message: 'No user' }) : res.json(user);

  }).catch((err) => res.status(500).json(err));


},

  // delete user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "No user with this id!" });
        }
        // BONUS: get ids of user's `thoughts` and delete them all
        // $in to find specific things
        return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
      })
      .then(() => {
        res.json({ message: "User and associated thoughts deleted!" });
      })
      .catch((err) => res.json(err));
  },

  // add friend
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  // delete friend
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "No user with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  }
};
module.exports = userController;