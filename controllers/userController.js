const { User, Thought } = require("../models");
//exporting these functions to be applied to the inner part of the routes.  These are the guts.  
module.exports = {
  //get method for all users
  getUser(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //get method for single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate("friends") // .populate can reference these properties from the User model.  
      .populate("thoughts")
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'There is no user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // post route to create new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  // put method for updating user of specific userID
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User find with this ID!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
