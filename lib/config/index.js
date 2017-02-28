'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nconf = require('nconf');

var _nconf2 = _interopRequireDefault(_nconf);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nconf2.default.argv().env().file({ file: _path2.default.join(__dirname, 'config.json') });

exports.default = _nconf2.default;