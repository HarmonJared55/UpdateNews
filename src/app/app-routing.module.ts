import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EditNewsComponent } from './components/EditNews/edit-news/edit-news.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
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
 