import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EditNewsComponent } from './components/EditNews/edit-news/edit-news.component';
import { EditNewsItemComponent } from './components/EditNews/edit-news-item/edit-news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    WeatherComponent,
    ContactUsComponent,
    EditNewsComponent,
    EditNewsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
