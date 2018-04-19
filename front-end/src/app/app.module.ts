import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './services/global.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app-component/app.component';
import { HeaderNavigationComponent } from './components/header-nav/header-nav.component';
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
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
