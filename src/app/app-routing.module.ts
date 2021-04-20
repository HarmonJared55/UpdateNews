import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EditNewsComponent } from './components/EditNews/edit-news/edit-news.component';
import { AdminGuard } from './guards/admin.guard';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';

const routes: Routes = [
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
    path:'edit-news',
    component: EditNewsComponent,
    canActivate:[AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 