(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["star-star-module"],{

/***/ "./src/app/star/star.module.ts":
/*!*************************************!*\
  !*** ./src/app/star/star.module.ts ***!
  \*************************************/
/*! exports provided: StarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarPageModule", function() { return StarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _star_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./star.page */ "./src/app/star/star.page.ts");







var routes = [
    {
        path: '',
        component: _star_page__WEBPACK_IMPORTED_MODULE_6__["StarPage"]
    }
];
var StarPageModule = /** @class */ (function () {
    function StarPageModule() {
    }
    StarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_star_page__WEBPACK_IMPORTED_MODULE_6__["StarPage"]]
        })
    ], StarPageModule);
    return StarPageModule;
}());



/***/ }),

/***/ "./src/app/star/star.page.html":
/*!*************************************!*\
  !*** ./src/app/star/star.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Why do the Ratings</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n      <p>\n        5 Star rating inspires us.Please comment if there is a mistake in the app.\n        If you want to add a new feature, please comment . \n      </p> \n    </ion-card>   \n</ion-content>\n"

/***/ }),

/***/ "./src/app/star/star.page.scss":
/*!*************************************!*\
  !*** ./src/app/star/star.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card p {\n  font-size: 16px;\n  text-align: left;\n  background-color: #e7e7e7f1 !important;\n  border-left: 5px solid red;\n  padding: 7px;\n  border-radius: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rhci9GOlxcSW9uaWMtQXBwXFxCbGFjayBUbyBXaGl0ZS9zcmNcXGFwcFxcc3Rhclxcc3Rhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QywwQkFBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3Rhci9zdGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlN2YxICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDo1cHggc29saWQgcmdiKDI1NSwgMCwgMCk7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/star/star.page.ts":
/*!***********************************!*\
  !*** ./src/app/star/star.page.ts ***!
  \***********************************/
/*! exports provided: StarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarPage", function() { return StarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");



var StarPage = /** @class */ (function () {
    function StarPage(market) {
        this.market = market;
        this.market.open('com.supportpoint.billionaire');
    }
    StarPage.prototype.ngOnInit = function () {
    };
    StarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-star',
            template: __webpack_require__(/*! ./star.page.html */ "./src/app/star/star.page.html"),
            styles: [__webpack_require__(/*! ./star.page.scss */ "./src/app/star/star.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_2__["Market"]])
    ], StarPage);
    return StarPage;
}());



/***/ })

}]);
//# sourceMappingURL=star-star-module.js.map