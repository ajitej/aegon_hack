webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_perfect_scrollbar__ = __webpack_require__("../../../../angular2-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_perfect_scrollbar__["PerfectScrollbarModule"].forRoot(PERFECT_SCROLLBAR_CONFIG)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__service_api_service__["a" /* ApiService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#headerContainer{\n    width:100%;\n    height: 120px;\n    background-color: transparent;\n    margin-top: -10px;\n}\n\n.headerTop{\n    background-color:white;\n}\n\n.headerTop .logo{\n    width:160px;\n    padding:20px;\n\n}\n\n.headerTop .helpLink a{        \n    position: absolute;\n    right: 20px;\n    top: 30px;\n    background-color: white;\n    padding: 15px;\n    border: 1px solid #f2f2f2;\n    text-decoration: none;\n   // font-family: sans-serif;\n    color: #666;\n    border-radius: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"headerContainer\">\n    <div class=\"headerTop\">\n        <div class=\"logo\">\n            <img src=\"/assets/img/aegon-logo.svg\">\n        </div>\n        <div class=\"helpLink\"><a href=\"#\">Help and Support</a></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatHeader {\n  position: fixed;\n  margin-top: -12px;\n}\n\n.chatBeginning {\n    position: absolute;\n  \tmargin-top: 150px;\n  \tmargin-left: 110px;\n    width: 80%;\n}\n\ninput[type=\"text\"] {\n  width: 80%;\n  font-size: 18px;\n}\n\ninput[type=\"submit\"] {\n    text-decoration: none !important;\n    background-color: #E0EEEE;\n    border-radius: 5px;\n    color: black;\n    margin-right: 10px;\n    padding: 6px 10px 6px 10px;\n}\n\n.firstQues {\n\tcolor: blue;\n}\n\n.fixedChatInput {\n  position: fixed; \n  bottom:0%;\n  width:80%; \n}\n\n/*.scrollChat {\n  position: fixed; \n  bottom:10%;\n  width:80%; \n  overflow: scroll;\n  height: 400px;\n}*/\n\n.styleUserInput {\n  text-align: left;\n}\n\n.styleBotOutput {\n  text-align: right;\n}\n\n.chatStyle {\n  position: fixed; \n  bottom:10%;\n  width:80%; \n}\n\n.contentContainer{\n    /* remove for srollable container */\n    position: fixed;\n    bottom:0;\n    margin-bottom: 120px;\n    width: 100%;\n}\n\n.scrollChat {\n  bottom:0;\n  margin-bottom: 120px;\n  width: 100%;\n  position: fixed; \n  overflow: scroll;\n  overflow-x: hidden;\n  height: 290px;\n}\n\np.botComment{\n    position: relative;\n    float: right;\n    clear: both;\n    background-color: #CCEAF5;\n    border-radius: 5px;\n    padding: 20px;\n    margin-left: 40px;\n    font-size: 18px;\n   // font-family: sans-serif;\n    max-width: 300px;           \n    margin-bottom: 0px;\n    margin-right: 90px;\n    display: block;\n\n  }\n\n  p.botComment::after{\n   content: \"\";\n   \n    background: transparent url('/assets/img/anna-avatar.svg') no-repeat;\n    position: absolute;\n    top:0;\n    right:-60px;\n    width: 60px;\n    height: 60px;\n    display: inline-block;\n\n  }\n\np.userComment{\n    position: relative;\n    float: left;\n    clear:both;\n    background-color: #ffffff;\n    border-radius: 5px;\n    padding: 20px;\n    margin-left: 70px;\n    font-size: 18px;\n   // font-family: sans-serif;\n    max-width: 300px;           \n    margin-bottom: 0px;\n    display: block;\n \n}\n\np.userComment:before{\ncontent: 'Me:';\n    color:white;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -40px;\n  top: 18px;\n/*\n  border: 15px solid;\n  border-color:  #fff  transparent transparent transparent ;\n*/\n    \n}\n\n#initialInput{\n    width:100%;\n    background-color: rgba(0, 60, 100, 0.67);\n    padding:20px;\n    position: absolute;\n    top: 320px;\n}\n\n#initialInput input{\n    height: 30px;\n    width: 85%;\n    font-size: 18px;\n    padding: 10px;\n}\n\n#initialInput button{\n    box-sizing: content-box;        \n    background: none;\n    border: 0;\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    overflow: visible;\n    padding: 0;\n    -webkit-appearance: button; /* for input */\n    -webkit-user-select: none; /* for button */\n       -moz-user-select: none;\n        -ms-user-select: none;\n        \n    background-color: #f0f0f0;\n    border: 1px solid rgb(0, 0, 0);\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 0.25em;\n    height: 54px;\n    line-height: 2.5;\n    margin: 0.25em;\n    padding: 0 1em;\n    //width: 16px;\n        color: #114F8E;\n        font-family: sans-serif;\n    }\n\n#footerContainer{\n    width:96.9%;\n    background-color: rgba(0, 60, 100, 0.67);\n    padding:20px;\n    position: absolute;\n    bottom: 0;\n}\n\n#footerContainer input{\n    height: 30px;\n    width: 85%;\n    font-size: 18px;\n    padding: 10px;\n    margin-left: 30px;\n}  \n\n\nbutton::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n    \n    [role=\"button\"] {\n    color: inherit;\n    cursor: default;\n    display: inline-block;\n    text-align: center;\n    text-decoration: none;\n    white-space: pre;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n}\n    \n    #footerContainer button{\n    box-sizing: content-box;        \n    background: none;\n    border: 0;\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    overflow: visible;\n    padding: 0;\n    -webkit-appearance: button; /* for input */\n    -webkit-user-select: none; /* for button */\n       -moz-user-select: none;\n        -ms-user-select: none;\n        \n    background-color: #f0f0f0;\n    border: 1px solid rgb(0, 0, 0);\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 0.25em;\n    height: 54px;\n    line-height: 2.5;\n    margin: 0.25em;\n    padding: 0 1em;\n    //width: 16px;\n        color: #114F8E;\n        font-family: sans-serif;\n    }\n\n.headerBottom{\n    background-color: transparent;\n     background-color: rgba(0, 60, 100, 0.67);\n    border-bottom: 1px solid #ccc;\n    margin-top: -5px;\n}\n\n.headerBottom img{\n    width:300px;\n    padding:5px 10px;\n}\n\n.headerBottom .botLinks{\n    float: right;\n    position: absolute;\n    right:10px;\n    top:137px;       \n}\n\n.headerBottom .botLinks a{\n  background-color: white;\n  padding: 15px;\n  border: 1px solid #f2f2f2;\n  text-decoration: none;\n  // font-family: sans-serif;\n  color: #666;\n  border-radius: 5px;\n  margin-right: 10px;\n}    \n\n#contentContainerSignIn{\n        /* remove for srollable container */\n        height: 400px;\n        margin-top: 100px;\n      \n    }\n\n.formClass {\n        display: block;\n        background-color: #fff;\n        margin: 0 auto;\n        width: 600px;\n        padding: 30px;\n    }\n    \n    .labelClass{\n        display: inline-block;\n        width: 120px;\n    }\n    \n    .inputClass{\n        height: 40px;\n        width: 60%;\n        display: inline-block;\n        margin-bottom: 20px;\n        padding:10px;\n        font-size: 18px;\n    }\n    \n    \n    form button{\n    box-sizing: content-box;        \n    background: none;\n    border: 0;\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    overflow: visible;\n    padding: 0;\n    -webkit-appearance: button; /* for input */\n    -webkit-user-select: none; /* for button */\n       -moz-user-select: none;\n        -ms-user-select: none;\n        \n    background-color: #005996;\n    border: 1px solid rgb(0, 0, 0);\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 0.25em;\n    height: 54px;\n    line-height: 2.5;\n    margin: 0.25em;\n    padding: 0 1em;\n    //width: 16px;\n        color: #fff;\n        font-size: 18px;\n        \n    \n       margin-left: 275px;\n        margin-bottom: 20px;\n    }\n    \n    form a {\n        color:#005996;\n     \n    }  \n\n.styleStaticText {\n  color: white;\n  margin-top: 170px;\n  font-size: 33px;\n  margin-left: 19px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section *ngIf=\"!showLogin\">\n\t<div class=\"headerBottom\" *ngIf=\"fixedChatInput\">\n          <div class=\"annaLogo\">\n              <img src=\"/assets/img/anna-logo-white.svg\">\n         </div>\n        <div class=\"botLinks\"><a href=\"#\">Help with chat</a><a href=\"#\">Close conversation</a></div>\n    </div>\n    <h2 *ngIf=\"!fixedChatInput\" class=\"styleStaticText\">{{initalQues}}</h2>\n\t<div id=\"initialInput\" *ngIf=\"!fixedChatInput\">\n\t\t<form (ngSubmit)=\"sendInput(userInput)\" #userInput=\"ngForm\" class=\"form\">\n\t\t\t<input name=\"ques\" ngModel type=\"text\" id=\"input\" class=\"form-control\" #ques=\"ngModel\"/>\n\t\t\t<button type=\"submit\" class=\"\">Send</button>\n\t\t</form>\t\n\t</div>\n\n\n\t<div *ngIf=\"fixedChatInput\" class=\"contentContainer\" [ngClass]=\"{'scrollChat': isClassVisible }\" [style.height]=\"getStyle()\" #scrollMe>\n\t\t\t<div *ngFor=\"let chat of chats\">\n\t\t\t\t\t<p class=\"userComment\">{{chat.user}}</p>\n\t\t\t\t\t<p class=\"botComment\">{{chat.bot}}</p>\n\t\t\t</div>\n\t\t\t<p *ngIf=\"showQuestion\" class=\"userComment\">{{ques}}</p>\t\n\t</div>\t\n\t<div id=\"footerContainer\" *ngIf=\"fixedChatInput\">\n\t\t<form (ngSubmit)=\"sendInputFooter(userInputFooter)\" #userInputFooter=\"ngForm\" class=\"form\">\n\t\t\t<input name=\"ques\" ngModel type=\"text\" id=\"input\" class=\"form-control\" #ques=\"ngModel\"/>\n\t\t\t<button type=\"submit\" class=\"\">Send</button>\n\t\t</form>\t\n\t</div>\n</section>\n\n<section *ngIf=\"showLogin\">\n\t<div id=\"contentContainerSignIn\">\n\t\t<form (ngSubmit)=\"userLogin(user)\" #user=\"ngForm\" class=\"formClass\" role=\"form\">\n\t\t\t<h2>Sign in</h2>\n\t\t\t<span class=\"labelClass\">Email address:</span>\n\t\t\t<input name=\"username\" ngModel #username=\"ngModel\" class=\"inputClass\"/>\n\t\t\t<br/>\n            <span class=\"labelClass\">Password:</span>\n\t\t\t<input type=\"password\" ngModel name=\"pass\" #pass=\"ngModel\" class=\"inputClass\"/>\n\t\t\t<br/>\n            <a href=\"#\">Forgotten password?</a>\n\t\t\t<button type=\"submit\" class=\"btn btn-secondary\">Sign in</button>\n\t\t</form>\t\n\t</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(apiService) {
        this.apiService = apiService;
        this.initalQues = 'How can I help you today?';
        this.chats = [];
        this.fixedChatInput = false;
        this.showQuestion = false;
        this.showLogin = false;
        this.fulfillmentArray = [];
        this.isClassVisible = false;
    }
    HomeComponent.prototype.sendInput = function (userInput) {
        var _this = this;
        this.showQuestion = true;
        this.ques = userInput.value.ques;
        this.apiService.get(this.ques).subscribe(function (response) {
            _this.resp = response.result.resolvedQuery;
            //console.log(this.resp);
            _this.userMessage = response.result.resolvedQuery;
            _this.botMessage = response.result.fulfillment.speech;
            _this.fulfillmentArray = response.result.fulfillment.messages;
            if (_this.botMessage == "") {
                _this.botMessage = 'Sorry, there has been a break in our connection. I will try to re-connect.';
            }
            var chatObject = {
                user: _this.userMessage,
                bot: _this.botMessage
            };
            var newMessages = chatObject;
            var flag = __WEBPACK_IMPORTED_MODULE_2_underscore__["map"](_this.fulfillmentArray, function (message) {
                return message.type == 4;
            });
            var arrLength = flag.length;
            if (flag.indexOf(true) > -1) {
                _this.showLogin = true;
            }
            _this.chats.push(newMessages);
            _this.ques = '';
            _this.showQuestion = false;
        }, function (error) { return _this.errorMessage = error; });
        //console.log(userInput.value.ques);
        this.fixedChatInput = true;
        userInput.resetForm();
    };
    HomeComponent.prototype.sendInputFooter = function (userInputFooter) {
        var _this = this;
        this.showQuestion = true;
        this.ques = userInputFooter.value.ques;
        this.apiService.get(this.ques).subscribe(function (response) {
            _this.resp = response.result.resolvedQuery;
            //console.log(this.resp);
            _this.userMessage = response.result.resolvedQuery;
            _this.botMessage = response.result.fulfillment.speech;
            _this.fulfillmentArray = response.result.fulfillment.messages;
            if (_this.botMessage == "") {
                _this.botMessage = 'Sorry, there has been a break in our connection. I will try to re-connect.';
            }
            var chatObject = {
                user: _this.userMessage,
                bot: _this.botMessage
            };
            var newMessages = chatObject;
            var flag = __WEBPACK_IMPORTED_MODULE_2_underscore__["map"](_this.fulfillmentArray, function (message) {
                return message.type == 4;
            });
            var arrLength = flag.length;
            if (flag.indexOf(true) > -1) {
                _this.showLogin = true;
            }
            _this.chats.push(newMessages);
            _this.ques = '';
            _this.showQuestion = false;
            if (_this.chats.length > 2) {
                _this.isClassVisible = true;
            }
        }, function (error) { return _this.errorMessage = error; });
        //console.log(userInput.value.ques);
        userInputFooter.resetForm();
    };
    HomeComponent.prototype.userLogin = function (user) {
        this.userName = user.value.username;
        this.password = user.value.pass;
        this.showLogin = false;
    };
    HomeComponent.prototype.getStyle = function () {
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.scrollToBottom();
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    HomeComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], HomeComponent.prototype, "myScrollContainer", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.api_url = 'https://api.api.ai/api/query?v=20150910&query=';
        this.remaining_path = '&lang=en&sessionId=c597f128-4e0c-47b2-a981-150d8b9061a3&timezone=2017-06-15T15:25:22+0200';
    }
    ApiService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer f96a3df951174a43bd3254d504702683' });
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return requestOptions;
    };
    ApiService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    ApiService.prototype.get = function (input) {
        var request = this.http.get(this.api_url + input + this.remaining_path, this.getHeaders());
        return request.map(function (res) { return res.json(); })
            .catch(this.handleError)
            .share();
    };
    ApiService.prototype.post = function (path, params) {
        return this.http.post(this.api_url + "/" + path + "/?format=json", params)
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .share();
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map