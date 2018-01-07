var express = require('express');
var router = express.Router();

// const DB_USER = process.env.DB_USER || 'user';
// const DB_PASSWORD = process.env.DB_PASSWORD || '1234';

const point = require('../lib/pts');


const mongoose = require('mongoose');
mongoose.connect('mongodb://user:1234@ds147274.mlab.com:47274/database092317');



router.post('/savePoints', (req, res, next) => {
  // res.send(req.body.points)
  //cache profile information
  const pts = req.body.points
  //create in instance of the user schema
  let userPts = new point();
  //set profile information
  userPts.pts = pts;
  //save profile information
  userPts.save((err, userObj) => {
    //send status
    if(err){
      console.log(err);
      return res.status(500).send();
    } else {
      return res.status(200).send();
    }
  });
});

router.delete('/deletePoints', (req, res, next) => {
  const id = req.body.id;
  pt.findByIdAndRemove({_id: id}, (err) => {
    if(err){
      console.log(err);
      console.log(id);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
});

module.exports = router;
