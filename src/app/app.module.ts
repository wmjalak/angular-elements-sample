import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AnalyticsCounterComponent } from './analytics-counter/analytics-counter.component';
import { AppComponent } from './app.component';

export const LIBRARY_BUILD = true;

@NgModule({
  declarations: LIBRARY_BUILD
    ? []
    : [AppComponent, AnalyticsCounterComponent],
  entryComponents: LIBRARY_BUILD ? [AnalyticsCounterComponent] : [],
  imports: [BrowserModule],
  providers: [],
  bootstrap: LIBRARY_BUILD ? [] : [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  // tslint:disable-next-line:typedef
  ngDoBootstrap() {
    if (LIBRARY_BUILD) {
      const element = createCustomElement(AnalyticsCounterComponent, {
        injector: this.injector,
      });
      customElements.define('wc-parma', element);
    }
  }
}
