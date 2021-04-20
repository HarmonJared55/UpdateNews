import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: any = {};
  error: any = {};
  submitted: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerSubmit() {
    this.authService.createUser(this.register).subscribe((res) => {
      console.log(JSON.stringify(res));
    });
    console.log(JSON.stringify(this.register));
    this.router.navigate(['/login']);
  }

  resetForm() {
    this.register.reset();
  }
}
