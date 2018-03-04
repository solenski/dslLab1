if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'trafficLights'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'trafficLights'.");
}
var trafficLights = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var canvas;
  function initializeCanvas() {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    ensureNotNull(document.body).appendChild(canvas);
    return canvas;
  }
  function get_context() {
    var tmp$;
    return Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
  }
  function get_width() {
    return canvas.width;
  }
  function get_height() {
    return canvas.height;
  }
  function KotlinGenerator() {
    return new HelloKotlin();
  }
  function HelloKotlin() {
    this.relX = 0.2 + 0.2 * Math.random();
    this.relY = 0.4 + 0.2 * Math.random();
    this.relXVelocity = this.randomVelocity();
    this.relYVelocity = this.randomVelocity();
    this.message = 'Hello, Kotlin Changed!';
    this.textHeightInPixels = 20;
    get_context().font = 'bold 20px Georgia, serif';
    this.textWidthInPixels = get_context().measureText(this.message).width;
  }
  Object.defineProperty(HelloKotlin.prototype, 'absX', {
    get: function () {
      return this.relX * get_width();
    }
  });
  Object.defineProperty(HelloKotlin.prototype, 'absY', {
    get: function () {
      return this.relY * get_height();
    }
  });
  HelloKotlin.prototype.draw = function () {
    get_context().save();
    this.move();
    get_context().shadowColor = '#000000';
    get_context().shadowBlur = 5.0;
    get_context().shadowOffsetX = -4.0;
    get_context().shadowOffsetY = 4.0;
    get_context().fillStyle = 'rgb(242,160,110)';
    get_context().fillText(this.message, this.absX, this.absY);
    get_context().restore();
  };
  HelloKotlin.prototype.move = function () {
    var relTextWidth = this.textWidthInPixels / get_width();
    if (this.relX > 1.0 - relTextWidth - this.get_abs_yrwdxr$(this.relXVelocity) || this.relX < this.get_abs_yrwdxr$(this.relXVelocity)) {
      this.relXVelocity *= -1;
    }
    var relTextHeight = this.textHeightInPixels / get_height() | 0;
    if (this.relY > 1.0 - this.get_abs_yrwdxr$(this.relYVelocity) || this.relY < this.get_abs_yrwdxr$(this.relYVelocity) + relTextHeight) {
      this.relYVelocity *= -1;
    }
    this.relX += this.relXVelocity;
    this.relY += this.relYVelocity;
  };
  HelloKotlin.prototype.randomVelocity = function () {
    return 0.03 * Math.random() * (Math.random() < 0.5 ? 1 : -1);
  };
  HelloKotlin.prototype.get_abs_yrwdxr$ = function ($receiver) {
    return $receiver > 0 ? $receiver : -$receiver;
  };
  HelloKotlin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloKotlin',
    interfaces: []
  };
  function renderBackground() {
    get_context().save();
    get_context().fillStyle = '#5C7EED';
    get_context().fillRect(0.0, 0.0, get_width(), get_height());
    get_context().restore();
  }
  function wrapper() {
  }
  wrapper.prototype.rb = function () {
    renderBackground();
  };
  wrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'wrapper',
    interfaces: []
  };
  function main(args) {
    renderBackground();
    var t1 = new HelloKotlin();
    var t2 = new HelloKotlin();
    var t3 = new HelloKotlin();
    var w = new wrapper();
    var interval = 500;
    var logos = Array(3);
    window.setInterval(function () {
      w.rb();
      t1.draw();
      t2.draw();
      t3.draw();
    }, interval);
  }
  var package$hello = _.hello || (_.hello = {});
  Object.defineProperty(package$hello, 'canvas', {
    get: function () {
      return canvas;
    }
  });
  package$hello.initializeCanvas = initializeCanvas;
  Object.defineProperty(package$hello, 'context', {
    get: get_context
  });
  Object.defineProperty(package$hello, 'width', {
    get: get_width
  });
  Object.defineProperty(package$hello, 'height', {
    get: get_height
  });
  package$hello.KotlinGeneratorJS = KotlinGenerator;
  package$hello.HelloKotlin = HelloKotlin;
  package$hello.renderBackground = renderBackground;
  package$hello.wrapper = wrapper;
  package$hello.main_kand9s$ = main;
  canvas = initializeCanvas();
  main([]);
  Kotlin.defineModule('trafficLights', _);
  return _;
}(typeof trafficLights === 'undefined' ? {} : trafficLights, kotlin);
