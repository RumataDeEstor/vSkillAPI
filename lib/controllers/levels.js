'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllLevels = getAllLevels;
exports.addLevel = addLevel;

var _skillLevel = require('../models/skillLevel');

var _skillLevel2 = _interopRequireDefault(_skillLevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAllLevels(req, res) {
  _skillLevel2.default.find({}, function (err, levels) {
    if (err) {
      res.send(err);
    } else {
      res.send(levels);
    }
  });
}

function addLevel(req, res) {
  var newLevel = new _skillLevel2.default({
    value: req.body.value,
    date: Date.now()
  });

  newLevel.save(function (err, level) {
    if (err) {
      res.send(err);
    } else {
      res.send(level._id);
    }
  });
}