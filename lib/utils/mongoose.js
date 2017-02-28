'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_config2.default.get('MONGO_URI') || _config2.default.get('db:mongo_uri')); // (?)
var db = _mongoose2.default.connection;

db.on('error', function (err) {
  console.info('connection error:', err.message);
});

db.on('open', function () {
  console.info('Connected to DB!');
});

exports.default = _mongoose2.default;