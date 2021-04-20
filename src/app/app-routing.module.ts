import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EditNewsComponent } from './components/EditNews/edit-news/edit-news.component';
import { AdminGuard } from './guards/admin.guard';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { SportsComponent } from './components/sports/sports.component';

const routes: Routes = [
  {
    path: '', 
    component: HomePageComponent,
  },
  {
    path: 'login', 
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'homePage',
    component: HomePageComponent
  },
  {
    path:'edit-news',
    component: EditNewsComponent,
    canActivate:[AdminGuard]
  },
  {
    path: 'sports',
    component: SportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 