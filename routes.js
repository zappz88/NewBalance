const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/www.newbalance.com', function(req, res) {
  res.status(200).set('Content-Type', 'text/html');
  fs.readFile('./index/index.html', null, function(error, data) {
    if (error) {
      res.status(404).send('File not found');
    } else {
      res.status(200).send(data);
      res.end();
    }
  });
});

router.get('/www.newbalance.com/cart', function(req, res) {
  res.status(200).set('Content-Type', 'text/html');
  fs.readFile('./cart/cart.html', null, function(error, data) {
    if (error) {
      res.status(404).send('File not found');
    } else {
      res.status(200).send(data);
      res.end();
    }
  });
});

router.get('/www.newbalance.com/test', function(req, res) {
  res.status(200).set('Content-Type', 'text/html');
  fs.readFile('./test/test.html', null, function(error, data) {
    if (error) {
      res.status(404).send('File not found');
    } else {
      res.status(200).send(data);
      res.end();
    }
  });
});

router.get('/www.newbalance.com/men', function(req, res) {
  res.status(200).set('Content-Type', 'text/html');
  fs.readFile('./men/men.html', null, function(error, data) {
    if (error) {
      res.status(404).send('File not found');
    } else {
      res.status(200).send(data);
      res.end();
    }
  });
});

router.get('/www.newbalance.com/women', function(req, res) {
  res.status(200).set('Content-Type', 'text/html');
  fs.readFile('./women/women.html', null, function(error, data) {
    if (error) {
      res.status(404).send('File not found');
    } else {
      res.status(200).send(data);
      res.end();
    }
  });
});

https: module.exports = router;
