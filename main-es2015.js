(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/qr-generater/qr-generater.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/qr-generater/qr-generater.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>qr-generater works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/Menu-Book/add-menu/add-menu.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/Menu-Book/add-menu/add-menu.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Title group  -->\n<div class=\"title-group\">\n    <h1 class=\"mat-h1\">Add Menu</h1>\n    <mat-divider fxFlex=\"1 0\"></mat-divider>\n  </div>\n  \n  <!-- Form -->\n  <div class=\"inner-wrapper\">\n    <form [formGroup]=\"menuForm\" (ngSubmit)=\"submitMenuForm()\" #resetMenuForm=\"ngForm\" novalidate>\n      <!-- Left block -->\n      <mat-card>\n        <div class=\"controlers-wrapper\">\n\n          <!-- Menu Header -->\n          <mat-form-field>\n            <mat-label>Menu Header</mat-label>\n            <mat-select [(value)]=\"selected\" formControlName=\"menuHeader\">\n              <mat-option [value]=\"sectioinArray\" *ngFor=\"let sectioinArray of SectioinArray\">{{sectioinArray}}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"handleError('menuHeader', 'required')\">\n              Menu Header is required\n            </mat-error>\n          </mat-form-field>\n\n          <!-- Veg / Non Veg -->\n          <div class=\"misc-bottom-padding\">\n            <mat-label>Veg/Non-Veg:</mat-label>\n            <mat-radio-group aria-label=\"Select an option\" formControlName=\"foodType\">\n              <mat-radio-button value=\"veg\">Veg</mat-radio-button>\n              <mat-radio-button value=\"nonVeg\">Non-Veg</mat-radio-button>\n            </mat-radio-group>\n          </div>\n\n          <!-- Name -->\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Menu name\" formControlName=\"menu_name\">\n            <mat-error *ngIf=\"handleError('menu_name', 'required')\">\n              You must provide a <strong>Menu Name</strong>\n            </mat-error>\n          </mat-form-field>\n  \n          <!-- Price -->\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Menu Price\" formControlName=\"menu_price\">\n            <mat-error *ngIf=\"handleError('menu_price', 'required')\">\n              You must provide a <strong>Menu Price</strong>\n            </mat-error>\n          </mat-form-field>\n  \n          <!-- Description -->\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Menu Description\" formControlName=\"menu_desc\">\n          </mat-form-field>\n          \n          <!-- Serves -->\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Serves\" formControlName=\"menu_serves\">\n            <mat-error *ngIf=\"handleError('menu_serves', 'required')\">\n              You must how many people will get served\n            </mat-error>\n          </mat-form-field>\n\n          <!-- image -->\n          <mat-label>Upload Image:</mat-label>\n                {{imageError}}\n          <div class=\"form-group\">\n            <fieldset class=\"form-group\">\n\n                \n                <div class=\"custom-file fileInputProfileWrap\">\n                    <input type=\"file\" (change)=\"fileChangeEvent($event)\" class=\"fileInputProfile\">\n                    <div class=\"img-space\">\n\n                        <ng-container *ngIf=\"isImageSaved; else elseTemplate\">\n                            <img [src]=\"cardImageBase64\" />\n                        </ng-container>\n                        <ng-template #elseTemplate>\n\n                            <!-- <img src=\"./../../assets/placeholder.png\" class=\"img-responsive\"> -->\n                        </ng-template>\n\n                    </div>\n\n                </div>\n            </fieldset>\n        </div>\n        <button class=\"btn btn-danger\" (click)=\"removeImage()\" *ngIf=\"isImageSaved\">Remove</button>\n\n\n        </div>\n      </mat-card>\n  \n      \n  \n      <!-- Submit & Reset -->\n      <mat-card>\n        <div class=\"full-wrapper button-wrapper\">\n          <div class=\"button-wrapper\">\n            <button mat-flat-button color=\"warn\">Submit</button>\n          </div>\n        </div>\n      </mat-card>\n    </form>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/Menu-Book/add-menuheader/add-menuheader.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/Menu-Book/add-menuheader/add-menuheader.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Title group  -->\n<div class=\"title-group\">\n  <h1 class=\"mat-h1\">Add Menu Header</h1>\n  <mat-divider fxFlex=\"1 0\"></mat-divider>\n</div>\n\n<!-- Form -->\n<div class=\"inner-wrapper\">\n  <form [formGroup]=\"menuForm\" (ngSubmit)=\"submitMenuForm()\" #resetMenuForm=\"ngForm\" novalidate>\n    <!-- Left block -->\n    <mat-card>\n      <div class=\"controlers-wrapper\">\n        <!-- Name -->\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Header name\" formControlName=\"menu_header_name\">\n          <mat-error *ngIf=\"handleError('menu_header_name', 'required')\">\n            You must provide a <strong>Header name</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"misc-bottom-padding\">\n        <mat-label>Veg/Non-Veg:</mat-label>\n        <mat-radio-group aria-label=\"Select an option\" formControlName=\"foodType\">\n          <mat-radio-button value=\"veg\">Veg</mat-radio-button>\n          <mat-radio-button value=\"nonVeg\">Non-Veg</mat-radio-button>\n        </mat-radio-group>\n      </div>\n    </mat-card>\n\n\n\n    <!-- Submit & Reset -->\n    <mat-card>\n      <div class=\"full-wrapper button-wrapper\">\n        <div class=\"button-wrapper\">\n          <button mat-flat-button color=\"warn\">Submit</button>\n        </div>\n      </div>\n    </mat-card>\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/Menu-Book/edit-menu/edit-menu.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/Menu-Book/edit-menu/edit-menu.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Title group  -->\n<div class=\"title-group\">\n    <h1 class=\"mat-h1\">Add Menu</h1>\n    <mat-divider fxFlex=\"1 0\"></mat-divider>\n  </div>\n  \n  <!-- Form -->\n  <div class=\"inner-wrapper\">\n    <form [formGroup]=\"menuForm\" (ngSubmit)=\"updateMenuForm()\" #resetMenuForm=\"ngForm\" novalidate>\n      <!-- Left block -->\n      <mat-card>\n        <div class=\"controlers-wrapper\">\n          <!-- Name -->\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Menu name\" formControlName=\"menu_name\">\n            <mat-error *ngIf=\"handleError('menu_name', 'required')\">\n              You must provide a<strong>menu name</strong>\n            </mat-error>\n          </mat-form-field>\n  \n          <!-- Email -->\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Menu email\" formControlName=\"menu_email\">\n            <mat-error *ngIf=\"handleError('menu_email', 'required')\">\n              You must provide a<strong>menu email</strong>\n            </mat-error>\n          </mat-form-field>\n  \n          <!-- Section -->\n          <mat-form-field>\n            <mat-label>Section</mat-label>\n            <mat-select [(value)]=\"selected\" formControlName=\"section\">\n              <mat-option [value]=\"sectioinArray\" *ngFor=\"let sectioinArray of SectioinArray\">{{sectioinArray}}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"handleError('section', 'required')\">\n              Section is required\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </mat-card>\n  \n      <!-- Right block -->\n      <mat-card>\n        <div class=\"controlers-wrapper\">\n          <!-- Add subjects -->\n          <mat-form-field class=\"multiple-items\">\n            <mat-chip-list #chipList>\n              <mat-chip *ngFor=\"let subjectArray of subjectArray\" [selectable]=\"selectable\" [removable]=\"removable\"\n                (removed)=\"remove(subjectArray)\">\n                {{subjectArray.name}}\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n              </mat-chip>\n              <input placeholder=\"Add subject\" [matChipInputFor]=\"chipList\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\n                (matChipInputTokenEnd)=\"add($event)\">\n            </mat-chip-list>\n            <i class=\"material-icons tooltip-info\" matTooltip=\"Enter subject name and press enter to add subjects\">\n              info\n            </i>\n          </mat-form-field>\n  \n          <!-- Date of birth -->\n          <mat-form-field>\n            <input matInput readonly [matDatepicker]=\"picker\" placeholder=\"Date of birth\" formControlName=\"dob\"\n              (dateChange)=\"formatDate($event)\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n            <mat-error *ngIf=\"handleError('dob', 'required')\">\n              Date of birth is required\n            </mat-error>\n          </mat-form-field>\n  \n          <!-- Gender -->\n          <div class=\"misc-bottom-padding\">\n            <mat-label>Gender:</mat-label>\n            <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\">\n              <mat-radio-button value=\"Male\">Male</mat-radio-button>\n              <mat-radio-button value=\"Female\">Female</mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </div>\n      </mat-card>\n  \n      <!-- Submit & Reset -->\n      <mat-card>\n        <div class=\"full-wrapper button-wrapper\">\n          <div class=\"button-wrapper\">\n            <button mat-flat-button color=\"warn\">Update</button>\n          </div>\n        </div>\n      </mat-card>\n    </form>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/Menu-Book/menu-list/menu-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/Menu-Book/menu-list/menu-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"title-group\">\n    <h1 class=\"mat-h1\">Menus List</h1>\n    <mat-divider fxFlex=\"1 0\"></mat-divider>\n  </div>\n  \n  <p *ngIf=\"MenuData.length <= 0\" class=\"no-data\">There is no menu added yet!</p>\n  \n  <div class=\"container\" *ngIf=\"MenuData.length > 0\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\">\n        <ng-container matColumnDef=\"_id\">\n          <th mat-header-cell *matHeaderCellDef> Menu ID </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"menu_name\">\n          <th mat-header-cell *matHeaderCellDef> Menu Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.menu_name}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"menu_email\">\n          <th mat-header-cell *matHeaderCellDef> Email </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.menu_email}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"section\">\n          <th mat-header-cell *matHeaderCellDef> Section </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.section}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef> Action </th>\n          <td mat-cell *matCellDef=\"let element; let i = index;\">\n            <button mat-raised-button color=\"primary\" class=\"push-right\"\n              [routerLink]=\"['/edit-menu/', element._id]\">Edit</button>\n            <button mat-raised-button color=\"accent\" (click)=\"deleteMenu(i, element)\">Delete</button>\n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n  \n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/owner-home/owner-home.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/owner-home/owner-home.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\n<mat-toolbar color=\"primary\" class=\"header mat-toolbar mat-primary mat-toolbar-single-row\">\n  <div>Menu Records</div>\n  <span class=\"nav-tool-items\" (click)=\"sidenav.toggle()\">\n    <mat-icon>menu</mat-icon>\n  </span>\n</mat-toolbar>\n\n<mat-sidenav-container>\n  <!-- Sidenav -->\n  <mat-sidenav #sidenav [mode]=\"isBiggerScreen() ? 'over' : 'side'\" [(opened)]=\"opened\" [fixedInViewport]=\"true\"\n    [fixedTopGap]=\"55\">\n    <mat-nav-list>\n      <a mat-list-item routerLinkActive=\"active\" [routerLink]=\"[{outlets: {ownerHome:['add-menu']}}]\">\n        <mat-icon>add</mat-icon> Add Menu\n      </a>\n      <a mat-list-item routerLinkActive=\"active\" [routerLink]=\"[{outlets: {ownerHome:['add-menuHeader']}}]\">\n        <mat-icon>add</mat-icon> Add Menu Header\n      </a>\n      <a mat-list-item routerLinkActive=\"active\" [routerLink]=\"[{outlets: {ownerHome:['menu-list']}}]\">\n        <mat-icon>format_list_bulleted</mat-icon> View Menu\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <!-- Main content -->\n  <mat-sidenav-content>\n    <router-outlet name='ownerHome'></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/owner-login/owner-login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/owner-login/owner-login.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayoutAlign=\"center center\" fxFlexFill class=\"main-div\">\n    <mat-card fxFlex=\"50\">\n      <mat-toolbar color=\"primary\">Login Page</mat-toolbar>\n        <form fxLayoutAlign=\"stretch\" fxLayout=\"column\" class=\"login-form\" >\n            <mat-form-field >\n              <input matInput placeholder=\"Username\" >\n            </mat-form-field>\n            <mat-form-field >\n                <input matInput type=\"password\" placeholder=\"Password\" >\n            </mat-form-field>\n            <button mat-raised-button type=\"submit\" (click)=\"login()\">\n              Login\n            </button>\n            \n            <nav style=\"padding-top: 5px;\">\n              <a style=\"width: 100%;\" routerLink=\"/contact-us\" routerLinkActive=\"active\">Contact Us</a>\n            </nav>\n          </form>\n          \n    </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/entry-form/entry-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/entry-form/entry-form.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>entry-form works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayoutAlign=\"center center\" fxFlexFill class=\"main-div\">\n    <mat-card fxFlex=\"50\">\n      <mat-toolbar color=\"primary\">Login Page</mat-toolbar>\n        <form fxLayoutAlign=\"stretch\" fxLayout=\"column\" class=\"login-form\" >\n            <mat-form-field >\n              <input matInput placeholder=\"Username\" >\n            </mat-form-field>\n            <mat-form-field >\n                <input matInput type=\"password\" placeholder=\"Password\" >\n            </mat-form-field>\n            <button mat-raised-button type=\"submit\">\n              Login\n            </button>\n            \n            <nav style=\"padding-top: 5px;\">\n              <a style=\"width: 100%;\" routerLink=\"/owner-login\" routerLinkActive=\"active\">Login as Owner</a>\n            </nav>\n          </form>\n          \n    </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/scan-qrcode/scan-qrcode.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/scan-qrcode/scan-qrcode.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parent-div\">\n<zxing-scanner style=\"width: 100vw;height:100vh\" (scanSuccess)=\"onCodeResult($event)\"></zxing-scanner>\n\n<!-- <section class=\"results\" *ngIf=\"qrResultString\">\n  <div>\n    <small>Result</small>\n    <strong>{{ qrResultString }}</strong>\n  </div>\n  <button mat-icon-button (click)=\"clearResult()\">&times;</button>\n</section> -->\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/user-cart/user-cart.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/user-cart/user-cart.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div>\n<div style=\"height :80%\">\n    <div *ngFor=\"let cart of cartList\" style=\"margin-bottom: 20px;border-bottom: 1px solid black;\">\n      <div style=\"width: 100%;margin: 0;\">\n          <h3 style=\"width: 100%;text-align: left;\">{{cart.itemName}}</h3>\n        </div>\n        <div class=\"col-sm-8 mb-5\" style=\"width: 100%;text-align: right;\">\n          <div class=\"form-check-inline\">\n         <button class=\"btn btn-primary\" (click)=\"plus()\"><i class=\"fa fa-plus\"></i></button>\n         <input type=\"text\" class=\"form-control\" style=\"width: 5%;text-align: right;margin: 0;\" [(ngModel)]=cart.quantity>\n         <button class=\"btn btn-primary\" (click)=\"minus()\"><i class=\"fa fa-minus\"></i></button>\n       </div>    \n     </div>\n          <button mat-icon-button style=\"width: 100%;\"><mat-icon>delete_outline</mat-icon></button>    \n  </div>\n\n\n\n</div>\n<div style=\"height: 10%;\">\n    <button mat-raised-button style=\"width: 46%;margin: 2%;\" (click)=\"addItemToCart()\">ORDER</button>\n    <button mat-raised-button style=\"width: 46%;margin: 2%\" (click)=\"addItemToCart()\">CLEAR ALL</button>\n</div>\n<div style=\"height: 10%;\">\n  <button mat-raised-button style=\"width: 96%;margin: 2%\" (click)=\"addItemToCart()\">CHECKOUT</button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/user-menu-bottom-sheet/user-menu-bottom-sheet.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/user-menu-bottom-sheet/user-menu-bottom-sheet.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<mat-card class=\"menu-card center\" >\n    <mat-card-header>\n        <mat-card-title style=\"text-align: center;\">{{data.bottomTitle}}</mat-card-title>\n    </mat-card-header>    \n    <img *ngIf=\"data.bottomImg!=''\" mat-card-image [src]=\"data.bottomImg\" alt=\"Card image cap\"> \n    <mat-card-content>\n        <p>\n          {{data.bottomDesc}}\n        </p>\n      </mat-card-content>\n      <mat-card-content><p style=\"text-align: center;\">{{data.bottomServes}}</p></mat-card-content>\n      \n      <!--  -->\n      <div class=\"col-sm-8 mb-5\" style=\"text-align: center;\">\n        <div class=\"form-check-inline\">\n          <button class=\"btn btn-primary\" (click)=\"plus()\"><i class=\"fa fa-plus\"></i></button>\n          <input type=\"text\" class=\"form-control\" style=\"width: 5%;text-align: center;\" [(ngModel)]=\"inputnumber\">\n          <button class=\"btn btn-primary\" (click)=\"minus()\"><i class=\"fa fa-minus\"></i></button>\n        </div>    \n      </div>\n      <!--  -->\n      <div style=\"height: 105%;\"></div>\n      <mat-card-actions>\n        <button mat-raised-button color=\"primary\" style=\"width: 100%;\" (click)=\"addItemToCart()\">ADD</button>\n       </mat-card-actions> \n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/user-menus/user-menus.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/User/user-menus/user-menus.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"homeMain\">\n  <div class=\"centerClass\" style=\"height: 15vh;position: absolute;top: 0;\">\n\n    \n      \n      <h1 style=\"margin:0;\">RESTAURANT NAME</h1>\n      \n      <h2 style=\"margin-top: 2vh;margin-bottom: 0;\">{{selectedHeader}}</h2>\n      \n    </div>\n\n\n    \n<div *ngIf=\"isMenuList\" class=\"usermenus\" style=\"height: 70vh;padding-top: 2vh;margin-bottom: 0 ;position: absolute;top: 15vh; left: 5%;\">\n  <div *ngFor=\"let menu of menus\" >\n    <div *ngIf=\"selectedHeader == menu.header\" style=\"width: 100%; margin-bottom: 20px;\">\n      <mat-card style=\"padding-top: 1px;\">\n        <mat-card-header mat-raised-button (click)=\"openBottomSheet(menu.img,menu.description,menu.title,menu.serves,menu.itemId)\">\n        <img mat-card-avatar *ngIf=\"menu.img!=''\" [src]=\"menu.img\">\n          <mat-card-title style=\"text-align: left;\">{{menu.title}}</mat-card-title>\n          <mat-card-subtitle style=\"text-align: left;\">Rs.{{menu.price}}</mat-card-subtitle>\n        </mat-card-header>\n      </mat-card>\n  </div>\n</div>\n</div>\n\n\n<div *ngIf=\"isCartList\" class=\"usermenus\" style=\"height: 70vh;padding-top: 2vh;margin-bottom: 0 ;position: absolute;top: 15vh; left: 5%;\">\n  <app-user-cart></app-user-cart>\n</div>\n  <section style=\"position: absolute;bottom: 3.5vh;margin-top: 2vh;margin-bottom: 0 \">\n      <div class=\"example-flex-container\">\n        \n\n        <div class=\"example-button-container\">\n          <button mat-icon-button (click)=\"onlyVeg()\">\n            <mat-icon style=\"font-size: 25px;\" [style.color]=\"isOnlyVeg ? 'green' : 'rgb(220,220,220)'\"> local_florist</mat-icon>\n          </button>\n        </div>\n        \n\n        <div class=\"example-button-container\">\n          <button mat-icon-button (click)=\"userTastedItem()\">\n            <mat-icon style=\"font-size: 25px;\" [style.color]=\"isUserTastedItem ? 'black' : 'rgb(220,220,220)'\">restaurant_menu</mat-icon>\n          </button>\n        </div>\n\n        <div class=\"example-button-container\">\n          <button mat-icon-button (click)=select.open()>\n            <mat-icon style=\"font-size: 25px;\" [style.color]=\"isMenuList ? 'black' : 'rgb(220,220,220)'\">chrome_reader_mode</mat-icon>\n            <mat-select  #select\n            \n            class=\"langSelect\"  (selectionChange)=\"changeheader($event.value)\">\n            <mat-option style=\"width: 100%;text-align: center;\" *ngFor=\"let header of menuHeaders\" [value]=\"header.value\">\n              <h5>{{header.viewValue}}</h5>\n            </mat-option>\n          </mat-select>\n           </button>\n        </div>\n\n\n        <div class=\"example-button-container\">\n          <button mat-icon-button  (click)=\"openCart()\">\n            <mat-icon style=\"font-size: 25px;\" [style.color]=\"isCartList ? 'black' : 'rgb(220,220,220)'\">add_shopping_cart</mat-icon>\n           </button>\n        </div>\n\n        <div class=\"example-button-container\">\n          <button mat-icon-button (click)=\"addPartner()\">\n            <mat-icon style=\"font-size: 25px;\" [style.color]=\"isAddPartner ? 'black' : 'rgb(220,220,220)'\">person_add</mat-icon>\n          </button>\n        </div>  \n        \n      </div>\n  </section>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- This nav gives you links to click, which tells the router which route to use (defined in the routes constant in  AppRoutingModule) -->\n  \n\n<!-- The routed views render in the <router-outlet>-->\n<router-outlet></router-outlet>\n\n<!-- <app-scan-qrcode></app-scan-qrcode> -->\n<!-- <app-user-menus></app-user-menus> -->\n<!-- <div style=\"text-align:center\">\n        <h1>\n          ngx-qrcode2 demo \n        </h1>\n      </div>\n       \n      <ngx-qrcode \n            [elementType]=\"elementType\" \n            [value] = \"value\"\n            cssClass = \"aclass\"\n            errorCorrectionLevel = \"L\">\n      </ngx-qrcode> -->\n\n      <!-- <zxing-scanner (scanSuccess)=\"onCodeResult($event)\"></zxing-scanner>\n\n<section class=\"results\" *ngIf=\"qrResultString\">\n  <div>\n    <small>Result</small>\n    <strong>{{ qrResultString }}</strong>\n  </div>\n  <button mat-icon-button (click)=\"clearResult()\">&times;</button>\n</section> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"homeMain\">\n\n<div class=\"parent-div\">\n  <div class=\"example-button-row \">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button class=\"qr-code\" mat-fab color=\"success\" aria-label=\"Example icon button with a delete icon\" style=\"width: 250px;height: 250px;background-color: #D7D7D7; border: 5px solid black;\" [routerLink]=\"'/scan-qr'\">\n          <em></em>\n          <mat-icon style=\"font-size: 200px;\" [inline]=\"true\" >qr_code</mat-icon>\n          <span style=\"text-align: center;\">TOUCH TO SCAN</span>\n        </button>\n      \n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"homeLogin\">\n  <div class=\"example-button-row \">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button class=\"beat\" mat-fab color=\"success\" aria-label=\"Example icon button with a delete icon\" style=\"width: 90px;height: 90px;background-color: #D7D7D7; border: 5px solid black;\" [routerLink]=\"'/login'\">\n          <mat-icon style=\"font-size: 75px;\" [inline]=\"true\" >home</mat-icon>\n        </button> \n      </div>\n    </div>\n  </div>\n</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/Admin/qr-generater/qr-generater.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/Admin/qr-generater/qr-generater.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL3FyLWdlbmVyYXRlci9xci1nZW5lcmF0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Admin/qr-generater/qr-generater.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Admin/qr-generater/qr-generater.component.ts ***!
  \**************************************************************/
/*! exports provided: QrGeneraterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrGeneraterComponent", function() { return QrGeneraterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QrGeneraterComponent = class QrGeneraterComponent {
    constructor() { }
    ngOnInit() {
    }
};
QrGeneraterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qr-generater',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qr-generater.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/qr-generater/qr-generater.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./qr-generater.component.scss */ "./src/app/Admin/qr-generater/qr-generater.component.scss")).default]
    })
], QrGeneraterComponent);



/***/ }),

/***/ "./src/app/Owner/Menu-Book/add-menu/add-menu.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Owner/Menu-Book/add-menu/add-menu.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL093bmVyL01lbnUtQm9vay9hZGQtbWVudS9hZGQtbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Owner/Menu-Book/add-menu/add-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Owner/Menu-Book/add-menu/add-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: AddMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMenuComponent", function() { return AddMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/Owner/shared/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let AddMenuComponent = class AddMenuComponent {
    constructor(fb, router, ngZone, menuApi) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.menuApi = menuApi;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["COMMA"]];
        this.subjectArray = [];
        this.SectioinArray = ['A', 'B', 'C', 'D', 'E'];
        /* Get errors */
        this.handleError = (controlName, errorName) => {
            return this.menuForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.submitBookForm();
    }
    /* Reactive book form */
    submitBookForm() {
        this.menuForm = this.fb.group({
            menu_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            menu_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            menuHeader: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            subjects: [this.subjectArray],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            foodType: ['veg'],
            menu_desc: [''],
            menu_serves: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            file: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            fileSource: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    }
    /* Add dynamic languages */
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add language
        if ((value || '').trim() && this.subjectArray.length < 5) {
            this.subjectArray.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /* Remove dynamic languages */
    remove(subject) {
        const index = this.subjectArray.indexOf(subject);
        if (index >= 0) {
            this.subjectArray.splice(index, 1);
        }
    }
    /* Date */
    formatDate(e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.menuForm.get('dob').setValue(convertDate, {
            onlyself: true
        });
    }
    /* Submit book */
    submitMenuForm() {
        if (this.menuForm.valid) {
            this.menuApi.AddMenu(this.menuForm.value).subscribe(res => {
                this.ngZone.run(() => this.router.navigateByUrl('/menus-list'));
            });
        }
    }
    // image
    fileChangeEvent(fileInput) {
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;
            if (fileInput.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';
                return false;
            }
            // if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            //     this.imageError = 'Only Images are allowed ( JPG | PNG )';
            //     return false;
            // }
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    const img_height = rs.currentTarget['height'];
                    const img_width = rs.currentTarget['width'];
                    console.log(img_height, img_width);
                    if (img_height > max_height && img_width > max_width) {
                        this.imageError =
                            'Maximum dimentions allowed ' +
                                max_height +
                                '*' +
                                max_width +
                                'px';
                        return false;
                    }
                    else {
                        const imgBase64Path = e.target.result;
                        console.log("imgBase64Path" + imgBase64Path);
                        this.cardImageBase64 = imgBase64Path;
                        this.isImageSaved = true;
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };
            reader.readAsDataURL(fileInput.target.files[0]);
            console.log("reader" + reader);
        }
    }
    removeImage() {
        this.cardImageBase64 = null;
        this.isImageSaved = false;
    }
};
AddMenuComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('chipList', { static: false })
], AddMenuComponent.prototype, "chipList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('resetMenuForm', { static: false })
], AddMenuComponent.prototype, "myNgForm", void 0);
AddMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/Menu-Book/add-menu/add-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-menu.component.scss */ "./src/app/Owner/Menu-Book/add-menu/add-menu.component.scss")).default]
    })
], AddMenuComponent);



/***/ }),

/***/ "./src/app/Owner/Menu-Book/add-menuheader/add-menuheader.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/Owner/Menu-Book/add-menuheader/add-menuheader.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL093bmVyL01lbnUtQm9vay9hZGQtbWVudWhlYWRlci9hZGQtbWVudWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Owner/Menu-Book/add-menuheader/add-menuheader.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Owner/Menu-Book/add-menuheader/add-menuheader.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddMenuheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMenuheaderComponent", function() { return AddMenuheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/Owner/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let AddMenuheaderComponent = class AddMenuheaderComponent {
    constructor(fb, router, ngZone, menuApi) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.menuApi = menuApi;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.SectioinArray = ['A', 'B', 'C', 'D', 'E'];
        /* Get errors */
        this.handleError = (controlName, errorName) => {
            return this.menuForm.controls[controlName].hasError(errorName);
        };
    }
    ngOnInit() {
        this.submitBookForm();
    }
    /* Reactive book form */
    submitBookForm() {
        this.menuForm = this.fb.group({
            menu_header_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            menu_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            section: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            foodType: ['veg']
        });
    }
    /* Add dynamic languages */
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add language
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /* Date */
    formatDate(e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.menuForm.get('dob').setValue(convertDate, {
            onlyself: true
        });
    }
    /* Submit book */
    submitMenuForm() {
        if (this.menuForm.valid) {
            this.menuApi.AddMenu(this.menuForm.value).subscribe(res => {
                this.ngZone.run(() => this.router.navigateByUrl('/menus-list'));
            });
        }
    }
};
AddMenuheaderComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: false })
], AddMenuheaderComponent.prototype, "chipList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetMenuForm', { static: false })
], AddMenuheaderComponent.prototype, "myNgForm", void 0);
AddMenuheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-menuheader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-menuheader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/Menu-Book/add-menuheader/add-menuheader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-menuheader.component.scss */ "./src/app/Owner/Menu-Book/add-menuheader/add-menuheader.component.scss")).default]
    })
], AddMenuheaderComponent);



/***/ }),

/***/ "./src/app/Owner/Menu-Book/edit-menu/edit-menu.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/Owner/Menu-Book/edit-menu/edit-menu.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL093bmVyL01lbnUtQm9vay9lZGl0LW1lbnUvZWRpdC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Owner/Menu-Book/edit-menu/edit-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Owner/Menu-Book/edit-menu/edit-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: EditMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMenuComponent", function() { return EditMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/Owner/shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let EditMenuComponent = class EditMenuComponent {
    constructor(fb, router, ngZone, actRoute, menuApi) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.menuApi = menuApi;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.subjectArray = [];
        this.SectioinArray = ['A', 'B', 'C', 'D', 'E'];
        /* Get errors */
        this.handleError = (controlName, errorName) => {
            return this.menuForm.controls[controlName].hasError(errorName);
        };
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.menuApi.GetMenu(id).subscribe(data => {
            console.log(data.subjects);
            this.subjectArray = data.subjects;
            this.menuForm = this.fb.group({
                menu_name: [data.menu_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                menu_email: [data.menu_email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                section: [data.section, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                subjects: [data.subjects],
                dob: [data.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                gender: [data.gender]
            });
        });
    }
    ngOnInit() {
        this.updateBookForm();
    }
    /* Reactive book form */
    updateBookForm() {
        this.menuForm = this.fb.group({
            menu_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            menu_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            section: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            subjects: [this.subjectArray],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            gender: ['Male']
        });
    }
    /* Add dynamic languages */
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add language
        if ((value || '').trim() && this.subjectArray.length < 5) {
            this.subjectArray.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /* Remove dynamic languages */
    remove(subject) {
        const index = this.subjectArray.indexOf(subject);
        if (index >= 0) {
            this.subjectArray.splice(index, 1);
        }
    }
    /* Date */
    formatDate(e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.menuForm.get('dob').setValue(convertDate, {
            onlyself: true
        });
    }
    /* Update book */
    updateMenuForm() {
        console.log(this.menuForm.value);
        var id = this.actRoute.snapshot.paramMap.get('id');
        if (window.confirm('Are you sure you want to update?')) {
            this.menuApi.UpdateMenu(id, this.menuForm.value).subscribe(res => {
                this.ngZone.run(() => this.router.navigateByUrl('/menus-list'));
            });
        }
    }
};
EditMenuComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('chipList', { static: false })
], EditMenuComponent.prototype, "chipList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('resetMenuForm', { static: false })
], EditMenuComponent.prototype, "myNgForm", void 0);
EditMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/Menu-Book/edit-menu/edit-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-menu.component.scss */ "./src/app/Owner/Menu-Book/edit-menu/edit-menu.component.scss")).default]
    })
], EditMenuComponent);



/***/ }),

/***/ "./src/app/Owner/Menu-Book/menu-list/menu-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/Owner/Menu-Book/menu-list/menu-list.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL093bmVyL01lbnUtQm9vay9tZW51LWxpc3QvbWVudS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Owner/Menu-Book/menu-list/menu-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Owner/Menu-Book/menu-list/menu-list.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListComponent", function() { return MenuListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/api.service */ "./src/app/Owner/shared/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let MenuListComponent = class MenuListComponent {
    constructor(menuApi) {
        this.menuApi = menuApi;
        this.MenuData = [];
        this.displayedColumns = ['_id', 'menu_name', 'menu_email', 'section', 'action'];
        this.menuApi.GetMenus().subscribe(data => {
            this.MenuData = data;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.MenuData);
            setTimeout(() => {
                this.dataSource.paginator = this.paginator;
            }, 0);
        });
    }
    ngOnInit() { }
    deleteMenu(index, e) {
        if (window.confirm('Are you sure')) {
            const data = this.dataSource.data;
            data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
            this.dataSource.data = data;
            this.menuApi.DeleteMenu(e._id).subscribe();
        }
    }
};
MenuListComponent.ctorParameters = () => [
    { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
], MenuListComponent.prototype, "paginator", void 0);
MenuListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-menu-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/Menu-Book/menu-list/menu-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-list.component.scss */ "./src/app/Owner/Menu-Book/menu-list/menu-list.component.scss")).default]
    })
], MenuListComponent);



/***/ }),

/***/ "./src/app/Owner/owner-home/owner-home.component.scss":
/*!************************************************************!*\
  !*** ./src/app/Owner/owner-home/owner-home.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL093bmVyL293bmVyLWhvbWUvb3duZXItaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Owner/owner-home/owner-home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Owner/owner-home/owner-home.component.ts ***!
  \**********************************************************/
/*! exports provided: OwnerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerHomeComponent", function() { return OwnerHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OwnerHomeComponent = class OwnerHomeComponent {
    constructor() {
        this.opened = true;
    }
    ngOnInit() {
        console.log(window.innerWidth);
        if (window.innerWidth < 768) {
            this.sidenav.fixedTopGap = 55;
            this.opened = false;
        }
        else {
            this.sidenav.fixedTopGap = 55;
            this.opened = true;
        }
    }
    onResize(event) {
        if (event.target.innerWidth < 768) {
            this.sidenav.fixedTopGap = 55;
            this.opened = false;
        }
        else {
            this.sidenav.fixedTopGap = 55;
            this.opened = true;
        }
    }
    isBiggerScreen() {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width < 768) {
            return true;
        }
        else {
            return false;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: false })
], OwnerHomeComponent.prototype, "sidenav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], OwnerHomeComponent.prototype, "onResize", null);
OwnerHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-owner-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./owner-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/owner-home/owner-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./owner-home.component.scss */ "./src/app/Owner/owner-home/owner-home.component.scss")).default]
    })
], OwnerHomeComponent);



/***/ }),

/***/ "./src/app/Owner/owner-login/owner-login.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Owner/owner-login/owner-login.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-div {\n  background-image: url('homeBnW.jpg');\n  background-size: contain;\n  width: 100%;\n  height: 100vh;\n}\n\n.main-div mat-card {\n  padding: 0;\n}\n\n.login-form {\n  padding: 20px;\n}\n\nul {\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvT3duZXIvb3duZXItbG9naW4vRDpcXFNodWJoYW1cXHBlcnNvbmFsXFxPUkFcXE9SQUFQUC9zcmNcXGFwcFxcT3duZXJcXG93bmVyLWxvZ2luXFxvd25lci1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvT3duZXIvb3duZXItbG9naW4vb3duZXItbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7QUNFSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9Pd25lci9vd25lci1sb2dpbi9vd25lci1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9pbWFnZXMvaG9tZUJuVy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLm1haW4tZGl2IG1hdC1jYXJke1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIFxyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn0iLCIubWFpbi1kaXYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9pbWFnZXMvaG9tZUJuVy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5tYWluLWRpdiBtYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5sb2dpbi1mb3JtIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/Owner/owner-login/owner-login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Owner/owner-login/owner-login.component.ts ***!
  \************************************************************/
/*! exports provided: OwnerLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerLoginComponent", function() { return OwnerLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let OwnerLoginComponent = class OwnerLoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigateByUrl('/owner-home');
    }
};
OwnerLoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OwnerLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-owner-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./owner-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Owner/owner-login/owner-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./owner-login.component.scss */ "./src/app/Owner/owner-login/owner-login.component.scss")).default]
    })
], OwnerLoginComponent);



/***/ }),

/***/ "./src/app/Owner/shared/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Owner/shared/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.endpoint = 'http://localhost:8000/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Add menu
    AddMenu(data) {
        let API_URL = `${this.endpoint}/add-menu`;
        return this.http.post(API_URL, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Get all menus
    GetMenus() {
        return this.http.get(`${this.endpoint}`);
    }
    // Get Menu
    GetMenu(id) {
        let API_URL = `${this.endpoint}/read-Menu/${id}`;
        return this.http.get(API_URL, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Update Menu
    UpdateMenu(id, data) {
        let API_URL = `${this.endpoint}/update-menu/${id}`;
        return this.http.put(API_URL, data, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Delete Menu
    DeleteMenu(id) {
        var API_URL = `${this.endpoint}/delete-menu/${id}`;
        return this.http.delete(API_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    }
    // Error handling 
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/User/entry-form/entry-form.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/User/entry-form/entry-form.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvZW50cnktZm9ybS9lbnRyeS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/User/entry-form/entry-form.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/User/entry-form/entry-form.component.ts ***!
  \*********************************************************/
/*! exports provided: EntryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryFormComponent", function() { return EntryFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EntryFormComponent = class EntryFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
EntryFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entry-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./entry-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/entry-form/entry-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./entry-form.component.scss */ "./src/app/User/entry-form/entry-form.component.scss")).default]
    })
], EntryFormComponent);



/***/ }),

/***/ "./src/app/User/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/User/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-div {\n  background-image: url('homeBnW.jpg');\n  background-size: contain;\n  width: 100%;\n  height: 100vh;\n}\n\n.main-div mat-card {\n  padding: 0;\n}\n\n.login-form {\n  padding: 20px;\n}\n\nul {\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlci9sb2dpbi9EOlxcU2h1YmhhbVxccGVyc29uYWxcXE9SQVxcT1JBQVBQL3NyY1xcYXBwXFxVc2VyXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7QUNFSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9Vc2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2ltYWdlcy9ob21lQm5XLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4ubWFpbi1kaXYgbWF0LWNhcmR7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgXHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufSIsIi5tYWluLWRpdiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2ltYWdlcy9ob21lQm5XLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1haW4tZGl2IG1hdC1jYXJkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/User/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/User/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/User/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/User/scan-qrcode/scan-qrcode.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/User/scan-qrcode/scan-qrcode.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".parent-div {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlci9zY2FuLXFyY29kZS9EOlxcU2h1YmhhbVxccGVyc29uYWxcXE9SQVxcT1JBQVBQL3NyY1xcYXBwXFxVc2VyXFxzY2FuLXFyY29kZVxcc2Nhbi1xcmNvZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1VzZXIvc2Nhbi1xcmNvZGUvc2Nhbi1xcmNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9Vc2VyL3NjYW4tcXJjb2RlL3NjYW4tcXJjb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudC1kaXZ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCIucGFyZW50LWRpdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/User/scan-qrcode/scan-qrcode.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/User/scan-qrcode/scan-qrcode.component.ts ***!
  \***********************************************************/
/*! exports provided: ScanQrcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanQrcodeComponent", function() { return ScanQrcodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ScanQrcodeComponent = class ScanQrcodeComponent {
    constructor(router) {
        this.router = router;
        console.log("inside scan qr");
    }
    clearResult() {
        this.qrResultString = null;
    }
    onCodeResult(resultString) {
        this.qrResultString = resultString;
        this.router.navigateByUrl('/user-menu');
    }
    ngOnInit() {
    }
};
ScanQrcodeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ScanQrcodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scan-qrcode',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scan-qrcode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/scan-qrcode/scan-qrcode.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scan-qrcode.component.scss */ "./src/app/User/scan-qrcode/scan-qrcode.component.scss")).default]
    })
], ScanQrcodeComponent);



/***/ }),

/***/ "./src/app/User/user-cart/user-cart.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/User/user-cart/user-cart.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvdXNlci1jYXJ0L3VzZXItY2FydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/User/user-cart/user-cart.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/User/user-cart/user-cart.component.ts ***!
  \*******************************************************/
/*! exports provided: UserCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCartComponent", function() { return UserCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_get_user_menu_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/get-user-menu-list.service */ "./src/app/services/get-user-menu-list.service.ts");
/* harmony import */ var _services_add_in_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/add-in-cart.service */ "./src/app/services/add-in-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let UserCartComponent = class UserCartComponent {
    constructor(addCartService, getUserMenuListService) {
        this.addCartService = addCartService;
        this.getUserMenuListService = getUserMenuListService;
        this.str = "hello";
    }
    ngOnInit() {
        this.cartList = this.addCartService.getCartList();
        this.getUserMenuListService.getTest().subscribe(data => {
            console.log(data);
        });
        console.log("*******TESTING*****" + this.getUserMenuListService.getTest());
    }
};
UserCartComponent.ctorParameters = () => [
    { type: _services_add_in_cart_service__WEBPACK_IMPORTED_MODULE_2__["AddInCartService"] },
    { type: _services_get_user_menu_list_service__WEBPACK_IMPORTED_MODULE_1__["GetUserMenuListService"] }
];
UserCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/user-cart/user-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-cart.component.scss */ "./src/app/User/user-cart/user-cart.component.scss")).default]
    })
], UserCartComponent);



/***/ }),

/***/ "./src/app/User/user-menu-bottom-sheet/user-menu-bottom-sheet.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/User/user-menu-bottom-sheet/user-menu-bottom-sheet.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvdXNlci1tZW51LWJvdHRvbS1zaGVldC91c2VyLW1lbnUtYm90dG9tLXNoZWV0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/User/user-menu-bottom-sheet/user-menu-bottom-sheet.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/User/user-menu-bottom-sheet/user-menu-bottom-sheet.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserMenuBottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuBottomSheetComponent", function() { return UserMenuBottomSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_menu_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user-menu-bottom-sheet.service */ "./src/app/services/user-menu-bottom-sheet.service.ts");
/* harmony import */ var _services_add_in_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/add-in-cart.service */ "./src/app/services/add-in-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let UserMenuBottomSheetComponent = class UserMenuBottomSheetComponent {
    constructor(data, addInCartService, userMenuBottomSheetService) {
        this.data = data;
        this.addInCartService = addInCartService;
        this.userMenuBottomSheetService = userMenuBottomSheetService;
        this.inputnumber = 0;
    }
    ngOnInit() {
    }
    plus() {
        this.inputnumber = this.inputnumber + 1;
    }
    minus() {
        if (this.inputnumber != 0) {
            this.inputnumber = this.inputnumber - 1;
        }
    }
    addItemToCart() {
        this.itemid = this.userMenuBottomSheetService.getItemId();
        this.itemname = this.userMenuBottomSheetService.getItemName();
        console.log("inputnumber " + this.inputnumber);
        this.additem = {
            itemId: this.itemid,
            itemName: this.itemname,
            quantity: this.inputnumber
        };
        // this.additem.quantity=this.inputnumber;
        // this.additem.itemId=this.itemid;
        console.log("itemId " + this.additem);
        console.log("itemId " + this.itemname);
        console.log("hiiiiiiiiiiii");
        // this.userCartComponent.cartList.push(this.additem);
        this.addInCartService.addInCartList(this.additem);
        //console.log("this.userCartComponent.cartList "+this.userCartComponent.cartList)
    }
};
UserMenuBottomSheetComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_BOTTOM_SHEET_DATA"],] }] },
    { type: _services_add_in_cart_service__WEBPACK_IMPORTED_MODULE_2__["AddInCartService"] },
    { type: _services_user_menu_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_1__["UserMenuBottomSheetService"] }
];
UserMenuBottomSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-menu-bottom-sheet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-menu-bottom-sheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/user-menu-bottom-sheet/user-menu-bottom-sheet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-menu-bottom-sheet.component.scss */ "./src/app/User/user-menu-bottom-sheet/user-menu-bottom-sheet.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_BOTTOM_SHEET_DATA"]))
], UserMenuBottomSheetComponent);



/***/ }),

/***/ "./src/app/User/user-menus/user-menus.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/User/user-menus/user-menus.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centerClass {\n  width: 100%;\n  text-align: center;\n}\n\n.usermenus {\n  margin: auto;\n  width: 90%;\n  text-align: center;\n  overflow-y: scroll;\n}\n\n.usermenus::-webkit-scrollbar {\n  display: none;\n}\n\n.menu-card {\n  width: 80%;\n  height: 100%;\n  margin-left: 1%;\n  margin-bottom: 1%;\n  float: left;\n  border: 0px;\n}\n\n.tp-header-image {\n  background-image: url(\"https://www.tutorialspoint.com/materialize/src/html5-mini-logo.jpg\");\n  background-size: cover;\n}\n\n.leftheader {\n  float: left;\n}\n\n.righttheader {\n  float: right;\n}\n\n.card-deck-container {\n  width: 100%;\n  max-width: 1200px;\n  position: relative;\n  border-radius: 2px;\n  padding: 10px 10px 30px;\n  margin: 10px 10px 10px 10px;\n  background-color: #f5f5f5;\n}\n\n.card-item {\n  padding: 3px 3px 3px 3px;\n}\n\n.example-viewport {\n  height: 70%;\n  width: 100%;\n  border: 1px solid black;\n}\n\n.fit-image {\n  margin: auto;\n  width: 90%;\n  text-align: center;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n\n.square {\n  width: 50%;\n  float: left;\n}\n\nsection {\n  display: table;\n  margin-bottom: 1%;\n}\n\n.example-button-row {\n  display: table-cell;\n  padding: 0;\n  margin: 0;\n}\n\n.example-button-row button {\n  display: table-cell;\n}\n\n.example-flex-container {\n  display: flex;\n  justify-content: space-between;\n  width: 100vw;\n}\n\n.example-button-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.mat-select-arrow {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid;\n  margin: 0 4px;\n}\n\n::ng-deep .langSelect div.mat-select-arrow-wrapper {\n  display: none;\n}\n\n::ng-deep .langSelect.mat-select {\n  display: inline;\n}\n\n.homeMain {\n  width: 100%;\n  height: 100vh;\n}\n\n.veg {\n  background-color: green;\n}\n\n.beat {\n  -webkit-animation: beat 3s infinite alternate;\n          animation: beat 3s infinite alternate;\n}\n\n@-webkit-keyframes beat {\n  to {\n    transform: scale(2);\n  }\n}\n\n@keyframes beat {\n  to {\n    transform: scale(2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlci91c2VyLW1lbnVzL0Q6XFxTaHViaGFtXFxwZXJzb25hbFxcT1JBXFxPUkFBUFAvc3JjXFxhcHBcXFVzZXJcXHVzZXItbWVudXNcXHVzZXItbWVudXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1VzZXIvdXNlci1tZW51cy91c2VyLW1lbnVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDRSxZQUFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNBSjs7QURJQztFQUNHLDJGQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURJQztFQUNJLFdBQUE7QUNETDs7QURJQztFQUNDLFlBQUE7QUNERjs7QURJQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUNESjs7QURJRTtFQUNFLHdCQUFBO0FDREo7O0FESUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDREo7O0FESUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7S0FBQSxnQkFBQTtBQ0RKOztBREtJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNGTjs7QURhSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ1ZOOztBRGVJO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ1pOOztBRGVJO0VBQ0UsbUJBQUE7QUNaTjs7QURnQkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDYk47O0FEZ0JJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ2JOOztBRGtCSTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ2ZOOztBRGtCRTtFQUNFLGFBQUE7QUNmSjs7QURrQkU7RUFDRSxlQUFBO0FDZko7O0FEbUJFO0VBR0UsV0FBQTtFQUNBLGFBQUE7QUNsQko7O0FEcUJBO0VBQ0UsdUJBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsNkNBQUE7VUFBQSxxQ0FBQTtBQ2xCRjs7QURxQkE7RUFDQTtJQUFLLG1CQUFBO0VDakJIO0FBQ0Y7O0FEZUE7RUFDQTtJQUFLLG1CQUFBO0VDakJIO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Vc2VyL3VzZXItbWVudXMvdXNlci1tZW51cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJDbGFzcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgXHJcbn1cclxuXHJcbi51c2VybWVudXN7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLnVzZXJtZW51czo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51LWNhcmQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXI6IDBweDtcclxuXHJcbiB9XHJcblxyXG4gLnRwLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vd3d3LnR1dG9yaWFsc3BvaW50LmNvbS9tYXRlcmlhbGl6ZS9zcmMvaHRtbDUtbWluaS1sb2dvLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuIH1cclxuXHJcbiAubGVmdGhlYWRlciB7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiB9XHJcblxyXG4gLnJpZ2h0dGhlYWRlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZC1kZWNrLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDNweDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLXZpZXdwb3J0IHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcblxyXG4gIC5maXQtaW1hZ2V7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnNxdWFyZSB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyAuc3F1YXJlOmFmdGVyIHtcclxuICAgIC8vICAgY29udGVudDogXCJcIjtcclxuICAgIC8vICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgICAgIC8vIGZvciBib3R0b20gYnV0dG9uc1xyXG5cclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIC5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmV4YW1wbGUtZmxleC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3IgYm90dG9tIGJ1dHRvbnNcclxuXHJcbiAgICAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItdG9wOiA1cHggc29saWQ7XHJcbiAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmxhbmdTZWxlY3QgZGl2Lm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5sYW5nU2VsZWN0Lm1hdC1zZWxlY3Qge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuXHJcblxyXG4gIC5ob21lTWFpbntcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9ob21lQm5XLmpwZ1wiKTtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnZlZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmJlYXQge1xyXG4gIGFuaW1hdGlvbjogYmVhdCAzcyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgXHJcbn1cclxuQGtleWZyYW1lcyBiZWF0e1xyXG50byB7IHRyYW5zZm9ybTogc2NhbGUoMik7IH1cclxufSIsIi5jZW50ZXJDbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2VybWVudXMge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udXNlcm1lbnVzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZW51LWNhcmQge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IDBweDtcbn1cblxuLnRwLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LnR1dG9yaWFsc3BvaW50LmNvbS9tYXRlcmlhbGl6ZS9zcmMvaHRtbDUtbWluaS1sb2dvLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmxlZnRoZWFkZXIge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnJpZ2h0dGhlYWRlciB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNhcmQtZGVjay1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMzBweDtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4uY2FyZC1pdGVtIHtcbiAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xufVxuXG4uZXhhbXBsZS12aWV3cG9ydCB7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5maXQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb2JqZWN0LWZpdDogZmlsbDtcbn1cblxuLnNxdWFyZSB7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xufVxuXG4uZXhhbXBsZS1idXR0b24tcm93IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtc2VsZWN0LWFycm93IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZDtcbiAgbWFyZ2luOiAwIDRweDtcbn1cblxuOjpuZy1kZWVwIC5sYW5nU2VsZWN0IGRpdi5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46Om5nLWRlZXAgLmxhbmdTZWxlY3QubWF0LXNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmhvbWVNYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi52ZWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmJlYXQge1xuICBhbmltYXRpb246IGJlYXQgM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJlYXQge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/User/user-menus/user-menus.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/User/user-menus/user-menus.component.ts ***!
  \*********************************************************/
/*! exports provided: UserMenusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenusComponent", function() { return UserMenusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_menu_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user-menu-bottom-sheet.service */ "./src/app/services/user-menu-bottom-sheet.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _user_menu_bottom_sheet_user_menu_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-menu-bottom-sheet/user-menu-bottom-sheet.component */ "./src/app/User/user-menu-bottom-sheet/user-menu-bottom-sheet.component.ts");





let UserMenusComponent = class UserMenusComponent {
    constructor(_bottomSheet, userMenuBottomSheetService) {
        this._bottomSheet = _bottomSheet;
        this.userMenuBottomSheetService = userMenuBottomSheetService;
        this.isMenuList = false;
        this.isCartList = false;
        this.isAddPartner = false;
        this.isOnlyVeg = false;
        this.isUserTastedItem = false;
        this.menuHeaders = [{ value: 'header1', viewValue: 'header1N' },
            { value: 'header2', viewValue: 'header2N' },
            { value: 'header3', viewValue: 'header3N' }];
        this.menus = [
            {
                title: 'item 1.1',
                itemId: 1,
                header: 'header1',
                headerId: 12,
                price: '190',
                serves: 'Serves 2 to 3 people',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 2,
                header: 'header1',
                title: 'Chul Bhul shlok Dhaba Special tandoori',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 3,
                header: 'header1',
                title: 'item 1.3',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 4,
                header: 'header1',
                title: 'item 1.4',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 5,
                header: 'header1',
                title: 'item 1.5',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 6,
                header: 'header1',
                title: 'item 1.1',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 7,
                header: 'header1',
                title: 'Chul Bhul shlok Dhaba Special tandoori',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 8,
                header: 'header1',
                title: 'item 1.3',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 9,
                header: 'header1',
                title: 'item 1.4',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 10,
                header: 'header1',
                title: 'item 1.5',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 11,
                header: 'header1',
                title: 'item 1.1',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 12,
                header: 'header1',
                title: 'Chul Bhul shlok Dhaba Special tandoori',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 13,
                header: 'header1',
                title: 'item 1.3',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 14,
                header: 'header1',
                title: 'item 1.4',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 15,
                header: 'header1',
                title: 'item 1.5',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 16,
                header: 'header2',
                title: 'item 2.1',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 17,
                header: 'header2',
                title: 'item 2.2',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 18,
                header: 'header3',
                title: 'item 3.1',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
            },
            {
                serves: 'Serves 2 to 3 people',
                itemId: 19,
                header: 'header3',
                title: 'item 3.2',
                price: '190',
                description: 'Some quick example text to build on the card title and make up the bulk of the card content',
                img: ''
            }
        ];
    }
    changeheader(value) {
        this.isMenuList = true;
        this.isCartList = false;
        this.isAddPartner = false;
        console.log(value);
        this.itemCount = 0;
        this.menuRow = 0;
        this.selectedHeader = value;
        // console.log(value);
        // this.menus.forEach( menu => {
        //   if(menu.header==this.selectedHeader)
        //   {
        //     this.itemCount=this.itemCount+1;
        //   }
        // });
        //  this.menuRow=this.itemCount/2;
        // // console.log("menuRow"+this.menuRow);
    }
    openCart() {
        this.isMenuList = false;
        this.isCartList = true;
        this.isAddPartner = false;
        this.selectedHeader = "Your Cart";
    }
    addPartner() {
        this.isMenuList = false;
        this.isCartList = false;
        this.isAddPartner = true;
        this.selectedHeader = "Add Your Partner In Dine";
    }
    onlyVeg() {
        this.isOnlyVeg = !this.isOnlyVeg;
    }
    userTastedItem() {
        this.isUserTastedItem = !this.isUserTastedItem;
    }
    openBottomSheet(img, desc, title, serves, itemId) {
        this.selectedItemId = itemId;
        this.selectedItemName = title;
        this._bottomSheet.open(_user_menu_bottom_sheet_user_menu_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["UserMenuBottomSheetComponent"], {
            data: { bottomImg: img,
                bottomDesc: desc,
                bottomTitle: title,
                bottomServes: serves,
                itemId: itemId
            }
        });
        this.userMenuBottomSheetService.setItemId(this.selectedItemId);
        console.log("title user-menu : " + this.selectedItemName);
        this.userMenuBottomSheetService.setItemName(this.selectedItemName);
    }
    ngOnInit() {
    }
};
UserMenusComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"] },
    { type: _services_user_menu_bottom_sheet_service__WEBPACK_IMPORTED_MODULE_1__["UserMenuBottomSheetService"] }
];
UserMenusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-user-menus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-menus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/User/user-menus/user-menus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-menus.component.scss */ "./src/app/User/user-menus/user-menus.component.scss")).default]
    })
], UserMenusComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Owner_owner_home_owner_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Owner/owner-home/owner-home.component */ "./src/app/Owner/owner-home/owner-home.component.ts");
/* harmony import */ var _Owner_owner_login_owner_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Owner/owner-login/owner-login.component */ "./src/app/Owner/owner-login/owner-login.component.ts");
/* harmony import */ var _User_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User/login/login.component */ "./src/app/User/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _User_user_menus_user_menus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User/user-menus/user-menus.component */ "./src/app/User/user-menus/user-menus.component.ts");
/* harmony import */ var _User_scan_qrcode_scan_qrcode_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User/scan-qrcode/scan-qrcode.component */ "./src/app/User/scan-qrcode/scan-qrcode.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Owner_Menu_Book_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Owner/Menu-Book/add-menu/add-menu.component */ "./src/app/Owner/Menu-Book/add-menu/add-menu.component.ts");
/* harmony import */ var _Owner_Menu_Book_add_menuheader_add_menuheader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Owner/Menu-Book/add-menuheader/add-menuheader.component */ "./src/app/Owner/Menu-Book/add-menuheader/add-menuheader.component.ts");
/* harmony import */ var _Owner_Menu_Book_edit_menu_edit_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Owner/Menu-Book/edit-menu/edit-menu.component */ "./src/app/Owner/Menu-Book/edit-menu/edit-menu.component.ts");
/* harmony import */ var _Owner_Menu_Book_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Owner/Menu-Book/menu-list/menu-list.component */ "./src/app/Owner/Menu-Book/menu-list/menu-list.component.ts");













const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    {
        path: 'scan-qr', component: _User_scan_qrcode_scan_qrcode_component__WEBPACK_IMPORTED_MODULE_6__["ScanQrcodeComponent"]
    },
    {
        path: 'user-menu', component: _User_user_menus_user_menus_component__WEBPACK_IMPORTED_MODULE_5__["UserMenusComponent"]
    },
    {
        path: 'login', component: _User_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'owner-login', component: _Owner_owner_login_owner_login_component__WEBPACK_IMPORTED_MODULE_2__["OwnerLoginComponent"]
    },
    {
        path: 'owner-home', component: _Owner_owner_home_owner_home_component__WEBPACK_IMPORTED_MODULE_1__["OwnerHomeComponent"], children: [
            { path: 'add-menu', component: _Owner_Menu_Book_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_9__["AddMenuComponent"], outlet: 'ownerHome' },
            { path: 'add-menuHeader', component: _Owner_Menu_Book_add_menuheader_add_menuheader_component__WEBPACK_IMPORTED_MODULE_10__["AddMenuheaderComponent"], outlet: 'ownerHome' },
            { path: 'edit-menu/:id', component: _Owner_Menu_Book_edit_menu_edit_menu_component__WEBPACK_IMPORTED_MODULE_11__["EditMenuComponent"], outlet: 'ownerHome' },
            { path: 'menu-list', component: _Owner_Menu_Book_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_12__["MenuListComponent"], outlet: 'ownerHome' }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _User_user_cart_user_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User/user-cart/user-cart.component */ "./src/app/User/user-cart/user-cart.component.ts");
/* harmony import */ var _Owner_Menu_Book_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Owner/Menu-Book/menu-list/menu-list.component */ "./src/app/Owner/Menu-Book/menu-list/menu-list.component.ts");
/* harmony import */ var _Owner_Menu_Book_edit_menu_edit_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Owner/Menu-Book/edit-menu/edit-menu.component */ "./src/app/Owner/Menu-Book/edit-menu/edit-menu.component.ts");
/* harmony import */ var _Owner_Menu_Book_add_menuheader_add_menuheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Owner/Menu-Book/add-menuheader/add-menuheader.component */ "./src/app/Owner/Menu-Book/add-menuheader/add-menuheader.component.ts");
/* harmony import */ var _Owner_Menu_Book_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Owner/Menu-Book/add-menu/add-menu.component */ "./src/app/Owner/Menu-Book/add-menu/add-menu.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/fesm2015/ngx-qrcode2.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _User_scan_qrcode_scan_qrcode_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./User/scan-qrcode/scan-qrcode.component */ "./src/app/User/scan-qrcode/scan-qrcode.component.ts");
/* harmony import */ var _Admin_qr_generater_qr_generater_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Admin/qr-generater/qr-generater.component */ "./src/app/Admin/qr-generater/qr-generater.component.ts");
/* harmony import */ var _User_user_menus_user_menus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./User/user-menus/user-menus.component */ "./src/app/User/user-menus/user-menus.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _User_user_menu_bottom_sheet_user_menu_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./User/user-menu-bottom-sheet/user-menu-bottom-sheet.component */ "./src/app/User/user-menu-bottom-sheet/user-menu-bottom-sheet.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _User_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./User/login/login.component */ "./src/app/User/login/login.component.ts");
/* harmony import */ var _Owner_owner_home_owner_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Owner/owner-home/owner-home.component */ "./src/app/Owner/owner-home/owner-home.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _Owner_owner_login_owner_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Owner/owner-login/owner-login.component */ "./src/app/Owner/owner-login/owner-login.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _Owner_shared_api_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Owner/shared/api.service */ "./src/app/Owner/shared/api.service.ts");
/* harmony import */ var _User_entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./User/entry-form/entry-form.component */ "./src/app/User/entry-form/entry-form.component.ts");






// import { OwnerHomeModule } from './Owner/owner-home/owner-home.module';























const routes = [];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _User_scan_qrcode_scan_qrcode_component__WEBPACK_IMPORTED_MODULE_12__["ScanQrcodeComponent"],
            _Admin_qr_generater_qr_generater_component__WEBPACK_IMPORTED_MODULE_13__["QrGeneraterComponent"],
            _User_user_menus_user_menus_component__WEBPACK_IMPORTED_MODULE_14__["UserMenusComponent"],
            _User_user_menu_bottom_sheet_user_menu_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_17__["UserMenuBottomSheetComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
            _User_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
            _Owner_owner_home_owner_home_component__WEBPACK_IMPORTED_MODULE_21__["OwnerHomeComponent"],
            _Owner_owner_login_owner_login_component__WEBPACK_IMPORTED_MODULE_25__["OwnerLoginComponent"],
            _Owner_Menu_Book_add_menu_add_menu_component__WEBPACK_IMPORTED_MODULE_5__["AddMenuComponent"],
            _Owner_Menu_Book_add_menuheader_add_menuheader_component__WEBPACK_IMPORTED_MODULE_4__["AddMenuheaderComponent"],
            _Owner_Menu_Book_edit_menu_edit_menu_component__WEBPACK_IMPORTED_MODULE_3__["EditMenuComponent"],
            _Owner_Menu_Book_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_2__["MenuListComponent"],
            _User_user_cart_user_cart_component__WEBPACK_IMPORTED_MODULE_1__["UserCartComponent"],
            _User_entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_28__["EntryFormComponent"]
        ],
        imports: [
            // OwnerHomeModule,
            _material_module__WEBPACK_IMPORTED_MODULE_26__["AngularMaterialModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_9__["ZXingScannerModule"],
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_10__["NgxQRCodeModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["ScrollingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]],
        entryComponents: [_User_user_menu_bottom_sheet_user_menu_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_17__["UserMenuBottomSheetComponent"]],
        providers: [_Owner_shared_api_service__WEBPACK_IMPORTED_MODULE_27__["ApiService"], _User_user_menu_bottom_sheet_user_menu_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_17__["UserMenuBottomSheetComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".homeMain {\n  background-image: url('homeBnW.jpg');\n  background-size: contain;\n  width: 100%;\n  height: 100vh;\n}\n\n.parent-div {\n  height: 85vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.beat {\n  -webkit-animation: beat 1.5s infinite alternate;\n          animation: beat 1.5s infinite alternate;\n}\n\n@-webkit-keyframes beat {\n  to {\n    transform: scale(1.2);\n  }\n}\n\n@keyframes beat {\n  to {\n    transform: scale(1.2);\n  }\n}\n\n.qr-code span {\n  font-weight: bolder;\n  font-size: large;\n  color: black;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 10%;\n  background-color: #D7D7D7;\n  z-index: 1;\n  transform: translateY(0%);\n  -webkit-animation: move 3s cubic-bezier(0, 0, 0, 0);\n          animation: move 3s cubic-bezier(0, 0, 0, 0);\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  border: 1px solid black;\n}\n\n.qr-code:before, .qr-code:after, .qr-code em:after, .qr-code em:before {\n  border-color: #000;\n  content: \"\";\n  position: absolute;\n  width: 25%;\n  height: 25%;\n  border-style: solid;\n  border-width: 0px;\n}\n\n.qr-code:before {\n  left: 0;\n  top: 0;\n  border-left-width: 5px;\n  border-top-width: 5px;\n}\n\n.qr-code:after {\n  right: 0;\n  top: 0;\n  border-right-width: 5px;\n  border-top-width: 5px;\n}\n\n.qr-code em:before {\n  left: 0;\n  bottom: 0;\n  border-left-width: 5px;\n  border-bottom-width: 5px;\n}\n\n.qr-code em:after {\n  right: 0;\n  bottom: 0;\n  border-right-width: 5px;\n  border-bottom-width: 5px;\n}\n\n@-webkit-keyframes move {\n  0%, 100% {\n    transform: translateY(840%);\n  }\n  50% {\n    transform: translateY(10%);\n  }\n  75% {\n    transform: translateY(272%);\n  }\n}\n\n@keyframes move {\n  0%, 100% {\n    transform: translateY(840%);\n  }\n  50% {\n    transform: translateY(10%);\n  }\n  75% {\n    transform: translateY(272%);\n  }\n}\n\n.homeLogin {\n  width: 100%;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcU2h1YmhhbVxccGVyc29uYWxcXE9SQVxcT1JBQVBQL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURLQTtFQUNJLCtDQUFBO1VBQUEsdUNBQUE7QUNGSjs7QURJQTtFQUNDO0lBQUsscUJBQUE7RUNBSjtBQUNGOztBREZBO0VBQ0M7SUFBSyxxQkFBQTtFQ0FKO0FBQ0Y7O0FER0k7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSx1QkFBQTtBQ0RSOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURHSTtFQUNJLE9BQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ0RSOztBREdJO0VBQ0ksUUFBQTtFQUNBLE1BQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDRFI7O0FER0k7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNEUjs7QURHSTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ0RSOztBREtBO0VBQ0k7SUFBVywyQkFBQTtFQ0RiO0VERUU7SUFBTSwwQkFBQTtFQ0NSO0VEQUU7SUFBTSwyQkFBQTtFQ0dSO0FBQ0Y7O0FEUEE7RUFDSTtJQUFXLDJCQUFBO0VDRGI7RURFRTtJQUFNLDBCQUFBO0VDQ1I7RURBRTtJQUFNLDJCQUFBO0VDR1I7QUFDRjs7QURERTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUYsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lTWFpbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9ob21lQm5XLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnBhcmVudC1kaXZ7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4uYmVhdCB7XHJcbiAgICBhbmltYXRpb246IGJlYXQgMS41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuQGtleWZyYW1lcyBiZWF0e1xyXG5cdHRvIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XHJcbn1cclxuXHJcbi5xci1jb2RlIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEN0Q3RDc7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbW92ZSAzcyBjdWJpYy1iZXppZXIoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIH1cclxuICAgICY6YmVmb3JlLCAgJjphZnRlciwgZW06YWZ0ZXIsIGVtOmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIH1cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDVweDtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDVweDtcclxuICAgICAgICBib3JkZXItdG9wLXdpZHRoOiA1cHg7XHJcbiAgICB9XHJcbiAgICBlbTpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNXB4O1xyXG4gICAgfVxyXG4gICAgZW06YWZ0ZXIge1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZSB7XHJcbiAgICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4NDAlKTsgfVxyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7IH1cclxuICAgIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNzIlKTsgfVxyXG4gIH1cclxuXHJcbiAgLmhvbWVMb2dpbiB7XHJcbiAgICAgIHdpZHRoOiAgMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH0iLCIuaG9tZU1haW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWFnZXMvaG9tZUJuVy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5wYXJlbnQtZGl2IHtcbiAgaGVpZ2h0OiA4NXZoO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iZWF0IHtcbiAgYW5pbWF0aW9uOiBiZWF0IDEuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJlYXQge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG59XG4ucXItY29kZSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDdEN0Q3O1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICBhbmltYXRpb246IG1vdmUgM3MgY3ViaWMtYmV6aWVyKDAsIDAsIDAsIDApO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4ucXItY29kZTpiZWZvcmUsIC5xci1jb2RlOmFmdGVyLCAucXItY29kZSBlbTphZnRlciwgLnFyLWNvZGUgZW06YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMjUlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDBweDtcbn1cbi5xci1jb2RlOmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDVweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogNXB4O1xufVxuLnFyLWNvZGU6YWZ0ZXIge1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDVweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogNXB4O1xufVxuLnFyLWNvZGUgZW06YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogNXB4O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiA1cHg7XG59XG4ucXItY29kZSBlbTphZnRlciB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlci1yaWdodC13aWR0aDogNXB4O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiA1cHg7XG59XG5cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoODQwJSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNzIlKTtcbiAgfVxufVxuLmhvbWVMb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
        ],
        providers: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        ]
    })
], AngularMaterialModule);



/***/ }),

/***/ "./src/app/services/add-in-cart.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/add-in-cart.service.ts ***!
  \*************************************************/
/*! exports provided: AddInCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInCartService", function() { return AddInCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddInCartService = class AddInCartService {
    constructor() {
        this.cartList = [];
    }
    addInCartList(additem) {
        console.log("this.additem" + additem);
        this.cartList.push(additem);
        console.log("this.cartList" + this.cartList);
    }
    getCartList() {
        return this.cartList;
    }
};
AddInCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AddInCartService);



/***/ }),

/***/ "./src/app/services/get-user-menu-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/get-user-menu-list.service.ts ***!
  \********************************************************/
/*! exports provided: GetUserMenuListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserMenuListService", function() { return GetUserMenuListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let GetUserMenuListService = class GetUserMenuListService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getTest() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverBase + '/employeelist';
        console.log("URL: " + url);
        console.log("***ServiceTesting" + this.httpClient.get(url));
        return this.httpClient.get(url);
    }
};
GetUserMenuListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetUserMenuListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], GetUserMenuListService);



/***/ }),

/***/ "./src/app/services/user-menu-bottom-sheet.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/user-menu-bottom-sheet.service.ts ***!
  \************************************************************/
/*! exports provided: UserMenuBottomSheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuBottomSheetService", function() { return UserMenuBottomSheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserMenuBottomSheetService = class UserMenuBottomSheetService {
    constructor() { }
    getItemId() {
        return this.itemId;
    }
    setItemId(selectedItemId) {
        this.itemId = selectedItemId;
    }
    getItemName() {
        return this.itemName;
    }
    setItemName(selectedItemName) {
        console.log("title setItemName : " + selectedItemName);
        this.itemName = selectedItemName;
    }
};
UserMenuBottomSheetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserMenuBottomSheetService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: true,
    serverBase: "http://localhost:8082/ForaAPI"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Shubham\personal\ORA\ORAAPP\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map