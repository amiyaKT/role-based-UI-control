import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { CustomDirectivesModule } from './custom-directives/custom-directives.module';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule, CustomDirectivesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
