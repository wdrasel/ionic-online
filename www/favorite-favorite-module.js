(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorite-favorite-module"],{

/***/ "./src/app/favorite/favorite.module.ts":
/*!*********************************************!*\
  !*** ./src/app/favorite/favorite.module.ts ***!
  \*********************************************/
/*! exports provided: FavoritePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePageModule", function() { return FavoritePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorite.page */ "./src/app/favorite/favorite.page.ts");







var routes = [
    {
        path: '',
        component: _favorite_page__WEBPACK_IMPORTED_MODULE_6__["FavoritePage"]
    }
];
var FavoritePageModule = /** @class */ (function () {
    function FavoritePageModule() {
    }
    FavoritePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_favorite_page__WEBPACK_IMPORTED_MODULE_6__["FavoritePage"]]
        })
    ], FavoritePageModule);
    return FavoritePageModule;
}());



/***/ }),

/***/ "./src/app/favorite/favorite.page.html":
/*!*********************************************!*\
  !*** ./src/app/favorite/favorite.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n        <ion-title color=\"tertiary\">My favourite List</ion-title>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding color=\"secondary\">\n<ion-list> \n  <div class=\"main\">\n      <ion-item  *ngFor=\"let item of favouriteIds | async \" [routerLink]=\"['/','details',item.id]\" \n      class=\"item-native\" (click)=\"showInterstitial()\">\n        <ion-thumbnail slot=\"start\">\n          <img [src]=\"item.thumnailUrl\">\n        </ion-thumbnail>\n\n        <ion-label>{{item.title}}</ion-label>\n        \n        \n      </ion-item>\n \n </div>\n      \n \n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/favorite/favorite.page.scss":
/*!*********************************************!*\
  !*** ./src/app/favorite/favorite.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlL2Zhdm9yaXRlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/favorite/favorite.page.ts":
/*!*******************************************!*\
  !*** ./src/app/favorite/favorite.page.ts ***!
  \*******************************************/
/*! exports provided: FavoritePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePage", function() { return FavoritePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/recipi.service */ "./src/app/services/recipi.service.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var FavoritePage = /** @class */ (function () {
    function FavoritePage(recipiservice, favoriteService, storage) {
        this.recipiservice = recipiservice;
        this.favoriteService = favoriteService;
        this.storage = storage;
    }
    FavoritePage.prototype.ngOnInit = function () {
        this.storage.get("favorites").then(function (ids) {
            //this.favouriteIds = JSON.parse(ids);
            console.log(JSON.stringify(ids));
        });
    };
    FavoritePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorite',
            template: __webpack_require__(/*! ./favorite.page.html */ "./src/app/favorite/favorite.page.html"),
            styles: [__webpack_require__(/*! ./favorite.page.scss */ "./src/app/favorite/favorite.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recipi_service__WEBPACK_IMPORTED_MODULE_2__["RecipiService"],
            _services_favorite_service__WEBPACK_IMPORTED_MODULE_3__["FavoriteService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], FavoritePage);
    return FavoritePage;
}());



/***/ })

}]);
//# sourceMappingURL=favorite-favorite-module.js.map