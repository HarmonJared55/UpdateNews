import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  result: any = [];
  submitted: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  handleSubmit() {
    this.authService.login(this.model).subscribe((res) => {
      console.log(JSON.stringify(res));
      localStorage.setItem('token', res.token);
      const token = localStorage.token;
      if(token){
        const decodedToken: any = jwt_decode(token);
        if(decodedToken.isAdmin){
          this.router.navigate(['/edit-news']);
        }else{
          this.router.navigate(['/homePage']);
        }
      }
      
    });
    this.submitted = true;
  }

}
