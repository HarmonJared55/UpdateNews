import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ReactiveFormsModule} from '@angular/forms';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ImgSliderComponent } from './components/img-slider/img-slider.component';
import { NgImageSliderModule} from 'ng-image-slider';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EditNewsComponent } from './components/EditNews/edit-news/edit-news.component';
import { EditNewsItemComponent } from './components/EditNews/edit-news-item/edit-news-item.component';
import { SportsComponent } from './components/sports/sports.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AboutUsComponent,
    ImgSliderComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    WeatherComponent,
    ContactUsComponent,
    ImageSliderComponent,
    HomePageComponent,
    EditNewsComponent,
    EditNewsItemComponent,
    SportsComponent,
    ChatComponent,
    ContactUsComponent,
    ImageSliderComponent,
    HomePageComponent,
    EditNewsComponent,
    EditNewsItemComponent,
    LatestNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
