import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { createCustomElement } from '@angular/elements';
import { ListProductsComponent } from './list-products/list-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [

    ListProductsComponent

  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const strategyFactory = new ElementZoneStrategyFactory(ListProductsComponent, this.injector);
    const el = createCustomElement(ListProductsComponent, { injector: this.injector, strategyFactory });

    customElements.define('list-products', el);
  }
}
