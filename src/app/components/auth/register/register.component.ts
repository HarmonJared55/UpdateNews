import { Component, OnInit } from '@angular/core';
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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  registerSubmit() {
    this.authService.createUser(this.register).subscribe((res) => {
      console.log(JSON.stringify(res));
    });
    console.log(JSON.stringify(this.register));
  }

  resetForm() {
    this.register.reset();
  }
}
