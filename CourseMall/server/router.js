const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next);
});

router.get('/getUserNumber', (req, res, next) => {
  api.getUserNumber(req, res, next);
});

router.get('/getImgUrl', (req, res, next) => {
  api.getImgUrl(req, res, next);
});


router.get('/getOrder', (req, res, next) => {
  api.getOrder(req, res, next);
});

router.get('/getMyStudy', (req, res, next) => {
  api.getMyStudy(req, res, next);
});

router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});

router.post('/deleteOrder', (req, res, next) => {
  api.deleteOrder(req, res, next);
});

module.exports = router;