const express = require('express');
const TrackHistory = require('../models/TrackHistory');
const User = require('../models/User');
const auth = require('../auth');

const createRouter = () => {
  const router = express.Router();

  router.get('/', auth, (req, res) => {
    TrackHistory.find({user: req.user._id}).populate({path: 'track', populate: {path: 'album', populate: {path: 'artist'}}})
      .then((results) => res.send(results.reverse()))
      .catch(() => res.sendStatus(500));
  });

  router.post('/', async (req, res) => {
    const token = req.get('Token');

    const user = await User.findOne({token});
    if (!user) {
      res.status(401).send({error: 'user not authorised!'})
    } else {
      const track = {user: user._id, track: req.body.track, dateTime: new Date()};
      const track_history = new TrackHistory(track);
      track_history.save()
        .then(track_history => res.send(track_history))
        .catch(error => res.status(400).send(error));
    }
  });

  return router;
};

module.exports = createRouter;
