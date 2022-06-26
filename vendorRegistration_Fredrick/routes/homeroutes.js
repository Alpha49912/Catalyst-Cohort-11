const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
//required file that the server will use to post data
const Manager = require('../models/Vendor');

//const Registration = require('../models/Registration');
router.get('/', (req, res) => {
  res.render('vendor', { title: 'Registration form' });
});
//requesting route to post the database

router.post('/', async(req, res) => {
  try {
    const manager = new Manager(req.body);
    await manager.save();
    console.log(req.body);

  }
  catch (err) {
    res.status(404).render('vendor');
  }

});

router.get('/purchases', (req, res) => {
  res.render('purchases', { title: 'purchases form'});
});

module.exports = router;
