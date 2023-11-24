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
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .populate("friends")
      .populate("thoughts")
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "No user with this id!" });
        }
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  // create user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // update user by id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      // { username: req.body.username, email: req.body.email },
      // { new: true },

      (err, result) => {
        if (result) {
          res.status(200).json(result);
          console.log(`Updated: ${result}`);
        } else {
          console.log(err);
          res.status(500).json({ message: "error", err });
        }
      }
    );
  },

  // delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "No user with this id!" });
        }
        return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
      })
      .then(() => {
        res.json({ message: "User and associated thoughts deleted!" });
      })
      .catch((err) => res.json(err));
  },

  // add friend
  addFriend(req, res) {
    User.findOne({ _id: req.params.friendId })
      .select("-__v")
      .then((user) => {
        return User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: user._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // delete friend

  removeFriend(req, res) {
    User.findOne({ _id: req.params.friendId })
      .select("-__v")
      .then((user) => {
        return User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: user._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
module.exports = userController;
