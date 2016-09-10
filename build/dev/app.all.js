webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $, App, app, mcoreapp, utils;
	
	$ = __webpack_require__(1);
	
	mcoreapp = __webpack_require__(2);
	
	App = mcoreapp.App;
	
	utils = __webpack_require__(3);
	
	__webpack_require__(4)(mcoreapp);
	
	__webpack_require__(5)(mcoreapp);
	
	__webpack_require__(7);
	
	__webpack_require__(16);
	
	__webpack_require__(17);
	
	app = new App($('#main'));
	
	__webpack_require__(18)(app, function() {
	  return app.run();
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1));
		else if(typeof define === 'function' && define.amd)
			define(["jquery"], factory);
		else {
			var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jquery"]);
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(this, function(__WEBPACK_EXTERNAL_MODULE_16__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 *
		 * @date 2016-01-26 11:37:47
		 * @author vfasky <vfasky@gmail.com>
		 * @link http://vfasky.com
		 */
		'use strict';
		var mcoreApp;
	
		mcoreApp = __webpack_require__(14);
	
		mcoreApp.util = __webpack_require__(15);
	
		mcoreApp.Template = __webpack_require__(17);
	
		mcoreApp.Component = __webpack_require__(18);
	
		mcoreApp.App = __webpack_require__(19);
	
		mcoreApp.Route = __webpack_require__(20);
	
		mcoreApp.BaseClass = __webpack_require__(23);
	
		mcoreApp.View = __webpack_require__(24);
	
		mcoreApp.PopUpView = __webpack_require__(25);
	
		mcoreApp.http = __webpack_require__(26);
	
		module.exports = mcoreApp;
	
	
	/***/ },
	/* 1 */,
	/* 2 */,
	/* 3 */,
	/* 4 */,
	/* 5 */,
	/* 6 */,
	/* 7 */,
	/* 8 */,
	/* 9 */,
	/* 10 */,
	/* 11 */,
	/* 12 */,
	/* 13 */,
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory();
			else if(typeof define === 'function' && define.amd)
				define([], factory);
			else {
				var a = factory();
				for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
			}
		})(this, function() {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};
	
		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {
	
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;
	
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};
	
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;
	
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
	
	
		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;
	
		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;
	
		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";
	
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {
	
			
			/**
			 * 基本 virtualDom 的模板引擎
			 * @date 2016-01-07 21:46:45
			 * @author vfasky <vfasky@gmail.com>
			 * @link http://vfasky.com
			 */
			'use strict';
			module.exports = {
			  version: '2.0.0',
			  virtualDom: __webpack_require__(1),
			  util: __webpack_require__(6),
			  EventEmitter: __webpack_require__(4),
			  Template: __webpack_require__(3),
			  Component: __webpack_require__(13)
			};
	
	
		/***/ },
		/* 1 */
		/***/ function(module, exports, __webpack_require__) {
	
			
			/**
			 * simple-virtual-dom
			 * @date 2016-01-07 21:50:58
			 */
			'use strict';
			module.exports = {
			  Element: __webpack_require__(2),
			  diff: __webpack_require__(7),
			  patch: __webpack_require__(8)
			};
	
	
		/***/ },
		/* 2 */
		/***/ function(module, exports, __webpack_require__) {
	
			
			/**
			 * 修改自 simple-virtual-dom
			 * @date 2016-01-21 19:34:48
			 */
			'use strict';
			var Element, Template, _id, each, isFunction, ref, setElementAttr,
			  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
			_id = 0;
	
			Template = __webpack_require__(3);
	
			ref = __webpack_require__(6), setElementAttr = ref.setElementAttr, each = ref.each, isFunction = ref.isFunction;
	
			Element = (function() {
			  function Element(tagName, props, children) {
			    var count;
			    this.props = props != null ? props : {};
			    this.children = children != null ? children : [];
			    this.tagName = tagName.toLowerCase();
			    this._id = _id++;
			    this._binders = [];
			    this._bindersReg = [];
			    this._component = null;
			    this._componentTree = [];
			    this.key = this.props.key || void 0;
			    count = 0;
			    each(this.children, (function(_this) {
			      return function(child, i) {
			        if (child instanceof Element) {
			          count += child.count;
			        } else {
			          _this.children[i] = String(child);
			        }
			        return count++;
			      };
			    })(this));
			    this.count = count;
			  }
	
			  Element.prototype.render = function() {
			    var attr, binder, el, j, len, ref1, ref2, value;
			    el = this.bindComponent();
			    if (false === el) {
			      el = document.createElement(this.tagName);
			      if (this.template) {
			        el._element = this;
			        this.el = el;
			      }
			      ref1 = this.props;
			      for (attr in ref1) {
			        value = ref1[attr];
			        this.setAttribute(el, attr, value);
			      }
			      each(this.children, (function(_this) {
			        return function(child) {
			          var c, childEl, j, len, ref2;
			          if (child instanceof Element) {
			            childEl = child.render();
			            if (child._component) {
			              _this._componentTree.push(child._component);
			            }
			            if (child._componentTree) {
			              ref2 = child._componentTree;
			              for (j = 0, len = ref2.length; j < len; j++) {
			                c = ref2[j];
			                _this._componentTree.push(c);
			              }
			            }
			          } else {
			            childEl = document.createTextNode(child);
			          }
			          return el.appendChild(childEl);
			        };
			      })(this));
			      if (this.props.hasOwnProperty('value')) {
			        this.setAttribute(el, 'value', this.props.value);
			      }
			      ref2 = this._binders;
			      for (j = 0, len = ref2.length; j < len; j++) {
			        binder = ref2[j];
			        if (binder.binder.rendered) {
			          binder.binder.rendered.call(this, el, binder.value);
			        }
			      }
			    }
			    if (!el._element && this._componentTree.length > 0) {
			      el._element = this;
			      this.el = el;
			    }
			    return el;
			  };
	
			  Element.prototype.removeAttribute = function(attrName) {
			    var binder, j, len, ref1;
			    attrName = attrName.toLowerCase();
			    if (this._component) {
			      this._component.update(attrName, null);
			    }
			    ref1 = this._binders;
			    for (j = 0, len = ref1.length; j < len; j++) {
			      binder = ref1[j];
			      if (binder.attrName === attrName) {
			        if (binder.binder.remove) {
			          binder.binder.remove.call(this, this.el);
			        }
			        binder.value = null;
			        return;
			      }
			    }
			    return this.el.removeAttribute(attrName);
			  };
	
			  Element.prototype.destroy = function() {
			    var attrName, c, event, j, len, ref1, results;
			    if (this._component) {
			      this._component.destroy();
			    }
			    ref1 = this._componentTree;
			    for (j = 0, len = ref1.length; j < len; j++) {
			      c = ref1[j];
			      c.destroy();
			    }
			    this._componentTree = [];
			    this._component = null;
			    if (!this.template) {
			      return;
			    }
			    results = [];
			    for (attrName in this.props) {
			      if (attrName.indexOf('on-') === 0) {
			        event = attrName.replace('on-', '');
			        results.push(this.template.removeEvent(event, this.el, this._id));
			      } else {
			        results.push(void 0);
			      }
			    }
			    return results;
			  };
	
			  Element.prototype.setAttribute = function(el, attrName, value) {
			    var binder, j, len, ref1;
			    attrName = String(attrName).toLowerCase();
			    if (this._component) {
			      this._component.update(attrName, value);
			    }
			    if (this.template) {
			      if (attrName.indexOf('on-') === 0) {
			        this.template.addEvent(attrName.replace('on-', ''), el, value, this._id);
			        return;
			      }
			      ref1 = this._binders;
			      for (j = 0, len = ref1.length; j < len; j++) {
			        binder = ref1[j];
			        if (binder.attrName === attrName) {
			          if (indexOf.call(this._bindersReg, attrName) < 0) {
			            this._bindersReg.push(attrName);
			            if (binder.binder.init) {
			              binder.binder.init.call(this, el);
			            }
			          }
			          if (binder.binder.update) {
			            binder.binder.update.call(this, el, value);
			          } else if (isFunction(binder.binder)) {
			            binder.binder.call(this, el, value);
			          }
			          binder.value = value;
			          return;
			        }
			      }
			    }
			    return setElementAttr(el, attrName, value, true);
			  };
	
			  Element.prototype.bindComponent = function() {
			    var attr, el, ref1, value;
			    if (false === Template.components.hasOwnProperty(this.tagName)) {
			      return false;
			    }
			    el = document.createElement(this.tagName);
			    el._element = this;
			    this._component = new Template.components[this.tagName](el, this);
			    ref1 = this.props;
			    for (attr in ref1) {
			      value = ref1[attr];
			      this.setAttribute(el, attr, value);
			    }
			    el._component = this._component;
			    return el;
			  };
	
			  Element.prototype.bindBinder = function(attrName, value) {
			    if (Template.binders.hasOwnProperty(attrName)) {
			      return this._binders.push({
			        binder: Template.binders[attrName],
			        value: value,
			        attrName: attrName.toLowerCase()
			      });
			    }
			  };
	
			  Element.prototype.bindTemplate = function(template) {
			    this.template = template;
			  };
	
			  return Element;
	
			})();
	
			module.exports = Element;
	
	
		/***/ },
		/* 3 */
		/***/ function(module, exports, __webpack_require__) {
	
			
			/*
			 * # 基于 virtual dom 的模板引擎
			 * @date 2016-01-09 16:39:56
			 * @author vfasky <vfasky@gmail.com>
			 * @link http://vfasky.com
			 */
			'use strict';
			var EventEmitter, Template, addEvent, diff, each, extend, isArray, isFunction, isPlainObject, nextTick, nodeContains, objectKeys, patch, ref, removeEvent,
			  extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
			  hasProp = {}.hasOwnProperty,
			  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
			EventEmitter = __webpack_require__(4);
	
			ref = __webpack_require__(6), extend = ref.extend, nextTick = ref.nextTick, each = ref.each, isFunction = ref.isFunction, isArray = ref.isArray, isPlainObject = ref.isPlainObject, objectKeys = ref.objectKeys, addEvent = ref.addEvent, removeEvent = ref.removeEvent, nodeContains = ref.nodeContains;
	
			diff = __webpack_require__(7);
	
			patch = __webpack_require__(8);
	
			Template = (function(superClass) {
			  extend1(Template, superClass);
	
	
			  /*
			  ## demo
			  
			  ```coffee
			  {Template} = require 'mcore'
			  tpl = new Template()
			  
			  
			  tpl.showIx = (event, el, v, k)->
			      console.log v, k
			  
			  tpl.render require('./tpl/test.html'),
			      list: [
			         {name : 'ok1'}
			         {name : 'ok2'}
			      ]
			  , -> # rendered
			      document.body.appendChild tpl.refs
			  ```
			  
			  ```html
			  <!-- ./tpl/test.html -->
			  <ul>
			    <li mc-for="v , k in scope.list" mc-on-click="showIx(v, k)">
			      <span mc-data-ix="k + 1">{v.name}</span>
			    </li>
			  </ul>
			  
			  ```
			  
			  > **注：模板事件回调至少传入二个参数**
			  > * 第一个参数：event
			  > * 第二个参数：DOM
			  > * ... 模板中定义的参数，如：
			  > `mc-on-click="showIx(v, k)"` 中接收 v, k
			  > 需要这样 `tpl.showIx = (event, el, v, k)->`
			  
			  > *如果事件不需要传参，侧不需要 `()`, 否则 h2svd-loader 编绎时，会报错*
			   */
	
			  function Template() {
			    this._status = 0;
			    this._queueId = null;
			    this._queueCallbacks = [];
			    this._initTask = [];
			    this._events = {};
			    this._eventReged = [];
			    this._eventListener = {};
			    this.refs = null;
			    this.virtualDomDefine = null;
			    this.virtualDom = null;
			    this.scope = {};
			    this.init();
			  }
	
	
			  /*
			  ## 更新 `scope` 值
			  ```coffee
			  #清空 `scope.list`
			  tpl.set 'list', []
			  ```
			  **注意!**
			  
			  `key` 只能是 scope 的属性，不能更新子属性
			  如: `tpl.set 'list[0].name', 'test'` 是不正确的
			  
			  正确的做法是:
			  ```coffee
			  list = tpl.get 'list'
			  list[0].name = 'test'
			  tpl.set 'list', list
			  ```
			  
			  你可以不停地更改 scope 的值，而不用担心性能问题，
			  因为 scope 的更改，会放入队列中，放到浏览器的 nextTick 中渲染。
			  换言之，你更改N次 scope , 模板引擎只更新一次 DOM
			  
			  如果你需要在值应用到DOM后，执行回调，可以传入第三个参数
			  ```coffee
			  tpl.set 'list', list, ->
			      console.log 'dom change'
			  ```
			  
			  你也可以强制模板引擎马上渲染DOM,而不是放入队列(当然，不推荐这样做，因为会阻塞后面的代码)
			  ```coffee
			  tpl.set 'list', list, true
			  console.log 'dom change'
			  ```
			   */
	
			  Template.prototype.set = function(key, value, doneOrAsync) {
			    var isChange;
			    if (doneOrAsync == null) {
			      doneOrAsync = null;
			    }
			    isChange = this.scope[key] !== value;
			    this.scope[key] = value;
			    if (this._status === 0) {
			      if (isFunction(doneOrAsync)) {
			        this._queueCallbacks.push(doneOrAsync);
			      }
			      return;
			    }
			    if (isChange) {
			      this.emit('changeScope', this.scope, key, value);
			      this.emit('change:' + key, value);
			    }
			    return this.renderQueue(doneOrAsync);
			  };
	
	
			  /*
			  ## 取值
			  ```coffee
			  list = tpl.get 'list'
			  ```
			   */
	
			  Template.prototype.get = function(key, defaultVal) {
			    if (defaultVal == null) {
			      defaultVal = null;
			    }
			    if (this.scope.hasOwnProperty(key)) {
			      return this.scope[key];
			    }
			    return defaultVal;
			  };
	
	
			  /*
			  ## 删除 scope 的 key
			  ```coffee
			  tpl.remove 'list'
			  ```
			  > 同样，第二个参数，可以是回调或者强制马上渲染
			   */
	
			  Template.prototype.remove = function(key, doneOrAsync) {
			    if (doneOrAsync == null) {
			      doneOrAsync = null;
			    }
			    if (false === this.scope.hasOwnProperty(key)) {
			      return;
			    }
			    delete this.scope[key];
			    if (this._status === 0) {
			      return;
			    }
			    this.emit('removeScope', this.scope, key);
			    this.emit('change:' + key, null);
			    return this.renderQueue(doneOrAsync);
			  };
	
	
			  /*
			  ## 销毁实例
			  已经插入 DOM Tree 的，会被移除
			   */
	
			  Template.prototype.destroy = function() {
			    this.emit('destroy');
			    if (this.refs && this.refs._element && this.refs._element.destroy) {
			      this.refs._element.destroy();
			      this.refs._element = null;
			    }
			    if (this.refs && this.refs.parentNode && this.refs.parentNode.removeChild) {
			      this.refs.parentNode.removeChild(this.refs);
			    }
			    this.virtualDomDefine = null;
			    this.virtualDom = null;
			    this.scope = null;
			    this.refs = null;
			    this._events = null;
			    this._initTask = null;
			    this._eventReged = null;
			    return this._eventListener = null;
			  };
	
	
			  /*
			  ## 预留接口 , extnds 时，直接重写
			   */
	
			  Template.prototype.init = function() {};
	
	
			  /*
			  ## 渲染
			   - {Function} virtualDomDefine 用于生成 virtual dom 的函数
			   - {Object} scope
			   - {Null | Function | Boolean} doneOrAsync 渲染成功时回调或者马上渲染，不放入队列
			   */
	
			  Template.prototype.render = function(virtualDomDefine, scope, doneOrAsync) {
			    var scopeKeys, scopeLen;
			    this.virtualDomDefine = virtualDomDefine;
			    if (scope == null) {
			      scope = {};
			    }
			    if (doneOrAsync == null) {
			      doneOrAsync = function() {};
			    }
			    this._status = 1;
			    this.emit('beforeRender');
			    scopeKeys = objectKeys(scope);
			    scopeLen = scopeKeys.length;
			    if (scopeLen === 0) {
			      this.renderQueue(doneOrAsync);
			    } else {
			      each(scopeKeys, (function(_this) {
			        return function(v) {
			          return _this.set(v, scope[v]);
			        };
			      })(this));
			      this.renderQueue(doneOrAsync);
			    }
			    return this;
			  };
	
			  Template.prototype._render = function() {
			    var patches, scope, virtualDom;
			    scope = this.scope;
			    if (this.virtualDomDefine) {
			      virtualDom = this.virtualDomDefine(scope, this).virtualDom;
			      this._status = 2;
			      if (this.virtualDom === null) {
			        this.virtualDom = virtualDom;
			        this.refs = this.virtualDom.render();
			        each(this._initTask, function(task) {
			          return task();
			        });
			        this._initTask = [];
			      } else {
			        patches = diff(this.virtualDom, virtualDom);
			        this.virtualDom = virtualDom;
			        patch(this.refs, patches);
			      }
			      this._status = 3;
			      this.emit('rendered', this.refs);
			      return each(this._queueCallbacks, (function(_this) {
			        return function(done, k) {
			          if (isFunction(done)) {
			            done(_this.refs);
			            return _this._queueCallbacks[k] = null;
			          }
			        };
			      })(this));
			    }
			  };
	
			  Template.prototype.renderQueue = function(doneOrAsync) {
			    if (isFunction(doneOrAsync)) {
			      this._queueCallbacks.push(doneOrAsync);
			    }
			    nextTick.clear(this._queueId);
			    if (true === doneOrAsync) {
			      return this._render();
			    } else {
			      this._status = 1;
			      return this._queueId = nextTick((function(_this) {
			        return function() {
			          return _this._render();
			        };
			      })(this));
			    }
			  };
	
			  Template.prototype.addEvent = function(event, el, callback, id) {
			    var base, isIn;
			    event = event.toLowerCase();
			    (base = this._events)[event] || (base[event] = []);
			    isIn = false;
			    each(this._events[event], function(e) {
			      if (e.id === id) {
			        isIn = true;
			        e.callback = callback;
			        return false;
			      }
			    });
			    if (false === isIn) {
			      this._events[event].splice(0, 0, {
			        el: el,
			        callback: callback,
			        id: id
			      });
			    }
			    return this.addEventListener(event, el);
			  };
	
			  Template.prototype.removeEvent = function(event, el, id) {
			    if (!this.refs) {
			      return;
			    }
			    event = event.toLowerCase();
			    if (false === this._events.hasOwnProperty(event)) {
			      return;
			    }
			    each(this._events[event], (function(_this) {
			      return function(e, i) {
			        if (e.id === id) {
			          _this._events[event].splice(i, 1);
			          return false;
			        }
			      };
			    })(this));
			    if (this._events[event].length === 0) {
			      return removeEvent(this.refs, event, this._eventListener[event]);
			    }
			  };
	
			  Template.prototype.regEventCallback = function(event) {
			    this._eventReged.push(event);
			    return this._eventListener[event] = (function(_this) {
			      return function(e) {
			        var eventRes, tasks;
			        tasks = _this._events[event];
			        eventRes = null;
			        each(tasks, function(task) {
			          var _args, args, callbackName, res;
			          if (task.el === e.target || nodeContains(task.el, e.target)) {
			            res = null;
			            args = [e, task.el];
			            callbackName = task.callback;
			            if (isArray(task.callback)) {
			              _args = task.callback;
			              callbackName = _args[0];
			              each(_args, function(arg, k) {
			                if (k > 0) {
			                  return args.push(arg);
			                }
			              });
			            }
			            if (_this._proxy && isFunction(_this._proxy[callbackName])) {
			              res = _this._proxy[callbackName].apply(_this._proxy, args);
			            } else if (isFunction(callbackName)) {
			              res = callbackName.apply(_this, args);
			            } else if (isFunction(_this[callbackName])) {
			              res = _this[callbackName].apply(_this, args);
			            } else {
			              console.log(task.callback);
			              throw new Error('not callback : ' + task.callback);
			            }
			            eventRes = res;
			            if (false === res) {
			              if (e.stopPropagation && e.preventDefault) {
			                e.stopPropagation();
			                e.preventDefault();
			              } else {
			                window.event.cancelBubble = true;
			                window.event.returnValue = false;
			              }
			            }
			            return false;
			          }
			        });
			        return eventRes;
			      };
			    })(this);
			  };
	
			  Template.prototype.addEventListener = function(event) {
			    if (!this.refs) {
			      this._initTask.push((function(_this) {
			        return function() {
			          return _this.addEventListener(event);
			        };
			      })(this));
			      return;
			    }
			    if (indexOf.call(this._eventReged, event) < 0) {
			      this.regEventCallback(event);
			      return addEvent(this.refs, event, this._eventListener[event]);
			    }
			  };
	
			  return Template;
	
			})(EventEmitter);
	
			Template.formatters = __webpack_require__(11);
	
			Template.components = {};
	
			Template.binders = __webpack_require__(12);
	
			Template.getEnv = function(el) {
			  var proxyEnv;
			  proxyEnv = null;
			  if (el._element.template._proxy) {
			    proxyEnv = el._element.template._proxy;
			  } else if (el._element.template[funName]) {
			    proxyEnv = el._element.template;
			  }
			  return proxyEnv;
			};
	
			Template.strToFun = function(el, funName) {
			  var callback, proxyEnv, proxyFun;
			  if (!el._element) {
			    return false;
			  }
			  proxyFun = null;
			  proxyEnv = null;
			  if (el._element.template.hasOwnProperty('_proxy') && el._element.template._proxy[funName]) {
			    proxyEnv = el._element.template._proxy;
			  } else if (el._element.template[funName]) {
			    proxyEnv = el._element.template;
			  }
			  if (proxyEnv) {
			    proxyFun = proxyEnv[funName];
			    callback = function() {
			      return proxyFun.apply(proxyEnv, arguments);
			    };
			    return callback;
			  }
			  return false;
			};
	
			module.exports = Template;
	
	
		/***/ },
		/* 4 */
		/***/ function(module, exports, __webpack_require__) {
	
			
			/**
			 * EventEmitter
			 * @date 2016-01-07 21:57:26
			 */
			'use strict';
			module.exports = __webpack_require__(5);
	
	
		/***/ },
		/* 5 */
		/***/ function(module, exports, __webpack_require__) {
	
			'use strict';
	
			var has = Object.prototype.hasOwnProperty;
	
			//
			// We store our EE objects in a plain object whose properties are event names.
			// If `Object.create(null)` is not supported we prefix the event names with a
			// `~` to make sure that the built-in object properties are not overridden or
			// used as an attack vector.
			// We also assume that `Object.create(null)` is available when the event name
			// is an ES6 Symbol.
			//
			var prefix = typeof Object.create !== 'function' ? '~' : false;
	
			/**
			 * Representation of a single EventEmitter function.
			 *
			 * @param {Function} fn Event handler to be called.
			 * @param {Mixed} context Context for function execution.
			 * @param {Boolean} [once=false] Only emit once
			 * @api private
			 */
			function EE(fn, context, once) {
			  this.fn = fn;
			  this.context = context;
			  this.once = once || false;
			}
	
			/**
			 * Minimal EventEmitter interface that is molded against the Node.js
			 * EventEmitter interface.
			 *
			 * @constructor
			 * @api public
			 */
			function EventEmitter() { /* Nothing to set */ }
	
			/**
			 * Hold the assigned EventEmitters by name.
			 *
			 * @type {Object}
			 * @private
			 */
			EventEmitter.prototype._events = undefined;
	
			/**
			 * Return an array listing the events for which the emitter has registered
			 * listeners.
			 *
			 * @returns {Array}
			 * @api public
			 */
			EventEmitter.prototype.eventNames = function eventNames() {
			  var events = this._events
			    , names = []
			    , name;
	
			  if (!events) return names;
	
			  for (name in events) {
			    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
			  }
	
			  if (Object.getOwnPropertySymbols) {
			    return names.concat(Object.getOwnPropertySymbols(events));
			  }
	
			  return names;
			};
	
			/**
			 * Return a list of assigned event listeners.
			 *
			 * @param {String} event The events that should be listed.
			 * @param {Boolean} exists We only need to know if there are listeners.
			 * @returns {Array|Boolean}
			 * @api public
			 */
			EventEmitter.prototype.listeners = function listeners(event, exists) {
			  var evt = prefix ? prefix + event : event
			    , available = this._events && this._events[evt];
	
			  if (exists) return !!available;
			  if (!available) return [];
			  if (available.fn) return [available.fn];
	
			  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
			    ee[i] = available[i].fn;
			  }
	
			  return ee;
			};
	
			/**
			 * Emit an event to all registered event listeners.
			 *
			 * @param {String} event The name of the event.
			 * @returns {Boolean} Indication if we've emitted an event.
			 * @api public
			 */
			EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
			  var evt = prefix ? prefix + event : event;
	
			  if (!this._events || !this._events[evt]) return false;
	
			  var listeners = this._events[evt]
			    , len = arguments.length
			    , args
			    , i;
	
			  if ('function' === typeof listeners.fn) {
			    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
			    switch (len) {
			      case 1: return listeners.fn.call(listeners.context), true;
			      case 2: return listeners.fn.call(listeners.context, a1), true;
			      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
			      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
			      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
			      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
			    }
	
			    for (i = 1, args = new Array(len -1); i < len; i++) {
			      args[i - 1] = arguments[i];
			    }
	
			    listeners.fn.apply(listeners.context, args);
			  } else {
			    var length = listeners.length
			      , j;
	
			    for (i = 0; i < length; i++) {
			      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
			      switch (len) {
			        case 1: listeners[i].fn.call(listeners[i].context); break;
			        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
			        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
			        default:
			          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
			            args[j - 1] = arguments[j];
			          }
	
			          listeners[i].fn.apply(listeners[i].context, args);
			      }
			    }
			  }
	
			  return true;
			};
	
			/**
			 * Register a new EventListener for the given event.
			 *
			 * @param {String} event Name of the event.
			 * @param {Function} fn Callback function.
			 * @param {Mixed} [context=this] The context of the function.
			 * @api public
			 */
			EventEmitter.prototype.on = function on(event, fn, context) {
			  var listener = new EE(fn, context || this)
			    , evt = prefix ? prefix + event : event;
	
			  if (!this._events) this._events = prefix ? {} : Object.create(null);
			  if (!this._events[evt]) this._events[evt] = listener;
			  else {
			    if (!this._events[evt].fn) this._events[evt].push(listener);
			    else this._events[evt] = [
			      this._events[evt], listener
			    ];
			  }
	
			  return this;
			};
	
			/**
			 * Add an EventListener that's only called once.
			 *
			 * @param {String} event Name of the event.
			 * @param {Function} fn Callback function.
			 * @param {Mixed} [context=this] The context of the function.
			 * @api public
			 */
			EventEmitter.prototype.once = function once(event, fn, context) {
			  var listener = new EE(fn, context || this, true)
			    , evt = prefix ? prefix + event : event;
	
			  if (!this._events) this._events = prefix ? {} : Object.create(null);
			  if (!this._events[evt]) this._events[evt] = listener;
			  else {
			    if (!this._events[evt].fn) this._events[evt].push(listener);
			    else this._events[evt] = [
			      this._events[evt], listener
			    ];
			  }
	
			  return this;
			};
	
			/**
			 * Remove event listeners.
			 *
			 * @param {String} event The event we want to remove.
			 * @param {Function} fn The listener that we need to find.
			 * @param {Mixed} context Only remove listeners matching this context.
			 * @param {Boolean} once Only remove once listeners.
			 * @api public
			 */
			EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
			  var evt = prefix ? prefix + event : event;
	
			  if (!this._events || !this._events[evt]) return this;
	
			  var listeners = this._events[evt]
			    , events = [];
	
			  if (fn) {
			    if (listeners.fn) {
			      if (
			           listeners.fn !== fn
			        || (once && !listeners.once)
			        || (context && listeners.context !== context)
			      ) {
			        events.push(listeners);
			      }
			    } else {
			      for (var i = 0, length = listeners.length; i < length; i++) {
			        if (
			             listeners[i].fn !== fn
			          || (once && !listeners[i].once)
			          || (context && listeners[i].context !== context)
			        ) {
			          events.push(listeners[i]);
			        }
			      }
			    }
			  }
	
			  //
			  // Reset the array, or remove it completely if we have no more listeners.
			  //
			  if (events.length) {
			    this._events[evt] = events.length === 1 ? events[0] : events;
			  } else {
			    delete this._events[evt];
			  }
	
			  return this;
			};
	
			/**
			 * Remove all listeners or only the listeners for the specified event.
			 *
			 * @param {String} event The event want to remove all listeners for.
			 * @api public
			 */
			EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
			  if (!this._events) return this;
	
			  if (event) delete this._events[prefix ? prefix + event : event];
			  else this._events = prefix ? {} : Object.create(null);
	
			  return this;
			};
	
			//
			// Alias methods names because people roll like that.
			//
			EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
			EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
			//
			// This function doesn't apply anymore.
			//
			EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
			  return this;
			};
	
			//
			// Expose the prefix.
			//
			EventEmitter.prefixed = prefix;
	
			//
			// Expose the module.
			//
			if (true) {
			  module.exports = EventEmitter;
			}
	
	
		/***/ },
		/* 6 */
		/***/ function(module, exports) {
	
			
			/**
			 *
			 * @date 2016-01-11 20:41:14
			 * @author vfasky <vfasky@gmail.com>
			 * @link http://vfasky.com
			 */
			'use strict';
			var _isNumberReg;
	
			if (window.Node && Node.prototype && !Node.prototype.contains) {
			  Node.prototype.contains = function(arg) {
			    return !!(this.compareDocumentPosition(arg) & 16);
			  };
			}
	
			_isNumberReg = /^-{0,1}\d*\.{0,1}\d+$/;
	
			exports.isNumber = function(x) {
			  return _isNumberReg.test(x);
			};
	
			exports.isArray = function(x) {
			  if (Array.isArray) {
			    return Array.isArray(x);
			  }
			  return Object.prototype.toString.call(x) === '[object Array]';
			};
	
			exports.isObject = function(x) {
			  return Object.prototype.toString.call(x) === '[object Object]';
			};
	
			exports.isString = function(x) {
			  return Object.prototype.toString.call(x) === '[object String]';
			};
	
			exports.isFunction = function(x) {
			  return Object.prototype.toString.call(x) === '[object Function]';
			};
	
			exports.isPlainObject = function(x) {
			  var hasIsPropertyOfMethod, hasOwnConstructor, key, lastKey;
			  if (!x || Object.prototype.toString.call(x) !== '[object Object]' || x.nodeType || x.setInterval) {
			    return false;
			  }
			  hasOwnConstructor = Object.hasOwnProperty.call(x, 'constructor');
			  hasIsPropertyOfMethod = Object.hasOwnProperty.call(x.constructor.prototype, 'isPrototypeOf');
			  if (x.constructor && !hasOwnConstructor && !hasIsPropertyOfMethod) {
			    return false;
			  }
			  for (key in x) {
			    lastKey = key;
			  }
			  return typeof lastKey === 'undefined' || Object.hasOwnProperty.call(x, lastKey);
			};
	
			exports.extend = function() {
			  var clone, copy, deep, i, j, length, name, options, ref, ref1, src, start, target;
			  target = arguments[0] || {};
			  length = arguments.length;
			  deep = false;
			  start = 1;
			  if (typeof target === 'boolean') {
			    deep = target;
			    target = arguments[1] || {};
			    start = 2;
			  }
			  if (typeof target !== 'object' && typeof target !== 'function') {
			    target = {};
			  }
			  for (i = j = ref = start, ref1 = length; ref <= ref1 ? j < ref1 : j > ref1; i = ref <= ref1 ? ++j : --j) {
			    if ((options = arguments[i]) !== null) {
			      for (name in options) {
			        src = target[name];
			        copy = options[name];
			        if (target === copy) {
			          continue;
			        }
			        if (deep && copy && (exports.isPlainObject(copy) || exports.isArray(copy))) {
			          clone = {};
			          if (src && (exports.isPlainObject(src) || exports.isArray(src))) {
			            clone = exports.isArray(copy) && [] || {};
			          }
			          target[name] = exports.extend(deep, clone, copy);
			        } else if (typeof copy !== 'undefined') {
			          target[name] = copy;
			        }
			      }
			    }
			  }
			  return target;
			};
	
			exports.setElementAttr = function(el, attrName, value, noHash) {
			  var tagName;
			  if (attrName === 'key') {
			    return el._key = value;
			  }
			  if (attrName === 'style') {
			    return el.style.cssText = value;
			  }
			  if (attrName === 'class') {
			    return el.className = value;
			  }
			  tagName = (el.tagName || '').toLowerCase();
			  if (attrName === 'value' && (tagName === 'input' || tagName === 'textarea' || tagName === 'select')) {
			    return el.value = value;
			  }
			  if (el._element && el._element.setAttribute && !noHash) {
			    return el._element.setAttribute(el, attrName, value);
			  } else {
			    if (exports.isString(value) || exports.isNumber(value)) {
			      return el.setAttribute(attrName, value);
			    }
			  }
			};
	
			exports.removeElementAttr = function(el, attrName) {
			  if (el._element && el._element.removeAttribute) {
			    return el._element.removeAttribute(attrName);
			  } else {
			    return el.removeAttribute(attrName);
			  }
			};
	
			exports.toArray = function(listLike) {
			  var i, j, list, ref;
			  if (!listLike) {
			    return [];
			  }
			  list = [];
			  for (i = j = 0, ref = listLike.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
			    list.push(listLike[i]);
			  }
			  return list;
			};
	
			exports.each = function(arr, done) {
			  var j, k, len, res, v;
			  for (k = j = 0, len = arr.length; j < len; k = ++j) {
			    v = arr[k];
			    res = done(v, k);
			    if (false === res) {
			      return;
			    }
			  }
			};
	
			exports.objectKeys = function(obj) {
			  var key, keys;
			  if (obj == null) {
			    obj = {};
			  }
			  if (Object.keys) {
			    return Object.keys(obj);
			  }
			  keys = [];
			  for (key in obj) {
			    keys.push(key);
			  }
			  return keys;
			};
	
			exports.nodeContains = function(parentNode, node) {
			  return parentNode.contains(node);
			};
	
			exports.addEvent = function(node, type, callback) {
			  if (node.addEventListener) {
			    return node.addEventListener(type, callback);
			  } else if (node.attachEvent) {
			    node['e' + type + callback] = callback;
			    node[type + callback] = function() {
			      var event;
			      event = window.event;
			      event.target = event.srcElement;
			      return node['e' + type + callback](event);
			    };
			    return node.attachEvent('on' + type, node[type + callback]);
			  }
			};
	
			exports.removeEvent = function(node, type, callback) {
			  if (node.removeEventListener) {
			    return node.removeEventListener(type, callback);
			  } else if (node.detachEvent) {
			    node.detachEvent('on' + type, node[type + callback]);
			    return node[type + callback] = null;
			  }
			};
	
			(function() {
			  if (window.requestAnimationFrame) {
			    exports.nextTick = function(fun) {
			      return window.requestAnimationFrame(function() {
			        return fun();
			      });
			    };
			    return exports.nextTick.clear = function(id) {
			      if (id) {
			        return window.cancelAnimationFrame(id);
			      }
			    };
			  } else {
			    exports.nextTick = function(fun) {
			      return setTimeout(fun, 0);
			    };
			    return exports.nextTick.clear = function(id) {
			      if (id) {
			        return clearTimeout(id);
			      }
			    };
			  }
			})();
	
	
		/***/ },
		/* 7 */
		/***/ function(module, exports, __webpack_require__) {
	
			
			/**
			 * 修改自 simple-virtual-dom
			 * @date 2016-01-21 19:36:17
			 */
			'use strict';
			var dfsWalk, diff, diffChildren, diffProps, each, isString, listDiff, patch, ref;
	
			patch = __webpack_require__(8);
	
			listDiff = __webpack_require__(9);
	
			ref = __webpack_require__(6), isString = ref.isString, each = ref.each;
	
			diff = function(oldTree, newTree) {
			  var index, patches;
			  index = 0;
			  patches = {};
			  dfsWalk(oldTree, newTree, index, patches);
			  return patches;
			};
	
			dfsWalk = function(oldNode, newNode, index, patches) {
			  var currentPatch, propsPatches;
			  currentPatch = [];
			  if (newNode === null) {
	
			  } else if (isString(oldNode) && isString(newNode)) {
			    if (newNode !== oldNode) {
			      currentPatch.push({
			        type: patch.TEXT,
			        content: newNode
			      });
			    }
			  } else if (oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
			    if (oldNode._element) {
			      newNode._element = oldNode._element;
			    }
			    if (oldNode._component) {
			      newNode._component = oldNode._component;
			    }
			    propsPatches = diffProps(oldNode, newNode);
			    if (propsPatches) {
			      currentPatch.push({
			        type: patch.PROPS,
			        props: propsPatches
			      });
			    }
			    if (!oldNode._component && true !== oldNode._noDiffChild) {
			      diffChildren(oldNode.children, newNode.children, index, patches, currentPatch);
			    }
			  } else {
			    currentPatch.push({
			      type: patch.REPLACE,
			      node: newNode
			    });
			  }
			  if (currentPatch.length) {
			    patches[index] = currentPatch;
			  }
			};
	
			diffChildren = function(oldChildren, newChildren, index, patches, currentPatch) {
			  var currentNodeIndex, diffs, leftNode, reorderPatch;
			  diffs = listDiff(oldChildren, newChildren, 'key');
			  newChildren = diffs.children;
			  if (diffs.moves.length) {
			    reorderPatch = {
			      type: patch.REORDER,
			      moves: diffs.moves
			    };
			    currentPatch.push(reorderPatch);
			  }
			  leftNode = null;
			  currentNodeIndex = index;
			  each(oldChildren, function(child, i) {
			    var newChild;
			    newChild = newChildren[i];
			    currentNodeIndex = leftNode && leftNode.count ? currentNodeIndex + leftNode.count + 1 : currentNodeIndex + 1;
			    dfsWalk(child, newChild, currentNodeIndex, patches);
			    leftNode = child;
			  });
			};
	
			diffProps = function(oldNode, newNode) {
			  var count, j, key, len, newProps, oldProps, propsPatches, value;
			  count = 0;
			  oldProps = oldNode.props;
			  newProps = newNode.props;
			  propsPatches = {};
			  for (key in oldProps) {
			    value = oldProps[key];
			    if (newProps[key] !== value) {
			      count++;
			      propsPatches[key] = newProps[key];
			    }
			  }
			  for (value = j = 0, len = newProps.length; j < len; value = ++j) {
			    key = newProps[value];
			    if (!oldProps.hasOwnProperty(key)) {
			      count++;
			      propsPatches[key] = newProps[key];
			    }
			  }
			  if (count === 0) {
			    return null;
			  }
			  return propsPatches;
			};
	
			module.exports = diff;
	
	
		/***/ },
		/* 8 */
		/***/ function(module, exports, __webpack_require__) {
	
			
			/**
			 * 修改自 simple-virtual-dom
			 * @date 2016-01-21 19:39:03
			 */
			'use strict';
			var PROPS, REORDER, REPLACE, TEXT, applyPatches, dfsWalk, each, patch, ref, removeElementAttr, reorderChildren, setElementAttr, setProps, toArray;
	
			REPLACE = 0;
	
			REORDER = 1;
	
			PROPS = 2;
	
			TEXT = 3;
	
			ref = __webpack_require__(6), setElementAttr = ref.setElementAttr, removeElementAttr = ref.removeElementAttr, toArray = ref.toArray, each = ref.each;
	
			patch = function(node, patches) {
			  var walker;
			  walker = {
			    index: 0
			  };
			  dfsWalk(node, walker, patches);
			};
	
			dfsWalk = function(node, walker, patches) {
			  var child, currentPatches, i, len;
			  currentPatches = patches[walker.index];
			  len = node.childNodes ? node.childNodes.length : 0;
			  if (node._element) {
			    if (node._element._noDiffChild || node._element._component) {
			      len = 0;
			    }
			  }
			  if (node._component) {
			    len = 0;
			  }
			  i = 0;
			  while (i < len) {
			    child = node.childNodes[i];
			    walker.index++;
			    dfsWalk(child, walker, patches);
			    i++;
			  }
			  if (currentPatches) {
			    applyPatches(node, currentPatches);
			  }
			};
	
			applyPatches = function(node, currentPatches) {
			  var currentPatch, j, len1, newNode;
			  for (j = 0, len1 = currentPatches.length; j < len1; j++) {
			    currentPatch = currentPatches[j];
			    switch (currentPatch.type) {
			      case REPLACE:
			        if (typeof currentPatch.node === 'string') {
			          newNode = document.createTextNode(currentPatch.node);
			        } else {
			          newNode = currentPatch.node.render();
			        }
			        node.parentNode.replaceChild(newNode, node);
			        break;
			      case REORDER:
			        reorderChildren(node, currentPatch.moves);
			        break;
			      case PROPS:
			        setProps(node, currentPatch.props);
			        break;
			      case TEXT:
			        if (node.textContent) {
			          node.textContent = currentPatch.content;
			        } else {
			          node.nodeValue = currentPatch.content;
			        }
			        break;
			      default:
			        throw new Error('Unknown patch type ' + currentPatch.type);
			    }
			  }
			};
	
			setProps = function(node, props) {
			  var key, results, value;
			  results = [];
			  for (key in props) {
			    if (props[key] === void 0) {
			      if (key !== '_mc') {
			        results.push(removeElementAttr(node, key));
			      } else {
			        results.push(void 0);
			      }
			    } else {
			      value = props[key];
			      results.push(setElementAttr(node, key, value));
			    }
			  }
			  return results;
			};
	
			reorderChildren = function(node, moves) {
			  var maps, staticNodeList;
			  staticNodeList = toArray(node.childNodes);
			  maps = {};
			  each(staticNodeList, function(node) {
			    var key;
			    if (node.nodeType === 1) {
			      key = node.getAttribute('key') || node._key;
			    }
			    if (key) {
			      maps[key] = node;
			    }
			  });
			  each(moves, function(move) {
			    var el, index, insertNode;
			    index = move.index;
			    if (move.type === 0) {
			      if (staticNodeList[index] === node.childNodes[index]) {
			        el = node.childNodes[index];
			        if (el) {
			          if (el._element && el._element.destroy) {
			            el._element.destroy();
			          }
			          node.removeChild(el);
			        }
			      }
			      staticNodeList.splice(index, 1);
			    } else if (move.type === 1) {
			      insertNode = maps[move.item.key] ? maps[move.item.key] : typeof move.item === 'object' ? move.item.render() : document.createTextNode(move.item);
			      staticNodeList.splice(index, 0, insertNode);
			      node.insertBefore(insertNode, node.childNodes[index] || null);
			    }
			  });
			};
	
			patch.REPLACE = REPLACE;
	
			patch.REORDER = REORDER;
	
			patch.PROPS = PROPS;
	
			patch.TEXT = TEXT;
	
			module.exports = patch;
	
	
		/***/ },
		/* 9 */
		/***/ function(module, exports, __webpack_require__) {
	
			module.exports = __webpack_require__(10).diff
	
	
		/***/ },
		/* 10 */
		/***/ function(module, exports) {
	
			/**
			 * Diff two list in O(N).
			 * @param {Array} oldList - Original List
			 * @param {Array} newList - List After certain insertions, removes, or moves
			 * @return {Object} - {moves: <Array>}
			 *                  - moves is a list of actions that telling how to remove and insert
			 */
			function diff (oldList, newList, key) {
			  var oldMap = makeKeyIndexAndFree(oldList, key)
			  var newMap = makeKeyIndexAndFree(newList, key)
	
			  var newFree = newMap.free
	
			  var oldKeyIndex = oldMap.keyIndex
			  var newKeyIndex = newMap.keyIndex
	
			  var moves = []
	
			  // a simulate list to manipulate
			  var children = []
			  var i = 0
			  var item
			  var itemKey
			  var freeIndex = 0
	
			  // fist pass to check item in old list: if it's removed or not
			  while (i < oldList.length) {
			    item = oldList[i]
			    itemKey = getItemKey(item, key)
			    if (itemKey) {
			      if (!newKeyIndex.hasOwnProperty(itemKey)) {
			        children.push(null)
			      } else {
			        var newItemIndex = newKeyIndex[itemKey]
			        children.push(newList[newItemIndex])
			      }
			    } else {
			      var freeItem = newFree[freeIndex++]
			      children.push(freeItem || null)
			    }
			    i++
			  }
	
			  var simulateList = children.slice(0)
	
			  // remove items no longer exist
			  i = 0
			  while (i < simulateList.length) {
			    if (simulateList[i] === null) {
			      remove(i)
			      removeSimulate(i)
			    } else {
			      i++
			    }
			  }
	
			  // i is cursor pointing to a item in new list
			  // j is cursor pointing to a item in simulateList
			  var j = i = 0
			  while (i < newList.length) {
			    item = newList[i]
			    itemKey = getItemKey(item, key)
	
			    var simulateItem = simulateList[j]
			    var simulateItemKey = getItemKey(simulateItem, key)
	
			    if (simulateItem) {
			      if (itemKey === simulateItemKey) {
			        j++
			      } else {
			        // new item, just inesrt it
			        if (!oldKeyIndex.hasOwnProperty(itemKey)) {
			          insert(i, item)
			        } else {
			          // if remove current simulateItem make item in right place
			          // then just remove it
			          var nextItemKey = getItemKey(simulateList[j + 1], key)
			          if (nextItemKey === itemKey) {
			            remove(i)
			            removeSimulate(j)
			            j++ // after removing, current j is right, just jump to next one
			          } else {
			            // else insert item
			            insert(i, item)
			          }
			        }
			      }
			    } else {
			      insert(i, item)
			    }
	
			    i++
			  }
	
			  function remove (index) {
			    var move = {index: index, type: 0}
			    moves.push(move)
			  }
	
			  function insert (index, item) {
			    var move = {index: index, item: item, type: 1}
			    moves.push(move)
			  }
	
			  function removeSimulate (index) {
			    simulateList.splice(index, 1)
			  }
	
			  return {
			    moves: moves,
			    children: children
			  }
			}
	
			/**
			 * Convert list to key-item keyIndex object.
			 * @param {Array} list
			 * @param {String|Function} key
			 */
			function makeKeyIndexAndFree (list, key) {
			  var keyIndex = {}
			  var free = []
			  for (var i = 0, len = list.length; i < len; i++) {
			    var item = list[i]
			    var itemKey = getItemKey(item, key)
			    if (itemKey) {
			      keyIndex[itemKey] = i
			    } else {
			      free.push(item)
			    }
			  }
			  return {
			    keyIndex: keyIndex,
			    free: free
			  }
			}
	
			function getItemKey (item, key) {
			  if (!item || !key) return void 666
			  return typeof key === 'string'
			    ? item[key]
			    : key(item)
			}
	
			exports.makeKeyIndexAndFree = makeKeyIndexAndFree // exports for test
			exports.diff = diff
	
	
		/***/ },
		/* 11 */
		/***/ function(module, exports, __webpack_require__) {
	
			
			/**
			 * ## 过滤函数
			 * @date 2016-01-13 18:07:10
			 * @author vfasky <vfasky@gmail.com>
			 * @link http://vfasky.com
			 */
			'use strict';
			var util,
			  slice = [].slice,
			  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
			util = __webpack_require__(6);
	
			exports['toNumber'] = function(x) {
			  if (false === util.isNumber(x)) {
			    return 0;
			  }
			  return Number(x);
			};
	
			exports['toFixed'] = function(x, len) {
			  if (len == null) {
			    len = 1;
			  }
			  return Number(x).toFixed(len);
			};
	
	
			/*
			## in 是否在指参数中
			```html
			<span mc-show="scope.id | in 1 2 3"></span>
			```
			 */
	
			exports['in'] = function() {
			  var arr, x;
			  x = arguments[0], arr = 2 <= arguments.length ? slice.call(arguments, 1) : [];
			  return indexOf.call(arr, x) >= 0;
			};
	
	
			/*
			## objToStyle
			```html
			<span mc-style="{height: 100, width: 200} | objToStyle"></span>
			```
			 */
	
			exports['objToStyle'] = function(value) {
			  var autoPx, css, key, val;
			  autoPx = ['width', 'height', 'left', 'top', 'right', 'bottom'];
			  css = [];
			  for (key in value) {
			    val = value[key];
			    if (indexOf.call(autoPx, key) >= 0 && util.isNumber(val)) {
			      val = val + 'px';
			    }
			    css.push(key + ": " + val);
			  }
			  return css.join(';');
			};
	
	
			/*
			## 添加过滤函数
	
			```coffee
			{Template} = require 'mcore'
			moment = require 'moment'
	
			Temaplat.formatters.formNow = (value)->
			    moment(value).formNow()
	
			Template.formatters.toString = (value)->
			    String value or ''
			```
	
			使用
	
			```html
			<span>{ scope.date | formNow | toString }</span>
			```
			 */
	
	
		/***/ },
		/* 12 */
		/***/ function(module, exports, __webpack_require__) {
	
			
			/**
			 * # dom attr binders
			 * 自定义的 dom 属性
			 * @date 2016-01-14 21:25:51
			 * @author vfasky <vfasky@gmail.com>
			 * @link http://vfasky.com
			 */
			'use strict';
			var util;
	
			util = __webpack_require__(6);
	
	
			/*
	
			## 属性值可以执行 js
	
			```html
			<ul>
			    <li mc-for="v , k in scope.list">
			        {v} - {k + 1}
			        <span mc-show="k > 1"
			         mc-class="'item' + (k == 1 ? 'one' : '')">
			            {k | toString}
			        </span>
			    </li>
			</ul>
			```
	
			## mc-for
			遍历数组或对象，生成DOM
	
			**Array**
	
			```html
			<ul>
			    <li mc-for="v in scope.list">{v}</li>
			</ul>
			```
			下标的访问
	
			```html
			<ul>
			    <li mc-for="v , k in lscope.ist">{v} - {k}</li>
			</ul>
			```
	
			**Object**
			```html
			<ul>
			    <li mc-for="key of scope.data">{key}</li>
			</ul>
	
			<ul>
			    <li mc-for="key, val of scope.data">{key} : {val}</li>
			</ul>
			```
	
			## mc-if
			当值为 true 时，生成
			> **注意** 在 mc-if 的 DOM 及其子DOM 中，不要绑定 `mc-on-*` 的方法
			> 因为初始渲染时，DOM可能并没有生成，对应的事件并不保证能注册到。
			> 要确保事件能注册，请使用 `mc-show` 代替 `mc-if`
	
			## mc-unless
			当值为 true 时, 移除DOM
	
			## mc-on-*
			绑定事件，如：`mc-on-click` `mc-on-submit` 等
	
			> **注：模板事件回调至少传入二个参数**
			> * 第一个参数：event
			> * 第二个参数：DOM
			> * ... 模板中定义的参数，如：
			> `mc-on-click="showIx(v, k)"` 中接收 v, k
			> 需要这样 `tpl.showIx = (event, el, v, k)->`
	
			> *如果事件不需要传参，侧不需要 `()`, 否则 h2svd-loader 编绎时，会报错*
			 */
	
			exports['show'] = function(el, value) {
			  return el.style.display = value ? '' : 'none';
			};
	
			exports['hide'] = function(el, value) {
			  return el.style.display = value ? 'none' : '';
			};
	
			exports['checked'] = function(el, value) {
			  return el.checked = value && true || false;
			};
	
			exports['html'] = function(el, value) {
			  el.innerHTML = value != null ? value : '';
			  return el._element._noDiffChild = true;
			};
	
			exports['no-diff-child'] = function(el, value) {
			  return el._element._noDiffChild = value && true || false;
			};
	
			exports['selected'] = {
			  asyncSet: function(el, value) {
			    el.value = value;
			    if (el.value !== value) {
			      if (el._setValTime) {
			        clearTimeout(el._setValTime);
			      }
			      return el._setValTime = setTimeout(function() {
			        return el.value = value;
			      }, 70);
			    }
			  },
			  rendered: function(el, value) {
			    el._rendered = true;
			    if (el._renderedVal !== void 0) {
			      exports['selected'].asyncSet(el, el._renderedVal);
			      return el._renderedVal = void 0;
			    } else {
			      return exports['selected'].asyncSet(el, value);
			    }
			  },
			  update: function(el, value) {
			    if (el._rendered) {
			      return exports['selected'].asyncSet(el, value);
			    } else {
			      return el._renderedVal = value;
			    }
			  }
			};
	
			exports['disabled'] = function(el, value) {
			  return el.disabled = value;
			};
	
			exports['focus'] = function(el, value) {
			  if (value && true || false) {
			    return el.focus();
			  }
			};
	
	
			/*
			## mc-*
			设置对应属性的值(没有找到对应的自定义属性，就会执行该方式)
			如 `mc-style` ，是设置 style； 'mc-height' 设置高度等
	
			## 注册自定义属性
	
			```coffee
			{Template} = require 'mcore'
	
			Template.binders['test'] = (el, value)->
			    console.log el, value
	
	
			#注册有状态的属性
			Template.binders['look'] =
			    #初始化时执行
			    init: ->
			    #DOM生成后执行
			    rendered: (el, value)->
			    #属性更新时执行
			    update: (el, value)->
			    #dom移除时执行
			    remove: (el)->
	
			```
			 */
	
	
		/***/ },
		/* 13 */
		/***/ function(module, exports, __webpack_require__) {
	
			
			/**
			 * #组件
			 * @date 2016-01-23 16:46:42
			 * @author vfasky <vfasky@gmail.com>
			 * @link http://vfasky.com
			 */
			'use strict';
			var Component, EventEmitter, Template, util,
			  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
			  hasProp = {}.hasOwnProperty;
	
			EventEmitter = __webpack_require__(4);
	
			Template = __webpack_require__(3);
	
			util = __webpack_require__(6);
	
	
			/*
			## demo
			``` coffeescript
			{Template, Component} = require 'mcore'
	
			class Time extends Component
			    init: ->
			        #渲染完成时执行
			        @on 'rendered', =>
			            #1秒后，更新time值，当渲染完成时
			            #会执行 rendered, 等同于，每秒
			            #更新一次time值
			            setTimeout =>
			                @set 'time', new Date()
			            , 1000
	
			        @render require('./tpl/tagTime.html'),
			            time: new Date(),
			            id: 2
	
			#注册组件
			Template.components.time = Time
			```
	
			**模板可以只是一个变量**
			``` html
			<!-- ./tpl/tagTime.html -->
			{scope.time}
			```
	
			注册组件后，在其它模板中使用该TAG: `time`
			``` html
			<div class="test">
			    <time mc-id="scope.id"></time>
			    <!--render:<time id="2">Tue Feb 16 2016 16:11:58 GMT+0800 (CST)</time>-->
			</div>
			```
			 */
	
			Component = (function(superClass) {
			  extend(Component, superClass);
	
			  function Component(el, virtualEl) {
			    this.el = el;
			    this.virtualEl = virtualEl != null ? virtualEl : null;
			    this.template = new Template();
			    this.template._proxy = this;
			    this._isInit = false;
			    this._plus();
			    this.init();
			    this.watch();
			  }
	
			  Component.prototype._plus = function() {};
	
			  Component.prototype.init = function() {};
	
			  Component.prototype.parent = function() {
			    if (this.virtualEl && this.virtualEl.template) {
			      return this.virtualEl.template._proxy;
			    }
			    return null;
			  };
	
	
			  /*
			  ## 观察属性更新
			  
			  ```coffee
			  class Time extends Component
			      watch: ->
			          #<time mc-id="scope.id"></time>
			          #当 id 属性更新时，执行
			          @on 'change:id', (value)->
			              console.log value
			  
			  ```
			   */
	
			  Component.prototype.watch = function() {};
	
	
			  /*
			  ## 向 parent dom 发送自定义事件
			  当组件有自定义事件，向上级DOM对发送事件
			  
			  如： <time> 有一个自定义事件 'change-time'
			  
			  ```html
			  <time mc-on-change-time="chageTime"></time>
			  ```
			  
			  当 scope.time 更新时，需要通知调用它的模板引擎
			  
			  ```coffee
			  #自定义组件
			  class Time extends Component
			      init: ->
			          #渲染完成时执行
			          @on 'rendered', =>
			              #1秒后，更新time值，当渲染完成时
			              #会执行 rendered, 等同于，每秒
			              #更新一次time值
			              setTimeout =>
			                  time = new Date()
			                  @set 'time', time
			                  #触发自定义事件，并传参 time
			                  @emitEvent 'change-time', [time]
			              , 1000
			  
			          @render require('./tpl/tagTime.html'),
			              time: new Date(),
			              id: 2
			  
			  #template
			  tpl = new Template()
			  tpl.changeTime = (time)->
			      console.log time
			  ```
			  
			  > **约定** 如果是`click`等标准事件触发的自定义事件
			  > 需将 event, el 这两个参数传回, 如
			  
			  ```coffee
			  class Tabs extends Component
			  
			      init: ->
			          @.$el = $ @el
			          @render require('../tpl/tag/tabs.html'),
			              index: 0
			              items: []
			  
			      #当用户点击tab时，参数原路回传
			      changeTab: ->
			          @emitEvent 'change-tab', arguments
			          false
			  ```
			  
			  ```html
			  <ul class="tab">
			      <li mc-for="v, i in scope.items"
			          mc-class="'item ' + (i == scope.index ? 'current' : '')">
			          <a mc-data-ix="i"
			             mc-on-click="changeTab(v, i)"
			             class="link">{v.title}</a>
			      </li>
			  </ul>
			  ```
			   */
	
			  Component.prototype.emitEvent = function(eventName, args) {
			    var parentView, proxyEventName;
			    proxyEventName = this.getProxyEventName(eventName);
			    parentView = this.parent();
			    if (!parentView) {
			      return;
			    }
			    if (util.isFunction(parentView[proxyEventName])) {
			      return parentView[proxyEventName].apply(parentView, args);
			    }
			  };
	
	
			  /*
			  ## 渲染, 同 Template 方法
			   - {Function} virtualDomDefine 用于生成 virtual dom 的函数
			   - {Object} scope
			   - {Null | Function | Boolean} doneOrAsync 渲染成功时回调或者马上渲染，不放入队列
			   */
	
			  Component.prototype.render = function(virtualDomDefine, scope, doneOrAsync) {
			    this.virtualDomDefine = virtualDomDefine;
			    if (scope == null) {
			      scope = {};
			    }
			    if (doneOrAsync == null) {
			      doneOrAsync = true;
			    }
			    if (false === this._isInit) {
			      this._isInit = true;
			      this.template.once('rendered', (function(_this) {
			        return function(refs1) {
			          _this.refs = refs1;
			          return _this.mount();
			        };
			      })(this));
			      this.template.on('rendered', (function(_this) {
			        return function(refs) {
			          return _this.emit('rendered', refs);
			        };
			      })(this));
			    }
			    return this.template.render(this.virtualDomDefine, scope, doneOrAsync);
			  };
	
			  Component.prototype.mount = function() {
			    this.el.appendChild(this.refs);
			    return this.emit('mount', this.refs);
			  };
	
			  Component.prototype.set = function() {
			    if (this.template) {
			      return this.template.set.apply(this.template, arguments);
			    }
			  };
	
			  Component.prototype.get = function() {
			    if (this.template) {
			      return this.template.get.apply(this.template, arguments);
			    }
			  };
	
			  Component.prototype.remove = function() {
			    if (this.template) {
			      return this.template.remove.apply(this.template, arguments);
			    }
			  };
	
			  Component.prototype.update = function(attrName, value) {
			    if (this.get(attrName) !== value) {
			      this.set(attrName, value);
			      this.emit('update', attrName, value);
			      return this.emit('change:' + attrName, value);
			    }
			  };
	
			  Component.prototype.getProxyEventName = function(eventName) {
			    if (!this.virtualEl || !this.virtualEl.props) {
			      return null;
			    }
			    return this.virtualEl.props['on-' + eventName];
			  };
	
			  Component.prototype.destroy = function() {
			    if (this.template) {
			      this.template.destroy();
			      return this.template = null;
			    }
			  };
	
			  return Component;
	
			})(EventEmitter);
	
			module.exports = Component;
	
	
		/***/ }
		/******/ ])
		});
		;
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 *
		 * 扩展 util
		 * @author vfasky <vfasky@gmail.com>
		 */
		'use strict';
		var $, each, util,
		  slice = [].slice;
	
		util = __webpack_require__(14).util;
	
		each = util.each;
	
		$ = __webpack_require__(16);
	
		util.loadPromise = function(data) {
		  var dtd, keys, promises;
		  if (data == null) {
		    data = {};
		  }
		  dtd = $.Deferred();
		  keys = util.objectKeys(data);
		  if (keys.length === 0) {
		    dtd.resolve({});
		  } else {
		    promises = [];
		    each(keys, function(v) {
		      return promises.push(data[v]);
		    });
		    $.when.apply(null, promises).done(function() {
		      var args, vData;
		      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
		      vData = {};
		      each(args, (function(_this) {
		        return function(v, k) {
		          var key;
		          key = keys[k];
		          if (key !== void 0) {
		            if (util.isArray(v) && v.length === 3 && v[2].promise) {
		              v = v[0];
		            }
		            vData[key] = v;
		          }
		        };
		      })(this));
		      return dtd.resolve(vData);
		    }).fail(function(err) {
		      return dtd.reject(err);
		    });
		  }
		  return dtd.promise();
		};
	
		module.exports = util;
	
	
	/***/ },
	/* 16 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_16__;
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 *
		 * 扩展 template
		 * @author vfasky <vfasky@gmail.com>
		 */
		'use strict';
		var $, Template, _keyCode, mcore, util,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty,
		  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
		mcore = __webpack_require__(14);
	
		$ = __webpack_require__(16);
	
		util = mcore.util;
	
		_keyCode = {
		  keyenter: 13,
		  keyesc: 27
		};
	
		Template = (function(superClass) {
		  extend(Template, superClass);
	
		  function Template() {
		    return Template.__super__.constructor.apply(this, arguments);
		  }
	
		  Template.prototype.set = function(key, value, doneOrAsync) {
		    if (value && util.isFunction(value.then)) {
		      return value.then((function(_this) {
		        return function(val) {
		          return Template.__super__.set.call(_this, key, val, doneOrAsync);
		        };
		      })(this));
		    } else {
		      return Template.__super__.set.call(this, key, value, doneOrAsync);
		    }
		  };
	
		  Template.prototype.addEventListener = function(event, el) {
		    var $refs;
		    if (!this.refs) {
		      this._initTask.push((function(_this) {
		        return function() {
		          return _this.addEventListener(event, el);
		        };
		      })(this));
		      return;
		    }
		    if (indexOf.call(this._eventReged, event) < 0) {
		      this.regEventCallback(event);
		      $refs = $(this.refs);
		      if (event === 'scroll') {
		        $(el).on('scroll', (function(_this) {
		          return function() {
		            return _this._eventListener[event].apply(_this, arguments);
		          };
		        })(this));
		        return;
		      }
		      if (event !== 'blur' && event !== 'focus') {
		        if (_keyCode.hasOwnProperty(event)) {
		          return $refs.on('keyup', (function(_this) {
		            return function(e) {
		              if (e.keyCode === _keyCode[event]) {
		                return _this._eventListener[event].apply(_this, arguments);
		              }
		            };
		          })(this));
		        } else {
		          return $refs.on(event, (function(_this) {
		            return function() {
		              return _this._eventListener[event].apply(_this, arguments);
		            };
		          })(this));
		        }
		      } else {
		        return $refs.on(event, 'input, textarea, select', (function(_this) {
		          return function() {
		            return _this._eventListener[event].apply(_this, arguments);
		          };
		        })(this));
		      }
		    }
		  };
	
		  Template.prototype.removeEvent = function(event, el, id) {
		    var j, k, len, ref, results, v;
		    if (!this.refs) {
		      return;
		    }
		    event = event.toLowerCase();
		    if (false === this._events.hasOwnProperty(event)) {
		      return;
		    }
		    util.each(this._events[event], (function(_this) {
		      return function(e, i) {
		        if (e.id === id) {
		          _this._events[event].splice(i, 1);
		          return false;
		        }
		      };
		    })(this));
		    if (this._events[event].length === 0) {
		      $(this.refs).off(event);
		      ref = this._eventReged;
		      results = [];
		      for (k = j = 0, len = ref.length; j < len; k = ++j) {
		        v = ref[k];
		        if (v === event) {
		          this._eventReged.splice(k, 1);
		          break;
		        } else {
		          results.push(void 0);
		        }
		      }
		      return results;
		    }
		  };
	
		  return Template;
	
		})(mcore.Template);
	
		module.exports = Template;
	
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 *
		 * 扩展组件
		 * @author vfasky <vfasky@gmail.com>
		 */
		'use strict';
		var $, $body, $win, Component, Template, isFunction, loadPromise, mcore, ref,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;
	
		$ = __webpack_require__(16);
	
		mcore = __webpack_require__(14);
	
		Template = __webpack_require__(17);
	
		ref = __webpack_require__(15), loadPromise = ref.loadPromise, isFunction = ref.isFunction;
	
		$win = $(window);
	
		$body = $('body');
	
		Component = (function(superClass) {
		  extend(Component, superClass);
	
		  function Component(el, virtualEl) {
		    this.el = el;
		    this.virtualEl = virtualEl != null ? virtualEl : null;
		    this.$win = $win;
		    this.$body = $body;
		    this.template = new Template();
		    this.template._proxy = this;
		    this._isInit = false;
		    this._plus();
		    this.init();
		    this.watch();
		  }
	
		  Component.prototype.render = function(virtualDomDefine, scope, doneOrSync) {
		    var dtd;
		    if (scope == null) {
		      scope = {};
		    }
		    if (doneOrSync == null) {
		      doneOrSync = null;
		    }
		    if (true === doneOrSync) {
		      return Component.__super__.render.call(this, virtualDomDefine, scope, doneOrSync);
		    }
		    dtd = $.Deferred();
		    loadPromise(scope).then((function(_this) {
		      return function(scope) {
		        return Component.__super__.render.call(_this, virtualDomDefine, scope, function(refs) {
		          dtd.resolve(refs);
		          if (isFunction(doneOrSync)) {
		            return doneOrSync(refs);
		          }
		        });
		      };
		    })(this)).fail(function(err) {
		      return dtd.reject(err);
		    });
		    return dtd.promise();
		  };
	
		  return Component;
	
		})(mcore.Component);
	
		module.exports = Component;
	
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 * app
		 * @module mcore/app
		 * @author vfasky <vfasky@gmail.com>
		 */
		"use strict";
		var $, App, EventEmitter, ref, route, util,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;
	
		$ = __webpack_require__(16);
	
		route = __webpack_require__(20);
	
		ref = __webpack_require__(14), util = ref.util, EventEmitter = ref.EventEmitter;
	
		App = (function(superClass) {
		  extend(App, superClass);
	
		  function App($el1, options) {
		    this.$el = $el1;
		    if (options == null) {
		      options = {};
		    }
		    this.options = $.extend({
		      viewClass: 'mcore-app-view',
		      routeChange: route.Route.changeByLocationHash
		    }, options);
		    this.router = new route.Route(this.options.routeChange);
		    this.curView = null;
		    this._middlewares = [];
		  }
	
		  App.prototype.route = function(path, view) {
		    var self;
		    self = this;
		    this.router.add(path, function() {
		      return self.runView(view, this, arguments);
		    });
		    return this;
		  };
	
		  App.prototype.use = function(middleware) {
		    this._middlewares.push(middleware);
		    return this;
		  };
	
		  App.prototype._runView = function(done) {
		    if (done == null) {
		      done = function() {};
		    }
		    this.curView.instantiate.route = this.env.route;
		    this.curView.instantiate.context = this.env.context;
		    this.curView.instantiate.run.apply(this.curView.instantiate, this.env.args);
		    this.emit('runView', this.curView);
		    return done(this.curView.instantiate);
		  };
	
		  App.prototype.stack = function(ix, err, done) {
		    var middleware, next, nextIx;
		    if (ix == null) {
		      ix = 0;
		    }
		    if (err == null) {
		      err = null;
		    }
		    if (done == null) {
		      done = function() {};
		    }
		    if (ix === this._middlewares.length) {
		      return this._runView(done);
		    }
		    middleware = this._middlewares[ix];
		    nextIx = ix + 1;
		    next = (function(_this) {
		      return function(err) {
		        return _this.stack(nextIx, err, done);
		      };
		    })(this);
		    this.env.view = this.curView.instantiate;
		    return middleware.call(this.env, err, next);
		  };
	
		  App.prototype.runMiddlewares = function(done) {
		    if (done == null) {
		      done = function() {};
		    }
		    if (this._middlewares.length === 0) {
		      return this._runView(done);
		    }
		    return this.stack(0, null, done);
		  };
	
		  App.prototype._initView = function(View, viewName) {
		    var $el;
		    $el = $("<div class='" + this.options.viewClass + "' />");
		    this.curView = {
		      name: viewName,
		      instantiate: new View($el, this)
		    };
		    return this.runMiddlewares((function(_this) {
		      return function() {
		        _this.curView.instantiate.$el.appendTo(_this.$el);
		        return _this.curView.instantiate.afterRun();
		      };
		    })(this));
		  };
	
		  App.prototype.runView = function(View, route, args) {
		    var viewName;
		    viewName = View.viewName;
		    this.env = {
		      route: route,
		      context: route.context,
		      args: args,
		      viewName: viewName,
		      app: this
		    };
		    if (this.curView) {
		      if (this.curView.name === viewName) {
		        this.runMiddlewares((function(_this) {
		          return function() {
		            return _this.curView.instantiate.afterRun();
		          };
		        })(this));
		        return;
		      } else {
		        this.emit('destroyView', this.curView);
		        this.curView.instantiate.destroy();
		        this.curView = null;
		      }
		    }
		    return this._initView(View, viewName);
		  };
	
		  App.prototype.run = function() {
		    return this.router.run();
		  };
	
		  return App;
	
		})(EventEmitter);
	
		module.exports = App;
	
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 * 路由
		 * @module mcore/route
		 * @author vfasky <vfasky@gmail.com>
		 * @example
		 * route = new mcore.Route()
		 *
		 * route.add '/index/:id', (id)->
		 *     console.log id
		 *
		 * route.add '/show/*', (name)->
		 *     console.log name
		 *
		 * route.add '/get/:id?', (id)->
		 *     console.log id # or undefined
		 *
		 * route.add 'user user/:id', (id)->
		 *     console.log route.lookup('user', id:1) #/user/1
		 *
		 * route.run()
		 */
		"use strict";
		var Route, exports, pathToObject, pathToRegexp, util;
	
		util = __webpack_require__(14).util;
	
		pathToRegexp = __webpack_require__(21);
	
	
		/**
		 * 将 url 的参数转换为对象
		 * @author vfasky <vfasky@gmail.com>
		 *
		 */
	
		pathToObject = function(url) {
		  var argStr, args, attr, data, keys;
		  url = String(url);
		  argStr = '';
		  attr = [];
		  if (url.indexOf('?') !== -1) {
		    argStr = url.split('?').pop();
		  } else if (url.indexOf('&') !== -1) {
		    argStr = url;
		  }
		  if (argStr === '') {
		    return {};
		  }
		  args = argStr.split('&');
		  data = {};
		  keys = [];
		  util.each(args, function(v) {
		    var key, value;
		    if (v.indexOf('=') === -1) {
		      return;
		    }
		    v = v.split('=');
		    if (v.length !== 2) {
		      return;
		    }
		    key = v[0].trim();
		    value = v[1];
		    if (util.isNumber(value) && String(value).length < 14) {
		      value = Number(value);
		    } else {
		      value = decodeURIComponent(value);
		    }
		    data[key] = value;
		  });
		  return data;
		};
	
	
		/**
		 * 路由
		 * @author vfasky <vfasky@gmail.com>
		 *
		 */
	
		Route = function(hashchange, sensitive, strict) {
		  this.hashchange = hashchange != null ? hashchange : Route.changeByLocationHash;
		  this.sensitive = sensitive != null ? sensitive : false;
		  this.strict = strict != null ? strict : false;
		  this.rule = [];
		};
	
	
		/**
		 * 开始监听路由
		 * @author vfasky <vfasky@gmail.com>
		 *
		 */
	
		Route.prototype.run = function() {
		  this.hashchange((function(_this) {
		    return function(url) {
		      _this.match(url);
		    };
		  })(this));
		};
	
	
		/**
		 * 添加规则
		 * @author vfasky <vfasky@gmail.com>
		 *
		 */
	
		Route.prototype.add = function(path, fn) {
		  var keys, reg;
		  keys = [];
		  reg = pathToRegexp(path, keys, this.sensitive, this.strict);
		  this.rule.push({
		    path: path,
		    reg: reg,
		    keys: keys,
		    fn: fn
		  });
		  return this;
		};
	
	
		/**
		 * 配对 url
		 * @author vfasky <vfasky@gmail.com>
		 *
		 */
	
		Route.prototype.match = function(url) {
		  var argStr, fullPath, getIx, isMatch, path;
		  path = String(url);
		  fullPath = path;
		  argStr = '';
		  getIx = path.indexOf('?');
		  if (getIx === -1) {
		    getIx = path.indexOf('&');
		  }
		  isMatch = false;
		  if (getIx !== -1) {
		    argStr = path.substring(getIx);
		    path = path.substring(0, getIx);
		  }
		  util.each(this.rule, function(v) {
		    var args, context, data, env, i, j, k, ref, ref1, value;
		    if (isMatch) {
		      return false;
		    }
		    ref = v.reg.exec(path);
		    if (null === ref) {
		      return;
		    }
		    isMatch = true;
		    context = pathToObject(argStr);
		    data = {};
		    args = [];
		    for (i = j = 1, ref1 = ref.length; 1 <= ref1 ? j < ref1 : j > ref1; i = 1 <= ref1 ? ++j : --j) {
		      k = v.keys[i - 1];
		      value = ref[i];
		      if (util.isNumber(value) && String(value).length < 14) {
		        value = Number(value);
		      } else if (value) {
		        value = decodeURIComponent(value);
		      }
		      if (k && k.name) {
		        data[k.name] = value;
		      }
		      args.push(value || null);
		    }
		    env = {
		      url: fullPath,
		      path: path,
		      args: argStr,
		      rule: v.path,
		      context: context,
		      keys: v.keys,
		      data: data
		    };
		    v.fn.apply(env, args);
		  });
		  return this;
		};
	
	
		/**
		 * 通过 hashchange 触发
		 * @author vfasky <vfasky@gmail.com>
		 *
		 */
	
		Route.changeByLocationHash = function(emit) {
		  var hashChanged;
		  hashChanged = function() {
		    return emit(window.location.hash.substring(1));
		  };
		  if (window.addEventListener) {
		    window.addEventListener('hashchange', hashChanged, false);
		  } else {
		    window.attachEvent('onhashchange', hashChanged);
		  }
		  return hashChanged();
		};
	
	
		/*
		    通过 history api 触发
		    @author jackieLin <dashi_lin@163.com>
		 */
	
		Route.changeByHistory = function(emit) {
		  var historyChange;
		  if (!window.history) {
		    return Route.changeByLocationHash(emit);
		  }
		  historyChange = function() {
		    return emit(window.location.hash.substring(1));
		  };
		  window.onpopstate = function(event) {
		    return historyChange();
		  };
		  return historyChange();
		};
	
		exports = module.exports = {
		  pathToRegexp: pathToRegexp,
		  pathToObject: pathToObject,
		  Route: Route
		};
	
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isarray = __webpack_require__(22)
	
		/**
		 * Expose `pathToRegexp`.
		 */
		module.exports = pathToRegexp
		module.exports.parse = parse
		module.exports.compile = compile
		module.exports.tokensToFunction = tokensToFunction
		module.exports.tokensToRegExp = tokensToRegExp
	
		/**
		 * The main path matching regexp utility.
		 *
		 * @type {RegExp}
		 */
		var PATH_REGEXP = new RegExp([
		  // Match escaped characters that would otherwise appear in future matches.
		  // This allows the user to escape special characters that won't transform.
		  '(\\\\.)',
		  // Match Express-style parameters and un-named parameters with a prefix
		  // and optional suffixes. Matches appear as:
		  //
		  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
		  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
		  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
		  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
		].join('|'), 'g')
	
		/**
		 * Parse a string for the raw tokens.
		 *
		 * @param  {string} str
		 * @return {!Array}
		 */
		function parse (str) {
		  var tokens = []
		  var key = 0
		  var index = 0
		  var path = ''
		  var res
	
		  while ((res = PATH_REGEXP.exec(str)) != null) {
		    var m = res[0]
		    var escaped = res[1]
		    var offset = res.index
		    path += str.slice(index, offset)
		    index = offset + m.length
	
		    // Ignore already escaped sequences.
		    if (escaped) {
		      path += escaped[1]
		      continue
		    }
	
		    var next = str[index]
		    var prefix = res[2]
		    var name = res[3]
		    var capture = res[4]
		    var group = res[5]
		    var modifier = res[6]
		    var asterisk = res[7]
	
		    // Push the current path onto the tokens.
		    if (path) {
		      tokens.push(path)
		      path = ''
		    }
	
		    var partial = prefix != null && next != null && next !== prefix
		    var repeat = modifier === '+' || modifier === '*'
		    var optional = modifier === '?' || modifier === '*'
		    var delimiter = res[2] || '/'
		    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')
	
		    tokens.push({
		      name: name || key++,
		      prefix: prefix || '',
		      delimiter: delimiter,
		      optional: optional,
		      repeat: repeat,
		      partial: partial,
		      asterisk: !!asterisk,
		      pattern: escapeGroup(pattern)
		    })
		  }
	
		  // Match any characters still remaining.
		  if (index < str.length) {
		    path += str.substr(index)
		  }
	
		  // If the path exists, push it onto the end.
		  if (path) {
		    tokens.push(path)
		  }
	
		  return tokens
		}
	
		/**
		 * Compile a string to a template function for the path.
		 *
		 * @param  {string}             str
		 * @return {!function(Object=, Object=)}
		 */
		function compile (str) {
		  return tokensToFunction(parse(str))
		}
	
		/**
		 * Prettier encoding of URI path segments.
		 *
		 * @param  {string}
		 * @return {string}
		 */
		function encodeURIComponentPretty (str) {
		  return encodeURI(str).replace(/[\/?#]/g, function (c) {
		    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
		  })
		}
	
		/**
		 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
		 *
		 * @param  {string}
		 * @return {string}
		 */
		function encodeAsterisk (str) {
		  return encodeURI(str).replace(/[?#]/g, function (c) {
		    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
		  })
		}
	
		/**
		 * Expose a method for transforming tokens into the path function.
		 */
		function tokensToFunction (tokens) {
		  // Compile all the tokens into regexps.
		  var matches = new Array(tokens.length)
	
		  // Compile all the patterns before compilation.
		  for (var i = 0; i < tokens.length; i++) {
		    if (typeof tokens[i] === 'object') {
		      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
		    }
		  }
	
		  return function (obj, opts) {
		    var path = ''
		    var data = obj || {}
		    var options = opts || {}
		    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent
	
		    for (var i = 0; i < tokens.length; i++) {
		      var token = tokens[i]
	
		      if (typeof token === 'string') {
		        path += token
	
		        continue
		      }
	
		      var value = data[token.name]
		      var segment
	
		      if (value == null) {
		        if (token.optional) {
		          // Prepend partial segment prefixes.
		          if (token.partial) {
		            path += token.prefix
		          }
	
		          continue
		        } else {
		          throw new TypeError('Expected "' + token.name + '" to be defined')
		        }
		      }
	
		      if (isarray(value)) {
		        if (!token.repeat) {
		          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
		        }
	
		        if (value.length === 0) {
		          if (token.optional) {
		            continue
		          } else {
		            throw new TypeError('Expected "' + token.name + '" to not be empty')
		          }
		        }
	
		        for (var j = 0; j < value.length; j++) {
		          segment = encode(value[j])
	
		          if (!matches[i].test(segment)) {
		            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
		          }
	
		          path += (j === 0 ? token.prefix : token.delimiter) + segment
		        }
	
		        continue
		      }
	
		      segment = token.asterisk ? encodeAsterisk(value) : encode(value)
	
		      if (!matches[i].test(segment)) {
		        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
		      }
	
		      path += token.prefix + segment
		    }
	
		    return path
		  }
		}
	
		/**
		 * Escape a regular expression string.
		 *
		 * @param  {string} str
		 * @return {string}
		 */
		function escapeString (str) {
		  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
		}
	
		/**
		 * Escape the capturing group by escaping special characters and meaning.
		 *
		 * @param  {string} group
		 * @return {string}
		 */
		function escapeGroup (group) {
		  return group.replace(/([=!:$\/()])/g, '\\$1')
		}
	
		/**
		 * Attach the keys as a property of the regexp.
		 *
		 * @param  {!RegExp} re
		 * @param  {Array}   keys
		 * @return {!RegExp}
		 */
		function attachKeys (re, keys) {
		  re.keys = keys
		  return re
		}
	
		/**
		 * Get the flags for a regexp from the options.
		 *
		 * @param  {Object} options
		 * @return {string}
		 */
		function flags (options) {
		  return options.sensitive ? '' : 'i'
		}
	
		/**
		 * Pull out keys from a regexp.
		 *
		 * @param  {!RegExp} path
		 * @param  {!Array}  keys
		 * @return {!RegExp}
		 */
		function regexpToRegexp (path, keys) {
		  // Use a negative lookahead to match only capturing groups.
		  var groups = path.source.match(/\((?!\?)/g)
	
		  if (groups) {
		    for (var i = 0; i < groups.length; i++) {
		      keys.push({
		        name: i,
		        prefix: null,
		        delimiter: null,
		        optional: false,
		        repeat: false,
		        partial: false,
		        asterisk: false,
		        pattern: null
		      })
		    }
		  }
	
		  return attachKeys(path, keys)
		}
	
		/**
		 * Transform an array into a regexp.
		 *
		 * @param  {!Array}  path
		 * @param  {Array}   keys
		 * @param  {!Object} options
		 * @return {!RegExp}
		 */
		function arrayToRegexp (path, keys, options) {
		  var parts = []
	
		  for (var i = 0; i < path.length; i++) {
		    parts.push(pathToRegexp(path[i], keys, options).source)
		  }
	
		  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
	
		  return attachKeys(regexp, keys)
		}
	
		/**
		 * Create a path regexp from string input.
		 *
		 * @param  {string}  path
		 * @param  {!Array}  keys
		 * @param  {!Object} options
		 * @return {!RegExp}
		 */
		function stringToRegexp (path, keys, options) {
		  var tokens = parse(path)
		  var re = tokensToRegExp(tokens, options)
	
		  // Attach keys back to the regexp.
		  for (var i = 0; i < tokens.length; i++) {
		    if (typeof tokens[i] !== 'string') {
		      keys.push(tokens[i])
		    }
		  }
	
		  return attachKeys(re, keys)
		}
	
		/**
		 * Expose a function for taking tokens and returning a RegExp.
		 *
		 * @param  {!Array}  tokens
		 * @param  {Object=} options
		 * @return {!RegExp}
		 */
		function tokensToRegExp (tokens, options) {
		  options = options || {}
	
		  var strict = options.strict
		  var end = options.end !== false
		  var route = ''
		  var lastToken = tokens[tokens.length - 1]
		  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)
	
		  // Iterate over the tokens and create our regexp string.
		  for (var i = 0; i < tokens.length; i++) {
		    var token = tokens[i]
	
		    if (typeof token === 'string') {
		      route += escapeString(token)
		    } else {
		      var prefix = escapeString(token.prefix)
		      var capture = '(?:' + token.pattern + ')'
	
		      if (token.repeat) {
		        capture += '(?:' + prefix + capture + ')*'
		      }
	
		      if (token.optional) {
		        if (!token.partial) {
		          capture = '(?:' + prefix + '(' + capture + '))?'
		        } else {
		          capture = prefix + '(' + capture + ')?'
		        }
		      } else {
		        capture = prefix + '(' + capture + ')'
		      }
	
		      route += capture
		    }
		  }
	
		  // In non-strict mode we allow a slash at the end of match. If the path to
		  // match already ends with a slash, we remove it for consistency. The slash
		  // is valid at the end of a path match, not in the middle. This is important
		  // in non-ending mode, where "/test/" shouldn't match "/test//route".
		  if (!strict) {
		    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
		  }
	
		  if (end) {
		    route += '$'
		  } else {
		    // In non-ending mode, we need the capturing groups to match as much as
		    // possible by using a positive lookahead to the end or next path segment.
		    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
		  }
	
		  return new RegExp('^' + route, flags(options))
		}
	
		/**
		 * Normalize the given path string, returning a regular expression.
		 *
		 * An empty array can be passed in for the keys, which will hold the
		 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
		 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
		 *
		 * @param  {(string|RegExp|Array)} path
		 * @param  {(Array|Object)=}       keys
		 * @param  {Object=}               options
		 * @return {!RegExp}
		 */
		function pathToRegexp (path, keys, options) {
		  keys = keys || []
	
		  if (!isarray(keys)) {
		    options = /** @type {!Object} */ (keys)
		    keys = []
		  } else if (!options) {
		    options = {}
		  }
	
		  if (path instanceof RegExp) {
		    return regexpToRegexp(path, /** @type {!Array} */ (keys))
		  }
	
		  if (isarray(path)) {
		    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
		  }
	
		  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
		}
	
	
	/***/ },
	/* 22 */
	/***/ function(module, exports) {
	
		module.exports = Array.isArray || function (arr) {
		  return Object.prototype.toString.call(arr) == '[object Array]';
		};
	
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 *
		 * @date 2016-01-26 15:20:09
		 * @author vfasky <vfasky@gmail.com>
		 * @link http://vfasky.com
		 */
		'use strict';
		var $, $body, $win, BaseClass, EventEmitter, Template, _id, _isIOS, _isWeixinBrowser, each, loadPromise, util,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;
	
		EventEmitter = __webpack_require__(14).EventEmitter;
	
		Template = __webpack_require__(17);
	
		$ = __webpack_require__(16);
	
		util = __webpack_require__(15);
	
		each = util.each, loadPromise = util.loadPromise;
	
		$win = $(window);
	
		$body = $('body');
	
		_isWeixinBrowser = /MicroMessenger/i.test(window.navigator.userAgent);
	
		_isIOS = /iphone|ipad/gi.test(window.navigator.appVersion);
	
		_id = 0;
	
		BaseClass = (function(superClass) {
		  extend(BaseClass, superClass);
	
		  function BaseClass() {
		    this._id = _id++;
		    this.$win = $win;
		    this.$body = $body;
		    this.util = util;
		    this.nextTick = util.nextTick;
		    this.isWeixinBrowser = _isWeixinBrowser;
		    this.isIOS = _isIOS;
		    this.template = new Template();
		    this.template._proxy = this;
		    this.beforeInit();
		    this.init();
		    this.watch();
		  }
	
		  BaseClass.prototype.beforeInit = function() {};
	
		  BaseClass.prototype.init = function() {};
	
		  BaseClass.prototype.watch = function() {};
	
		  BaseClass.prototype.render = function(virtualDomDefine, scope) {
		    var dtd;
		    this.virtualDomDefine = virtualDomDefine;
		    if (scope == null) {
		      scope = {};
		    }
		    dtd = $.Deferred();
		    loadPromise(scope).then((function(_this) {
		      return function(scope) {
		        return _this.template.render(_this.virtualDomDefine, scope, function(refs) {
		          _this.emit('rendered', refs);
		          return dtd.resolve(refs);
		        });
		      };
		    })(this)).fail(function(err) {
		      return dtd.reject(err);
		    });
		    return dtd.promise();
		  };
	
		  BaseClass.prototype.set = function() {
		    return this.template.set.apply(this.template, arguments);
		  };
	
		  BaseClass.prototype.get = function() {
		    return this.template.get.apply(this.template, arguments);
		  };
	
		  BaseClass.prototype.remove = function() {
		    return this.template.remove.apply(this.template, arguments);
		  };
	
		  BaseClass.prototype.clone = function(value) {
		    return $.extend(true, $.isArray(value) && [] || {}, value);
		  };
	
		  BaseClass.prototype.destroy = function() {
		    return this.template.destroy();
		  };
	
		  BaseClass.prototype.when = function() {
		    return $.when.apply(this, arguments);
		  };
	
		  return BaseClass;
	
		})(EventEmitter);
	
		BaseClass.loadPromise = loadPromise;
	
		module.exports = BaseClass;
	
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 * view
		 * @date 2016-01-26 15:10:13
		 * @author vfasky <vfasky@gmail.com>
		 * @link http://vfasky.com
		 */
		'use strict';
		var $, Template, View, ref, util,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;
	
		ref = __webpack_require__(14), Template = ref.Template, util = ref.util;
	
		$ = __webpack_require__(16);
	
		View = (function(superClass) {
		  extend(View, superClass);
	
		  function View($el, app) {
		    this.$el = $el;
		    this.app = app;
		    View.__super__.constructor.call(this);
		    this._plus();
		    this.el = this.$el[0];
		    this.subViews = [];
		    this.curVix = 0;
		    this.once('rendered', (function(_this) {
		      return function(refs) {
		        return _this.el.appendChild(refs);
		      };
		    })(this));
		  }
	
		  View.prototype._plus = function() {};
	
		  View.prototype.setTitle = function(title) {
		    var $iframe;
		    this.title = title;
		    if (document.title === this.title) {
		      return;
		    }
		    document.title = this.title;
		    if (this.isWeixinBrowser && this.isIOS) {
		      $iframe = $('<iframe src="/favicon.ico"></iframe>');
		      return $iframe.one('load', function() {
		        return setTimeout(function() {
		          return $iframe.remove();
		        }, 0);
		      }).appendTo(this.$body);
		    }
		  };
	
		  View.prototype.back = function() {
		    if (window.history.length > 1) {
		      window.history.back();
		    } else {
		      window.location.href = '#';
		    }
		    return false;
		  };
	
		  View.prototype.destroy = function() {
		    View.__super__.destroy.call(this);
		    return this.$el.remove();
		  };
	
		  View.prototype.openSubView = function(View, options) {
		    var _view, e, error;
		    if (options == null) {
		      options = {};
		    }
		    try {
		      if (!options.zIndex) {
		        options.zIndex = this.curVix + 1;
		      }
		      _view = new View(this, options);
		      _view.vix = this.curVix++;
		      if (_view) {
		        _view.on('close', (function(_this) {
		          return function(isBack) {
		            var _tmpArr;
		            _tmpArr = [];
		            _this.subViews.forEach(function(v) {
		              if (v.vix !== _view.vix) {
		                return _tmpArr.push(_view);
		              }
		            });
		            _this.subViews = _tmpArr;
		            return options.closeCallBack && options.closeCallBack(isBack);
		          };
		        })(this));
		        return _view.run();
		      }
		    } catch (error) {
		      e = error;
		      throw e;
		    }
		  };
	
		  View.prototype.run = function() {};
	
		  View.prototype.afterRun = function() {};
	
		  return View;
	
		})(__webpack_require__(23));
	
		module.exports = View;
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 * 弹层式view 寄托于主view 没有url指向
		 * @module PopUpView
		 * @author vega <vegawong@126.com>
		 */
		var $, PopUpView, Template, ref, util,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;
	
		$ = __webpack_require__(16);
	
		ref = __webpack_require__(14), Template = ref.Template, util = ref.util;
	
		PopUpView = (function(superClass) {
		  extend(PopUpView, superClass);
	
		  function PopUpView(parent, opts) {
		    this.parent = parent;
		    this.opts = opts != null ? opts : {};
		    PopUpView.__super__.constructor.call(this);
		    this._plus();
		    this.el = document.createElement('div');
		    this.el.style.position = 'absolute';
		    this.el.style.left = 0;
		    this.el.style.top = 0;
		    this.el.style.width = '100%';
		    this.el.style.height = '100%';
		    this.el.style.backgroundColor = '#ffffff';
		    this.el.style.zIndex = this.opts.zIndex || 1;
		    this.app = this.parent.app;
		    this.once('rendered', (function(_this) {
		      return function(refs) {
		        _this.el.appendChild(refs);
		        return _this.parent.$el[0].appendChild(_this.el);
		      };
		    })(this));
		  }
	
		  PopUpView.prototype._plus = function() {};
	
		  PopUpView.prototype.back = function() {
		    return this.close(true);
		  };
	
		  PopUpView.prototype.close = function(isBack) {
		    if (isBack == null) {
		      isBack = false;
		    }
		    this.emit('close', isBack);
		    return util.nextTick((function(_this) {
		      return function() {
		        return _this.destroy();
		      };
		    })(this));
		  };
	
		  PopUpView.prototype.destroy = function() {
		    PopUpView.__super__.destroy.call(this);
		    return $(this.el).remove();
		  };
	
		  return PopUpView;
	
		})(__webpack_require__(23));
	
		module.exports = PopUpView;
	
	
	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		/**
		 * 封装 http 请求
		 * @date 2015-12-07 14:32:01
		 * @author vfasky <vfasky@gmail.com>
		 * @link http://vfasky.com
		 * @version $Id$
		 */
		"use strict";
		var $, errCallback, http, networkErrCallback;
	
		$ = __webpack_require__(16);
	
		networkErrCallback = function(xhr, status, hideError) {
		  var error, error1, httpCode, msg, res;
		  msg = 'Network Error';
		  if (xhr.responseText) {
		    try {
		      res = $.parseJSON(xhr.responseText);
		      if (res.error) {
		        msg = res.error;
		      }
		    } catch (error1) {
		      error = error1;
		    }
		  }
		  httpCode = xhr.statusCode().status;
		  if (httpCode) {
		    msg = msg + ' ( code: ' + httpCode + ' )';
		  }
		  if (!hideError) {
		    return alert(msg);
		  } else {
		    return console.log(msg);
		  }
		};
	
		errCallback = function(res, hideError) {
		  var msg;
		  msg = res.error || res.msg || 'An unknown error occurred';
		  if (!hideError) {
		    return alert(msg);
		  } else {
		    return console.log(msg);
		  }
		};
	
		http = (function() {
		  var ajax, exports, timeout;
		  timeout = 10000;
		  ajax = function(type, url, data, hideError) {
		    var dtd, options, promise, xhr;
		    if (hideError == null) {
		      hideError = false;
		    }
		    dtd = $.Deferred();
		    data = http.sendDataFormat(data || {});
		    options = {
		      cache: false,
		      data: data,
		      dataType: 'json',
		      type: type || 'GET',
		      timeout: timeout,
		      headers: http.buildHeaders()
		    };
		    if (window['FormData'] && data instanceof FormData) {
		      options.processData = false;
		      options.contentType = false;
		    }
		    if (type === 'jsonp') {
		      options.type = 'GET';
		      options.dataType = 'jsonp';
		    }
		    xhr = $.ajax(url, options);
		    xhr.sendData = options.data;
		    http.onBeforeSend(xhr);
		    xhr.then(function(res) {
		      if (http.isSuccess(res, this)) {
		        return dtd.resolve(http.responseFormat(res));
		      } else {
		        dtd.reject(res);
		        return errCallback(res, hideError);
		      }
		    }).fail(function(xhr, status) {
		      var error, error1, res;
		      dtd.reject(xhr, status);
		      if (!xhr.statusCode().status) {
		        return networkErrCallback(xhr, status, hideError);
		      } else {
		        try {
		          res = $.parseJSON(xhr.responseText);
		        } catch (error1) {
		          error = error1;
		          res = {};
		        }
		        return errCallback(res, hideError);
		      }
		    }).always(function() {
		      return http.onComplete(xhr);
		    });
		    promise = dtd.promise();
		    promise.xhr = xhr;
		    promise.reject = function(err) {
		      dtd = $.Deferred();
		      dtd.reject(err);
		      return dtd.promise();
		    };
		    return promise;
		  };
		  return exports = {
		    get: function(url, data, hideError) {
		      if (hideError == null) {
		        hideError = false;
		      }
		      return ajax('GET', url, data, hideError);
		    },
		    post: function(url, data, hideError) {
		      if (hideError == null) {
		        hideError = false;
		      }
		      return ajax('POST', url, data, hideError);
		    },
		    jsonp: function(url, data, hideError) {
		      if (hideError == null) {
		        hideError = false;
		      }
		      return ajax('jsonp', url, data, hideError);
		    }
		  };
		})();
	
		http.onBeforeSend = function() {};
	
		http.onComplete = function() {};
	
		http.isSuccess = function(res) {
		  return Number(res.code) === 1;
		};
	
		http.buildHeaders = function() {
		  return {};
		};
	
		http.regErrCallback = function(type, fun) {
		  if (type === 'network') {
		    return networkErrCallback = fun;
		  } else {
		    return errCallback = fun;
		  }
		};
	
		http.responseFormat = function(res) {
		  return res;
		};
	
		http.sendDataFormat = function(data) {
		  return data;
		};
	
		module.exports = http;
	
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *
	 * 同步表单内的值
	 * @author vfasky <vfasky@gmail.com>
	 */
	'use strict';
	module.exports = function(mcore) {
	  var $, Template, util;
	  Template = mcore.Template, util = mcore.util;
	  $ = __webpack_require__(1);
	  return Template.binders['sync'] = {
	    rendered: function(el, dataKey) {
	      var $form, proxyEnv, set;
	      if (el.tagName.toLowerCase() !== 'form' || !el._element) {
	        return el.setAttribute('sync', dataKey);
	      }
	      proxyEnv = Template.getEnv(el);
	      set = function(name, value) {
	        var pData;
	        if (proxyEnv.scope) {
	          return proxyEnv.scope[dataKey][name] = value;
	        } else {
	          pData = proxyEnv.get(dataKey);
	          pData[name] = value;
	          return proxyEnv.set(dataKey, dataKey);
	        }
	      };
	      $form = $(el);
	      return $form.on('change', '[name]', function() {
	        var $el, name, val;
	        $el = $(this);
	        name = $el.attr('name');
	        if (name) {
	          if ($el.is('[type=checkbox],[type=radio]')) {
	            val = $el.prop('checked') ? this.value : '';
	            return set(name, val);
	          } else {
	            return set(name, this.value);
	          }
	        }
	      });
	    }
	  };
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * 表单验证
	 * @date 2016-02-14 16:01:56
	 * @author vfasky <vfasky@gmail.com>
	 * @link http://vfasky.com
	 */
	'use strict';
	var $, _errMsg, _isAlphabetReg, _isChrStr, _isDateReg, _isDigitOrAlphaReg, _isEmailReg, _isMobileReg, _isTelReg, _rule, _urlCheck,
	  slice = [].slice;
	
	$ = __webpack_require__(1);
	
	__webpack_require__(6);
	
	if (typeof String.prototype.trim !== 'function') {
	  String.prototype.trim = function() {
	    return $.trim(this);
	  };
	}
	
	_isAlphabetReg = /^[A-Za-z]+$/;
	
	_isChrStr = /[^x00-xff]/;
	
	_isEmailReg = /^(?:[a-z0-9]+[_\-+.]+)*[a-z0-9]+@(?:([a-z0-9]+-?)*[a-z0-9]+.)+([a-z]{2,})+$/i;
	
	_isDateReg = /^([1-2]\d{3})([-\/.])?(1[0-2]|0?[1-9])([-\/.])?([1-2]\d|3[01]|0?[1-9])$/;
	
	_isMobileReg = /^1[3-9]\d{9}$/;
	
	_isDigitOrAlphaReg = /^(\d|\w)+$/;
	
	
	/**
	 * 检查座机
	 * 座机：仅中国座机支持；区号可有 3、4位数并且以 0 开头；电话号不以 0 开头，最 8 位数，最少 7 位数
	 * 但 400/800 除头开外，适应电话，电话本身是 7 位数
	 * 0755-29819991 | 0755 29819991 | 400-6927972 | 4006927927 | 800...
	 *
	 */
	
	_isTelReg = /^(?:(?:0\d{2,3}[- ]?[1-9]\d{6,7})|(?:[48]00[- ]?[1-9]\d{6}))$/;
	
	_urlCheck = (function() {
	  var address, domain, domainType, ip, ipType, port, protocols, rDomain, rIP, userInfo;
	  protocols = '((https?|s?ftp|irc[6s]?|git|afp|telnet|smb):\\/\\/)?';
	  userInfo = '([a-z0-9]\\w*(\\:[\\S]+)?\\@)?';
	  domain = '(?:localhost|(?:[a-z0-9]+(?:[-\\w]*[a-z0-9])?(?:\\.[a-z0-9][-\\w]*[a-z0-9])*)*\\.[a-z]{2,})';
	  port = '(:\\d{1,5})?';
	  ip = '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}';
	  address = '(\\/\\S*)?';
	  domainType = [protocols, userInfo, domain, port, address];
	  ipType = [protocols, userInfo, ip, port, address];
	  rDomain = new RegExp('^' + domainType.join('') + '$', 'i');
	  rIP = new RegExp('^' + ipType.join('') + '$', 'i');
	  return function(x) {
	    return rDomain.test(x || rIP.test(x));
	  };
	})();
	
	_rule = {
	  required: function(x, rule) {
	    if (x == null) {
	      x = '';
	    }
	    if (rule == null) {
	      rule = null;
	    }
	    if (rule === null) {
	      return String(x).trim().length > 0;
	    }
	    if (x.$form.find(rule).val()) {
	      return String(x).trim().length > 0;
	    }
	    return true;
	  },
	  trim: function(x) {
	    var res;
	    if (x == null) {
	      x = '';
	    }
	    return res = {
	      type: 'formatter',
	      val: String(x).trim()
	    };
	  },
	  isAlphabet: function(x) {
	    return _isAlphabetReg.test(String(x));
	  },
	  onlyDigitAndAlpha: function(x) {
	    return _isDigitOrAlphaReg.test(String(x));
	  },
	  minlength: function(x, len) {
	    len = Number(len);
	    x = String(x).trim();
	    return x.length >= len;
	  },
	  maxlength: function(x, len) {
	    len = Number(len);
	    x = String(x).trim();
	    return x.length <= len;
	  },
	  maxChrLen: function(x, len) {
	    var i, j, ref, strLen, v;
	    len = Number(len);
	    x = String(x).trim();
	    strLen = 0;
	    for (i = j = 0, ref = x.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	      v = x[i];
	      if (v.match(_isChrStr)) {
	        strLen += 1;
	      } else {
	        strLen += 0.5;
	      }
	    }
	    return strLen <= len;
	  },
	  minChrLen: function(x, len) {
	    var i, j, ref, strLen, v;
	    len = Number(len);
	    x = String(x).trim();
	    strLen = 0;
	    for (i = j = 0, ref = x.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	      v = x[i];
	      if (v.match(_isChrStr)) {
	        strLen += 1;
	      } else {
	        strLen += 0.5;
	      }
	    }
	    return strLen >= len;
	  },
	  isNumber: function(x) {
	    return $.isNumeric(String(x));
	  },
	  isInteger: function(x) {
	    return Number(x) % 1 === 0;
	  },
	  min: function(x, min) {
	    return Number(x) >= Number(min);
	  },
	  max: function(x, max) {
	    return Number(x) <= Number(max);
	  },
	  equals: function(x, value) {
	    if (value instanceof $) {
	      value = value.val();
	    }
	    if (x instanceof $) {
	      x = x.val();
	    }
	    return String(x) === String(value);
	  },
	  isEmail: function(x) {
	    return _isEmailReg.test(String(x));
	  },
	  isDate: function(x) {
	    var d, day, month, taste, year;
	    if (_isDateReg.test(String(x))) {
	      return false;
	    }
	    taste = _isDateReg.exec(String(x));
	    year = Number(taste[1]);
	    month = Number(taste[3] - 1);
	    day = Number(taste[5]);
	    d = new Date(year, month, day);
	    return year === d.getFullYear() && month === d.getMonth() && day === d.getDate();
	  },
	  isMobile: function(x) {
	    return _isMobileReg.test(String(x));
	  },
	  isTel: function(x) {
	    return _isTelReg.test(String(x));
	  },
	  isUrl: function(x) {
	    return _urlCheck(String(x));
	  }
	};
	
	_errMsg = {
	  required: '不能为空',
	  isNumber: '只能是数字',
	  isAlphabet: '只能是字母',
	  onlyDigitAndAlpha: '只能是字母和数字',
	  minlength: function(len) {
	    return "最小 " + len + " 位字符";
	  },
	  minChrLen: function(len) {
	    return "最小 " + len + " 个中文 或  " + (Number(len) * 2) + " 个英文";
	  },
	  maxChrLen: function(len) {
	    return "最多 " + len + " 个中文 或  " + (Number(len) * 2) + " 个英文";
	  },
	  maxlength: function(len) {
	    return "最多 " + len + " 位字符";
	  },
	  min: function(min) {
	    return "数值要大于 " + min;
	  },
	  max: function(max) {
	    return "数值要小于 " + max;
	  },
	  equals: '两次输入的值不相符',
	  isEmail: '邮箱格式不正确',
	  isInteger: '数值必须是整数',
	  isDate: '日期格式不正确',
	  isMobile: '手机格式不正确',
	  isTel: '座机格式不正确'
	};
	
	module.exports = function(mcore) {
	  var Template, getNameValue, getRules, parseValidator, util, validator;
	  Template = mcore.Template, util = mcore.util;
	  parseValidator = function($el, rules, $form) {
	    var name, validatorAttr;
	    if (rules == null) {
	      rules = [];
	    }
	    name = $el.attr('name');
	    if (!name) {
	      return true;
	    }
	    validatorAttr = $el.attr('validator').trim();
	    if (!validatorAttr) {
	      return true;
	    }
	    return util.each(validatorAttr.split('|'), function(v) {
	      var args, checkRule, diyErr, eT, err, ix, msgArgs, ruleType;
	      ix = String(v).indexOf(' err:');
	      if (ix !== -1) {
	        eT = v.split(' err:');
	        v = eT[0];
	        diyErr = eT[1];
	      }
	      args = $.grep(v.split(' '), (function(_this) {
	        return function(s) {
	          return $.trim(s).length > 0;
	        };
	      })(this));
	      ruleType = args[0];
	      checkRule = _rule[ruleType];
	      if (!checkRule) {
	        console.log("validator rule: " + ruleType + " undefined");
	        return;
	      }
	      if (diyErr) {
	        err = diyErr;
	      } else {
	        if ($.isFunction(_errMsg[ruleType])) {
	          msgArgs = args.slice(0);
	          msgArgs.splice(0, 1);
	          err = _errMsg[ruleType].apply($el[0], msgArgs);
	        } else {
	          err = _errMsg[ruleType] || 'error';
	        }
	      }
	      args[0] = $el;
	      if (ruleType === 'equals') {
	        args[1] = $form.find(args[1]).eq(0);
	      }
	      return rules.push({
	        name: name,
	        type: ruleType,
	        rule: checkRule,
	        args: args,
	        err: err
	      });
	    });
	  };
	  getRules = function($form) {
	    var rules;
	    rules = [];
	    $form.find('[validator]').each(function() {
	      return parseValidator($(this), rules, $form);
	    });
	    return rules;
	  };
	  getNameValue = function(data, name, $el) {
	    name = String(name);
	    if (-1 === name.indexOf('[')) {
	      return data[name] || '';
	    }
	    return $el[0].value.trim();
	  };
	  Template.binders['validator'] = Template.binders['validated'] = {
	    update: function(el, value) {
	      if (el.tagName.toLowerCase() === 'form') {
	        return false;
	      }
	      return el.setAttribute('validator', value);
	    },
	    rendered: function(el, value) {
	      var $form, callback, proxyEnv, validatorForm;
	      if (el.tagName.toLowerCase() !== 'form' || !el._element) {
	        return el.setAttribute('validator', value);
	      }
	      callback = Template.strToFun(el, value) || function() {};
	      proxyEnv = Template.getEnv(el);
	      $form = $(el);
	      validatorForm = function(callback) {
	        var data, err, rules;
	        rules = getRules($form);
	        data = $form.serializeObject();
	        err = null;
	        $.each(rules, function(k, v) {
	          var $el, _value, checkRes;
	          $el = v.args[0];
	          _value = getNameValue(data, v.name, $el);
	          if (v.type !== 'required' && (_value === '' || _value === void 0)) {
	            return;
	          }
	          value = {
	            toString: function() {
	              return String(_value);
	            },
	            toNumber: function() {
	              return Number(_value);
	            },
	            $el: $el,
	            $form: $form
	          };
	          v.args[0] = value;
	          checkRes = v.rule.apply(null, v.args);
	          if (false === checkRes) {
	            err = {
	              $el: $el,
	              err: v.err,
	              $form: $form
	            };
	            return false;
	          }
	          if (checkRes.type && checkRes.type === 'formatter') {
	            $el.val(checkRes.val);
	            return data[v.name] = checkRes.val;
	          }
	        });
	        return callback(err, data);
	      };
	      if (proxyEnv && !proxyEnv[value + 'Check']) {
	        proxyEnv[value + 'Check'] = function() {
	          var dtd;
	          dtd = $.Deferred();
	          validatorForm(function(err, data) {
	            if (err) {
	              return dtd.reject(err);
	            }
	            return dtd.resolve(data);
	          });
	          return dtd.promise();
	        };
	      }
	      return $form.off('submit.validator').on('submit.validator', function() {
	        validatorForm(callback);
	        return false;
	      });
	    }
	  };
	  return validator = {
	    add: function(x, fun, errMsg) {
	      _rule[x] = fun;
	      if (errMsg) {
	        return _errMsg[x] = errMsg;
	      }
	    },
	    addErrMsg: function(type, msg) {
	      return _errMsg[type] = msg;
	    },
	    check: function() {
	      var args, type;
	      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	      if (args.length < 2) {
	        return false;
	      }
	      type = args[0];
	      args.splice(0, 1);
	      if (!_rule[type]) {
	        return false;
	      }
	      return _rule[type].apply(null, args);
	    }
	  };
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jQuery serializeObject
	 * @copyright 2014, macek <paulmacek@gmail.com>
	 * @link https://github.com/macek/jquery-serialize-object
	 * @license BSD
	 * @version 2.5.0
	 */
	(function(root, factory) {
	
	    // AMD
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, $) {
	            return factory(exports, $);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	
	    // CommonJS
	    else if (typeof exports !== "undefined") {
	        var $ = require("jquery");
	        factory(exports, $);
	    }
	
	    // Browser
	    else {
	        factory(root, (root.jQuery || root.Zepto || root.ender || root.$));
	    }
	
	}(this, function(exports, $) {
	
	    var patterns = {
	        validate: /^[a-z_][a-z0-9_]*(?:\[(?:\d*|[a-z0-9_]+)\])*$/i,
	        key: /[a-z0-9_]+|(?=\[\])/gi,
	        push: /^$/,
	        fixed: /^\d+$/,
	        named: /^[a-z0-9_]+$/i
	    };
	
	    function FormSerializer(helper, $form) {
	
	        // private variables
	        var data = {},
	            pushes = {};
	
	        // private API
	        function build(base, key, value) {
	            base[key] = value;
	            return base;
	        }
	
	        function makeObject(root, value) {
	
	            var keys = root.match(patterns.key),
	                k;
	
	            // nest, nest, ..., nest
	            while ((k = keys.pop()) !== undefined) {
	                // foo[]
	                if (patterns.push.test(k)) {
	                    var idx = incrementPush(root.replace(/\[\]$/, ''));
	                    value = build([], idx, value);
	                }
	
	                // foo[n]
	                else if (patterns.fixed.test(k)) {
	                    value = build([], k, value);
	                }
	
	                // foo; foo[bar]
	                else if (patterns.named.test(k)) {
	                    value = build({}, k, value);
	                }
	            }
	
	            return value;
	        }
	
	        function incrementPush(key) {
	            if (pushes[key] === undefined) {
	                pushes[key] = 0;
	            }
	            return pushes[key]++;
	        }
	
	        function encode(pair) {
	            switch ($('[name="' + pair.name + '"]', $form).attr("type")) {
	                case "checkbox":
	                    return pair.value === "on" ? true : pair.value;
	                default:
	                    return pair.value;
	            }
	        }
	
	        function addPair(pair) {
	            if (!patterns.validate.test(pair.name)) return this;
	            var obj = makeObject(pair.name, encode(pair));
	            data = helper.extend(true, data, obj);
	            return this;
	        }
	
	        function addPairs(pairs) {
	            if (!helper.isArray(pairs)) {
	                throw new Error("formSerializer.addPairs expects an Array");
	            }
	            for (var i = 0, len = pairs.length; i < len; i++) {
	                this.addPair(pairs[i]);
	            }
	            return this;
	        }
	
	        function serialize() {
	            return data;
	        }
	
	        function serializeJSON() {
	            return JSON.stringify(serialize());
	        }
	
	        // public API
	        this.addPair = addPair;
	        this.addPairs = addPairs;
	        this.serialize = serialize;
	        this.serializeJSON = serializeJSON;
	    }
	
	    FormSerializer.patterns = patterns;
	
	    FormSerializer.serializeObject = function serializeObject() {
	        return new FormSerializer($, this).
	        addPairs(this.serializeArray()).
	        serialize();
	    };
	
	    FormSerializer.serializeJSON = function serializeJSON() {
	        return new FormSerializer($, this).
	        addPairs(this.serializeArray()).
	        serializeJSON();
	    };
	
	    if (typeof $.fn !== "undefined") {
	        $.fn.serializeObject = FormSerializer.serializeObject;
	        $.fn.serializeJSON = FormSerializer.serializeJSON;
	    }
	
	    exports.FormSerializer = FormSerializer;
	
	    return FormSerializer;
	}));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var Template, moment, ref, util;
	
	moment = __webpack_require__(8);
	
	ref = __webpack_require__(2), Template = ref.Template, util = ref.util;
	
	__webpack_require__(11);
	
	moment.locale('zh-cn');
	
	Template.formatters['dateFormat'] = function(value, format) {
	  if (format == null) {
	    format = 'YYYY-MM-DD HH:mm';
	  }
	  if (!value) {
	    return '';
	  }
	  if (util.isNumber(value)) {
	    value = Number(value) * 1000;
	  }
	  return moment(value).format(format);
	};
	
	Template.formatters['fillZero'] = function(value, length) {
	  var i, j, ref1;
	  value = String(parseInt(value));
	  if (value.length < length) {
	    for (i = j = 0, ref1 = length - value.length; 0 <= ref1 ? j < ref1 : j > ref1; i = 0 <= ref1 ? ++j : --j) {
	      value = '0' + value;
	    }
	  }
	  return value;
	};
	
	Template.formatters['fromNow'] = function(value) {
	  return moment(value).fromNow();
	};
	
	Template.formatters['bg'] = function(imgUrl) {
	  if (!imgUrl) {
	    return '';
	  }
	  return "background-image:url(" + imgUrl + "); background-size: cover; background-repeat: no-repeat";
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.14.1
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com
	
	;(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    global.moment = factory()
	}(this, function () { 'use strict';
	
	    var hookCallback;
	
	    function utils_hooks__hooks () {
	        return hookCallback.apply(null, arguments);
	    }
	
	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback (callback) {
	        hookCallback = callback;
	    }
	
	    function isArray(input) {
	        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	    }
	
	    function isObject(input) {
	        return Object.prototype.toString.call(input) === '[object Object]';
	    }
	
	    function isObjectEmpty(obj) {
	        var k;
	        for (k in obj) {
	            // even if its not own property I'd still call it non-empty
	            return false;
	        }
	        return true;
	    }
	
	    function isDate(input) {
	        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	    }
	
	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }
	
	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }
	
	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }
	
	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }
	
	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }
	
	        return a;
	    }
	
	    function create_utc__createUTC (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }
	
	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty           : false,
	            unusedTokens    : [],
	            unusedInput     : [],
	            overflow        : -2,
	            charsLeftOver   : 0,
	            nullInput       : false,
	            invalidMonth    : null,
	            invalidFormat   : false,
	            userInvalidated : false,
	            iso             : false,
	            parsedDateParts : [],
	            meridiem        : null
	        };
	    }
	
	    function getParsingFlags(m) {
	        if (m._pf == null) {
	            m._pf = defaultParsingFlags();
	        }
	        return m._pf;
	    }
	
	    var some;
	    if (Array.prototype.some) {
	        some = Array.prototype.some;
	    } else {
	        some = function (fun) {
	            var t = Object(this);
	            var len = t.length >>> 0;
	
	            for (var i = 0; i < len; i++) {
	                if (i in t && fun.call(this, t[i], i, t)) {
	                    return true;
	                }
	            }
	
	            return false;
	        };
	    }
	
	    function valid__isValid(m) {
	        if (m._isValid == null) {
	            var flags = getParsingFlags(m);
	            var parsedParts = some.call(flags.parsedDateParts, function (i) {
	                return i != null;
	            });
	            m._isValid = !isNaN(m._d.getTime()) &&
	                flags.overflow < 0 &&
	                !flags.empty &&
	                !flags.invalidMonth &&
	                !flags.invalidWeekday &&
	                !flags.nullInput &&
	                !flags.invalidFormat &&
	                !flags.userInvalidated &&
	                (!flags.meridiem || (flags.meridiem && parsedParts));
	
	            if (m._strict) {
	                m._isValid = m._isValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
	            }
	        }
	        return m._isValid;
	    }
	
	    function valid__createInvalid (flags) {
	        var m = create_utc__createUTC(NaN);
	        if (flags != null) {
	            extend(getParsingFlags(m), flags);
	        }
	        else {
	            getParsingFlags(m).userInvalidated = true;
	        }
	
	        return m;
	    }
	
	    function isUndefined(input) {
	        return input === void 0;
	    }
	
	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    var momentProperties = utils_hooks__hooks.momentProperties = [];
	
	    function copyConfig(to, from) {
	        var i, prop, val;
	
	        if (!isUndefined(from._isAMomentObject)) {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (!isUndefined(from._i)) {
	            to._i = from._i;
	        }
	        if (!isUndefined(from._f)) {
	            to._f = from._f;
	        }
	        if (!isUndefined(from._l)) {
	            to._l = from._l;
	        }
	        if (!isUndefined(from._strict)) {
	            to._strict = from._strict;
	        }
	        if (!isUndefined(from._tzm)) {
	            to._tzm = from._tzm;
	        }
	        if (!isUndefined(from._isUTC)) {
	            to._isUTC = from._isUTC;
	        }
	        if (!isUndefined(from._offset)) {
	            to._offset = from._offset;
	        }
	        if (!isUndefined(from._pf)) {
	            to._pf = getParsingFlags(from);
	        }
	        if (!isUndefined(from._locale)) {
	            to._locale = from._locale;
	        }
	
	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (!isUndefined(val)) {
	                    to[prop] = val;
	                }
	            }
	        }
	
	        return to;
	    }
	
	    var updateInProgress = false;
	
	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            utils_hooks__hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }
	
	    function isMoment (obj) {
	        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	    }
	
	    function absFloor (number) {
	        if (number < 0) {
	            // -0 -> 0
	            return Math.ceil(number) || 0;
	        } else {
	            return Math.floor(number);
	        }
	    }
	
	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;
	
	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            value = absFloor(coercedNumber);
	        }
	
	        return value;
	    }
	
	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }
	
	    function warn(msg) {
	        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
	                (typeof console !==  'undefined') && console.warn) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }
	
	    function deprecate(msg, fn) {
	        var firstTime = true;
	
	        return extend(function () {
	            if (utils_hooks__hooks.deprecationHandler != null) {
	                utils_hooks__hooks.deprecationHandler(null, msg);
	            }
	            if (firstTime) {
	                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }
	
	    var deprecations = {};
	
	    function deprecateSimple(name, msg) {
	        if (utils_hooks__hooks.deprecationHandler != null) {
	            utils_hooks__hooks.deprecationHandler(name, msg);
	        }
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }
	
	    utils_hooks__hooks.suppressDeprecationWarnings = false;
	    utils_hooks__hooks.deprecationHandler = null;
	
	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }
	
	    function locale_set__set (config) {
	        var prop, i;
	        for (i in config) {
	            prop = config[i];
	            if (isFunction(prop)) {
	                this[i] = prop;
	            } else {
	                this['_' + i] = prop;
	            }
	        }
	        this._config = config;
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _ordinalParseLenient.
	        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
	    }
	
	    function mergeConfigs(parentConfig, childConfig) {
	        var res = extend({}, parentConfig), prop;
	        for (prop in childConfig) {
	            if (hasOwnProp(childConfig, prop)) {
	                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	                    res[prop] = {};
	                    extend(res[prop], parentConfig[prop]);
	                    extend(res[prop], childConfig[prop]);
	                } else if (childConfig[prop] != null) {
	                    res[prop] = childConfig[prop];
	                } else {
	                    delete res[prop];
	                }
	            }
	        }
	        for (prop in parentConfig) {
	            if (hasOwnProp(parentConfig, prop) &&
	                    !hasOwnProp(childConfig, prop) &&
	                    isObject(parentConfig[prop])) {
	                // make sure changes to properties don't modify parent config
	                res[prop] = extend({}, res[prop]);
	            }
	        }
	        return res;
	    }
	
	    function Locale(config) {
	        if (config != null) {
	            this.set(config);
	        }
	    }
	
	    var keys;
	
	    if (Object.keys) {
	        keys = Object.keys;
	    } else {
	        keys = function (obj) {
	            var i, res = [];
	            for (i in obj) {
	                if (hasOwnProp(obj, i)) {
	                    res.push(i);
	                }
	            }
	            return res;
	        };
	    }
	
	    var defaultCalendar = {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    };
	
	    function locale_calendar__calendar (key, mom, now) {
	        var output = this._calendar[key] || this._calendar['sameElse'];
	        return isFunction(output) ? output.call(mom, now) : output;
	    }
	
	    var defaultLongDateFormat = {
	        LTS  : 'h:mm:ss A',
	        LT   : 'h:mm A',
	        L    : 'MM/DD/YYYY',
	        LL   : 'MMMM D, YYYY',
	        LLL  : 'MMMM D, YYYY h:mm A',
	        LLLL : 'dddd, MMMM D, YYYY h:mm A'
	    };
	
	    function longDateFormat (key) {
	        var format = this._longDateFormat[key],
	            formatUpper = this._longDateFormat[key.toUpperCase()];
	
	        if (format || !formatUpper) {
	            return format;
	        }
	
	        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
	            return val.slice(1);
	        });
	
	        return this._longDateFormat[key];
	    }
	
	    var defaultInvalidDate = 'Invalid date';
	
	    function invalidDate () {
	        return this._invalidDate;
	    }
	
	    var defaultOrdinal = '%d';
	    var defaultOrdinalParse = /\d{1,2}/;
	
	    function ordinal (number) {
	        return this._ordinal.replace('%d', number);
	    }
	
	    var defaultRelativeTime = {
	        future : 'in %s',
	        past   : '%s ago',
	        s  : 'a few seconds',
	        m  : 'a minute',
	        mm : '%d minutes',
	        h  : 'an hour',
	        hh : '%d hours',
	        d  : 'a day',
	        dd : '%d days',
	        M  : 'a month',
	        MM : '%d months',
	        y  : 'a year',
	        yy : '%d years'
	    };
	
	    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return (isFunction(output)) ?
	            output(number, withoutSuffix, string, isFuture) :
	            output.replace(/%d/i, number);
	    }
	
	    function pastFuture (diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	    }
	
	    var aliases = {};
	
	    function addUnitAlias (unit, shorthand) {
	        var lowerCase = unit.toLowerCase();
	        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	    }
	
	    function normalizeUnits(units) {
	        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	    }
	
	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;
	
	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }
	
	        return normalizedInput;
	    }
	
	    var priorities = {};
	
	    function addUnitPriority(unit, priority) {
	        priorities[unit] = priority;
	    }
	
	    function getPrioritizedUnits(unitsObj) {
	        var units = [];
	        for (var u in unitsObj) {
	            units.push({unit: u, priority: priorities[u]});
	        }
	        units.sort(function (a, b) {
	            return a.priority - b.priority;
	        });
	        return units;
	    }
	
	    function makeGetSet (unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                get_set__set(this, unit, value);
	                utils_hooks__hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get_set__get(this, unit);
	            }
	        };
	    }
	
	    function get_set__get (mom, unit) {
	        return mom.isValid() ?
	            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
	    }
	
	    function get_set__set (mom, unit, value) {
	        if (mom.isValid()) {
	            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	        }
	    }
	
	    // MOMENTS
	
	    function stringGet (units) {
	        units = normalizeUnits(units);
	        if (isFunction(this[units])) {
	            return this[units]();
	        }
	        return this;
	    }
	
	
	    function stringSet (units, value) {
	        if (typeof units === 'object') {
	            units = normalizeObjectUnits(units);
	            var prioritized = getPrioritizedUnits(units);
	            for (var i = 0; i < prioritized.length; i++) {
	                this[prioritized[i].unit](units[prioritized[i].unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (isFunction(this[units])) {
	                return this[units](value);
	            }
	        }
	        return this;
	    }
	
	    function zeroFill(number, targetLength, forceSign) {
	        var absNumber = '' + Math.abs(number),
	            zerosToFill = targetLength - absNumber.length,
	            sign = number >= 0;
	        return (sign ? (forceSign ? '+' : '') : '-') +
	            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	    }
	
	    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
	
	    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
	
	    var formatFunctions = {};
	
	    var formatTokenFunctions = {};
	
	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken (token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(func.apply(this, arguments), token);
	            };
	        }
	    }
	
	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }
	
	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;
	
	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }
	
	        return function (mom) {
	            var output = '', i;
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }
	
	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }
	
	        format = expandFormat(format, m.localeData());
	        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
	
	        return formatFunctions[format](m);
	    }
	
	    function expandFormat(format, locale) {
	        var i = 5;
	
	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }
	
	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }
	
	        return format;
	    }
	
	    var match1         = /\d/;            //       0 - 9
	    var match2         = /\d\d/;          //      00 - 99
	    var match3         = /\d{3}/;         //     000 - 999
	    var match4         = /\d{4}/;         //    0000 - 9999
	    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	    var match1to2      = /\d\d?/;         //       0 - 99
	    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
	    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
	    var match1to3      = /\d{1,3}/;       //       0 - 999
	    var match1to4      = /\d{1,4}/;       //       0 - 9999
	    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999
	
	    var matchUnsigned  = /\d+/;           //       0 - inf
	    var matchSigned    = /[+-]?\d+/;      //    -inf - inf
	
	    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
	
	    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
	
	    // any word (or two) characters or numbers including two/three word month in arabic.
	    // includes scottish gaelic two word and hyphenated months
	    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
	
	
	    var regexes = {};
	
	    function addRegexToken (token, regex, strictRegex) {
	        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
	            return (isStrict && strictRegex) ? strictRegex : regex;
	        };
	    }
	
	    function getParseRegexForToken (token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }
	
	        return regexes[token](config._strict, config._locale);
	    }
	
	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        }));
	    }
	
	    function regexEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }
	
	    var tokens = {};
	
	    function addParseToken (token, callback) {
	        var i, func = callback;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (typeof callback === 'number') {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        for (i = 0; i < token.length; i++) {
	            tokens[token[i]] = func;
	        }
	    }
	
	    function addWeekParseToken (token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }
	
	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }
	
	    var YEAR = 0;
	    var MONTH = 1;
	    var DATE = 2;
	    var HOUR = 3;
	    var MINUTE = 4;
	    var SECOND = 5;
	    var MILLISECOND = 6;
	    var WEEK = 7;
	    var WEEKDAY = 8;
	
	    var indexOf;
	
	    if (Array.prototype.indexOf) {
	        indexOf = Array.prototype.indexOf;
	    } else {
	        indexOf = function (o) {
	            // I know
	            var i;
	            for (i = 0; i < this.length; ++i) {
	                if (this[i] === o) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	    }
	
	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }
	
	    // FORMATTING
	
	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });
	
	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });
	
	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });
	
	    // ALIASES
	
	    addUnitAlias('month', 'M');
	
	    // PRIORITY
	
	    addUnitPriority('month', 8);
	
	    // PARSING
	
	    addRegexToken('M',    match1to2);
	    addRegexToken('MM',   match1to2, match2);
	    addRegexToken('MMM',  function (isStrict, locale) {
	        return locale.monthsShortRegex(isStrict);
	    });
	    addRegexToken('MMMM', function (isStrict, locale) {
	        return locale.monthsRegex(isStrict);
	    });
	
	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });
	
	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });
	
	    // LOCALES
	
	    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	    function localeMonths (m, format) {
	        return isArray(this._months) ? this._months[m.month()] :
	            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
	    }
	
	    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	    function localeMonthsShort (m, format) {
	        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
	            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	    }
	
	    function units_month__handleStrictParse(monthName, format, strict) {
	        var i, ii, mom, llc = monthName.toLocaleLowerCase();
	        if (!this._monthsParse) {
	            // this is not used
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	            for (i = 0; i < 12; ++i) {
	                mom = create_utc__createUTC([2000, i]);
	                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
	                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
	            }
	        }
	
	        if (strict) {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }
	
	    function localeMonthsParse (monthName, format, strict) {
	        var i, mom, regex;
	
	        if (this._monthsParseExact) {
	            return units_month__handleStrictParse.call(this, monthName, format, strict);
	        }
	
	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }
	
	        // TODO: add sorting
	        // Sorting makes sure if one month (or abbr) is a prefix of another
	        // see sorting in computeMonthsParse
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function setMonth (mom, value) {
	        var dayOfMonth;
	
	        if (!mom.isValid()) {
	            // No op
	            return mom;
	        }
	
	        if (typeof value === 'string') {
	            if (/^\d+$/.test(value)) {
	                value = toInt(value);
	            } else {
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
	                if (typeof value !== 'number') {
	                    return mom;
	                }
	            }
	        }
	
	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }
	
	    function getSetMonth (value) {
	        if (value != null) {
	            setMonth(this, value);
	            utils_hooks__hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get_set__get(this, 'Month');
	        }
	    }
	
	    function getDaysInMonth () {
	        return daysInMonth(this.year(), this.month());
	    }
	
	    var defaultMonthsShortRegex = matchWord;
	    function monthsShortRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsShortStrictRegex;
	            } else {
	                return this._monthsShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsShortRegex')) {
	                this._monthsShortRegex = defaultMonthsShortRegex;
	            }
	            return this._monthsShortStrictRegex && isStrict ?
	                this._monthsShortStrictRegex : this._monthsShortRegex;
	        }
	    }
	
	    var defaultMonthsRegex = matchWord;
	    function monthsRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsStrictRegex;
	            } else {
	                return this._monthsRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                this._monthsRegex = defaultMonthsRegex;
	            }
	            return this._monthsStrictRegex && isStrict ?
	                this._monthsStrictRegex : this._monthsRegex;
	        }
	    }
	
	    function computeMonthsParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	
	        var shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom;
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            shortPieces.push(this.monthsShort(mom, ''));
	            longPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.monthsShort(mom, ''));
	        }
	        // Sorting makes sure if one month (or abbr) is a prefix of another it
	        // will match the longer piece.
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 12; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	        }
	        for (i = 0; i < 24; i++) {
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }
	
	        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._monthsShortRegex = this._monthsRegex;
	        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	    }
	
	    // FORMATTING
	
	    addFormatToken('Y', 0, 0, function () {
	        var y = this.year();
	        return y <= 9999 ? '' + y : '+' + y;
	    });
	
	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });
	
	    addFormatToken(0, ['YYYY',   4],       0, 'year');
	    addFormatToken(0, ['YYYYY',  5],       0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
	
	    // ALIASES
	
	    addUnitAlias('year', 'y');
	
	    // PRIORITIES
	
	    addUnitPriority('year', 1);
	
	    // PARSING
	
	    addRegexToken('Y',      matchSigned);
	    addRegexToken('YY',     match1to2, match2);
	    addRegexToken('YYYY',   match1to4, match4);
	    addRegexToken('YYYYY',  match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);
	
	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function (input, array) {
	        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
	    });
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	    addParseToken('Y', function (input, array) {
	        array[YEAR] = parseInt(input, 10);
	    });
	
	    // HELPERS
	
	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }
	
	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }
	
	    // HOOKS
	
	    utils_hooks__hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };
	
	    // MOMENTS
	
	    var getSetYear = makeGetSet('FullYear', true);
	
	    function getIsLeapYear () {
	        return isLeapYear(this.year());
	    }
	
	    function createDate (y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);
	
	        //the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
	            date.setFullYear(y);
	        }
	        return date;
	    }
	
	    function createUTCDate (y) {
	        var date = new Date(Date.UTC.apply(null, arguments));
	
	        //the Date.UTC function remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }
	
	    // start-of-first-week - start-of-year
	    function firstWeekOffset(year, dow, doy) {
	        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	            fwd = 7 + dow - doy,
	            // first-week day local weekday -- which local weekday is fwd
	            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
	
	        return -fwdlw + fwd - 1;
	    }
	
	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	        var localWeekday = (7 + weekday - dow) % 7,
	            weekOffset = firstWeekOffset(year, dow, doy),
	            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	            resYear, resDayOfYear;
	
	        if (dayOfYear <= 0) {
	            resYear = year - 1;
	            resDayOfYear = daysInYear(resYear) + dayOfYear;
	        } else if (dayOfYear > daysInYear(year)) {
	            resYear = year + 1;
	            resDayOfYear = dayOfYear - daysInYear(year);
	        } else {
	            resYear = year;
	            resDayOfYear = dayOfYear;
	        }
	
	        return {
	            year: resYear,
	            dayOfYear: resDayOfYear
	        };
	    }
	
	    function weekOfYear(mom, dow, doy) {
	        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	            resWeek, resYear;
	
	        if (week < 1) {
	            resYear = mom.year() - 1;
	            resWeek = week + weeksInYear(resYear, dow, doy);
	        } else if (week > weeksInYear(mom.year(), dow, doy)) {
	            resWeek = week - weeksInYear(mom.year(), dow, doy);
	            resYear = mom.year() + 1;
	        } else {
	            resYear = mom.year();
	            resWeek = week;
	        }
	
	        return {
	            week: resWeek,
	            year: resYear
	        };
	    }
	
	    function weeksInYear(year, dow, doy) {
	        var weekOffset = firstWeekOffset(year, dow, doy),
	            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }
	
	    // FORMATTING
	
	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
	
	    // ALIASES
	
	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');
	
	    // PRIORITIES
	
	    addUnitPriority('week', 5);
	    addUnitPriority('isoWeek', 5);
	
	    // PARSING
	
	    addRegexToken('w',  match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W',  match1to2);
	    addRegexToken('WW', match1to2, match2);
	
	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	        week[token.substr(0, 1)] = toInt(input);
	    });
	
	    // HELPERS
	
	    // LOCALES
	
	    function localeWeek (mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }
	
	    var defaultLocaleWeek = {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    };
	
	    function localeFirstDayOfWeek () {
	        return this._week.dow;
	    }
	
	    function localeFirstDayOfYear () {
	        return this._week.doy;
	    }
	
	    // MOMENTS
	
	    function getSetWeek (input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	
	    function getSetISOWeek (input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	
	    // FORMATTING
	
	    addFormatToken('d', 0, 'do', 'day');
	
	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });
	
	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });
	
	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });
	
	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');
	
	    // ALIASES
	
	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');
	
	    // PRIORITY
	    addUnitPriority('day', 11);
	    addUnitPriority('weekday', 11);
	    addUnitPriority('isoWeekday', 11);
	
	    // PARSING
	
	    addRegexToken('d',    match1to2);
	    addRegexToken('e',    match1to2);
	    addRegexToken('E',    match1to2);
	    addRegexToken('dd',   function (isStrict, locale) {
	        return locale.weekdaysMinRegex(isStrict);
	    });
	    addRegexToken('ddd',   function (isStrict, locale) {
	        return locale.weekdaysShortRegex(isStrict);
	    });
	    addRegexToken('dddd',   function (isStrict, locale) {
	        return locale.weekdaysRegex(isStrict);
	    });
	
	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	        var weekday = config._locale.weekdaysParse(input, token, config._strict);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });
	
	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });
	
	    // HELPERS
	
	    function parseWeekday(input, locale) {
	        if (typeof input !== 'string') {
	            return input;
	        }
	
	        if (!isNaN(input)) {
	            return parseInt(input, 10);
	        }
	
	        input = locale.weekdaysParse(input);
	        if (typeof input === 'number') {
	            return input;
	        }
	
	        return null;
	    }
	
	    function parseIsoWeekday(input, locale) {
	        if (typeof input === 'string') {
	            return locale.weekdaysParse(input) % 7 || 7;
	        }
	        return isNaN(input) ? null : input;
	    }
	
	    // LOCALES
	
	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	    function localeWeekdays (m, format) {
	        return isArray(this._weekdays) ? this._weekdays[m.day()] :
	            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
	    }
	
	    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	    function localeWeekdaysShort (m) {
	        return this._weekdaysShort[m.day()];
	    }
	
	    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	    function localeWeekdaysMin (m) {
	        return this._weekdaysMin[m.day()];
	    }
	
	    function day_of_week__handleStrictParse(weekdayName, format, strict) {
	        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._minWeekdaysParse = [];
	
	            for (i = 0; i < 7; ++i) {
	                mom = create_utc__createUTC([2000, 1]).day(i);
	                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
	                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
	                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
	            }
	        }
	
	        if (strict) {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }
	
	    function localeWeekdaysParse (weekdayName, format, strict) {
	        var i, mom, regex;
	
	        if (this._weekdaysParseExact) {
	            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
	        }
	
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._minWeekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._fullWeekdaysParse = [];
	        }
	
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	
	            mom = create_utc__createUTC([2000, 1]).day(i);
	            if (strict && !this._fullWeekdaysParse[i]) {
	                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
	                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
	                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
	            }
	            if (!this._weekdaysParse[i]) {
	                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function getSetDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }
	
	    function getSetLocaleDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }
	
	    function getSetISODayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	
	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.
	
	        if (input != null) {
	            var weekday = parseIsoWeekday(input, this.localeData());
	            return this.day(this.day() % 7 ? weekday : weekday - 7);
	        } else {
	            return this.day() || 7;
	        }
	    }
	
	    var defaultWeekdaysRegex = matchWord;
	    function weekdaysRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysStrictRegex;
	            } else {
	                return this._weekdaysRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                this._weekdaysRegex = defaultWeekdaysRegex;
	            }
	            return this._weekdaysStrictRegex && isStrict ?
	                this._weekdaysStrictRegex : this._weekdaysRegex;
	        }
	    }
	
	    var defaultWeekdaysShortRegex = matchWord;
	    function weekdaysShortRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysShortStrictRegex;
	            } else {
	                return this._weekdaysShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
	                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
	            }
	            return this._weekdaysShortStrictRegex && isStrict ?
	                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
	        }
	    }
	
	    var defaultWeekdaysMinRegex = matchWord;
	    function weekdaysMinRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysMinStrictRegex;
	            } else {
	                return this._weekdaysMinRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
	                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
	            }
	            return this._weekdaysMinStrictRegex && isStrict ?
	                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
	        }
	    }
	
	
	    function computeWeekdaysParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	
	        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom, minp, shortp, longp;
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, 1]).day(i);
	            minp = this.weekdaysMin(mom, '');
	            shortp = this.weekdaysShort(mom, '');
	            longp = this.weekdays(mom, '');
	            minPieces.push(minp);
	            shortPieces.push(shortp);
	            longPieces.push(longp);
	            mixedPieces.push(minp);
	            mixedPieces.push(shortp);
	            mixedPieces.push(longp);
	        }
	        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	        // will match the longer piece.
	        minPieces.sort(cmpLenRev);
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 7; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }
	
	        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._weekdaysShortRegex = this._weekdaysRegex;
	        this._weekdaysMinRegex = this._weekdaysRegex;
	
	        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
	    }
	
	    // FORMATTING
	
	    function hFormat() {
	        return this.hours() % 12 || 12;
	    }
	
	    function kFormat() {
	        return this.hours() || 24;
	    }
	
	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, hFormat);
	    addFormatToken('k', ['kk', 2], 0, kFormat);
	
	    addFormatToken('hmm', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	    });
	
	    addFormatToken('hmmss', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });
	
	    addFormatToken('Hmm', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });
	
	    addFormatToken('Hmmss', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });
	
	    function meridiem (token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	        });
	    }
	
	    meridiem('a', true);
	    meridiem('A', false);
	
	    // ALIASES
	
	    addUnitAlias('hour', 'h');
	
	    // PRIORITY
	    addUnitPriority('hour', 13);
	
	    // PARSING
	
	    function matchMeridiem (isStrict, locale) {
	        return locale._meridiemParse;
	    }
	
	    addRegexToken('a',  matchMeridiem);
	    addRegexToken('A',  matchMeridiem);
	    addRegexToken('H',  match1to2);
	    addRegexToken('h',  match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);
	
	    addRegexToken('hmm', match3to4);
	    addRegexToken('hmmss', match5to6);
	    addRegexToken('Hmm', match3to4);
	    addRegexToken('Hmmss', match5to6);
	
	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('Hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	    });
	    addParseToken('Hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	    });
	
	    // LOCALES
	
	    function localeIsPM (input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return ((input + '').toLowerCase().charAt(0) === 'p');
	    }
	
	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	    function localeMeridiem (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }
	
	
	    // MOMENTS
	
	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    var getSetHour = makeGetSet('Hours', true);
	
	    var baseConfig = {
	        calendar: defaultCalendar,
	        longDateFormat: defaultLongDateFormat,
	        invalidDate: defaultInvalidDate,
	        ordinal: defaultOrdinal,
	        ordinalParse: defaultOrdinalParse,
	        relativeTime: defaultRelativeTime,
	
	        months: defaultLocaleMonths,
	        monthsShort: defaultLocaleMonthsShort,
	
	        week: defaultLocaleWeek,
	
	        weekdays: defaultLocaleWeekdays,
	        weekdaysMin: defaultLocaleWeekdaysMin,
	        weekdaysShort: defaultLocaleWeekdaysShort,
	
	        meridiemParse: defaultLocaleMeridiemParse
	    };
	
	    // internal storage for locale config files
	    var locales = {};
	    var globalLocale;
	
	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }
	
	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;
	
	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }
	
	    function loadLocale(name) {
	        var oldLocale = null;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (!locales[name] && (typeof module !== 'undefined') &&
	                module && module.exports) {
	            try {
	                oldLocale = globalLocale._abbr;
	                !(function webpackMissingModule() { var e = new Error("Cannot find module \"./locale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
	                // because defineLocale currently also sets the global locale, we
	                // want to undo that for lazy loaded locales
	                locale_locales__getSetGlobalLocale(oldLocale);
	            } catch (e) { }
	        }
	        return locales[name];
	    }
	
	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function locale_locales__getSetGlobalLocale (key, values) {
	        var data;
	        if (key) {
	            if (isUndefined(values)) {
	                data = locale_locales__getLocale(key);
	            }
	            else {
	                data = defineLocale(key, values);
	            }
	
	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            }
	        }
	
	        return globalLocale._abbr;
	    }
	
	    function defineLocale (name, config) {
	        if (config !== null) {
	            var parentConfig = baseConfig;
	            config.abbr = name;
	            if (locales[name] != null) {
	                deprecateSimple('defineLocaleOverride',
	                        'use moment.updateLocale(localeName, config) to change ' +
	                        'an existing locale. moment.defineLocale(localeName, ' +
	                        'config) should only be used for creating a new locale ' +
	                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
	                parentConfig = locales[name]._config;
	            } else if (config.parentLocale != null) {
	                if (locales[config.parentLocale] != null) {
	                    parentConfig = locales[config.parentLocale]._config;
	                } else {
	                    // treat as if there is no base config
	                    deprecateSimple('parentLocaleUndefined',
	                            'specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/');
	                }
	            }
	            locales[name] = new Locale(mergeConfigs(parentConfig, config));
	
	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	
	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }
	
	    function updateLocale(name, config) {
	        if (config != null) {
	            var locale, parentConfig = baseConfig;
	            // MERGE
	            if (locales[name] != null) {
	                parentConfig = locales[name]._config;
	            }
	            config = mergeConfigs(parentConfig, config);
	            locale = new Locale(config);
	            locale.parentLocale = locales[name];
	            locales[name] = locale;
	
	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	        } else {
	            // pass null for config to unupdate, useful for tests
	            if (locales[name] != null) {
	                if (locales[name].parentLocale != null) {
	                    locales[name] = locales[name].parentLocale;
	                } else if (locales[name] != null) {
	                    delete locales[name];
	                }
	            }
	        }
	        return locales[name];
	    }
	
	    // returns locale data
	    function locale_locales__getLocale (key) {
	        var locale;
	
	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }
	
	        if (!key) {
	            return globalLocale;
	        }
	
	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }
	
	        return chooseLocale(key);
	    }
	
	    function locale_locales__listLocales() {
	        return keys(locales);
	    }
	
	    function checkOverflow (m) {
	        var overflow;
	        var a = m._a;
	
	        if (a && getParsingFlags(m).overflow === -2) {
	            overflow =
	                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
	                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
	                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
	                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
	                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
	                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;
	
	            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }
	            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	                overflow = WEEK;
	            }
	            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	                overflow = WEEKDAY;
	            }
	
	            getParsingFlags(m).overflow = overflow;
	        }
	
	        return m;
	    }
	
	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	
	    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
	
	    var isoDates = [
	        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	        ['YYYY-DDD', /\d{4}-\d{3}/],
	        ['YYYY-MM', /\d{4}-\d\d/, false],
	        ['YYYYYYMMDD', /[+-]\d{10}/],
	        ['YYYYMMDD', /\d{8}/],
	        // YYYYMM is NOT allowed by the standard
	        ['GGGG[W]WWE', /\d{4}W\d{3}/],
	        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	        ['YYYYDDD', /\d{7}/]
	    ];
	
	    // iso time formats and regexes
	    var isoTimes = [
	        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	        ['HH:mm', /\d\d:\d\d/],
	        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	        ['HHmmss', /\d\d\d\d\d\d/],
	        ['HHmm', /\d\d\d\d/],
	        ['HH', /\d\d/]
	    ];
	
	    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
	
	    // date from iso format
	    function configFromISO(config) {
	        var i, l,
	            string = config._i,
	            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	            allowTime, dateFormat, timeFormat, tzFormat;
	
	        if (match) {
	            getParsingFlags(config).iso = true;
	
	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(match[1])) {
	                    dateFormat = isoDates[i][0];
	                    allowTime = isoDates[i][2] !== false;
	                    break;
	                }
	            }
	            if (dateFormat == null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[3]) {
	                for (i = 0, l = isoTimes.length; i < l; i++) {
	                    if (isoTimes[i][1].exec(match[3])) {
	                        // match[2] should be 'T' or space
	                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
	                        break;
	                    }
	                }
	                if (timeFormat == null) {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            if (!allowTime && timeFormat != null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[4]) {
	                if (tzRegex.exec(match[4])) {
	                    tzFormat = 'Z';
	                } else {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }
	
	    // date from iso format or fallback
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);
	
	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }
	
	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }
	
	    utils_hooks__hooks.createFromInputFallback = deprecate(
	        'moment construction falls back to js Date. This is ' +
	        'discouraged and will be removed in upcoming major ' +
	        'release. Please refer to ' +
	        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );
	
	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }
	
	    function currentDateArray(config) {
	        // hooks is actually the exported moment object
	        var nowValue = new Date(utils_hooks__hooks.now());
	        if (config._useUTC) {
	            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
	        }
	        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }
	
	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray (config) {
	        var i, date, input = [], currentDate, yearToUse;
	
	        if (config._d) {
	            return;
	        }
	
	        currentDate = currentDateArray(config);
	
	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }
	
	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
	
	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }
	
	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }
	
	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }
	
	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }
	
	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }
	
	        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }
	
	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }
	
	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
	
	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;
	
	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	            if (weekday < 1 || weekday > 7) {
	                weekdayOverflow = true;
	            }
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;
	
	            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
	            week = defaults(w.w, 1);
	
	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < 0 || weekday > 6) {
	                    weekdayOverflow = true;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	                if (w.e < 0 || w.e > 6) {
	                    weekdayOverflow = true;
	                }
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	            getParsingFlags(config)._overflowWeeks = true;
	        } else if (weekdayOverflow != null) {
	            getParsingFlags(config)._overflowWeekday = true;
	        } else {
	            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	            config._a[YEAR] = temp.year;
	            config._dayOfYear = temp.dayOfYear;
	        }
	    }
	
	    // constant that refers to the ISO standard
	    utils_hooks__hooks.ISO_8601 = function () {};
	
	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === utils_hooks__hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }
	
	        config._a = [];
	        getParsingFlags(config).empty = true;
	
	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;
	
	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
	
	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            // console.log('token', token, 'parsedInput', parsedInput,
	            //         'regex', getParseRegexForToken(token, config));
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    getParsingFlags(config).empty = false;
	                }
	                else {
	                    getParsingFlags(config).unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	        }
	
	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }
	
	        // clear _12h flag if hour is <= 12
	        if (config._a[HOUR] <= 12 &&
	            getParsingFlags(config).bigHour === true &&
	            config._a[HOUR] > 0) {
	            getParsingFlags(config).bigHour = undefined;
	        }
	
	        getParsingFlags(config).parsedDateParts = config._a.slice(0);
	        getParsingFlags(config).meridiem = config._meridiem;
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
	
	        configFromArray(config);
	        checkOverflow(config);
	    }
	
	
	    function meridiemFixWrap (locale, hour, meridiem) {
	        var isPm;
	
	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }
	
	    // date from string and array of format strings
	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,
	
	            scoreToBeat,
	            i,
	            currentScore;
	
	        if (config._f.length === 0) {
	            getParsingFlags(config).invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }
	
	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);
	
	            if (!valid__isValid(tempConfig)) {
	                continue;
	            }
	
	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;
	
	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
	
	            getParsingFlags(tempConfig).score = currentScore;
	
	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }
	
	        extend(config, bestMoment || tempConfig);
	    }
	
	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }
	
	        var i = normalizeObjectUnits(config._i);
	        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
	            return obj && parseInt(obj, 10);
	        });
	
	        configFromArray(config);
	    }
	
	    function createFromConfig (config) {
	        var res = new Moment(checkOverflow(prepareConfig(config)));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }
	
	        return res;
	    }
	
	    function prepareConfig (config) {
	        var input = config._i,
	            format = config._f;
	
	        config._locale = config._locale || locale_locales__getLocale(config._l);
	
	        if (input === null || (format === undefined && input === '')) {
	            return valid__createInvalid({nullInput: true});
	        }
	
	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }
	
	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (isDate(input)) {
	            config._d = input;
	        } else if (format) {
	            configFromStringAndFormat(config);
	        }  else {
	            configFromInput(config);
	        }
	
	        if (!valid__isValid(config)) {
	            config._d = null;
	        }
	
	        return config;
	    }
	
	    function configFromInput(config) {
	        var input = config._i;
	        if (input === undefined) {
	            config._d = new Date(utils_hooks__hooks.now());
	        } else if (isDate(input)) {
	            config._d = new Date(input.valueOf());
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (typeof(input) === 'object') {
	            configFromObject(config);
	        } else if (typeof(input) === 'number') {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }
	
	    function createLocalOrUTC (input, format, locale, strict, isUTC) {
	        var c = {};
	
	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }
	
	        if ((isObject(input) && isObjectEmpty(input)) ||
	                (isArray(input) && input.length === 0)) {
	            input = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;
	
	        return createFromConfig(c);
	    }
	
	    function local__createLocal (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }
	
	    var prototypeMin = deprecate(
	        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other < this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );
	
	    var prototypeMax = deprecate(
	        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other > this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );
	
	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return local__createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (!moments[i].isValid() || moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }
	
	    // TODO: Use [].sort instead?
	    function min () {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy('isBefore', args);
	    }
	
	    function max () {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy('isAfter', args);
	    }
	
	    var now = function () {
	        return Date.now ? Date.now() : +(new Date());
	    };
	
	    function Duration (duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;
	
	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;
	
	        this._data = {};
	
	        this._locale = locale_locales__getLocale();
	
	        this._bubble();
	    }
	
	    function isDuration (obj) {
	        return obj instanceof Duration;
	    }
	
	    // FORMATTING
	
	    function offset (token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset();
	            var sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	        });
	    }
	
	    offset('Z', ':');
	    offset('ZZ', '');
	
	    // PARSING
	
	    addRegexToken('Z',  matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(matchShortOffset, input);
	    });
	
	    // HELPERS
	
	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;
	
	    function offsetFromString(matcher, string) {
	        var matches = ((string || '').match(matcher) || []);
	        var chunk   = matches[matches.length - 1] || [];
	        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        var minutes = +(parts[1] * 60) + toInt(parts[2]);
	
	        return parts[0] === '+' ? minutes : -minutes;
	    }
	
	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(res._d.valueOf() + diff);
	            utils_hooks__hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return local__createLocal(input).local();
	        }
	    }
	
	    function getDateOffset (m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	    }
	
	    // HOOKS
	
	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    utils_hooks__hooks.updateOffset = function () {};
	
	    // MOMENTS
	
	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset (input, keepLocalTime) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(matchShortOffset, input);
	            } else if (Math.abs(input) < 16) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    utils_hooks__hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }
	
	    function getSetZone (input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }
	
	            this.utcOffset(input, keepLocalTime);
	
	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }
	
	    function setOffsetToUTC (keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }
	
	    function setOffsetToLocal (keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;
	
	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }
	
	    function setOffsetToParsedOffset () {
	        if (this._tzm) {
	            this.utcOffset(this._tzm);
	        } else if (typeof this._i === 'string') {
	            this.utcOffset(offsetFromString(matchOffset, this._i));
	        }
	        return this;
	    }
	
	    function hasAlignedHourOffset (input) {
	        if (!this.isValid()) {
	            return false;
	        }
	        input = input ? local__createLocal(input).utcOffset() : 0;
	
	        return (this.utcOffset() - input) % 60 === 0;
	    }
	
	    function isDaylightSavingTime () {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }
	
	    function isDaylightSavingTimeShifted () {
	        if (!isUndefined(this._isDSTShifted)) {
	            return this._isDSTShifted;
	        }
	
	        var c = {};
	
	        copyConfig(c, this);
	        c = prepareConfig(c);
	
	        if (c._a) {
	            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
	            this._isDSTShifted = this.isValid() &&
	                compareArrays(c._a, other.toArray()) > 0;
	        } else {
	            this._isDSTShifted = false;
	        }
	
	        return this._isDSTShifted;
	    }
	
	    function isLocal () {
	        return this.isValid() ? !this._isUTC : false;
	    }
	
	    function isUtcOffset () {
	        return this.isValid() ? this._isUTC : false;
	    }
	
	    function isUtc () {
	        return this.isValid() ? this._isUTC && this._offset === 0 : false;
	    }
	
	    // ASP.NET json date format regex
	    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;
	
	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    // and further modified to allow for strings containing both week and day
	    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	
	    function create__createDuration (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;
	
	        if (isDuration(input)) {
	            duration = {
	                ms : input._milliseconds,
	                d  : input._days,
	                M  : input._months
	            };
	        } else if (typeof input === 'number') {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y  : 0,
	                d  : toInt(match[DATE])        * sign,
	                h  : toInt(match[HOUR])        * sign,
	                m  : toInt(match[MINUTE])      * sign,
	                s  : toInt(match[SECOND])      * sign,
	                ms : toInt(match[MILLISECOND]) * sign
	            };
	        } else if (!!(match = isoRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y : parseIso(match[2], sign),
	                M : parseIso(match[3], sign),
	                w : parseIso(match[4], sign),
	                d : parseIso(match[5], sign),
	                h : parseIso(match[6], sign),
	                m : parseIso(match[7], sign),
	                s : parseIso(match[8], sign)
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));
	
	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }
	
	        ret = new Duration(duration);
	
	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }
	
	        return ret;
	    }
	
	    create__createDuration.fn = Duration.prototype;
	
	    function parseIso (inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }
	
	    function positiveMomentsDifference(base, other) {
	        var res = {milliseconds: 0, months: 0};
	
	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }
	
	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
	
	        return res;
	    }
	
	    function momentsDifference(base, other) {
	        var res;
	        if (!(base.isValid() && other.isValid())) {
	            return {milliseconds: 0, months: 0};
	        }
	
	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }
	
	        return res;
	    }
	
	    function absRound (number) {
	        if (number < 0) {
	            return Math.round(-1 * number) * -1;
	        } else {
	            return Math.round(number);
	        }
	    }
	
	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
	                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
	                tmp = val; val = period; period = tmp;
	            }
	
	            val = typeof val === 'string' ? +val : val;
	            dur = create__createDuration(val, period);
	            add_subtract__addSubtract(this, dur, direction);
	            return this;
	        };
	    }
	
	    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = absRound(duration._days),
	            months = absRound(duration._months);
	
	        if (!mom.isValid()) {
	            // No op
	            return;
	        }
	
	        updateOffset = updateOffset == null ? true : updateOffset;
	
	        if (milliseconds) {
	            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	        }
	        if (days) {
	            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
	        }
	        if (months) {
	            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
	        }
	        if (updateOffset) {
	            utils_hooks__hooks.updateOffset(mom, days || months);
	        }
	    }
	
	    var add_subtract__add      = createAdder(1, 'add');
	    var add_subtract__subtract = createAdder(-1, 'subtract');
	
	    function getCalendarFormat(myMoment, now) {
	        var diff = myMoment.diff(now, 'days', true);
	        return diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	    }
	
	    function moment_calendar__calendar (time, formats) {
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || local__createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            format = utils_hooks__hooks.calendarFormat(this, sod) || 'sameElse';
	
	        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
	
	        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
	    }
	
	    function clone () {
	        return new Moment(this);
	    }
	
	    function isAfter (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() > localInput.valueOf();
	        } else {
	            return localInput.valueOf() < this.clone().startOf(units).valueOf();
	        }
	    }
	
	    function isBefore (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() < localInput.valueOf();
	        } else {
	            return this.clone().endOf(units).valueOf() < localInput.valueOf();
	        }
	    }
	
	    function isBetween (from, to, units, inclusivity) {
	        inclusivity = inclusivity || '()';
	        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
	            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
	    }
	
	    function isSame (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input),
	            inputMs;
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units || 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() === localInput.valueOf();
	        } else {
	            inputMs = localInput.valueOf();
	            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
	        }
	    }
	
	    function isSameOrAfter (input, units) {
	        return this.isSame(input, units) || this.isAfter(input,units);
	    }
	
	    function isSameOrBefore (input, units) {
	        return this.isSame(input, units) || this.isBefore(input,units);
	    }
	
	    function diff (input, units, asFloat) {
	        var that,
	            zoneDelta,
	            delta, output;
	
	        if (!this.isValid()) {
	            return NaN;
	        }
	
	        that = cloneWithOffset(input, this);
	
	        if (!that.isValid()) {
	            return NaN;
	        }
	
	        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
	
	        units = normalizeUnits(units);
	
	        if (units === 'year' || units === 'month' || units === 'quarter') {
	            output = monthDiff(this, that);
	            if (units === 'quarter') {
	                output = output / 3;
	            } else if (units === 'year') {
	                output = output / 12;
	            }
	        } else {
	            delta = this - that;
	            output = units === 'second' ? delta / 1e3 : // 1000
	                units === 'minute' ? delta / 6e4 : // 1000 * 60
	                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
	                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                delta;
	        }
	        return asFloat ? output : absFloor(output);
	    }
	
	    function monthDiff (a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;
	
	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }
	
	        //check for negative zero, return zero if negative zero
	        return -(wholeMonthDiff + adjust) || 0;
	    }
	
	    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
	
	    function toString () {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }
	
	    function moment_format__toISOString () {
	        var m = this.clone().utc();
	        if (0 < m.year() && m.year() <= 9999) {
	            if (isFunction(Date.prototype.toISOString)) {
	                // native implementation is ~50x faster, use it when we can
	                return this.toDate().toISOString();
	            } else {
	                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	            }
	        } else {
	            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        }
	    }
	
	    function format (inputString) {
	        if (!inputString) {
	            inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
	        }
	        var output = formatMoment(this, inputString);
	        return this.localeData().postformat(output);
	    }
	
	    function from (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	
	    function fromNow (withoutSuffix) {
	        return this.from(local__createLocal(), withoutSuffix);
	    }
	
	    function to (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	
	    function toNow (withoutSuffix) {
	        return this.to(local__createLocal(), withoutSuffix);
	    }
	
	    // If passed a locale key, it will set the locale for this
	    // instance.  Otherwise, it will return the locale configuration
	    // variables for this instance.
	    function locale (key) {
	        var newLocaleData;
	
	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = locale_locales__getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }
	
	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );
	
	    function localeData () {
	        return this._locale;
	    }
	
	    function startOf (units) {
	        units = normalizeUnits(units);
	        // the following switch intentionally omits break keywords
	        // to utilize falling through the cases.
	        switch (units) {
	            case 'year':
	                this.month(0);
	                /* falls through */
	            case 'quarter':
	            case 'month':
	                this.date(1);
	                /* falls through */
	            case 'week':
	            case 'isoWeek':
	            case 'day':
	            case 'date':
	                this.hours(0);
	                /* falls through */
	            case 'hour':
	                this.minutes(0);
	                /* falls through */
	            case 'minute':
	                this.seconds(0);
	                /* falls through */
	            case 'second':
	                this.milliseconds(0);
	        }
	
	        // weeks are a special case
	        if (units === 'week') {
	            this.weekday(0);
	        }
	        if (units === 'isoWeek') {
	            this.isoWeekday(1);
	        }
	
	        // quarters are also special
	        if (units === 'quarter') {
	            this.month(Math.floor(this.month() / 3) * 3);
	        }
	
	        return this;
	    }
	
	    function endOf (units) {
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond') {
	            return this;
	        }
	
	        // 'date' is an alias for 'day', so it should be considered as such.
	        if (units === 'date') {
	            units = 'day';
	        }
	
	        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	    }
	
	    function to_type__valueOf () {
	        return this._d.valueOf() - ((this._offset || 0) * 60000);
	    }
	
	    function unix () {
	        return Math.floor(this.valueOf() / 1000);
	    }
	
	    function toDate () {
	        return new Date(this.valueOf());
	    }
	
	    function toArray () {
	        var m = this;
	        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	    }
	
	    function toObject () {
	        var m = this;
	        return {
	            years: m.year(),
	            months: m.month(),
	            date: m.date(),
	            hours: m.hours(),
	            minutes: m.minutes(),
	            seconds: m.seconds(),
	            milliseconds: m.milliseconds()
	        };
	    }
	
	    function toJSON () {
	        // new Date(NaN).toJSON() === null
	        return this.isValid() ? this.toISOString() : null;
	    }
	
	    function moment_valid__isValid () {
	        return valid__isValid(this);
	    }
	
	    function parsingFlags () {
	        return extend({}, getParsingFlags(this));
	    }
	
	    function invalidAt () {
	        return getParsingFlags(this).overflow;
	    }
	
	    function creationData() {
	        return {
	            input: this._i,
	            format: this._f,
	            locale: this._locale,
	            isUTC: this._isUTC,
	            strict: this._strict
	        };
	    }
	
	    // FORMATTING
	
	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });
	
	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });
	
	    function addWeekYearFormatToken (token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }
	
	    addWeekYearFormatToken('gggg',     'weekYear');
	    addWeekYearFormatToken('ggggg',    'weekYear');
	    addWeekYearFormatToken('GGGG',  'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
	
	    // ALIASES
	
	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');
	
	    // PRIORITY
	
	    addUnitPriority('weekYear', 1);
	    addUnitPriority('isoWeekYear', 1);
	
	
	    // PARSING
	
	    addRegexToken('G',      matchSigned);
	    addRegexToken('g',      matchSigned);
	    addRegexToken('GG',     match1to2, match2);
	    addRegexToken('gg',     match1to2, match2);
	    addRegexToken('GGGG',   match1to4, match4);
	    addRegexToken('gggg',   match1to4, match4);
	    addRegexToken('GGGGG',  match1to6, match6);
	    addRegexToken('ggggg',  match1to6, match6);
	
	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	        week[token.substr(0, 2)] = toInt(input);
	    });
	
	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	
	    // MOMENTS
	
	    function getSetWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input,
	                this.week(),
	                this.weekday(),
	                this.localeData()._week.dow,
	                this.localeData()._week.doy);
	    }
	
	    function getSetISOWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input, this.isoWeek(), this.isoWeekday(), 1, 4);
	    }
	
	    function getISOWeeksInYear () {
	        return weeksInYear(this.year(), 1, 4);
	    }
	
	    function getWeeksInYear () {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }
	
	    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	        var weeksTarget;
	        if (input == null) {
	            return weekOfYear(this, dow, doy).year;
	        } else {
	            weeksTarget = weeksInYear(input, dow, doy);
	            if (week > weeksTarget) {
	                week = weeksTarget;
	            }
	            return setWeekAll.call(this, input, week, weekday, dow, doy);
	        }
	    }
	
	    function setWeekAll(weekYear, week, weekday, dow, doy) {
	        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
	
	        this.year(date.getUTCFullYear());
	        this.month(date.getUTCMonth());
	        this.date(date.getUTCDate());
	        return this;
	    }
	
	    // FORMATTING
	
	    addFormatToken('Q', 0, 'Qo', 'quarter');
	
	    // ALIASES
	
	    addUnitAlias('quarter', 'Q');
	
	    // PRIORITY
	
	    addUnitPriority('quarter', 7);
	
	    // PARSING
	
	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });
	
	    // MOMENTS
	
	    function getSetQuarter (input) {
	        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	    }
	
	    // FORMATTING
	
	    addFormatToken('D', ['DD', 2], 'Do', 'date');
	
	    // ALIASES
	
	    addUnitAlias('date', 'D');
	
	    // PRIOROITY
	    addUnitPriority('date', 9);
	
	    // PARSING
	
	    addRegexToken('D',  match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
	    });
	
	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0], 10);
	    });
	
	    // MOMENTS
	
	    var getSetDayOfMonth = makeGetSet('Date', true);
	
	    // FORMATTING
	
	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
	
	    // ALIASES
	
	    addUnitAlias('dayOfYear', 'DDD');
	
	    // PRIORITY
	    addUnitPriority('dayOfYear', 4);
	
	    // PARSING
	
	    addRegexToken('DDD',  match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });
	
	    // HELPERS
	
	    // MOMENTS
	
	    function getSetDayOfYear (input) {
	        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	    }
	
	    // FORMATTING
	
	    addFormatToken('m', ['mm', 2], 0, 'minute');
	
	    // ALIASES
	
	    addUnitAlias('minute', 'm');
	
	    // PRIORITY
	
	    addUnitPriority('minute', 14);
	
	    // PARSING
	
	    addRegexToken('m',  match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);
	
	    // MOMENTS
	
	    var getSetMinute = makeGetSet('Minutes', false);
	
	    // FORMATTING
	
	    addFormatToken('s', ['ss', 2], 0, 'second');
	
	    // ALIASES
	
	    addUnitAlias('second', 's');
	
	    // PRIORITY
	
	    addUnitPriority('second', 15);
	
	    // PARSING
	
	    addRegexToken('s',  match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);
	
	    // MOMENTS
	
	    var getSetSecond = makeGetSet('Seconds', false);
	
	    // FORMATTING
	
	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });
	
	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });
	
	    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	    addFormatToken(0, ['SSSS', 4], 0, function () {
	        return this.millisecond() * 10;
	    });
	    addFormatToken(0, ['SSSSS', 5], 0, function () {
	        return this.millisecond() * 100;
	    });
	    addFormatToken(0, ['SSSSSS', 6], 0, function () {
	        return this.millisecond() * 1000;
	    });
	    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	        return this.millisecond() * 10000;
	    });
	    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	        return this.millisecond() * 100000;
	    });
	    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	        return this.millisecond() * 1000000;
	    });
	
	
	    // ALIASES
	
	    addUnitAlias('millisecond', 'ms');
	
	    // PRIORITY
	
	    addUnitPriority('millisecond', 16);
	
	    // PARSING
	
	    addRegexToken('S',    match1to3, match1);
	    addRegexToken('SS',   match1to3, match2);
	    addRegexToken('SSS',  match1to3, match3);
	
	    var token;
	    for (token = 'SSSS'; token.length <= 9; token += 'S') {
	        addRegexToken(token, matchUnsigned);
	    }
	
	    function parseMs(input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    }
	
	    for (token = 'S'; token.length <= 9; token += 'S') {
	        addParseToken(token, parseMs);
	    }
	    // MOMENTS
	
	    var getSetMillisecond = makeGetSet('Milliseconds', false);
	
	    // FORMATTING
	
	    addFormatToken('z',  0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');
	
	    // MOMENTS
	
	    function getZoneAbbr () {
	        return this._isUTC ? 'UTC' : '';
	    }
	
	    function getZoneName () {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }
	
	    var momentPrototype__proto = Moment.prototype;
	
	    momentPrototype__proto.add               = add_subtract__add;
	    momentPrototype__proto.calendar          = moment_calendar__calendar;
	    momentPrototype__proto.clone             = clone;
	    momentPrototype__proto.diff              = diff;
	    momentPrototype__proto.endOf             = endOf;
	    momentPrototype__proto.format            = format;
	    momentPrototype__proto.from              = from;
	    momentPrototype__proto.fromNow           = fromNow;
	    momentPrototype__proto.to                = to;
	    momentPrototype__proto.toNow             = toNow;
	    momentPrototype__proto.get               = stringGet;
	    momentPrototype__proto.invalidAt         = invalidAt;
	    momentPrototype__proto.isAfter           = isAfter;
	    momentPrototype__proto.isBefore          = isBefore;
	    momentPrototype__proto.isBetween         = isBetween;
	    momentPrototype__proto.isSame            = isSame;
	    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
	    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
	    momentPrototype__proto.isValid           = moment_valid__isValid;
	    momentPrototype__proto.lang              = lang;
	    momentPrototype__proto.locale            = locale;
	    momentPrototype__proto.localeData        = localeData;
	    momentPrototype__proto.max               = prototypeMax;
	    momentPrototype__proto.min               = prototypeMin;
	    momentPrototype__proto.parsingFlags      = parsingFlags;
	    momentPrototype__proto.set               = stringSet;
	    momentPrototype__proto.startOf           = startOf;
	    momentPrototype__proto.subtract          = add_subtract__subtract;
	    momentPrototype__proto.toArray           = toArray;
	    momentPrototype__proto.toObject          = toObject;
	    momentPrototype__proto.toDate            = toDate;
	    momentPrototype__proto.toISOString       = moment_format__toISOString;
	    momentPrototype__proto.toJSON            = toJSON;
	    momentPrototype__proto.toString          = toString;
	    momentPrototype__proto.unix              = unix;
	    momentPrototype__proto.valueOf           = to_type__valueOf;
	    momentPrototype__proto.creationData      = creationData;
	
	    // Year
	    momentPrototype__proto.year       = getSetYear;
	    momentPrototype__proto.isLeapYear = getIsLeapYear;
	
	    // Week Year
	    momentPrototype__proto.weekYear    = getSetWeekYear;
	    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
	
	    // Quarter
	    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;
	
	    // Month
	    momentPrototype__proto.month       = getSetMonth;
	    momentPrototype__proto.daysInMonth = getDaysInMonth;
	
	    // Week
	    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
	    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
	    momentPrototype__proto.weeksInYear    = getWeeksInYear;
	    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
	
	    // Day
	    momentPrototype__proto.date       = getSetDayOfMonth;
	    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
	    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
	    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
	    momentPrototype__proto.dayOfYear  = getSetDayOfYear;
	
	    // Hour
	    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
	
	    // Minute
	    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
	
	    // Second
	    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
	
	    // Millisecond
	    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;
	
	    // Offset
	    momentPrototype__proto.utcOffset            = getSetOffset;
	    momentPrototype__proto.utc                  = setOffsetToUTC;
	    momentPrototype__proto.local                = setOffsetToLocal;
	    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
	    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    momentPrototype__proto.isDST                = isDaylightSavingTime;
	    momentPrototype__proto.isLocal              = isLocal;
	    momentPrototype__proto.isUtcOffset          = isUtcOffset;
	    momentPrototype__proto.isUtc                = isUtc;
	    momentPrototype__proto.isUTC                = isUtc;
	
	    // Timezone
	    momentPrototype__proto.zoneAbbr = getZoneAbbr;
	    momentPrototype__proto.zoneName = getZoneName;
	
	    // Deprecations
	    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
	    momentPrototype__proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
	
	    var momentPrototype = momentPrototype__proto;
	
	    function moment__createUnix (input) {
	        return local__createLocal(input * 1000);
	    }
	
	    function moment__createInZone () {
	        return local__createLocal.apply(null, arguments).parseZone();
	    }
	
	    function preParsePostFormat (string) {
	        return string;
	    }
	
	    var prototype__proto = Locale.prototype;
	
	    prototype__proto.calendar        = locale_calendar__calendar;
	    prototype__proto.longDateFormat  = longDateFormat;
	    prototype__proto.invalidDate     = invalidDate;
	    prototype__proto.ordinal         = ordinal;
	    prototype__proto.preparse        = preParsePostFormat;
	    prototype__proto.postformat      = preParsePostFormat;
	    prototype__proto.relativeTime    = relative__relativeTime;
	    prototype__proto.pastFuture      = pastFuture;
	    prototype__proto.set             = locale_set__set;
	
	    // Month
	    prototype__proto.months            =        localeMonths;
	    prototype__proto.monthsShort       =        localeMonthsShort;
	    prototype__proto.monthsParse       =        localeMonthsParse;
	    prototype__proto.monthsRegex       = monthsRegex;
	    prototype__proto.monthsShortRegex  = monthsShortRegex;
	
	    // Week
	    prototype__proto.week = localeWeek;
	    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
	    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
	
	    // Day of Week
	    prototype__proto.weekdays       =        localeWeekdays;
	    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
	    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
	    prototype__proto.weekdaysParse  =        localeWeekdaysParse;
	
	    prototype__proto.weekdaysRegex       =        weekdaysRegex;
	    prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;
	    prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;
	
	    // Hours
	    prototype__proto.isPM = localeIsPM;
	    prototype__proto.meridiem = localeMeridiem;
	
	    function lists__get (format, index, field, setter) {
	        var locale = locale_locales__getLocale();
	        var utc = create_utc__createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }
	
	    function listMonthsImpl (format, index, field) {
	        if (typeof format === 'number') {
	            index = format;
	            format = undefined;
	        }
	
	        format = format || '';
	
	        if (index != null) {
	            return lists__get(format, index, field, 'month');
	        }
	
	        var i;
	        var out = [];
	        for (i = 0; i < 12; i++) {
	            out[i] = lists__get(format, i, field, 'month');
	        }
	        return out;
	    }
	
	    // ()
	    // (5)
	    // (fmt, 5)
	    // (fmt)
	    // (true)
	    // (true, 5)
	    // (true, fmt, 5)
	    // (true, fmt)
	    function listWeekdaysImpl (localeSorted, format, index, field) {
	        if (typeof localeSorted === 'boolean') {
	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }
	
	            format = format || '';
	        } else {
	            format = localeSorted;
	            index = format;
	            localeSorted = false;
	
	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }
	
	            format = format || '';
	        }
	
	        var locale = locale_locales__getLocale(),
	            shift = localeSorted ? locale._week.dow : 0;
	
	        if (index != null) {
	            return lists__get(format, (index + shift) % 7, field, 'day');
	        }
	
	        var i;
	        var out = [];
	        for (i = 0; i < 7; i++) {
	            out[i] = lists__get(format, (i + shift) % 7, field, 'day');
	        }
	        return out;
	    }
	
	    function lists__listMonths (format, index) {
	        return listMonthsImpl(format, index, 'months');
	    }
	
	    function lists__listMonthsShort (format, index) {
	        return listMonthsImpl(format, index, 'monthsShort');
	    }
	
	    function lists__listWeekdays (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	    }
	
	    function lists__listWeekdaysShort (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	    }
	
	    function lists__listWeekdaysMin (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	    }
	
	    locale_locales__getSetGlobalLocale('en', {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });
	
	    // Side effect imports
	    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
	    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
	
	    var mathAbs = Math.abs;
	
	    function duration_abs__abs () {
	        var data           = this._data;
	
	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days         = mathAbs(this._days);
	        this._months       = mathAbs(this._months);
	
	        data.milliseconds  = mathAbs(data.milliseconds);
	        data.seconds       = mathAbs(data.seconds);
	        data.minutes       = mathAbs(data.minutes);
	        data.hours         = mathAbs(data.hours);
	        data.months        = mathAbs(data.months);
	        data.years         = mathAbs(data.years);
	
	        return this;
	    }
	
	    function duration_add_subtract__addSubtract (duration, input, value, direction) {
	        var other = create__createDuration(input, value);
	
	        duration._milliseconds += direction * other._milliseconds;
	        duration._days         += direction * other._days;
	        duration._months       += direction * other._months;
	
	        return duration._bubble();
	    }
	
	    // supports only 2.0-style add(1, 's') or add(duration)
	    function duration_add_subtract__add (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, 1);
	    }
	
	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function duration_add_subtract__subtract (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, -1);
	    }
	
	    function absCeil (number) {
	        if (number < 0) {
	            return Math.floor(number);
	        } else {
	            return Math.ceil(number);
	        }
	    }
	
	    function bubble () {
	        var milliseconds = this._milliseconds;
	        var days         = this._days;
	        var months       = this._months;
	        var data         = this._data;
	        var seconds, minutes, hours, years, monthsFromDays;
	
	        // if we have a mix of positive and negative values, bubble down first
	        // check: https://github.com/moment/moment/issues/2166
	        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
	                (milliseconds <= 0 && days <= 0 && months <= 0))) {
	            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	            days = 0;
	            months = 0;
	        }
	
	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;
	
	        seconds           = absFloor(milliseconds / 1000);
	        data.seconds      = seconds % 60;
	
	        minutes           = absFloor(seconds / 60);
	        data.minutes      = minutes % 60;
	
	        hours             = absFloor(minutes / 60);
	        data.hours        = hours % 24;
	
	        days += absFloor(hours / 24);
	
	        // convert days to months
	        monthsFromDays = absFloor(daysToMonths(days));
	        months += monthsFromDays;
	        days -= absCeil(monthsToDays(monthsFromDays));
	
	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;
	
	        data.days   = days;
	        data.months = months;
	        data.years  = years;
	
	        return this;
	    }
	
	    function daysToMonths (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        // 400 years have 12 months === 4800
	        return days * 4800 / 146097;
	    }
	
	    function monthsToDays (months) {
	        // the reverse of daysToMonths
	        return months * 146097 / 4800;
	    }
	
	    function as (units) {
	        var days;
	        var months;
	        var milliseconds = this._milliseconds;
	
	        units = normalizeUnits(units);
	
	        if (units === 'month' || units === 'year') {
	            days   = this._days   + milliseconds / 864e5;
	            months = this._months + daysToMonths(days);
	            return units === 'month' ? months : months / 12;
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(monthsToDays(this._months));
	            switch (units) {
	                case 'week'   : return days / 7     + milliseconds / 6048e5;
	                case 'day'    : return days         + milliseconds / 864e5;
	                case 'hour'   : return days * 24    + milliseconds / 36e5;
	                case 'minute' : return days * 1440  + milliseconds / 6e4;
	                case 'second' : return days * 86400 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
	                default: throw new Error('Unknown unit ' + units);
	            }
	        }
	    }
	
	    // TODO: Use this.as('ms')?
	    function duration_as__valueOf () {
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
	    }
	
	    function makeAs (alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }
	
	    var asMilliseconds = makeAs('ms');
	    var asSeconds      = makeAs('s');
	    var asMinutes      = makeAs('m');
	    var asHours        = makeAs('h');
	    var asDays         = makeAs('d');
	    var asWeeks        = makeAs('w');
	    var asMonths       = makeAs('M');
	    var asYears        = makeAs('y');
	
	    function duration_get__get (units) {
	        units = normalizeUnits(units);
	        return this[units + 's']();
	    }
	
	    function makeGetter(name) {
	        return function () {
	            return this._data[name];
	        };
	    }
	
	    var milliseconds = makeGetter('milliseconds');
	    var seconds      = makeGetter('seconds');
	    var minutes      = makeGetter('minutes');
	    var hours        = makeGetter('hours');
	    var days         = makeGetter('days');
	    var months       = makeGetter('months');
	    var years        = makeGetter('years');
	
	    function weeks () {
	        return absFloor(this.days() / 7);
	    }
	
	    var round = Math.round;
	    var thresholds = {
	        s: 45,  // seconds to minute
	        m: 45,  // minutes to hour
	        h: 22,  // hours to day
	        d: 26,  // days to month
	        M: 11   // months to year
	    };
	
	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }
	
	    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
	        var duration = create__createDuration(posNegDuration).abs();
	        var seconds  = round(duration.as('s'));
	        var minutes  = round(duration.as('m'));
	        var hours    = round(duration.as('h'));
	        var days     = round(duration.as('d'));
	        var months   = round(duration.as('M'));
	        var years    = round(duration.as('y'));
	
	        var a = seconds < thresholds.s && ['s', seconds]  ||
	                minutes <= 1           && ['m']           ||
	                minutes < thresholds.m && ['mm', minutes] ||
	                hours   <= 1           && ['h']           ||
	                hours   < thresholds.h && ['hh', hours]   ||
	                days    <= 1           && ['d']           ||
	                days    < thresholds.d && ['dd', days]    ||
	                months  <= 1           && ['M']           ||
	                months  < thresholds.M && ['MM', months]  ||
	                years   <= 1           && ['y']           || ['yy', years];
	
	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }
	
	    // This function allows you to set the rounding function for relative time strings
	    function duration_humanize__getSetRelativeTimeRounding (roundingFunction) {
	        if (roundingFunction === undefined) {
	            return round;
	        }
	        if (typeof(roundingFunction) === 'function') {
	            round = roundingFunction;
	            return true;
	        }
	        return false;
	    }
	
	    // This function allows you to set a threshold for relative time strings
	    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        return true;
	    }
	
	    function humanize (withSuffix) {
	        var locale = this.localeData();
	        var output = duration_humanize__relativeTime(this, !withSuffix, locale);
	
	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }
	
	        return locale.postformat(output);
	    }
	
	    var iso_string__abs = Math.abs;
	
	    function iso_string__toISOString() {
	        // for ISO strings we do not use the normal bubbling rules:
	        //  * milliseconds bubble up until they become hours
	        //  * days do not bubble at all
	        //  * months bubble up until they become years
	        // This is because there is no context-free conversion between hours and days
	        // (think of clock changes)
	        // and also not between days and months (28-31 days per month)
	        var seconds = iso_string__abs(this._milliseconds) / 1000;
	        var days         = iso_string__abs(this._days);
	        var months       = iso_string__abs(this._months);
	        var minutes, hours, years;
	
	        // 3600 seconds -> 60 minutes -> 1 hour
	        minutes           = absFloor(seconds / 60);
	        hours             = absFloor(minutes / 60);
	        seconds %= 60;
	        minutes %= 60;
	
	        // 12 months -> 1 year
	        years  = absFloor(months / 12);
	        months %= 12;
	
	
	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        var Y = years;
	        var M = months;
	        var D = days;
	        var h = hours;
	        var m = minutes;
	        var s = seconds;
	        var total = this.asSeconds();
	
	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }
	
	        return (total < 0 ? '-' : '') +
	            'P' +
	            (Y ? Y + 'Y' : '') +
	            (M ? M + 'M' : '') +
	            (D ? D + 'D' : '') +
	            ((h || m || s) ? 'T' : '') +
	            (h ? h + 'H' : '') +
	            (m ? m + 'M' : '') +
	            (s ? s + 'S' : '');
	    }
	
	    var duration_prototype__proto = Duration.prototype;
	
	    duration_prototype__proto.abs            = duration_abs__abs;
	    duration_prototype__proto.add            = duration_add_subtract__add;
	    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
	    duration_prototype__proto.as             = as;
	    duration_prototype__proto.asMilliseconds = asMilliseconds;
	    duration_prototype__proto.asSeconds      = asSeconds;
	    duration_prototype__proto.asMinutes      = asMinutes;
	    duration_prototype__proto.asHours        = asHours;
	    duration_prototype__proto.asDays         = asDays;
	    duration_prototype__proto.asWeeks        = asWeeks;
	    duration_prototype__proto.asMonths       = asMonths;
	    duration_prototype__proto.asYears        = asYears;
	    duration_prototype__proto.valueOf        = duration_as__valueOf;
	    duration_prototype__proto._bubble        = bubble;
	    duration_prototype__proto.get            = duration_get__get;
	    duration_prototype__proto.milliseconds   = milliseconds;
	    duration_prototype__proto.seconds        = seconds;
	    duration_prototype__proto.minutes        = minutes;
	    duration_prototype__proto.hours          = hours;
	    duration_prototype__proto.days           = days;
	    duration_prototype__proto.weeks          = weeks;
	    duration_prototype__proto.months         = months;
	    duration_prototype__proto.years          = years;
	    duration_prototype__proto.humanize       = humanize;
	    duration_prototype__proto.toISOString    = iso_string__toISOString;
	    duration_prototype__proto.toString       = iso_string__toISOString;
	    duration_prototype__proto.toJSON         = iso_string__toISOString;
	    duration_prototype__proto.locale         = locale;
	    duration_prototype__proto.localeData     = localeData;
	
	    // Deprecations
	    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
	    duration_prototype__proto.lang = lang;
	
	    // Side effect imports
	
	    // FORMATTING
	
	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');
	
	    // PARSING
	
	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input, 10) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });
	
	    // Side effect imports
	
	
	    utils_hooks__hooks.version = '2.14.1';
	
	    setHookCallback(local__createLocal);
	
	    utils_hooks__hooks.fn                    = momentPrototype;
	    utils_hooks__hooks.min                   = min;
	    utils_hooks__hooks.max                   = max;
	    utils_hooks__hooks.now                   = now;
	    utils_hooks__hooks.utc                   = create_utc__createUTC;
	    utils_hooks__hooks.unix                  = moment__createUnix;
	    utils_hooks__hooks.months                = lists__listMonths;
	    utils_hooks__hooks.isDate                = isDate;
	    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
	    utils_hooks__hooks.invalid               = valid__createInvalid;
	    utils_hooks__hooks.duration              = create__createDuration;
	    utils_hooks__hooks.isMoment              = isMoment;
	    utils_hooks__hooks.weekdays              = lists__listWeekdays;
	    utils_hooks__hooks.parseZone             = moment__createInZone;
	    utils_hooks__hooks.localeData            = locale_locales__getLocale;
	    utils_hooks__hooks.isDuration            = isDuration;
	    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
	    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
	    utils_hooks__hooks.defineLocale          = defineLocale;
	    utils_hooks__hooks.updateLocale          = updateLocale;
	    utils_hooks__hooks.locales               = locale_locales__listLocales;
	    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
	    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
	    utils_hooks__hooks.relativeTimeRounding = duration_humanize__getSetRelativeTimeRounding;
	    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
	    utils_hooks__hooks.calendarFormat        = getCalendarFormat;
	    utils_hooks__hooks.prototype             = momentPrototype;
	
	    var _moment = utils_hooks__hooks;
	
	    return _moment;
	
	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 10;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *
	 * 多国语言
	 * @author vfasky <vfasky@gmail.com>
	 */
	'use strict';
	var env, i18n, mcoreapp, soureList, storage, writeSoureList, writeTime;
	
	mcoreapp = __webpack_require__(2);
	
	i18n = __webpack_require__(12)(mcoreapp);
	
	env = __webpack_require__(14);
	
	storage = __webpack_require__(15);
	
	if (env.env === 'dev') {
	  soureList = storage.get('i18n_soure_list', []);
	  writeTime = null;
	  writeSoureList = function(txt) {
	    if (writeTime) {
	      clearTimeout(writeTime);
	    }
	    return writeTime = setTimeout(function() {
	      return storage.set('i18n_soure_list', soureList);
	    }, 200);
	  };
	  i18n.noMatchDict = function(txt, locale) {
	    if (soureList.indexOf(txt) === -1) {
	      console.log("[%s] add i18n soure", txt);
	      soureList.push(txt);
	      return writeSoureList();
	    }
	  };
	}
	
	module.exports = i18n;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 *
	 * 多国语言
	 * @author vfasky <vfasky@gmail.com>
	 */
	'use strict';
	var sprintf,
	  slice = [].slice;
	
	sprintf = __webpack_require__(13).sprintf;
	
	module.exports = function(mcore) {
	  var Template, _dict, _local, getDict, i18n, util;
	  Template = mcore.Template, util = mcore.util;
	  _dict = {
	    'zh-CN': {}
	  };
	  _local = 'zh-CN';
	  getDict = function() {
	    return _dict[_local] || {};
	  };
	  i18n = function() {
	    var args, dict, i, k, len, v;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    dict = getDict();
	    args[0] = String(args[0]).trim();
	    if (dict[args[0]]) {
	      args[0] = dict[args[0]];
	    } else {
	      i18n.noMatchDict(args[0], _local);
	    }
	    if (args.length < 2) {
	      return args[0] || '';
	    }
	    for (k = i = 0, len = args.length; i < len; k = ++i) {
	      v = args[k];
	      if (util.isArray(v)) {
	        args[k] = v.length;
	      } else if (v === void 0) {
	        args[k] = '';
	      }
	    }
	    return sprintf.apply(this, args);
	  };
	  i18n.noMatchDict = function(txt, local) {};
	  i18n.setLocale = function(name) {
	    return _local = name;
	  };
	  i18n.getLocale = function() {
	    return _local;
	  };
	  i18n.loadDict = function(name, dict) {
	    return _dict[name] = dict;
	  };
	  Template.formatters['i18n'] = Template.formatters['_'] = i18n;
	  Template.formatters['%'] = Template.formatters['sprintf'] = sprintf;
	  return i18n;
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	sprintf() for JavaScript 0.7-beta1
	http://www.diveintojavascript.com/projects/javascript-sprintf
	
	Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
	All rights reserved.
	
	Redistribution and use in source and binary forms, with or without
	modification, are permitted provided that the following conditions are met:
	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.
	    * Neither the name of sprintf() for JavaScript nor the
	      names of its contributors may be used to endorse or promote products
	      derived from this software without specific prior written permission.
	
	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
	ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
	WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	DISCLAIMED. IN NO EVENT SHALL Alexandru Marasteanu BE LIABLE FOR ANY
	DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
	SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	
	
	Changelog:
	2010.11.07 - 0.7-beta1-node
	  - converted it to a node.js compatible module
	
	2010.09.06 - 0.7-beta1
	  - features: vsprintf, support for named placeholders
	  - enhancements: format cache, reduced global namespace pollution
	
	2010.05.22 - 0.6:
	 - reverted to 0.4 and fixed the bug regarding the sign of the number 0
	 Note:
	 Thanks to Raphael Pigulla <raph (at] n3rd [dot) org> (http://www.n3rd.org/)
	 who warned me about a bug in 0.5, I discovered that the last update was
	 a regress. I appologize for that.
	
	2010.05.09 - 0.5:
	 - bug fix: 0 is now preceeded with a + sign
	 - bug fix: the sign was not at the right position on padded results (Kamal Abdali)
	 - switched from GPL to BSD license
	
	2007.10.21 - 0.4:
	 - unit test and patch (David Baird)
	
	2007.09.17 - 0.3:
	 - bug fix: no longer throws exception on empty paramenters (Hans Pufal)
	
	2007.09.11 - 0.2:
	 - feature: added argument swapping
	
	2007.04.03 - 0.1:
	 - initial release
	**/
	
	var sprintf = (function() {
		function get_type(variable) {
			return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
		}
		function str_repeat(input, multiplier) {
			for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}
			return output.join('');
		}
	
		var str_format = function() {
			if (!str_format.cache.hasOwnProperty(arguments[0])) {
				str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
			}
			return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
		};
	
		// convert object to simple one line string without indentation or
		// newlines. Note that this implementation does not print array
		// values to their actual place for sparse arrays.
		//
		// For example sparse array like this
		//    l = []
		//    l[4] = 1
		// Would be printed as "[1]" instead of "[, , , , 1]"
		//
		// If argument 'seen' is not null and array the function will check for
		// circular object references from argument.
		str_format.object_stringify = function(obj, depth, maxdepth, seen) {
			var str = '';
			if (obj != null) {
				switch( typeof(obj) ) {
				case 'function':
					return '[Function' + (obj.name ? ': '+obj.name : '') + ']';
				    break;
				case 'object':
					if ( obj instanceof Error) { return '[' + obj.toString() + ']' };
					if (depth >= maxdepth) return '[Object]'
					if (seen) {
						// add object to seen list
						seen = seen.slice(0)
						seen.push(obj);
					}
					if (obj.length != null) { //array
						str += '[';
						var arr = []
						for (var i in obj) {
							if (seen && seen.indexOf(obj[i]) >= 0) arr.push('[Circular]');
							else arr.push(str_format.object_stringify(obj[i], depth+1, maxdepth, seen));
						}
						str += arr.join(', ') + ']';
					} else if ('getMonth' in obj) { // date
						return 'Date(' + obj + ')';
					} else { // object
						str += '{';
						var arr = []
						for (var k in obj) {
							if(obj.hasOwnProperty(k)) {
								if (seen && seen.indexOf(obj[k]) >= 0) arr.push(k + ': [Circular]');
								else arr.push(k +': ' +str_format.object_stringify(obj[k], depth+1, maxdepth, seen));
							}
						}
						str += arr.join(', ') + '}';
					}
					return str;
					break;
				case 'string':
					return '"' + obj + '"';
					break
				}
			}
			return '' + obj;
		}
	
		str_format.format = function(parse_tree, argv) {
			var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
			for (i = 0; i < tree_length; i++) {
				node_type = get_type(parse_tree[i]);
				if (node_type === 'string') {
					output.push(parse_tree[i]);
				}
				else if (node_type === 'array') {
					match = parse_tree[i]; // convenience purposes only
					if (match[2]) { // keyword argument
						arg = argv[cursor];
						for (k = 0; k < match[2].length; k++) {
							if (!arg.hasOwnProperty(match[2][k])) {
								throw new Error(sprintf('[sprintf] property "%s" does not exist', match[2][k]));
							}
							arg = arg[match[2][k]];
						}
					}
					else if (match[1]) { // positional argument (explicit)
						arg = argv[match[1]];
					}
					else { // positional argument (implicit)
						arg = argv[cursor++];
					}
	
					if (/[^sO]/.test(match[8]) && (get_type(arg) != 'number')) {
						throw new Error(sprintf('[sprintf] expecting number but found %s "' + arg + '"', get_type(arg)));
					}
					switch (match[8]) {
						case 'b': arg = arg.toString(2); break;
						case 'c': arg = String.fromCharCode(arg); break;
						case 'd': arg = parseInt(arg, 10); break;
						case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
						case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
					    case 'O': arg = str_format.object_stringify(arg, 0, parseInt(match[7]) || 5); break;
						case 'o': arg = arg.toString(8); break;
						case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
						case 'u': arg = Math.abs(arg); break;
						case 'x': arg = arg.toString(16); break;
						case 'X': arg = arg.toString(16).toUpperCase(); break;
					}
					arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
					pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
					pad_length = match[6] - String(arg).length;
					pad = match[6] ? str_repeat(pad_character, pad_length) : '';
					output.push(match[5] ? arg + pad : pad + arg);
				}
			}
			return output.join('');
		};
	
		str_format.cache = {};
	
		str_format.parse = function(fmt) {
			var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
			while (_fmt) {
				if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
					parse_tree.push(match[0]);
				}
				else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
					parse_tree.push('%');
				}
				else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosOuxX])/.exec(_fmt)) !== null) {
					if (match[2]) {
						arg_names |= 1;
						var field_list = [], replacement_field = match[2], field_match = [];
						if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
							field_list.push(field_match[1]);
							while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
								if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
									field_list.push(field_match[1]);
								}
								else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
									field_list.push(field_match[1]);
								}
								else {
									throw new Error('[sprintf] ' + replacement_field);
								}
							}
						}
						else {
	                        throw new Error('[sprintf] ' + replacement_field);
						}
						match[2] = field_list;
					}
					else {
						arg_names |= 2;
					}
					if (arg_names === 3) {
						throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported');
					}
					parse_tree.push(match);
				}
				else {
					throw new Error('[sprintf] ' + _fmt);
				}
				_fmt = _fmt.substring(match[0].length);
			}
			return parse_tree;
		};
	
		return str_format;
	})();
	
	var vsprintf = function(fmt, argv) {
		var argvClone = argv.slice();
		argvClone.unshift(fmt);
		return sprintf.apply(null, argvClone);
	};
	
	module.exports = sprintf;
	sprintf.sprintf = sprintf;
	sprintf.vsprintf = vsprintf;


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	module.exports = {
	  env: 'dev',
	  api: {
	    host: 'http://XXXXX.com/'
	  }
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	var prefix, storage;
	
	storage = window.localStorage;
	
	prefix = 'app_';
	
	exports.get = function(key, defaultVal) {
	  var data, error, error1;
	  data = storage.getItem(prefix + key);
	  if (null === data) {
	    return defaultVal;
	  }
	  try {
	    data = JSON.parse(data);
	  } catch (error1) {
	    error = error1;
	    data = defaultVal;
	  }
	  return data;
	};
	
	exports.set = function(key, val) {
	  return storage.setItem(prefix + key, JSON.stringify(val));
	};
	
	exports.remove = function(key) {
	  return storage.removeItem(prefix + key);
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var $, Component, Header, Template, ref,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	$ = __webpack_require__(1);
	
	ref = __webpack_require__(2), Template = ref.Template, Component = ref.Component;
	
	Header = (function(superClass) {
	  extend(Header, superClass);
	
	  function Header() {
	    return Header.__super__.constructor.apply(this, arguments);
	  }
	
	  Header.prototype.init = function() {
	    return this.render(__webpack_require__(21));
	  };
	
	  Header.prototype.destroy = function() {};
	
	  Header.prototype.watch = function() {};
	
	  Header.prototype.cachDom = function() {};
	
	  return Header;
	
	})(__webpack_require__(22));
	
	Template.components['top-header'] = Header;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var $, Component, Footer, Template, ref,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	$ = __webpack_require__(1);
	
	ref = __webpack_require__(2), Template = ref.Template, Component = ref.Component;
	
	Footer = (function(superClass) {
	  extend(Footer, superClass);
	
	  function Footer() {
	    return Footer.__super__.constructor.apply(this, arguments);
	  }
	
	  Footer.prototype.init = function() {
	    return this.render(__webpack_require__(23));
	  };
	
	  Footer.prototype.destroy = function() {};
	
	  Footer.prototype.watch = function() {};
	
	  Footer.prototype.cachDom = function() {};
	
	  return Footer;
	
	})(__webpack_require__(22));
	
	Template.components['cmm-footer'] = Footer;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = function(app, done) {
	  if (done == null) {
	    done = function() {};
	  }
	  app.route('/', __webpack_require__(19)).route('/text', __webpack_require__(20)).route('*', __webpack_require__(19));
	  return done();
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $, Index,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	$ = __webpack_require__(1);
	
	Index = (function(superClass) {
	  extend(Index, superClass);
	
	  function Index() {
	    return Index.__super__.constructor.apply(this, arguments);
	  }
	
	  Index.prototype.run = function() {
	    return this.render(__webpack_require__(29), {
	      cur_index: 1
	    }).then((function(_this) {
	      return function() {
	        return console.log(_this);
	      };
	    })(this));
	  };
	
	  Index.prototype.destroy = function() {};
	
	  Index.prototype.watch = function() {};
	
	  Index.prototype.cacheDom = function() {};
	
	  return Index;
	
	})(__webpack_require__(25));
	
	module.exports = Index;
	
	module.exports.viewName = 'index';


/***/ },
/* 20 */
/***/ function(module, exports) {

	


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mcore = __webpack_require__(2);
	var __mc_T_El = mcore.virtualDom.Element;
	var __mc_T_formatters = mcore.Template.formatters;
	var __mc_T_binders = mcore.Template.binders;
	var __mc_T_components = mcore.Template.components;
	var __objectKeys = mcore.util.objectKeys;
	var __each = mcore.util.each;
	var __isArray = mcore.util.isArray;
	
	module.exports = function(scope, __mc__observe) {
	    var __mc__children_0 = [];
	    var __mc__binders = {};
	    var __mc__dom_id = 0;
	    var __pathMap = {};
	
	    var __getPath = function(path) {
	        var key = path;
	        if (__pathMap[path] >= 0) {
	            path = path + ':' + String(__pathMap[path]);
	            //console.log(path, String(__pathMap[key]));
	            __pathMap[key]++;
	            //console.log(path, __pathMap[key]);
	        } else {
	            __pathMap[path] = 0;
	        }
	        return path;
	    };
	
	    var __parserBinders = function(__mc__binderData, __mc__isBindObserve, key, val) {
	        if (__mc_T_binders.hasOwnProperty(key)) {
	            __mc__isBindObserve = true;
	            __mc__binderData.push({
	                attrName: key,
	                value: val
	            });
	        }
	        return __mc__isBindObserve;
	    };
	
	    var __bindBinder = function(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData) {
	        if (!__mc__isBindObserve) {
	            var __mc__attr__keys = __objectKeys(__mc__attr);
	            __each(__mc__attr__keys, function(attr) {
	                if (attr.indexOf('on-') === 0) {
	                    __mc__isBindObserve = true;
	                }
	            });
	        }
	        if (__mc__isBindObserve || __mc_T_components[__mc__new_el.tagName]) {
	            __mc__new_el.bindTemplate(__mc__observe);
	        }
	
	        if (__mc__isBindObserve) {
	            for (var __mc_i = 0, __mc_len = __mc__binderData.length; __mc_i < __mc_len; __mc_i++) {
	                var __mc_v = __mc__binderData[__mc_i];
	                __mc__new_el.bindBinder(__mc_v.attrName, __mc_v.value);
	            }
	        }
	    };
	
	    (function(scope, tree) { // startTree 0
	
	        // <h1/>
	        var __mc__children_0 = [],
	            __mc__attr = {},
	            __mc__isBindObserve = false,
	            __mc__binderData = [];
	        __mc__attr['key'] = __getPath('.0');
	        (function(scope, tree) { // startTree 1
	
	            tree.push('     this is a header ');
	        })(scope, __mc__children_0); // endTree 1
	        var __mc__new_el = new __mc_T_El('h1', __mc__attr, __mc__children_0);
	        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	        tree.push(__mc__new_el);
	    })(scope, __mc__children_0); // endTree 0
	
	
	    if (__mc__children_0.length === 1 && __mc__children_0[0].render) {
	        var virtualDom = __mc__children_0[0];
	    } else {
	        var virtualDom = new __mc_T_El('mc-vd', {}, __mc__children_0);
	    }
	
	    var templateDefined = {
	        'virtualDom': virtualDom
	    };
	    return templateDefined;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Base, Component, Template, mixin, ref, util,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	ref = __webpack_require__(2), Template = ref.Template, Component = ref.Component, util = ref.util;
	
	mixin = __webpack_require__(26);
	
	Base = (function(superClass) {
	  extend(Base, superClass);
	
	  function Base(el, virtualEl) {
	    this.el = el;
	    this.virtualEl = virtualEl;
	    Base.__super__.constructor.call(this, this.el, this.virtualEl);
	    mixin(this);
	  }
	
	  return Base;
	
	})(Component);
	
	module.exports = Base;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mcore = __webpack_require__(2);
	var __mc_T_El = mcore.virtualDom.Element;
	var __mc_T_formatters = mcore.Template.formatters;
	var __mc_T_binders = mcore.Template.binders;
	var __mc_T_components = mcore.Template.components;
	var __objectKeys = mcore.util.objectKeys;
	var __each = mcore.util.each;
	var __isArray = mcore.util.isArray;
	
	module.exports = function(scope, __mc__observe) {
	    var __mc__children_0 = [];
	    var __mc__binders = {};
	    var __mc__dom_id = 0;
	    var __pathMap = {};
	
	    var __getPath = function(path) {
	        var key = path;
	        if (__pathMap[path] >= 0) {
	            path = path + ':' + String(__pathMap[path]);
	            //console.log(path, String(__pathMap[key]));
	            __pathMap[key]++;
	            //console.log(path, __pathMap[key]);
	        } else {
	            __pathMap[path] = 0;
	        }
	        return path;
	    };
	
	    var __parserBinders = function(__mc__binderData, __mc__isBindObserve, key, val) {
	        if (__mc_T_binders.hasOwnProperty(key)) {
	            __mc__isBindObserve = true;
	            __mc__binderData.push({
	                attrName: key,
	                value: val
	            });
	        }
	        return __mc__isBindObserve;
	    };
	
	    var __bindBinder = function(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData) {
	        if (!__mc__isBindObserve) {
	            var __mc__attr__keys = __objectKeys(__mc__attr);
	            __each(__mc__attr__keys, function(attr) {
	                if (attr.indexOf('on-') === 0) {
	                    __mc__isBindObserve = true;
	                }
	            });
	        }
	        if (__mc__isBindObserve || __mc_T_components[__mc__new_el.tagName]) {
	            __mc__new_el.bindTemplate(__mc__observe);
	        }
	
	        if (__mc__isBindObserve) {
	            for (var __mc_i = 0, __mc_len = __mc__binderData.length; __mc_i < __mc_len; __mc_i++) {
	                var __mc_v = __mc__binderData[__mc_i];
	                __mc__new_el.bindBinder(__mc_v.attrName, __mc_v.value);
	            }
	        }
	    };
	
	    (function(scope, tree) { // startTree 0
	
	        // <footer/>
	        var __mc__children_0 = [],
	            __mc__attr = {},
	            __mc__isBindObserve = false,
	            __mc__binderData = [];
	        __mc__attr['key'] = __getPath('.0');
	        (function(scope, tree) { // startTree 1
	
	            tree.push('     this is a footer ');
	        })(scope, __mc__children_0); // endTree 1
	        var __mc__new_el = new __mc_T_El('footer', __mc__attr, __mc__children_0);
	        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	        tree.push(__mc__new_el);
	    })(scope, __mc__children_0); // endTree 0
	
	
	    if (__mc__children_0.length === 1 && __mc__children_0[0].render) {
	        var virtualDom = __mc__children_0[0];
	    } else {
	        var virtualDom = new __mc_T_El('mc-vd', {}, __mc__children_0);
	    }
	
	    var templateDefined = {
	        'virtualDom': virtualDom
	    };
	    return templateDefined;
	};

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $, Base, Template, View, mcoreapp, mixin, util,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	$ = __webpack_require__(1);
	
	mcoreapp = __webpack_require__(2);
	
	View = mcoreapp.View, util = mcoreapp.util, Template = mcoreapp.Template;
	
	mixin = __webpack_require__(26);
	
	Base = (function(superClass) {
	  extend(Base, superClass);
	
	  function Base() {
	    return Base.__super__.constructor.apply(this, arguments);
	  }
	
	  Base.prototype.beforeInit = function() {
	    return mixin(this);
	  };
	
	  return Base;
	
	})(View);
	
	module.exports = Base;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var api, config, storage, utils;
	
	config = __webpack_require__(27);
	
	storage = __webpack_require__(15);
	
	api = __webpack_require__(28);
	
	utils = __webpack_require__(3);
	
	module.exports = function(target) {
	  target.api = api;
	  target.config = config;
	  target.storage = storage;
	  return target.utils = utils;
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var env;
	
	env = __webpack_require__(14);
	
	module.exports = {
	  version: '1.0.0',
	  appName: 'XXX',
	  env: env
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var config, env, host, http, ref, util;
	
	ref = __webpack_require__(2), http = ref.http, util = ref.util;
	
	config = __webpack_require__(27);
	
	env = config.env;
	
	host = env.api.host;
	
	http.regErrCallback('network', function(xhr, status, hideError) {
	  var error, error1, httpCode, msg, res;
	  msg = '网络好像有点问题，请重试';
	  if (xhr.responseText) {
	    try {
	      res = $.parseJSON(xhr.responseText);
	      if (res.error) {
	        msg = res.error;
	      }
	    } catch (error1) {
	      error = error1;
	    }
	  }
	  httpCode = xhr.statusCode().status;
	  if (httpCode) {
	    msg = msg + ' ( code: ' + httpCode + ' )';
	  }
	  if (!hideError) {
	    return alert(msg);
	  } else {
	    return console.log(msg);
	  }
	});
	
	http.regErrCallback('error', function(res, hideError) {
	  var msg;
	  msg = res.error || res.msg || '服务器在开小差，没有回复';
	  if (!hideError) {
	    return alert(msg);
	  } else {
	    return console.log(msg);
	  }
	});
	
	http.isSuccess = function() {
	  return true;
	};
	
	http.responseFormat = function(res) {
	  return res;
	};
	
	http.sendDataFormat = function(data) {
	  return data;
	};
	
	module.exports = {
	  index: function(data) {
	    return http.get(host + 'site/index', data);
	  },
	  contact: function(data) {
	    return http.get(host + 'connect/index', data);
	  }
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mcore = __webpack_require__(2);
	var __mc_T_El = mcore.virtualDom.Element;
	var __mc_T_formatters = mcore.Template.formatters;
	var __mc_T_binders = mcore.Template.binders;
	var __mc_T_components = mcore.Template.components;
	var __objectKeys = mcore.util.objectKeys;
	var __each = mcore.util.each;
	var __isArray = mcore.util.isArray;
	
	module.exports = function(scope, __mc__observe) {
	    var __mc__children_0 = [];
	    var __mc__binders = {};
	    var __mc__dom_id = 0;
	    var __pathMap = {};
	
	    var __getPath = function(path) {
	        var key = path;
	        if (__pathMap[path] >= 0) {
	            path = path + ':' + String(__pathMap[path]);
	            //console.log(path, String(__pathMap[key]));
	            __pathMap[key]++;
	            //console.log(path, __pathMap[key]);
	        } else {
	            __pathMap[path] = 0;
	        }
	        return path;
	    };
	
	    var __parserBinders = function(__mc__binderData, __mc__isBindObserve, key, val) {
	        if (__mc_T_binders.hasOwnProperty(key)) {
	            __mc__isBindObserve = true;
	            __mc__binderData.push({
	                attrName: key,
	                value: val
	            });
	        }
	        return __mc__isBindObserve;
	    };
	
	    var __bindBinder = function(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData) {
	        if (!__mc__isBindObserve) {
	            var __mc__attr__keys = __objectKeys(__mc__attr);
	            __each(__mc__attr__keys, function(attr) {
	                if (attr.indexOf('on-') === 0) {
	                    __mc__isBindObserve = true;
	                }
	            });
	        }
	        if (__mc__isBindObserve || __mc_T_components[__mc__new_el.tagName]) {
	            __mc__new_el.bindTemplate(__mc__observe);
	        }
	
	        if (__mc__isBindObserve) {
	            for (var __mc_i = 0, __mc_len = __mc__binderData.length; __mc_i < __mc_len; __mc_i++) {
	                var __mc_v = __mc__binderData[__mc_i];
	                __mc__new_el.bindBinder(__mc_v.attrName, __mc_v.value);
	            }
	        }
	    };
	
	    (function(scope, tree) { // startTree 0
	
	        // <div class="view view-index" />
	        var __mc__children_0 = [],
	            __mc__attr = {},
	            __mc__isBindObserve = false,
	            __mc__binderData = [];
	        __mc__attr['class'] = 'view view-index';
	        __mc__attr['key'] = __getPath('.0');
	        (function(scope, tree) { // startTree 1
	
	            // <top-header/>
	            var __mc__children_1 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['key'] = __getPath('.0.1');
	            var __mc__new_el = new __mc_T_El('top-header', __mc__attr, __mc__children_1);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	            // <div class="container" />
	            var __mc__children_2 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['class'] = 'container';
	            __mc__attr['key'] = __getPath('.0.3');
	            (function(scope, tree) { // startTree 3
	
	                // <h1/>
	                var __mc__children_3 = [],
	                    __mc__attr = {},
	                    __mc__isBindObserve = false,
	                    __mc__binderData = [];
	                __mc__attr['key'] = __getPath('.0.3.1');
	                (function(scope, tree) { // startTree 4
	
	                    tree.push('index');
	                })(scope, __mc__children_3); // endTree 4
	                var __mc__new_el = new __mc_T_El('h1', __mc__attr, __mc__children_3);
	                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	                tree.push(__mc__new_el);
	            })(scope, __mc__children_2); // endTree 3
	            var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_2);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	            // <cmm-footer/>
	            var __mc__children_5 = [],
	                __mc__attr = {},
	                __mc__isBindObserve = false,
	                __mc__binderData = [];
	            __mc__attr['key'] = __getPath('.0.5');
	            var __mc__new_el = new __mc_T_El('cmm-footer', __mc__attr, __mc__children_5);
	            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	            tree.push(__mc__new_el);
	        })(scope, __mc__children_0); // endTree 1
	        var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_0);
	        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
	        tree.push(__mc__new_el);
	    })(scope, __mc__children_0); // endTree 0
	
	
	    if (__mc__children_0.length === 1 && __mc__children_0[0].render) {
	        var virtualDom = __mc__children_0[0];
	    } else {
	        var virtualDom = new __mc_T_El('mc-vd', {}, __mc__children_0);
	    }
	
	    var templateDefined = {
	        'virtualDom': virtualDom
	    };
	    return templateDefined;
	};

/***/ }
]);
//# sourceMappingURL=app.all.js.map