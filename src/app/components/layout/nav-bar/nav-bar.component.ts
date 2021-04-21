import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuard } from 'src/app/guards/auth.guard';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: ['.active  {border : solid;}'],
})
export class NavBarComponent implements OnInit {
  data: string = '';
  token: any;
  decodedToken: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.token != null) {
      this.token = localStorage.token;
    }
    if (this.token != null) {
      this.decodedToken = jwt_decode(this.token);
      console.log(this.decodedToken);
    }
    if (this.decodedToken != null) {
      this.data = this.decodedToken.isAdmin.toString();
    }

    console.log(this.data);
  }
  submit(): void {
    if (localStorage.token != null) {
      this.token = localStorage.token;
    }
    if (this.token != null) {
      this.decodedToken = jwt_decode(this.token);
      console.log(this.decodedToken);
      
    }
    if (this.decodedToken != null) {
      this.data = this.decodedToken.isAdmin.toString();
      console.log(this.data);
    }
  }
  
}
