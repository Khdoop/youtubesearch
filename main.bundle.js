webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\">\r\n    <div class=\"container\">\r\n        <div class=\"search\">\r\n            <input class=\"search__input\" #input (input)=\"search(input.value)\" placeholder=\"Search\">\r\n        </div>\r\n        <!--<pre>{{result|async|json}}</pre>-->\r\n        <ng-container *ngIf=\"result|async; let res\">\r\n            <div class=\"list\">\r\n                <div class=\"video\"\r\n                     *ngFor=\"let item of res.items\"\r\n                     (click)=\"openVideo(item.id)\">\r\n                    <img [attr.src]=\"item.snippet.thumbnails.medium.url\" alt=\"\">\r\n                    <div class=\"video__name\">\r\n                        {{item.snippet.title}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"paging\">\r\n                <button class=\"paging__button\" *ngIf=\"res.prevPageToken\" (click)=\"search(input.value, res.prevPageToken)\">previous page</button>\r\n                <button class=\"paging__button\" *ngIf=\"res.nextPageToken\" (click)=\"search(input.value, res.nextPageToken)\">next page</button>\r\n            </div>\r\n        </ng-container>\r\n\r\n    </div>\r\n    <div class=\"overlay\" *ngIf=\"isVideoOpen\" (click)=\"closeVideo()\">\r\n        <iframe id=\"ytplayer\" type=\"text/html\" width=\"720\" height=\"405\"\r\n                [attr.src]=\"videoLink\"\r\n                frameborder=\"0\" allowfullscreen>\r\n        </iframe>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  position: relative;\n  height: 100%;\n  width: 100%; }\n\n.scrollable {\n  overflow-y: auto;\n  height: 100%;\n  width: 100%; }\n\n.search {\n  width: 500px;\n  margin: 0 auto;\n  padding: 20px 0; }\n  .search__input {\n    width: 100%;\n    line-height: 40px;\n    font-size: 20px;\n    padding: 0px 10px;\n    outline: none;\n    border: none;\n    background-color: rgba(0, 0, 0, 0.2);\n    color: ghostwhite; }\n    .search__input::-webkit-input-placeholder {\n      /* Chrome/Opera/Safari */\n      color: rgba(255, 255, 255, 0.6); }\n    .search__input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6); }\n    .search__input:-ms-input-placeholder {\n      /* IE 10+ */\n      color: rgba(255, 255, 255, 0.6); }\n    .search__input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6); }\n\n.list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 5px; }\n\n.video {\n  position: relative;\n  width: 320px;\n  margin: 5px;\n  background-color: rgba(0, 0, 0, 0.2);\n  cursor: pointer; }\n  .video__name {\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: rgba(255, 255, 255, 0.8);\n    padding: 5px;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.7); }\n\n.paging {\n  padding: 10px;\n  text-align: center; }\n  .paging__button {\n    border: none;\n    background-color: rgba(0, 0, 0, 0.2);\n    color: rgba(0, 0, 0, 0.5);\n    font-size: 16px;\n    padding: 5px;\n    font-weight: 600;\n    outline: none;\n    cursor: pointer; }\n    .paging__button:active {\n      background-color: rgba(0, 0, 0, 0.3); }\n\n.overlay {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
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
    function AppComponent(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.search = function (q, next, prev) {
        var _this = this;
        window.clearInterval(this.timeout);
        var params;
        if (next) {
            console.log('next', next);
            params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
                .set('maxResults', '50')
                .set('part', 'snippet')
                .set('q', q)
                .set('type', 'video,playlist')
                .set('pageToken', next);
        }
        else if (prev) {
            params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
                .set('maxResults', '50')
                .set('part', 'snippet')
                .set('q', q)
                .set('type', 'video,playlist')
                .set('pageToken', prev);
        }
        else {
            params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
                .set('maxResults', '50')
                .set('part', 'snippet')
                .set('q', q)
                .set('type', 'video,playlist');
        }
        this.timeout = setTimeout(function () {
            _this.result = _this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCuk3b9Iz8W6gOo1p1am_eWY24Rxyk35cw', { params: params });
        }, 500);
    };
    AppComponent.prototype.openVideo = function (id) {
        if (id.videoId) {
            this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + id.videoId + "?autoplay=1");
        }
        else {
            this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed?listType=playlist&list=" + id.playlistId);
        }
        this.isVideoOpen = true;
    };
    AppComponent.prototype.closeVideo = function () {
        this.isVideoOpen = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map