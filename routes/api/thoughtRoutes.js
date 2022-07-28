const router = require('express').Router();
//importing inner modolarized routes from the controller 
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought); //get and post routes for thoughts

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/videos/:videoId/reactions
router.route('/:thoughtId/reactions').post(createReaction); //post route for creating reations for a specific thoughtID

// /api/videos/:videoId/reactions/:reactionId
router.route('/:thoughtId/responses/:responseId').delete(deleteReaction); //delete route for reactions based on VideoID and reactionID

module.exports = router;
