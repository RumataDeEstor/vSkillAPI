'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addMiddleware(app) {
  app.use(_bodyParser2.default.urlencoded({ limit: '100mb', extended: true }));
  app.use(_bodyParser2.default.json());
  app.use((0, _morgan2.default)('dev'));

  (0, _routes2.default)(app);
}

exports.default = addMiddleware;