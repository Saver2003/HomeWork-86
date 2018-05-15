const express = require('express');
const Track = require('../models/Track');

const createRouter = () => {
  const router = express.Router();

  router.get('/', (req, res) => {
    if (req.query.album) {
      Track.find({album: req.query.album}).populate('album')
        .then((results) => res.send(results))
        .catch(() => res.sendStatus(500))
    } else {

      Track.find().populate('album')
        .then(tracks => res.send(tracks))
        .catch(() => res.sendStatus(500))
    }
  });

  router.post('/', (req, res) => {
    const track = new Track(req.body);

    track.save()
      .then(track => res.send(track))
      .catch(error => res.status(400).send(error))
  });

  return router;
};

module.exports = createRouter;