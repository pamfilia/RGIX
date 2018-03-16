import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { HeaderNavigationComponent } from './components/header-nav/header-nav.component';
import { GlobalService } from './services/global.service';
import { AjaxService } from './services/ajax.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GlobalService, AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
