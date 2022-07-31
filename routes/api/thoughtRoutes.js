const router = require('express').Router();
//importing inner modolarized routes from the controller 
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought); //get and post routes for thoughts

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtID/reactions
router.route('/:thoughtId/reactions').post(addReaction); //post route for creating reations for a specific thoughtID

// /api/thoughts/:thoughtID/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction); //delete route for reactions based on thoughtID and reactionID

module.exports = router;
