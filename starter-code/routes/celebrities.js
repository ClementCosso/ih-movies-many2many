const express = require('express');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movies');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('celebrities/index', {celebrities});
  })
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    res.render('celebrities/edit', {celebrity});
  })
});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then(celebrity => {
    Movie.find({celebrities : {$all: [celebrity._id]}})
    .then(movies => {
      res.render('celebrities/show', {celebrity, movies});
    })
  })
});

router.get('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(_ => {
    res.redirect('/celebrities');
  })
});

router.post('/', (req, res, next) => {
  Celebrity.create(req.body)
  .then(_ => {
    res.redirect('/celebrities');
  })
  .catch(_ => {
    res.render('/celebrities/new', {message: "Une erreur est survenue"});
  })
});

router.post('/:id/edit', (req, res, next) => {
  Celebrity.update({_id: req.params.id}, {$set: req.body})
  .then(_ => {
    res.redirect('/celebrities');
  })
  .catch(_ => {
    res.redirect('/celebrities');
  })
});

module.exports = router;
