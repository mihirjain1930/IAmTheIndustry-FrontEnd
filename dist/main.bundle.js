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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_facebook_sdk__ = __webpack_require__("./node_modules/ng2-facebook-sdk/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_header_login_header_component__ = __webpack_require__("./src/app/login-header/login-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_auth_gaurd_service__ = __webpack_require__("./src/app/service/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__create_post_create_post_component__ = __webpack_require__("./src/app/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__left_bar_left_bar_component__ = __webpack_require__("./src/app/left-bar/left-bar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_header_login_header_component__["a" /* LoginHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__create_post_create_post_component__["a" /* CreatePostComponent */],
                __WEBPACK_IMPORTED_MODULE_18__left_bar_left_bar_component__["a" /* LeftBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_facebook_sdk__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__["a" /* ToastrModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__service_auth_gaurd_service__["a" /* AuthGaurdService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* unused harmony export routing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_gaurd_service__ = __webpack_require__("./src/app/service/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_post_create_post_component__ = __webpack_require__("./src/app/create-post/create-post.component.ts");






var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__service_auth_gaurd_service__["a" /* AuthGaurdService */]]
    },
    {
        path: 'create-post',
        component: __WEBPACK_IMPORTED_MODULE_5__create_post_create_post_component__["a" /* CreatePostComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__service_auth_gaurd_service__["a" /* AuthGaurdService */]]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/create-post/create-post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-post/create-post.component.html":
/***/ (function(module, exports) {

module.exports = "<app-login-header></app-login-header>\n<!-- Main Content -->\n <main class=\"main clearfix\">\n\n  <app-left-bar></app-left-bar>\n\n  <!-- Dashboard Content -->\n  <div class=\"content \">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-11\">\n          <h1 class=\"title\"><span>CREATE POST</span></h1>\n          <div class=\"light-gray-bg m-height125 song-upload-frame\">\n            <div class=\"upload-btn\">\n              <a href=\"javascript:;\">Upload songs or drag and drop</a>\n              <input type=\"file\" value=\"Upload songs or drag and drop\" />\n            </div>\n            <p class=\"text-center\">1GB Max File Size / 2GB Total Storage <br> Supported file types: WAV, MP3, AIF, FLAC, AAC</p>\n          </div>\n  \n          <div class=\"light-gray-bg m-height125 song-upload-frame embed-link\">\n            <p>You have the option to embed a URL instead.</p>\n            <div class=\"link-box\"><input type=\"text\" class=\"form-control\" placeholder=\"Enter an embeddable URL here (Youtube or Vimeo) </>\" /></div>\n          </div>\n\n          <div class=\"required-text\">\n            <span>Fields Required ^</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6 col-lg-4 cover-photo\">\n          <div class=\"post-cover-image\">\n            <p>COVER IMAGE*</p>\n            <figure><img class=\"img-fluid\" src=\"../../assets/images/default-post.jpg\" alt=\"post cover\" /></figure>\n          </div>\n          <div class=\"upload-btn\">\n            <a href=\"javascript:;\">Upload image</a>\n            <input type=\"file\" value=\"Upload songs or drag and drop\" />\n          </div>\n          <p>Minimum 600x600 px. Max 20MB</p>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-lg-5 offset-lg-1 post-form\">\n          <form action=\"javascript:;\" method=\"POST\">\n            <div class=\"form-group\">\n              <label>POST TITLE*</label> <span class=\"count\">0/150</span>\n              <input type=\"text\" class=\"form-control\" />\n            </div>\n            <div class=\"form-group\">\n              <label>DESCRIPTION</label> <span class=\"count\">0/1024</span>\n              <textarea class=\"form-control\"></textarea>\n            </div>\n            <div class=\"clearfix\">\n              <div class=\"col-50\">\n                <div class=\"form-group\">\n                  <label>PRIMARY GENRE*</label>\n                  <select class=\"form-control\"><option>Select Gener</option></select>\n                </div>\n              </div>\n              <div class=\"col-50\">\n                <div class=\"form-group\">\n                  <label>TYPE</label>\n                  <select class=\"form-control\"><option>Select Type</option></select>\n                </div>\n              </div>\n            </div>\n            <div class=\"clearfix pad-top20\">\n              <div class=\"col-50\">\n                <div class=\"form-group\">\n                  <label>PRIYACY*</label>\n                  <p>Who can see this post?</p>\n                  <select class=\"form-control\"><option>Public</option></select>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-12 text-center\">\n          <div class=\"post-subscribe\">\n            <h6>Do you want to charge your subscribers for this post?</h6>\n            <div class=\"pad-top15\">\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input type=\"radio\" id=\"customRadioInline1\" name=\"customRadioInline1\" class=\"custom-control-input\" checked>\n                  <label class=\"custom-control-label\" for=\"customRadioInline1\">Yes, <span>12 subscribers currently subscribing a total of $75,00.</span></label>\n                </div>\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input type=\"radio\" id=\"customRadioInline2\" name=\"customRadioInline1\" class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"customRadioInline2\">No, <span>this is a free post.</span></label>\n                </div>\n            </div>\n\n            <div class=\"post-btn\">\n              <button class=\"btn pink-bg\" type=\"submit\">Post</button>\n              <button class=\"btn\" type=\"button\" data-toggle=\"modal\" data-target=\"#cancelModal\">Cancel</button>\n              <p>* - Required Field</p>\n            </div>\n\n            <p><span>IMPORTANT:</span> By sharing, you confirm your posts and sounds comply <br> with out <a href=\"javascript:;\">Terms of Use</a> and don’t infringe on anyone’s rights.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Dashboard Content -->\n</main>\n<!-- /Main Content -->\n\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/create-post/create-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostComponent; });
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

var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent() {
    }
    CreatePostComponent.prototype.ngOnInit = function () {
    };
    CreatePostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-post',
            template: __webpack_require__("./src/app/create-post/create-post.component.html"),
            styles: [__webpack_require__("./src/app/create-post/create-post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreatePostComponent);
    return CreatePostComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>Dashboard</h1>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Footer -->\n  <footer class=\"main-footer\">\n    <div class=\"footer-top\">\n      <div class=\"container\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6 col-lg-4 offset-lg-1 col-xl-3 offset-xl-2 content-center\">\n              <h2>Join in. Get the app.</h2>\n              <figure>\n                <a href=\"javascript:;\"><img alt=\"App Store\" class=\"img-fluid\" src=\"../../assets/images/app-store.png\" width=\"94\" height=\"29\" /></a>\n                <a href=\"javascript:;\"><img alt=\"Play Store\" class=\"img-fluid\" src=\"../../assets/images/play-store.png\" width=\"99\" height=\"29\" /></a>\n              </figure>\n            </div>\n            <div class=\"col-sm-12 col-md-6 offset-lg-1 margin-top20  content-center\">\n              <p>Follow artists, gain exclusive content, discover music and more.</p>\n              <form action=\"javascript:;\" method=\"post\" class=\"newsletter-input\">\n                <input class=\"form-control\" type=\"text\" placeholder=\"E-mail\" />\n                <input class=\"btn\"  type=\"submit\" value=\"SUBSCRIBE\" />\n              </form>\n            </div>\n          </div>\n          <div class=\" row\">\n            <div class=\"col text-center follow-us\">\n              <p>\n                <span>Follow us on: </span>\n                <a href=\"javascript::\"><i class=\"fab fa-twitter\"></i></a> \n                <a href=\"javascript::\"><i class=\"fab fa-instagram\"></i></a>\n                <a href=\"javascript::\"><i class=\"fab fa-facebook-square\"></i></a>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"footer-bottom\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 text-center\">\n              <ul>\n                <li>&copy;2018</li>\n                <li> Am The Industry Inc.</li>\n                <li><a href=\"javascript:;\">Terms of Service</a></li>\n                <li><a href=\"javascript:;\">Privacy</a></li>\n                <li><a href=\"javascript:;\">FAQ</a></li>\n                <li><a href=\"javascript:;\">Contact us</a></li>\n              </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <!-- /Footer -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Header -->\n  <header class=\"landing-header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6 col-xl-7 offset-xl-1\">\n          <a href=\"javascript::\"><img src=\"../../assets/images/industry-logo.png\" alt=\"\" class=\"img-fluid\" width=\"259\" height=\"34\"/></a>\n        </div>\n        <div class=\"col-sm-12 col-md-6 col-xl-4 header-right-col\">\n          <a routerLink=\"/login\">Login</a>\n          <a href=\"javascript:;\">How it work</a>\n          <a href=\"javascript:;\" class=\"upload-link\">Upload for artists</a>\n        </div>\n      </div>\n    </div>\n  </header>\n  <!-- /Header -->\n\n  <!-- Main Content -->\n  <main class=\"main-content\">\n    <div class=\"banner\">\n      <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-xl-11 offset-xl-1 banner-frame\">\n              <h1>Where artists and fans connect.</h1>\n              <p>Subscribe directly to your favorite artists.</p>\n              <figure>\n                <a href=\"javascript:;\"><img alt=\"App Store\" class=\"img-fluid\" src=\"../../assets/images/app-store-large.png\" width=\"159\" height=\"50\" /></a>\n                <a href=\"javascript:;\"><img alt=\"Play Store\" class=\"img-fluid\" src=\"../../assets/images/play-store-large.png\" width=\"168\" height=\"50\" /></a>\n              </figure>\n              <!-- <div class=\"scroll-down\"><a href=\"javascript:;\"><img src=\"images/scroll-down.png\" alt=\"mouse\"/></a></div> -->\n            </div>\n            <div class=\"col-sm-12 text-center banenr-right\">\n              <img src=\"../../assets/images/hand-mobile.png\" width=\"326\" height=\"545\" class=\"img-fluid\" />\n            </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- how it work -->\n    <div class=\"how-it-work\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <h2 class=\"col-sm-12 text-center\">How it works</h2>\n          <div class=\"col-sm-12 col-md-4\">\n            <figure><img src=\"../../assets/images/icon-discover.png\" alt=\"Discover emerging and major artists\" /></figure>\n            <div class=\"text-frame\">\n              <h4>Discover emerging and major artists from around the world.</h4>\n              <p>We feature the artists that you’re excited about.</p>\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-4\">\n            <figure><img src=\"../../assets/images/icon-subscribe.png\" alt=\"Subscribe to the artists\" /></figure>\n            <div class=\"text-frame\">\n              <h4>Subscribe to the artists you love on your terms.</h4>\n              <p>Set any level of subscription and cancel anytime.</p>\n            </div>\n          </div>\n          <div class=\"col-sm-12 col-md-4\">\n            <figure><img src=\"../../assets/images/icon-music.png\" alt=\"personalized music experience\" /></figure>\n            <div class=\"text-frame\">\n              <h4>Enjoy your personalized music experience.</h4>\n              <p>Gain direct access to the artist and exclusive content.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--/how it work -->\n\n    <!-- artists work -->\n    <div class=\"artists-work\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-lg-6 col-xl-5 offset-xl-1\">\n            <h2>How it works. For Artists</h2>\n            <ul>\n              <li><span><i class=\"fas fa-cloud-upload-alt\"></i></span> Upload your music and exclusive content to your profile.</li>\n              <li><span><i class=\"fas fa-signal\"></i></span> Create different subscription levels so fans can subscribe to your content.</li>\n              <li><span><i class=\"fas fa-dollar-sign\"></i></span> Get paid.</li>\n            </ul>\n          </div>\n          <div class=\"col-sm-12 col-lg-6 col-xl-5 offset-xl-1 artists-work-right\">\n            <img class=\"img-fluid\" src=\"../../assets/images/artists-work.png\" alt=\"artist work\" width=\"446\" height=\"507\"/>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /artists work -->\n  </main>\n  <!-- /Main Content -->\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
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

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/left-bar/left-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/left-bar/left-bar.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- sidebar -->\n  <div class=\"left-sidebar\">\n    <div class=\"sidebar-content\">\n      <div class=\"user-summary clearfix\">\n        <span><img [src]=\"picture\" alt=\"user avtrar\" width=\"50\" height=\"50\" class=\"img-fluid\" /></span>\n        <div class=\"summary\">\n          <h6>{{name}}</h6>\n          <small>@shinobininja</small>\n          <p>New York, NY | Indie-Rock <span>$21,655</span> per single</p>\n        </div>\n      </div>\n\n      <p class=\"bio\"><small>BIO</small> rock hard. It’s what we do. Featured on Billboard, MTV & More.</p>\n      \n      <div class=\"follower-content clearfix\">\n        <div>\n          <span class=\"float-left\">POSTS</span>\n          <span class=\"float-right\">22</span>\n        </div>\n        <div>\n          <span class=\"float-left\">SUBSCRIBERS</span>\n          <span class=\"float-right\">28</span>\n        </div>\n        <div>\n          <span class=\"float-left\">FOLLOWERS</span>\n          <span class=\"float-right\">3.4K</span>\n        </div>\n        <div>\n          <span class=\"float-left\">COMMENTS</span>\n          <span class=\"float-right\">303</span>\n        </div>\n      </div>\n    </div>\n\n    <ul>\n      <li class=\"active\"><a href=\"javascript:;\">DASHBOARD</a></li>\n      <li class=\"\"><a href=\"javascript:;\">PAYOUTS</a></li>\n      <li class=\"\"><a href=\"javascript:;\">YOUR SUBSCRIBERS</a></li>\n      <li class=\"\"><a href=\"javascript:;\">POSTS INSIGHTS</a></li>\n    </ul>\n  </div>\n  <!-- /sidebar -->"

/***/ }),

/***/ "./src/app/left-bar/left-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftBarComponent = /** @class */ (function () {
    function LeftBarComponent(service) {
        this.service = service;
    }
    LeftBarComponent.prototype.ngOnInit = function () {
        this.getDetails();
    };
    LeftBarComponent.prototype.getDetails = function () {
        var _this = this;
        var id = localStorage.getItem('id');
        this.getDetail = this.service.getDetails(id).then(function (res) {
            if (res.status == 200) {
                _this.name = res.data.name;
                _this.picture = res.data.picture;
            }
        });
    };
    LeftBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-left-bar',
            template: __webpack_require__("./src/app/left-bar/left-bar.component.html"),
            styles: [__webpack_require__("./src/app/left-bar/left-bar.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]])
    ], LeftBarComponent);
    return LeftBarComponent;
}());



/***/ }),

/***/ "./src/app/login-header/login-header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-header/login-header.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Header -->\n  <header class=\"main-header\">\n    <div class=\"container-fluid clearfix\">\n      <div class=\"float-left header-left\">\n        <img src=\"../../assets/images/industry-circle-logo.png\" alt=\"\" width=\"36\" height=\"34\" class=\"img-fluid\" />\n        <a href=\"javascript:;\">Home</a>\n      </div>\n      <div class=\"float-right header-right\">\n        <span class=\"wallet\">$ 23.5 K</span>\n        <div class=\"post\">\n          <select>\n            <option>Pre Post</option>\n            <option>Pre Post 1</option>\n            <option>Pre Post 2</option>\n            <option>Pre Post 3</option>\n          </select>\n        </div>\n        <div class=\"dropdown\">\n          <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <img [src]=\"picture\" alt=\"user avtar\"> {{name}}\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">Message</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Setting</a>\n            <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <!-- /Header -->"

/***/ }),

/***/ "./src/app/login-header/login-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginHeaderComponent = /** @class */ (function () {
    function LoginHeaderComponent(toastr, _router, service) {
        this.toastr = toastr;
        this._router = _router;
        this.service = service;
    }
    LoginHeaderComponent.prototype.ngOnInit = function () {
        this.getDetails();
    };
    LoginHeaderComponent.prototype.getDetails = function () {
        var _this = this;
        var id = localStorage.getItem('id');
        this.getDetail = this.service.getDetails(id).then(function (res) {
            if (res.status == 200) {
                _this.name = res.data.name;
                _this.picture = res.data.picture;
                _this.userEmail = res.data.email;
            }
        });
    };
    LoginHeaderComponent.prototype.logout = function () {
        var _this = this;
        this.logoutUser = this.service.logoutUser(this.userEmail).then(function (res) {
            if (res.status == 200) {
                localStorage.removeItem('id');
                _this._router.navigate(['/']);
            }
            else {
                _this.toastr.error("Can not logout.");
            }
        });
    };
    LoginHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-header',
            template: __webpack_require__("./src/app/login-header/login-header.component.html"),
            styles: [__webpack_require__("./src/app/login-header/login-header.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]])
    ], LoginHeaderComponent);
    return LoginHeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Header -->\n  <header class=\"login-header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-11 offset-md-1\">\n          <a href=\"javascript::\"><img src=\"../../assets/images/industry-logo.png\" alt=\"\" class=\"img-fluid\"/></a>\n        </div>\n      </div>\n    </div>\n  </header>\n  <!-- /Header -->\n\n  <!-- Main Content -->\n  <main class=\"login-main-content\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"user-account-frame\">\n            <!-- header -->\n            <div class=\"user-account-header\">\n              <h1>Dashboard for Artists</h1>\n              <p>Please login to your account.</p>\n            </div>\n            <!-- body -->\n            <div class=\"user-account-body\">\n              <div class=\"body-frame\">\n                <a href=\"javascript:;\" class=\"account-link blue-color\" (click)=\"facebookLogin()\"><i class=\"fab fa-facebook-f\"></i> Log in with Facebok</a>\n                <a href=\"javascript:;\" class=\"account-link orange-color\" id=\"googleBtn\"><i class=\"fab fa-google\"></i> Log in with Google</a>\n                <p class=\"or-text\">OR</p>\n                <form [formGroup]=\"loginForm\">\n                  <!-- <div class=\"error-msg\">Incorrect e-mail or password</div> -->\n                  <div class=\"form-group\">\n                    <input class=\"form-control\" formControlName=\"email\" type=\"text\" placeholder=\"E-mail\"/>\n                  </div>\n                  <div *ngIf=\"loginForm.controls['email'].errors && loginForm.controls['email'].touched\" class=\"error-msg\">\n                    <div [hidden]=\"!loginForm.controls['email'].errors.required\">You have to fill in Email to login.</div>\n                    <div [hidden]=\"!loginForm.controls['email'].errors.minlength\">Min 5 characters required.</div>\n                    <div [hidden]=\"!loginForm.controls['email'].errors.maxlength\">Max 50 characters allowed.</div>\n                  </div>\n                  <div class=\"form-group\">\n                    <input class=\"form-control\" formControlName=\"password\" type=\"password\" placeholder=\"Password\"/>\n                    <div class=\"forgot-link\"><a href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#passwordModal\">Forgot Password&#63;</a></div>\n                  </div>\n                  <div *ngIf=\"loginForm.controls['password'].errors && loginForm.controls['password'].touched\" class=\"error-msg\">\n                    <div [hidden]=\"!loginForm.controls['password'].errors.required\">You have to fill in Password to login.</div>\n                    <div [hidden]=\"!loginForm.controls['password'].errors.minlength\">Minimum 8 characters required.</div>\n                    <div [hidden]=\"!loginForm.controls['password'].errors.maxlength\">Maximum 30 characters allowed.</div>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"submit\" class=\"btn-block account-link pink-color\" value=\"Log in\" (click)=\"login()\"[disabled]=\"!loginForm.valid\" />\n                  </div>\n                </form>\n                <p class=\"term-link\">By signing in, you agre to our <br> <a href=\"javascript:;\">Terms of Use</a> &amp; <a href=\"javascript:;\">Privacy Policy</a></p>\n              </div>\n            </div>\n            <!-- footer -->\n            <div class=\"user-account-footer\">\n              <h2>Don’t have an account?</h2>\n              <p>Sign up on the app.</p>\n              <figure>\n                <a href=\"javascript:;\"><img alt=\"App Store\" class=\"img-fluid\" src=\"../../assets/images/app-store.png\" width=\"94\" height=\"29\" /></a>\n                <a href=\"javascript:;\"><img alt=\"Play Store\" class=\"img-fluid\" src=\"../../assets/images/play-store.png\" width=\"99\" height=\"29\" /></a>\n              </figure>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n  <!-- /Main Content -->\n\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_facebook_sdk__ = __webpack_require__("./node_modules/ng2-facebook-sdk/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, zone, _router, service, toastr, fb) {
        this.formBuilder = formBuilder;
        this.zone = zone;
        this._router = _router;
        this.service = service;
        this.toastr = toastr;
        this.fb = fb;
        this.Google_App_Id = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].config.GOOGLE_CLIENT_ID;
        this.Fb_App_Id = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].config.FB_APP_ID;
        this.initParams = {
            appId: this.Fb_App_Id,
            version: 'v1.0',
            xfbml: true
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.googleInit();
        this.fb.init(this.initParams);
        this.loginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(50)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30)])]
        });
    };
    LoginComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: _this.Google_App_Id,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            _this.attachSignin(document.getElementById('googleBtn'));
        });
    };
    LoginComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            var userDetails = {
                profile: profile,
                loginType: 3
            };
            _this.gService = _this.service.signup(userDetails).then(function (res) {
                if (res.status == 400 || res.status == 200) {
                    localStorage.setItem('id', res.data._id);
                    _this.zone.run(function () {
                        _this.toastr.success("Login successful");
                        _this._router.navigate(['/create-post']);
                    });
                }
            });
        }, function (error) {
            console.log(JSON.stringify(error, undefined, 2));
        });
    };
    LoginComponent.prototype.facebookLogin = function () {
        this.fb.login()
            .then(function (response) {
            console.log(response);
        }).catch(function (err) {
            console.log('error while login');
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_facebook_sdk__["b" /* FacebookService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(_router, http) {
        this._router = _router;
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.BASE_URL;
    }
    LoginService.prototype.signup = function (userDetails) {
        return this.http.post(this.BASE_URL + "user/usersignup", { userDetails: userDetails }).
            toPromise().then(function (res) { return res.json(); });
    };
    LoginService.prototype.getDetails = function (token) {
        return this.http.get(this.BASE_URL + "user/userdetails/" + token).
            toPromise().then(function (res) { return res.json(); });
    };
    LoginService.prototype.logoutUser = function (email) {
        return this.http.get(this.BASE_URL + "user/logout/" + email).
            toPromise().then(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/service/auth-gaurd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGaurdService = /** @class */ (function () {
    function AuthGaurdService(router) {
        this.router = router;
    }
    AuthGaurdService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('id')) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGaurdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGaurdService);
    return AuthGaurdService;
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
    production: false,
    config: {
        APP_NAME: "I Am The Industry",
        SOCKET_URL: "http://localhost:3000",
        BASE_URL: "http://localhost:3000/",
        API_URL: "https://iamindustrybackend.herokuapp.com",
        GOOGLE_CLIENT_ID: "811009371370-ej6g6d375vg7lfhrkqb2srkp5fdi5s8e.apps.googleusercontent.com",
        FB_APP_ID: "312645405934882"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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