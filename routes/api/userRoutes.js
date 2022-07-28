const router = require('express').Router();
//accessing the guts of the routes from the controllers
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
} = require('../../controllers/userController');

// /api/users  get route
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId --- get route and put route
router.route('/:userId')
.get(getSingleUser)
.put(updateUser);

module.exports = router;
