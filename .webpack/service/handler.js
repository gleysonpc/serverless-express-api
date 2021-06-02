module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handler.js":
/*!********************!*\
  !*** ./handler.js ***!
  \********************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
/* harmony import */ var _src_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/server */ "./src/server.js");

const handler = _src_server__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./src/config/db.js":
/*!**************************!*\
  !*** ./src/config/db.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2 */ "mysql2");
/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_1__);


const db = {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  dialectModule: mysql2__WEBPACK_IMPORTED_MODULE_1___default.a,
  logging: false,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};
const sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__["Sequelize"](db.database, db.username, db.password, {
  host: db.host,
  dialect: db.dialect,
  models: [__dirname + "/../models/"],
  logging: db.logging
});
/* harmony default export */ __webpack_exports__["default"] = (sequelize);

/***/ }),

/***/ "./src/controllers/usersController.js":
/*!********************************************!*\
  !*** ./src/controllers/usersController.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ "./src/models/User.js");


class UserController {
  async index(req, res) {
    const users = await _models_User__WEBPACK_IMPORTED_MODULE_0__["default"].findAll();
    return res.json(users);
  }

  async show(req, res) {
    const {
      id
    } = req.params;
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__["default"].findByPk(id);
    if (!user) return res.status(400).json({
      error: 'user not found!'
    });
    return res.json(user);
  }

  async store(req, res) {
    const {
      name,
      email
    } = req.body;
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__["default"].create({
      name,
      email
    });
    return res.json(user);
  }

  async update(req, res) {
    const {
      id
    } = req.params;
    const {
      name
    } = req.body;
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__["default"].findByPk(id);
    if (!user) return res.status(400).json({
      error: 'user not found!'
    });
    user.name = name;
    await user.save();
    return res.json(user);
  }

  async destroy(req, res) {
    const {
      id
    } = req.params;
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__["default"].findByPk(id);
    if (!user) return res.status(400).json({
      error: 'user not found!'
    });
    await user.destroy();
    return res.status(204);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new UserController());

/***/ }),

/***/ "./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/db */ "./src/config/db.js");
const {
  DataTypes,
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");



class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
}, {
  sequelize: _config_db__WEBPACK_IMPORTED_MODULE_0__["default"],
  modelName: 'users',
  timestamps: false
});
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_usersController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/usersController */ "./src/controllers/usersController.js");


const routes = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
routes.get('/users', _controllers_usersController__WEBPACK_IMPORTED_MODULE_1__["default"].index);
routes.get('/users/:id', _controllers_usersController__WEBPACK_IMPORTED_MODULE_1__["default"].show);
routes.post('/users', _controllers_usersController__WEBPACK_IMPORTED_MODULE_1__["default"].store);
routes.put('/users/:id', _controllers_usersController__WEBPACK_IMPORTED_MODULE_1__["default"].update);
routes.delete('/users/:id', _controllers_usersController__WEBPACK_IMPORTED_MODULE_1__["default"].destroy);
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! serverless-http */ "serverless-http");
/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(serverless_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/routes/index.js");




class App {
  constructor() {
    this.server = express__WEBPACK_IMPORTED_MODULE_0___default()();
    this.middleWares();
    this.routes();
  }

  routes() {
    this.server.use(_routes__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  middleWares() {
    this.server.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
  }

  handler() {
    return serverless_http__WEBPACK_IMPORTED_MODULE_1___default()(this.server);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new App().handler());

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mysql2");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serverless-http");

/***/ })

/******/ });
//# sourceMappingURL=handler.js.map