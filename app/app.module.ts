import { NgModule, Component, ViewContainerRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule, ComponentsHelper } from "ng2-bootstrap/ng2-bootstrap";

import { UpgradeAdapter } from '@angular/upgrade';
import { forwardRef } from "@angular/core";

export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));
declare var angular: any;
let app = angular.module("app", []);

@Component({
  selector: 'my-app',
  template: `
    <button class="btn btn-primary" (click)="lgModal.show()">Large modal</button>

    <div bsModal #lgModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" (click)="lgModal.hide()" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">Large modal</h4>
          </div>
          <div class="modal-body">
            ...
          </div>
        </div>
      </div>
    </div>
  `
})
class MyApp {
  constructor(componentsHelper:ComponentsHelper, vcr: ViewContainerRef){
    componentsHelper.setRootViewContainerRef(vcr);
  }
}
app.directive("myApp", upgradeAdapter.downgradeNg2Component(MyApp));

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, Ng2BootstrapModule]
})
export class AppModule { }

upgradeAdapter.bootstrap(document.documentElement, ["app"]).ready(() => {
  console.log("Ng2 Ready!");
});
