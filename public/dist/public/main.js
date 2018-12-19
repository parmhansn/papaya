(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single/single.component */ "./src/app/single/single.component.ts");







var routes = [
    { path: '', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    // { path: 'pets', component: ListComponent  },
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: 'pet/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"] },
    { path: 'pets/create', component: _single_single_component__WEBPACK_IMPORTED_MODULE_6__["SingleComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Pet Shelters';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pet.service */ "./src/app/pet.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./single/single.component */ "./src/app/single/single.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
                _single_single_component__WEBPACK_IMPORTED_MODULE_9__["SingleComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_11__["DetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_pet_service__WEBPACK_IMPORTED_MODULE_5__["PetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    h2{\n        background-color: palevioletred; \n    }\n    .details{\n        border: 3px solid black;\n    }\n</style>\n\n<h2>Details about {{ pet.name }}</h2>\n<div class='details'>\n    <p>Pet Type: {{ pet.type}}</p>\n    <p>Description:  {{ pet.description }}</p>\n    <p>Skills: {{pet.skills.skill1}} , {{pet.skills.skill2}} , {{ pet.skills.skill3 }}</p>\n    \n    <button class='btn btn-danger' (click) = \"delete(pet._id)\">Adopt!</button>\n</div>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet.service */ "./src/app/pet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_ptservice, _router, _route) {
        this._ptservice = _ptservice;
        this._router = _router;
        this._route = _route;
        this.errors = {};
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getPet(params['id']);
            console.log(params['id']);
        });
    };
    DetailsComponent.prototype.getPet = function (id) {
        var _this = this;
        var observable = this._ptservice.getOne(id);
        observable.subscribe(function (data) {
            _this.pet = data['shelter'];
            console.log(_this.pet);
        });
    };
    DetailsComponent.prototype.delete = function (id) {
        var _this = this;
        var observable = this._ptservice.deleteOne(id);
        observable.subscribe(function (data) {
            _this._router.navigate(['/']);
        });
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<style>\n  .errors{\n    color: red;\n  }\n  .form-group{\n    margin-left:10px;\n  }\n\n  .edit{\n    border: 3px solid black;\n  }\n\n</style>\n<form (submit)=\"update(pet._id)\" class='edit'>\n    <div class =\"form-group\">\n      <label for=\"pet.name\">Pet Name: </label>\n      <div>\n        <input type=\"text\" name=\"pet.name\" [(ngModel)]=\"pet.name\" placeholder=\"Pet Name\" required minlength='3'>\n        <p class='errors' *ngIf=\"errors.name\"> {{errors.name.message}}</p>\n      </div>\n    </div>\n    <div class =\"form-group\">\n        <label for=\"pet.type\">Pet Type: </label>\n        <div>\n          <input type=\"text\" name=\"pet.type\" [(ngModel)]=\"pet.type\" placeholder=\"Pet Type\" required minlength='3' >\n          <p class='errors' *ngIf=\"errors.type\"> {{errors.type.message}}</p>\n        </div>\n      </div>\n\n      <div class =\"form-group\">\n          <label for=\"pet.description\">Description: </label>\n          <div>\n            <input type=\"text\" name=\"pet.description\" [(ngModel)]=\"pet.description\" cols=50 rows=5 placeholder=\"Description\" required minlength='3'>\n            <p class='errors' *ngIf=\"errors.description\"> {{errors.description.message}}</p>\n          </div>\n        </div>\n\n    <div class = \"form-group\">\n      <label for=\"pet.skills\">Skills: </label>\n      <div>\n        <label for=\"pet.skills.skills1\">Skills 1: </label>\n        <textarea name=\"pet.skills.skill1\" [(ngModel)]=\"pet.skills.skill1\" cols=50 rows=5 required minlength='3'></textarea>\n      </div>\n      <div>\n        <label for=\"pet.skills.skills2\">Skills 2: </label>\n        <textarea name=\"pet.skills.skill2\" [(ngModel)]=\"pet.skills.skill2\" cols=50 rows=5 required minlength='3'></textarea>\n      </div>\n      <div>\n          <label for=\"pet.skills.skills3\">Skills 3: </label>\n          <textarea name=\"pet.skills.skill3\" [(ngModel)]=\"pet.skills.skill3\" cols=50 rows=5 required minlength='3'></textarea>\n        </div>\n    </div>\n    <input type=\"submit\" value=\"Submit\" class='btn btn-success'/>\n    \n    <a [routerLink]=\"['/']\"><button class=\"btn btn-primary\">Cancel</button></a>\n  </form>\n\n  "

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet.service */ "./src/app/pet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditComponent = /** @class */ (function () {
    function EditComponent(_ftservice, _router, _route) {
        this._ftservice = _ftservice;
        this._router = _router;
        this._route = _route;
        this.pet = {};
        this.errors = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getPet(params['id']);
        });
    };
    EditComponent.prototype.getPet = function (id) {
        var _this = this;
        var observable = this._ftservice.getOne(id);
        observable.subscribe(function (data) {
            _this.pet = data['shelter'];
        });
    };
    EditComponent.prototype.update = function (id) {
        var _this = this;
        var observable = this._ftservice.updateOne(id, this.pet);
        observable.subscribe(function (data) {
            if (data['status'] == 'not ok') {
                _this.errors = data['errors']['errors'];
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());

// import { Component, OnInit } from '@angular/core';
// import { PetService } from '../pet.service';
// import { ActivatedRoute, Params, Router } from '@angular/router';
// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.css']
// })
// export class EditComponent implements OnInit {
//   shelters = {};
//   errors = {};
//   constructor(private _ftservice: PetService, private _router: Router, private _route: ActivatedRoute) { }
//   ngOnInit() {
//     this._route.params.subscribe((params: Params)=>{
//       this.getPet(params['id']);
//     })
//   }
//   getPet(id){
//     let observable = this._ftservice.getOne(id);
//     observable.subscribe( data => {
//       this.shelters = data['shelters']
//     })
//   }
//   update(id){
//     let observable = this._ftservice.updateOne(id, this.shelters);
//     observable.subscribe( data => {
//       if (data['status']== 'not ok'){
//         this.errors = data['errors']['errors'];
//       }else{
//         this._router.navigate(['/']);
//       }
//     })
//   }
//   delete(id){
//     let observable = this._ftservice.deleteOne(id);
//     observable.subscribe( data => {
//         this._router.navigate(['/']);
//     })
//   }
// }


/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<style>\n  .navbar{\n    background-color: palevioletred;\n  }\n</style>\n\n<div>\n    <nav class=\"navbar\" style=\"text-align: center;\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <h1>\n              Pet Shelter\n            </h1>\n            <h2>These pets are looking for a home!</h2>\n        </div>\n        <div class=\"navbar\" >\n          <a class=\"navbar-brand\" [routerLink]=\"['pets/create']\"><button class=\"btn btn-primary\">Add a pet to the shelter</button></a>\n          <a class=\"navbar-brand\" [routerLink]=\"['/']\"><button class=\"btn btn-primary\">Dashboard</button></a>\n        </div>\n      </div>\n    </nav>\n\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Type</th>\n      <th scope=\"col\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let shelter of shelters\" >   \n      <td>{{shelter.name}}</td>\n      <td>{{shelter.type}}</td>\n      <td> \n        <a [routerLink]=\"['/pet', shelter._id]\"><button> Details</button></a>\n        <a [routerLink]=\"['/edit', shelter._id]\"><button>Edit</button></a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  </div>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet.service */ "./src/app/pet.service.ts");



var ListComponent = /** @class */ (function () {
    function ListComponent(_petservice) {
        this._petservice = _petservice;
        this.shelters = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getAllPets();
    };
    ListComponent.prototype.getAllPets = function () {
        var _this = this;
        var observable = this._petservice.getPets();
        observable.subscribe(function (data) {
            _this.shelters = data['shelters'];
            console.log(data);
        });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pet.service.ts":
/*!********************************!*\
  !*** ./src/app/pet.service.ts ***!
  \********************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PetService = /** @class */ (function () {
    function PetService(_http) {
        this._http = _http;
    }
    PetService.prototype.getPets = function () {
        return this._http.get('/pets');
    };
    PetService.prototype.createPet = function (pet) {
        return this._http.post('/pet', pet);
    };
    PetService.prototype.getOne = function (id) {
        return this._http.get("/pet/" + id);
    };
    PetService.prototype.addPet = function (id, review) {
        return this._http.post("/pet/" + id + "/review", review);
    };
    PetService.prototype.updateOne = function (id, pet) {
        return this._http.put("/pet/" + id, pet);
    };
    PetService.prototype.deleteOne = function (id) {
        return this._http.delete("/pet/" + id);
    };
    PetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PetService);
    return PetService;
}());



/***/ }),

/***/ "./src/app/single/single.component.css":
/*!*********************************************!*\
  !*** ./src/app/single/single.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS9zaW5nbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/single/single.component.html":
/*!**********************************************!*\
  !*** ./src/app/single/single.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<style>\n  .errors{\n    color: red;\n  }\n\n  .form-group{\n    margin-left: 10px;\n  }\n\n  .single{\n    border: 3px solid black;\n  }\n\n</style>\n<form (submit)=\"create()\" class='single'>\n    <div class =\"form-group\">\n      <label for=\"pet.name\">Pet Name: </label>\n      <div>\n        <input type=\"text\" name=\"pet.name\" [(ngModel)]=\"pet.name\" placeholder=\"Pet Name\" required minlength='3'>\n        <p class='errors' *ngIf=\"errors.name\"> {{errors.name.message}}</p>\n      </div>\n    </div>\n    <div class =\"form-group\">\n        <label for=\"pet.type\">Pet Type: </label>\n        <div>\n          <input type=\"text\" name=\"pet.type\" [(ngModel)]=\"pet.type\" placeholder=\"Pet Type\" required minlength='3'>\n          <p class='errors' *ngIf=\"errors.type\"> {{errors.type.message}}</p>\n        </div>\n      </div>\n      <div class =\"form-group\">\n          <label for=\"pet.description\">Description: </label>\n          <div>\n            <input type=\"text\" name=\"pet.description\" [(ngModel)]=\"pet.description\" placeholder=\"Description\" required minlength='3'>\n            <p class='errors' *ngIf=\"errors.description\"> {{errors.description.message}}</p>\n          </div>\n        </div>\n\n    <div class = \"form-group\">\n      <label for=\"pet.skills\">Skills: </label>\n      <div>\n        <label for=\"pet.skills.skills1\">Skills 1: </label>\n        <textarea name=\"pet.skills.skill1\" [(ngModel)]=\"pet.skills.skill1\" cols=50 rows=5></textarea>\n      </div>\n      <div>\n        <label for=\"pet.skills.skills2\">Skills 2: </label>\n        <textarea name=\"pet.skills.skill2\" [(ngModel)]=\"pet.skills.skill2\" cols=50 rows=5></textarea>\n      </div>\n      <div>\n          <label for=\"pet.skills.skills3\">Skills 3: </label>\n          <textarea name=\"pet.skills.skill3\" [(ngModel)]=\"pet.skills.skill3\" cols=50 rows=5></textarea>\n        </div>\n    </div>\n    <input type=\"submit\" value=\"Submit\" class='btn btn-success'/>\n    \n    <a [routerLink]=\"['/']\"><button class=\"btn btn-primary\">Cancel</button></a>\n  </form>"

/***/ }),

/***/ "./src/app/single/single.component.ts":
/*!********************************************!*\
  !*** ./src/app/single/single.component.ts ***!
  \********************************************/
/*! exports provided: SingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleComponent", function() { return SingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet.service */ "./src/app/pet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SingleComponent = /** @class */ (function () {
    function SingleComponent(_petService, _router) {
        this._petService = _petService;
        this._router = _router;
        this.pet = {
            "name": '',
            "type": '',
            "description": '',
            "skills": {
                "skill1": "",
                "skill2": "",
                "skill3": ""
            }
        };
        this.errors = {};
    }
    SingleComponent.prototype.ngOnInit = function () {
    };
    SingleComponent.prototype.create = function () {
        var _this = this;
        var observable = this._petService.createPet(this.pet);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['status'] == 'not ok') {
                _this.errors = data['errors']['errors'];
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    SingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single',
            template: __webpack_require__(/*! ./single.component.html */ "./src/app/single/single.component.html"),
            styles: [__webpack_require__(/*! ./single.component.css */ "./src/app/single/single.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SingleComponent);
    return SingleComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Nadia/Desktop/papaya/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map