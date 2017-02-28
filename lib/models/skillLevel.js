'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('../utils/mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var skillLevelSchema = new Schema({
  value: {
    type: Number,
    required: true,
    default: 0
  },
  date: {
    type: Date,
    required: true, // (?)
    default: Date.now()
  }
});

exports.default = _mongoose2.default.model('SkillLevel', skillLevelSchema);