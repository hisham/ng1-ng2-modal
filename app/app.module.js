"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var upgrade_1 = require("@angular/upgrade");
var core_2 = require("@angular/core");
exports.upgradeAdapter = new upgrade_1.UpgradeAdapter(core_2.forwardRef(function () { return AppModule; }));
var app = angular.module("app", []);
var MyApp = (function () {
    function MyApp() {
    }
    return MyApp;
}());
MyApp = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n   <button class=\"btn btn-primary\" (click)=\"lgModal.show()\">Large modal</button>\n\n    <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <h4 class=\"modal-title\">Large modal</h4>\n          </div>\n          <div class=\"modal-body\">\n            ...\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <br/><br/>\n    <a href=\"#\" tooltip=\"tipContent\" [tooltipAppendToBody]=\"true\">Check me out!</a>\n\n    <span tooltip=\"Add to Favorites\" container=\"body\" class=\"glyphicon glyphicon-star-empty\"></span>\n\n    \n  "
    }),
    __metadata("design:paramtypes", [])
], MyApp);
app.directive("myApp", exports.upgradeAdapter.downgradeNg2Component(MyApp));
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [MyApp],
        imports: [platform_browser_1.BrowserModule, ng2_bootstrap_1.ModalModule.forRoot(), ng2_bootstrap_1.TooltipModule.forRoot()]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
exports.upgradeAdapter.bootstrap(document.documentElement, ["app"]).ready(function () {
    console.log("Ng2 Ready!");
});
//# sourceMappingURL=app.module.js.map