webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".text{\r\n    text-align:  center;\r\n    line-height: 300px;\r\n    font-size: 40px;\r\n    color: #fff;\r\n}\r\n\r\n/* :host{\r\n    padding: 50px;\r\n} */\r\n\r\n.wr{\r\n    margin: 0 auto;\r\n    height: auto;\r\n    width: 50%;\r\n}\r\n\r\ninfinite-carousel{\r\n    margin: 0 auto;\r\n}\r\n\r\n.header{\r\n    height: 45px;\r\n    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, .3);\r\n            box-shadow: 0px 1px 2px rgba(0, 0, 0, .3);\r\n    background: rgb(254, 254, 254);\r\n    padding: 0px 20px;\r\n}\r\n\r\n.logo{\r\n    float: left;\r\n    font-size: 20px;\r\n    line-height: 45px;\r\n}\r\n\r\n.github-icon{\r\n    height: 100%;\r\n    width: 180px;\r\n    float: right;\r\n    line-height: 45px;\r\n    padding: 0 20px;\r\n    margin-right: 20px;\r\n    display: block;\r\n    text-decoration: none;\r\n    color: #000;\r\n}\r\n\r\n.github-icon :hover{\r\n    cursor: pointer;\r\n    background: rgb(245, 245, 245);\r\n}\r\n\r\n.github-icon img {\r\n    margin: 6px;\r\n    height: 33px;\r\n    float: left;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <div class=\"logo\">\r\n        UI Carousel\r\n    </div>\r\n\r\n    <div>\r\n        <a href=\"https://github.com/joscmw95/ui-carousel\" class=\"github-icon\">\r\n            <span>Github</span>\r\n            <img src=\"./assets/github.png\" alt=\"\">\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<infinite-carousel></infinite-carousel>\r\n<br>\r\n<br>\r\n<br>\r\n<finite-carousel></finite-carousel>\r\n<br>\r\n<br>\r\n<br>\r\n<custom-dots></custom-dots>\r\n<br>\r\n<br>\r\n<br>\r\n<custom-arrows></custom-arrows>\r\n<br>\r\n<br>\r\n<br>\r\n<lazyloading></lazyloading>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<!-- <div class=\"wr\">\r\n    <ui-carousel [infinite]=\"false\" [speed]=\"200\" >\r\n        <ui-carousel-item color=\"red\">\r\n            <img id=\"img\" [ui-lazy-load]=\"'./assets/1.jpg'\" alt=\"\" draggable=\"false\">\r\n        </ui-carousel-item>\r\n        <ui-carousel-item color=\"blue\">\r\n            <img ui-lazy-load=\"/assets/2.jpg\" alt=\"\" draggable=\"false\">\r\n        </ui-carousel-item>\r\n        <ui-carousel-item color=\"green\">\r\n            <img ui-lazy-load=\"/assets/3.jpg\" alt=\"\" draggable=\"false\">\r\n        </ui-carousel-item>\r\n        <ui-carousel-item color=\"orange\">\r\n        </ui-carousel-item>\r\n         <ui-carousel-item color=\"brown\">\r\n            <img src=\"./assets/4.jpg\" alt=\"\" draggable=\"false\">\r\n            <div class=\"text\">5</div>\r\n        </ui-carousel-item> \r\n    </ui-carousel>\r\n</div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(appRef) {
        this.appRef = appRef;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infinite_carousel_infinite_carousel_component__ = __webpack_require__("./src/app/infinite-carousel/infinite-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__finite_carousel_finite_carousel_component__ = __webpack_require__("./src/app/finite-carousel/finite-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_dots_custom_dots_component__ = __webpack_require__("./src/app/custom-dots/custom-dots.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_arrows_custom_arrows_component__ = __webpack_require__("./src/app/custom-arrows/custom-arrows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lazyloading_lazyloading_component__ = __webpack_require__("./src/app/lazyloading/lazyloading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_carousel__ = __webpack_require__("./src/app/ui-carousel/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__infinite_carousel_infinite_carousel_component__["a" /* InfiniteCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_4__finite_carousel_finite_carousel_component__["a" /* FiniteCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_5__custom_dots_custom_dots_component__["a" /* CustomDotsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__custom_arrows_custom_arrows_component__["a" /* CustomArrowsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__lazyloading_lazyloading_component__["a" /* LazyLoadingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__ui_carousel__["a" /* UICarouselModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom-arrows/custom-arrows.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\nui-carousel{\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.text{\r\n    text-align:  center;\r\n    line-height: 300px;\r\n    font-size: 40px;\r\n    color: #fff;\r\n}\r\n\r\n.button{\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    height: 35px;\r\n    width: 120px;\r\n    line-height: 35px;\r\n    color: gray;\r\n    background: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    position: absolute;\r\n    z-index: 5;\r\n    left: 50%;\r\n    bottom: 50px;\r\n    transform: translateX(-50%);\r\n    -webkit-transform: translateX(-50%);\r\n    -moz-transform: translateX(-50%);\r\n    -o-transform: translateX(-50%);\r\n    -ms-transform: translateX(-50%);\r\n\r\n    transition: all .3s;\r\n    -webkit-transition: all .3s;\r\n    -moz-transition: all .3s;\r\n    -o-transition: all .3s;\r\n    -ms-transition: all .3s;\r\n}\r\n\r\n.button:hover{\r\n    cursor: pointer;\r\n    -webkit-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.left-arrow,.right-arrow{\r\n    height: 35px;\r\n    width: 30px;\r\n    background: rgb(245, 245, 245);\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    -webkit-transform: translateY(-50%);\r\n    -moz-transform: translateY(-50%);\r\n    -o-transform: translateY(-50%);\r\n    -ms-transform: translateY(-50%);\r\n    z-index: 50;\r\n    -webkit-box-shadow: 0px 0px 2px rgba(0,0,0,.4);\r\n            box-shadow: 0px 0px 2px rgba(0,0,0,.4);\r\n}\r\n\r\n.left-arrow{\r\n    left: 0;\r\n    border-radius: 0 3px 3px 0;\r\n}\r\n\r\n.right-arrow{\r\n    right: 0;  \r\n    border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.left-arrow:hover,.right-arrow:hover{\r\n    cursor: pointer;\r\n    background: rgb(225, 225, 225);\r\n}\r\n\r\n.left-arrow img,.right-arrow img{\r\n    height: 25px;\r\n    margin-top: 5px;\r\n    width: auto;\r\n    opacity: .7;\r\n}\r\n\r\n.left-arrow img{\r\n    margin-left: 5px;\r\n}\r\n\r\n.right-arrow img{\r\n    margin-left: 10px;\r\n}\r\n\r\n.responsive-img {\r\n    height: 300px;\r\n    width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}"

/***/ }),

/***/ "./src/app/custom-arrows/custom-arrows.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center; margin:10px;font-size: 25px; \">\r\n    Custom arrows\r\n</div>\r\n<div style=\"max-width: 768px; margin: auto; position: relative;\">\r\n    <ui-carousel #uiCarousel [infinite]=\"true\" [speed]=\"200\" [arrows]=\"false\">\r\n        <ui-carousel-item>\r\n            <img src=\"./assets/2.jpg\" class=\"responsive-img\" alt=\"\" draggable=\"false\">\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <img src=\"./assets/1.jpg\" class=\"responsive-img\" alt=\"\" draggable=\"false\">\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <img src=\"./assets/3.jpg\" class=\"responsive-img\" alt=\"\" draggable=\"false\">\r\n        </ui-carousel-item>\r\n    </ui-carousel>\r\n    <div class=\"left-arrow\" (click)=\"uiCarousel.prev()\">\r\n        <img src=\"assets/arrow-left.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"right-arrow\" (click)=\"uiCarousel.next()\">\r\n        <img src=\"assets/arrow-right.png\" alt=\"\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/custom-arrows/custom-arrows.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomArrowsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomArrowsComponent = (function () {
    function CustomArrowsComponent() {
    }
    CustomArrowsComponent.prototype.ngOnInit = function () { };
    CustomArrowsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-arrows',
            template: __webpack_require__("./src/app/custom-arrows/custom-arrows.component.html"),
            styles: [__webpack_require__("./src/app/custom-arrows/custom-arrows.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomArrowsComponent);
    return CustomArrowsComponent;
}());



/***/ }),

/***/ "./src/app/custom-dots/custom-dots.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\nui-carousel {\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.text {\r\n    text-align: center;\r\n    line-height: 300px;\r\n    font-size: 40px;\r\n    color: #fff;\r\n}\r\n\r\n.dots {\r\n    height: 4px;\r\n    margin: auto;\r\n    bottom: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    width: 100%;\r\n    position: absolute;\r\n    padding: 0 10px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.dot {\r\n    height: 100%;\r\n    width: 200px;\r\n    background: rgba(256, 256, 256, 0.6);\r\n    padding: 0 3px;\r\n    border-radius: 1px;\r\n}\r\n\r\n.dot:hover {\r\n    background: rgba(256, 256, 256, 0.8);\r\n    cursor: pointer;\r\n}\r\n\r\n.dot.active {\r\n    background: rgba(256, 256, 256, 0.8);\r\n}\r\n\r\n.responsive-img {\r\n    height: 300px;\r\n    width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}"

/***/ }),

/***/ "./src/app/custom-dots/custom-dots.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center; margin:10px;font-size: 25px; \">\r\n    Custom dots\r\n</div>\r\n<div style=\"max-width: 768px; margin: auto; position: relative;\">\r\n    <ui-carousel #uiCarousel [infinite]=\"true\" [speed]=\"200\" height=\"300px\" width=\"700px\" [dots]=\"false\">\r\n        <ui-carousel-item>\r\n            <img src=\"./assets/3.jpg\" class=\"responsive-img\" alt=\"\" draggable=\"false\">\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <img src=\"./assets/1.jpg\" class=\"responsive-img\" alt=\"\" draggable=\"false\">\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <img src=\"./assets/2.jpg\" class=\"responsive-img\" alt=\"\" draggable=\"false\">\r\n        </ui-carousel-item>\r\n    </ui-carousel>\r\n    <div class=\"dots\">\r\n        <div class=\"dot\" (click)=\"uiCarousel.goTo(0)\"></div>\r\n        <div class=\"dot\" (click)=\"uiCarousel.goTo(1)\"></div>\r\n        <div class=\"dot\" (click)=\"uiCarousel.goTo(2)\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/custom-dots/custom-dots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDotsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomDotsComponent = (function () {
    function CustomDotsComponent() {
    }
    CustomDotsComponent.prototype.ngOnInit = function () { };
    CustomDotsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-dots',
            template: __webpack_require__("./src/app/custom-dots/custom-dots.component.html"),
            styles: [__webpack_require__("./src/app/custom-dots/custom-dots.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomDotsComponent);
    return CustomDotsComponent;
}());



/***/ }),

/***/ "./src/app/finite-carousel/finite-carousel.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\nui-carousel {\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.text {\r\n    text-align: center;\r\n    line-height: 300px;\r\n    font-size: 40px;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/finite-carousel/finite-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center; margin:10px;font-size: 25px; \">\r\n    Finite\r\n</div>\r\n<div style=\"max-width: 768px; margin: auto; position: relative;\">\r\n    <ui-carousel [infinite]=\"false\" [speed]=\"200\">\r\n        <ui-carousel-item>\r\n            <div style=\"background:#2980b9\" class=\"text\">1</div>\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <div style=\"background:#2ecc71\" class=\"text\">2</div>\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <div style=\"background:#e74c3c\" class=\"text\">3</div>\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <div style=\"background:#f1c40f\" class=\"text\">4</div>\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <div style=\"background:#16a085\" class=\"text\">5</div>\r\n        </ui-carousel-item>\r\n    </ui-carousel>\r\n</div>"

/***/ }),

/***/ "./src/app/finite-carousel/finite-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiniteCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FiniteCarouselComponent = (function () {
    function FiniteCarouselComponent() {
    }
    FiniteCarouselComponent.prototype.ngOnInit = function () { };
    FiniteCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'finite-carousel',
            template: __webpack_require__("./src/app/finite-carousel/finite-carousel.component.html"),
            styles: [__webpack_require__("./src/app/finite-carousel/finite-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FiniteCarouselComponent);
    return FiniteCarouselComponent;
}());



/***/ }),

/***/ "./src/app/infinite-carousel/infinite-carousel.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\nui-carousel {\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.text {\r\n    text-align: center;\r\n    line-height: 300px;\r\n    font-size: 40px;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/infinite-carousel/infinite-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center; margin:10px;font-size: 25px; \">\r\n    Infinite\r\n</div>\r\n<div style=\"max-width: 768px; margin: auto; position: relative;\">\r\n    <ui-carousel [infinite]=\"true\" [speed]=\"200\">\r\n        <ui-carousel-item>\r\n            <div style=\"background:#F44336\" class=\"text\">1</div>\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <div style=\"background:#2ecc71\" class=\"text\">2</div>\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <div style=\"background:#3498db\" class=\"text\">3</div>\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <div style=\"background:#f1c40f\" class=\"text\">4</div>\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <div style=\"background:#16a085\" class=\"text\">5</div>\r\n        </ui-carousel-item>\r\n    </ui-carousel>\r\n</div>"

/***/ }),

/***/ "./src/app/infinite-carousel/infinite-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfiniteCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfiniteCarouselComponent = (function () {
    function InfiniteCarouselComponent() {
    }
    InfiniteCarouselComponent.prototype.ngOnInit = function () { };
    InfiniteCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'infinite-carousel',
            template: __webpack_require__("./src/app/infinite-carousel/infinite-carousel.component.html"),
            styles: [__webpack_require__("./src/app/infinite-carousel/infinite-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfiniteCarouselComponent);
    return InfiniteCarouselComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/lazyloading.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\nui-carousel{\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.text{\r\n    text-align:  center;\r\n    line-height: 300px;\r\n    font-size: 40px;\r\n    color: #fff;\r\n}\r\n\r\n.button{\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    height: 35px;\r\n    width: 120px;\r\n    line-height: 35px;\r\n    color: gray;\r\n    background: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    position: absolute;\r\n    z-index: 5;\r\n    left: 50%;\r\n    bottom: 50px;\r\n    transform: translateX(-50%);\r\n    -webkit-transform: translateX(-50%);\r\n    -moz-transform: translateX(-50%);\r\n    -o-transform: translateX(-50%);\r\n    -ms-transform: translateX(-50%);\r\n\r\n    transition: all .3s;\r\n    -webkit-transition: all .3s;\r\n    -moz-transition: all .3s;\r\n    -o-transition: all .3s;\r\n    -ms-transition: all .3s;\r\n}\r\n\r\n.button:hover{\r\n    cursor: pointer;\r\n    -webkit-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.responsive-img {\r\n    height: 300px;\r\n    width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}"

/***/ }),

/***/ "./src/app/lazyloading/lazyloading.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center; margin:10px;font-size: 25px; \">\r\n    Lazy Loading\r\n</div>\r\n<div style=\"max-width: 768px; margin: auto; position: relative;\">\r\n    <ui-carousel [infinite]=\"false\" [speed]=\"200\">\r\n        <ui-carousel-item>\r\n            <img ui-lazy-load=\"./assets/5.jpg\" class=\"responsive-img\" alt=\"\" draggable=\"false\">\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <img ui-lazy-load=\"./assets/4.jpg\" class=\"responsive-img\" alt=\"\" draggable=\"false\">\r\n        </ui-carousel-item>\r\n        <ui-carousel-item>\r\n            <img ui-lazy-load=\"./assets/6.jpg\" class=\"responsive-img\" alt=\"\" draggable=\"false\">\r\n        </ui-carousel-item>\r\n    </ui-carousel>\r\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/lazyloading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyLoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LazyLoadingComponent = (function () {
    function LazyLoadingComponent() {
    }
    LazyLoadingComponent.prototype.ngOnInit = function () { };
    LazyLoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lazyloading',
            template: __webpack_require__("./src/app/lazyloading/lazyloading.component.html"),
            styles: [__webpack_require__("./src/app/lazyloading/lazyloading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LazyLoadingComponent);
    return LazyLoadingComponent;
}());



/***/ }),

/***/ "./src/app/ui-carousel/arrow/arrow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArrowComponent = (function () {
    function ArrowComponent() {
        this.disabled = true;
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
    }
    ArrowComponent.prototype.onClick = function () {
        if (!this.disabled)
            this.click.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], ArrowComponent.prototype, "dir", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])("disabled"),
        __metadata("design:type", Boolean)
    ], ArrowComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])('on-click'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */])
    ], ArrowComponent.prototype, "click", void 0);
    ArrowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'arrow',
            template: "\n        <div class=\"arrow\" (click)=\"onClick()\" \n        [ngClass]=\"{ left : dir === 'left', right : dir === 'right', disabled  : disabled}\"></div>\n    ",
            styles: ["\n        .arrow{\n            position: absolute;\n            height: 50px;\n            width: 30px;\n            opacity: .6;\n            user-select: none;\n            -moz-user-select: none;\n            -khtml-user-select: none;\n            -webkit-user-select: none;\n            -o-user-select: none;\n            z-index: 1000;\n        }\n        .arrow.right{\n            right: 5px;\n            top: 50%;\n         \n            transform: scaleX(-1) translateY(-50%);\n            -moz-transform: scaleX(-1) translateY(-50%);\n            -o-transform: scaleX(-1) translateY(-50%);\n            -webkit-transform: scaleX(-1) translateY(-50%);\n            -ms-transform: scaleX(-1) translateY(-50%);\n            filter: FlipH;\n            -ms-filter: \"FlipH\";\n        }\n        \n        .arrow.left{\n            left: 5px;\n            top: 50%;\n            transform: translateY(-50%);\n            -moz-transform: translateY(-50%);\n            -webkit-transform: translateY(-50%);\n            -o-transform: translateY(-50%);\n            -ms-transform: translateY(-50%);\n        }\n        .arrow:hover{\n            opacity: .8;\n            cursor: pointer;\n        }\n        \n        .arrow:before{\n            content: \"\";\n            height: 3px;\n            width: 30px;\n            background: #fff;\n            display: block;\n            position: absolute;\n            top: 14px;\n            transform: rotate(-45deg);\n            -moz-transform: rotate(-45deg);\n            -webkit-transform: rotate(-45deg);\n            -o-transform: rotate(-45deg);\n            -ms-transform: rotate(-45deg);\n        }\n        .arrow:after{\n            content: \"\";\n            height: 3px;\n            width: 30px;\n            background: #fff;\n            display: block;\n            transform: rotate(45deg);\n            -moz-transform: rotate(45deg);\n            -webkit-transform: rotate(45deg);\n            -o-transform: rotate(45deg);\n            -ms-transform: rotate(45deg);\n            position: absolute;\n            bottom: 14px;\n        }\n        .arrow.disabled{\n            opacity: .4;\n        }\n        .arrow.disabled:hover{\n            opacity: .4;\n            cursor: pointer;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], ArrowComponent);
    return ArrowComponent;
}());



/***/ }),

/***/ "./src/app/ui-carousel/directives/swiper.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwiperDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZERO = 0.000000000001;
var SwiperDirective = (function () {
    function SwiperDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.isDown = false;
        this.initialPos = ZERO;
        this.lastPos = ZERO;
        this.swipeDistance = ZERO;
        this.firstSwipeDate = Date.now();
        this.threshold = 200;
        this.onSwipeRight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        this.onSwipeLeft = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        this.onSwipeStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        this.onSwipeEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        this.swipeLeft = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        this.swipeRight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
    }
    SwiperDirective_1 = SwiperDirective;
    SwiperDirective.prototype.ngOnInit = function () {
        this.onSwipeEnd.subscribe(function () {
        });
        this.swipeLeft.subscribe(function () {
            SwiperDirective_1.canISwipe = false;
            setTimeout(function () {
                SwiperDirective_1.canISwipe = true;
            }, 350);
        });
        this.swipeRight.subscribe(function () {
            SwiperDirective_1.canISwipe = false;
            setTimeout(function () {
                SwiperDirective_1.canISwipe = true;
            }, 350);
        });
    };
    SwiperDirective.prototype.onMouseDown = function (event) {
        if (!SwiperDirective_1.canISwipe) {
            return;
        }
        this.firstSwipeDate = Date.now();
        this.isDown = true;
        this.initialPos = event.clientX;
        this.swipeDistance = 0;
        this.onSwipeStart.emit();
    };
    SwiperDirective.prototype.onMouseUp = function (event) {
        if (!this.isDown)
            return;
        this.initialPos = this.lastPos = ZERO;
        this.isDown = false;
        if (this.swipeDistance > this.threshold) {
            this.swipeLeft.emit();
        }
        else if (this.swipeDistance < -this.threshold) {
            this.swipeRight.emit();
        }
        else {
            this.onSwipeEnd.emit();
        }
        this.swipeDistance = ZERO;
    };
    SwiperDirective.prototype.onMouseMove = function (event) {
        if (this.isDown) {
            var swipeFrameDistance = event.clientX - this.initialPos - this.lastPos;
            this.swipeDistance += swipeFrameDistance;
            this.lastPos = event.clientX - this.initialPos;
            if (swipeFrameDistance > 0) {
                this.onSwipeLeft.emit(swipeFrameDistance);
            }
            else {
                this.onSwipeRight.emit(swipeFrameDistance);
            }
        }
    };
    SwiperDirective.prototype.onTouchMove = function (event) {
        if (!SwiperDirective_1.canISwipe) {
            return;
        }
        var touch = event.touches[0] || event.changedTouches[0];
        var swipeFrameDistance = touch.clientX - this.initialPos - this.lastPos;
        swipeFrameDistance = swipeFrameDistance < 30 ? swipeFrameDistance : 30;
        this.swipeDistance += swipeFrameDistance;
        this.lastPos = touch.clientX - this.initialPos;
        if (swipeFrameDistance > 0) {
            this.onSwipeLeft.emit(swipeFrameDistance);
        }
        else {
            this.onSwipeRight.emit(swipeFrameDistance);
        }
    };
    SwiperDirective.prototype.onTouchStart = function (event) {
        if (!SwiperDirective_1.canISwipe) {
            return;
        }
        var touch = event.touches[0] || event.changedTouches[0];
        this.firstSwipeDate = Date.now();
        this.initialPos = touch.clientX;
        this.swipeDistance = ZERO;
        this.onSwipeStart.emit();
    };
    SwiperDirective.prototype.onTouchEnd = function (event) {
        this.initialPos = this.lastPos = ZERO;
        if (this.swipeDistance > this.threshold) {
            this.swipeLeft.emit();
        }
        else if (this.swipeDistance < -this.threshold) {
            this.swipeRight.emit();
        }
        else {
            this.onSwipeEnd.emit();
        }
        this.swipeDistance = ZERO;
    };
    SwiperDirective.canISwipe = true;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Number)
    ], SwiperDirective.prototype, "threshold", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */])
    ], SwiperDirective.prototype, "onSwipeRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */])
    ], SwiperDirective.prototype, "onSwipeLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */])
    ], SwiperDirective.prototype, "onSwipeStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */])
    ], SwiperDirective.prototype, "onSwipeEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */])
    ], SwiperDirective.prototype, "swipeLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */])
    ], SwiperDirective.prototype, "swipeRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])("mousedown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SwiperDirective.prototype, "onMouseDown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])("document:mouseup", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SwiperDirective.prototype, "onMouseUp", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])("mousemove", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SwiperDirective.prototype, "onMouseMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('touchmove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SwiperDirective.prototype, "onTouchMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])("touchstart", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SwiperDirective.prototype, "onTouchStart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])("touchend", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SwiperDirective.prototype, "onTouchEnd", null);
    SwiperDirective = SwiperDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Directive */])({
            selector: '[swiper]',
            exportAs: 'swiper'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer2 */]])
    ], SwiperDirective);
    return SwiperDirective;
    var SwiperDirective_1;
}());



/***/ }),

/***/ "./src/app/ui-carousel/directives/ui-lazy-load.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UILazyloadDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UILazyloadDirective = (function () {
    function UILazyloadDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    UILazyloadDirective.prototype.load = function () {
        var img = this.el.nativeElement;
        if (img.src)
            return;
        img.src = this.uiLazyLoad;
        // this.renderer.listen(img, "load", (event) => { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])("ui-lazy-load"),
        __metadata("design:type", String)
    ], UILazyloadDirective.prototype, "uiLazyLoad", void 0);
    UILazyloadDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Directive */])({ selector: '[ui-lazy-load]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer2 */]])
    ], UILazyloadDirective);
    return UILazyloadDirective;
}());



/***/ }),

/***/ "./src/app/ui-carousel/dots/dots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DotsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DotsComponent = (function () {
    function DotsComponent() {
        this.activeDot = 0;
        this.position = "left";
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
    }
    DotsComponent.prototype.ngOnInit = function () {
        this.numbers = Array(this.dotsCount).fill(0).map(function (x, i) { return i; });
    };
    DotsComponent.prototype.click = function (index) {
        this.onClick.emit(index);
        this.activeDot = index;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])("active-dot"),
        __metadata("design:type", Number)
    ], DotsComponent.prototype, "activeDot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])("dots-count"),
        __metadata("design:type", Number)
    ], DotsComponent.prototype, "dotsCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostBinding */])("class"),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], DotsComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])("on-click"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */])
    ], DotsComponent.prototype, "onClick", void 0);
    DotsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dots',
            template: "\n    <div class=\"dot\" *ngFor=\"let index of numbers\" (click)=\"click(index)\" [class.active]=\"activeDot === index\"></div>\n    ",
            styles: ["\n        :host{\n            position: absolute;\n            display: inline-block;\n            z-index: 1000;\n        }\n        \n        :host(.left){\n            bottom: 10px;\n            left: 10px;\n        }\n        \n        :host(.right){\n            bottom: 10px;\n            right: 10px;\n        }\n        \n        :host(.middle){\n            bottom: 20px;\n            left: 50%;\n            transform: translateX(-50%);\n            -webkit-transform: translateX(-50%);\n            -moz-transform: translateX(-50%);\n            -o-transform: translateX(-50%);\n            -ms-transform: translateX(-50%);\n        }\n        \n        .dot{\n            height: 10px;\n            width: 10px;\n            border-radius: 5px;\n            background: white;\n            opacity: .6;\n            margin: 0 4px;\n            display: inline-block;\n        }\n        \n        .dot:hover{\n            opacity: .8;\n            cursor: pointer;\n        }\n        \n        .dot.active{\n            opacity: .8;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], DotsComponent);
    return DotsComponent;
}());



/***/ }),

/***/ "./src/app/ui-carousel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UICarouselModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_carousel_ui_carousel_component__ = __webpack_require__("./src/app/ui-carousel/ui-carousel/ui-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_carousel_item_ui_carousel_item_component__ = __webpack_require__("./src/app/ui-carousel/ui-carousel-item/ui-carousel-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_swiper_directive__ = __webpack_require__("./src/app/ui-carousel/directives/swiper.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_ui_lazy_load_directive__ = __webpack_require__("./src/app/ui-carousel/directives/ui-lazy-load.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dots_dots_component__ = __webpack_require__("./src/app/ui-carousel/dots/dots.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__arrow_arrow_component__ = __webpack_require__("./src/app/ui-carousel/arrow/arrow.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UICarouselModule = (function () {
    function UICarouselModule() {
    }
    UICarouselModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ui_carousel_ui_carousel_component__["a" /* UICarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_3__ui_carousel_item_ui_carousel_item_component__["a" /* UICarouselItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__directives_ui_lazy_load_directive__["a" /* UILazyloadDirective */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ui_carousel_ui_carousel_component__["a" /* UICarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_3__ui_carousel_item_ui_carousel_item_component__["a" /* UICarouselItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dots_dots_component__["a" /* DotsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__arrow_arrow_component__["a" /* ArrowComponent */],
                __WEBPACK_IMPORTED_MODULE_4__directives_swiper_directive__["a" /* SwiperDirective */],
                __WEBPACK_IMPORTED_MODULE_5__directives_ui_lazy_load_directive__["a" /* UILazyloadDirective */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__ui_carousel_item_ui_carousel_item_component__["a" /* UICarouselItemComponent */]],
            providers: []
        })
    ], UICarouselModule);
    return UICarouselModule;
}());



/***/ }),

/***/ "./src/app/ui-carousel/ui-carousel-item/ui-carousel-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UICarouselItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ui_lazy_load_directive__ = __webpack_require__("./src/app/ui-carousel/directives/ui-lazy-load.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UICarouselItemComponent = (function () {
    function UICarouselItemComponent() {
    }
    UICarouselItemComponent.prototype.ngOnInit = function () {
    };
    UICarouselItemComponent.prototype.lazyLoad = function () {
        this.lazyLoadedImages
            .forEach(function (img) {
            img.load();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])("carouselItem"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
    ], UICarouselItemComponent.prototype, "el", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])("container", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewContainerRef */])
    ], UICarouselItemComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__directives_ui_lazy_load_directive__["a" /* UILazyloadDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], UICarouselItemComponent.prototype, "lazyLoadedImages", void 0);
    UICarouselItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ui-carousel-item',
            template: "\n        <div #carouselItem class=\"ui-carousel-item\" tabindex=\"-1\" style=\"outline: none;\">\n            <div #container></div>\n            <ng-content></ng-content>\n        </div>\n   ",
            styles: ["\n        .ui-carousel-item{\n            user-select: none;\n            -moz-user-select: none;\n            -khtml-user-select: none;\n            -webkit-user-select: none;\n            -o-user-select: none;\n            -ms-user-select: none;\n        }\n        \n        .ui-carousel-item {\n            background: lightgray;\n            float: left;\n            box-sizing: border-box;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], UICarouselItemComponent);
    return UICarouselItemComponent;
}());



/***/ }),

/***/ "./src/app/ui-carousel/ui-carousel/ui-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UICarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_carousel_item_ui_carousel_item_component__ = __webpack_require__("./src/app/ui-carousel/ui-carousel-item/ui-carousel-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_swiper_directive__ = __webpack_require__("./src/app/ui-carousel/directives/swiper.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/timer.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UICarouselComponent = (function () {
    function UICarouselComponent(el, renderer, resolver) {
        this.el = el;
        this.renderer = renderer;
        this.resolver = resolver;
        this.nextSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.prevSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.transitionSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subscription"]();
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        this.speed = 400;
        this.autoPlay = true;
        this.autoPlaySpeed = 5000;
        this.thresholdFraction = 0.25;
        this.infinite = true;
        this.isDotsVisible = true;
        this.isArrowsVisible = true;
        this.currentItemIndex = 0;
        this.offsetPosition = 0;
        this.tWidth = 100;
    }
    UICarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.autoPlay) {
            this.autoPlayFunction(true);
        }
        this.subscriptions.add(this.nextSubject.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* throttleTime */])(this.speed)).subscribe(function () {
            _this.slideLeft();
        }));
        this.subscriptions.add(this.prevSubject.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* throttleTime */])(this.speed)).subscribe(function () {
            _this.slideRight();
        }));
        this.subscriptions.add(this.transitionSubject.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* switchMap */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["a" /* timer */])(_this.speed); })).subscribe(function () {
            _this.disableTransition();
        }));
        this.subscriptions.add(this.onChange.subscribe(function (index) {
            var item = _this.getItemByIndex(index);
            item.lazyLoad();
        }));
        this.carouselTrackEl = this.carouselTrackEl.nativeElement;
        this._width = this.el.nativeElement.offsetWidth;
        this.tWidth = this._width * this.thresholdFraction;
    };
    UICarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setStyle(this.carouselTrackEl, 'width', (this.items.length * 2) * this._width + "px");
        if (this.items && this.items.length > 0) {
            this.onChange.emit(0);
            if (this.items.length > 1 && this.infinite) {
                var factory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__ui_carousel_item_ui_carousel_item_component__["a" /* UICarouselItemComponent */]);
                this.frontClone = this.end.createComponent(factory);
                this.backClone = this.front.createComponent(factory);
                this.frontClone.instance.el.nativeElement.innerHTML = this.items.first.el.nativeElement.innerHTML;
                this.backClone.instance.el.nativeElement.innerHTML = this.items.last.el.nativeElement.innerHTML;
                this.renderer.setStyle(this.frontClone.instance.el.nativeElement, 'width', this._width + "px");
                this.renderer.setStyle(this.backClone.instance.el.nativeElement, 'width', this._width + "px");
                this.offsetPosition = -this._width;
                this.moveTo(0);
            }
            this.items.map(function (item) {
                _this.renderer.setStyle(item.el.nativeElement, 'width', _this._width + "px");
            });
        }
        var totalDistanceSwiped = 0;
        var shortDistanceSwiped = 0;
        this.subscriptions.add(this.swiper.onSwipeLeft.subscribe(function (distance) {
            totalDistanceSwiped += distance;
            if ((_this.currentItemIndex === 0 || (_this.currentItemIndex == _this.items.length - 1 && totalDistanceSwiped < 0)) && !_this.infinite) {
                shortDistanceSwiped += distance / Math.pow(Math.abs(totalDistanceSwiped), .4);
                _this.moveTo((_this.currentItemIndex * -_this._width) + shortDistanceSwiped);
            }
            else {
                _this.moveTo((_this.currentItemIndex * -_this._width) + totalDistanceSwiped);
            }
        }));
        this.subscriptions.add(this.swiper.onSwipeRight.subscribe(function (distance) {
            totalDistanceSwiped += distance;
            if ((_this.currentItemIndex === _this.items.length - 1 || (_this.currentItemIndex === 0 && totalDistanceSwiped > 0)) && !_this.infinite) {
                shortDistanceSwiped += distance / Math.pow(Math.abs(totalDistanceSwiped), .4);
                _this.moveTo((_this.currentItemIndex * -_this._width) + shortDistanceSwiped);
            }
            else {
                _this.moveTo((_this.currentItemIndex * -_this._width) + totalDistanceSwiped);
            }
        }));
        this.subscriptions.add(this.swiper.swipeLeft.subscribe(function () {
            totalDistanceSwiped = 0;
            shortDistanceSwiped = 0;
            _this.slideLeft();
        }));
        this.subscriptions.add(this.swiper.swipeRight.subscribe(function () {
            totalDistanceSwiped = 0;
            shortDistanceSwiped = 0;
            _this.slideRight();
        }));
        this.subscriptions.add(this.swiper.onSwipeEnd.subscribe(function () {
            totalDistanceSwiped = 0;
            shortDistanceSwiped = 0;
            _this.slideToPrevPosition();
        }));
        this.subscriptions.add(this.swiper.onSwipeStart.subscribe(function () {
            totalDistanceSwiped = 0;
            shortDistanceSwiped = 0;
            // this.disableTransition();
        }));
    };
    UICarouselComponent.prototype.next = function () {
        this.prevSubject.next();
    };
    UICarouselComponent.prototype.prev = function () {
        this.nextSubject.next();
    };
    UICarouselComponent.prototype.goTo = function (index) {
        this.slideTo(index);
    };
    UICarouselComponent.prototype.slideTo = function (index) {
        this.enableTransition();
        this.onChange.emit((index + this.items.length) % this.items.length);
        this.moveTo(index * -this._width);
        this.currentItemIndex = (index + this.items.length) % this.items.length;
    };
    UICarouselComponent.prototype.slideLeft = function () {
        var _this = this;
        this.enableTransition();
        if (!this.infinite) {
            if (this.currentItemIndex === 0) {
                this.slideToPrevPosition();
                return;
            }
        }
        this.currentItemIndex -= 1;
        if (this.currentItemIndex === -1) {
            this.moveTo(this.currentItemIndex * -this._width);
            this.currentItemIndex = this.items.length - 1;
            this.onChange.emit(this.currentItemIndex);
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["a" /* timer */])(this.speed - 50).subscribe(function () {
                _this.disableTransition();
                Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["a" /* timer */])(50).subscribe(function () {
                    _this.moveTo(_this.currentItemIndex * -_this._width);
                });
            });
        }
        else {
            this.onChange.emit(this.currentItemIndex);
            this.moveTo(this.currentItemIndex * -this._width);
        }
    };
    UICarouselComponent.prototype.slideRight = function () {
        var _this = this;
        this.enableTransition();
        if (!this.infinite) {
            if (this.currentItemIndex === this.items.length - 1) {
                this.slideToPrevPosition();
                return;
            }
        }
        this.currentItemIndex += 1;
        if (this.currentItemIndex === this.items.length) {
            this.moveTo(this.currentItemIndex * -this._width);
            this.currentItemIndex = 0;
            this.onChange.emit(this.currentItemIndex);
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["a" /* timer */])(this.speed - 50).subscribe(function () {
                _this.disableTransition();
                Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["a" /* timer */])(50).subscribe(function () {
                    _this.moveTo(_this.currentItemIndex * -_this._width);
                });
            });
        }
        else {
            this.onChange.emit(this.currentItemIndex);
            this.moveTo(this.currentItemIndex * -this._width);
        }
    };
    UICarouselComponent.prototype.moveTo = function (pos) {
        var position = pos + this.offsetPosition;
        this.renderer.setStyle(this.carouselTrackEl, 'transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.carouselTrackEl, '-webkit-transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.carouselTrackEl, '-moz-transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.carouselTrackEl, '-o-transform', 'translate3d(' + position + 'px, 0px, 0px)');
        this.renderer.setStyle(this.carouselTrackEl, '-ms-transform', 'translate3d(' + position + 'px, 0px, 0px)');
    };
    UICarouselComponent.prototype.slideToPrevPosition = function () {
        this.enableTransition();
        this.moveTo(this.currentItemIndex * -this._width);
    };
    UICarouselComponent.prototype.disableTransition = function () {
        this.renderer.removeStyle(this.carouselTrackEl, "transition");
        this.renderer.removeStyle(this.carouselTrackEl, "-moz-transition");
        this.renderer.removeStyle(this.carouselTrackEl, "-webkit-transition");
        this.renderer.removeStyle(this.carouselTrackEl, "-o-transition");
        this.renderer.removeStyle(this.carouselTrackEl, "-ms-transition");
    };
    UICarouselComponent.prototype.enableTransition = function () {
        this.transitionSubject.next();
        this.renderer.setStyle(this.carouselTrackEl, "transition", "transform " + this.speed + "ms ease");
        this.renderer.setStyle(this.carouselTrackEl, "-moz-transition", "transform " + this.speed + "ms ease");
        this.renderer.setStyle(this.carouselTrackEl, "-webkit-transition", "transform " + this.speed + "ms ease");
        this.renderer.setStyle(this.carouselTrackEl, "-o-transition", "transform " + this.speed + "ms ease");
        this.renderer.setStyle(this.carouselTrackEl, "-ms-transition", "transform " + this.speed + "ms ease");
    };
    UICarouselComponent.prototype.getItemByIndex = function (index) {
        return this.items.find(function (item, i) {
            return i === index;
        });
    };
    UICarouselComponent.prototype.onResize = function (event) {
        this.rePosition();
    };
    UICarouselComponent.prototype.rePosition = function () {
        var _this = this;
        if (this.items && this.items.length > 0) {
            this._width = this.el.nativeElement.offsetWidth;
            this.tWidth = this._width * this.thresholdFraction;
            this.renderer.setStyle(this.carouselTrackEl, 'width', (this.items.length * 2) * this._width + "px");
            if (this.items.length > 1 && this.infinite) {
                this.offsetPosition = -this._width;
                this.renderer.setStyle(this.frontClone.instance.el.nativeElement, 'width', this._width + "px");
                this.renderer.setStyle(this.backClone.instance.el.nativeElement, 'width', this._width + "px");
            }
            this.items.map(function (item) {
                _this.renderer.setStyle(item.el.nativeElement, 'width', _this._width + "px");
            });
            this.disableTransition();
            this.moveTo(this.currentItemIndex * -this._width);
        }
    };
    UICarouselComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    UICarouselComponent.prototype.autoPlayFunction = function (boolean) {
        var _this = this;
        if (this.autoPlay) {
            if (boolean) {
                this.interval = setInterval(function () {
                    _this.next();
                }, this.autoPlaySpeed);
            }
            else {
                clearInterval(this.interval);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */])
    ], UICarouselComponent.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Number)
    ], UICarouselComponent.prototype, "speed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UICarouselComponent.prototype, "autoPlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Number)
    ], UICarouselComponent.prototype, "autoPlaySpeed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Number)
    ], UICarouselComponent.prototype, "thresholdFraction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UICarouselComponent.prototype, "infinite", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('dots'),
        __metadata("design:type", Boolean)
    ], UICarouselComponent.prototype, "isDotsVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('arrows'),
        __metadata("design:type", Boolean)
    ], UICarouselComponent.prototype, "isArrowsVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('front', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewContainerRef */])
    ], UICarouselComponent.prototype, "front", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('end', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewContainerRef */])
    ], UICarouselComponent.prototype, "end", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('carouselTrack'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
    ], UICarouselComponent.prototype, "carouselTrackEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__directives_swiper_directive__["a" /* SwiperDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__directives_swiper_directive__["a" /* SwiperDirective */])
    ], UICarouselComponent.prototype, "swiper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_3__ui_carousel_item_ui_carousel_item_component__["a" /* UICarouselItemComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], UICarouselComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UICarouselComponent.prototype, "onResize", null);
    UICarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ui-carousel',
            template: "\n    <div (mouseenter)=\"(autoPlay)?autoPlayFunction(false):null\" (mouseleave)=\"(autoPlay)?autoPlayFunction(true):null\">\n        <div #carouselTrack class=\"carousel-track\" swiper [threshold]=\"tWidth\">\n            <ng-container #front></ng-container>\n            <ng-content></ng-content>\n            <ng-container #end></ng-container>\n        </div>\n        <dots *ngIf=\"isDotsVisible\" [dots-count]=\"items.length\" position=\"middle\" [active-dot]=\"currentItemIndex\" (on-click)=\"goTo($event)\"></dots>\n        <arrow *ngIf=\"isArrowsVisible\" dir=\"left\" (on-click)=\"prev()\" [disabled]=\"false\"></arrow>\n        <arrow *ngIf=\"isArrowsVisible\" dir=\"right\" (on-click)=\"next()\" [disabled]=\"false\"></arrow>\n    </div>\n    ",
            styles: ["\n        :host{\n            display: block;\n            overflow: hidden;\n            position: relative;\n        }\n        .carousel-track:before, .carousel-track:after {\n            display: table;\n            content: '';\n        }\n        .carousel-track:after {\n            clear: both;\n        }\n    "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */]])
    ], UICarouselComponent);
    return UICarouselComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map