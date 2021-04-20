import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-register-news',
  templateUrl: './register-news.component.html',
  styleUrls: ['./register-news.component.css']
})
export class RegisterNewsComponent implements OnInit {

  model: any = {};

  constructor(private newsService:NewsService, private router:Router) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log("Registering News: " + JSON.stringify(this.model))
   this.newsService.registerNews(this.model).subscribe((res) => {
      console.log(JSON.stringify(res));
      this.router.navigate(['/edit-news']);
    });
  }
}
