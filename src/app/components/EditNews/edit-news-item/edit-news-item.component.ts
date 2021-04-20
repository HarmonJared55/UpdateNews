import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-news-item',
  templateUrl: './edit-news-item.component.html',
  styleUrls: ['./edit-news-item.component.css']
})
export class EditNewsItemComponent implements OnInit {
  initial:News | undefined;
  model: any = {};
  result: any = [];
  submitted: boolean = false;
  constructor(private route: ActivatedRoute, private newsService:NewsService) {}

  ngOnInit(): void {
    const{_id} = this.route.snapshot.params;
    this.model._id=_id;
    console.log("Edit News Item Init: " + this.model._id);
    this.newsService.findNewsById(this.model).subscribe((res) => {
      this.initial=res;
      console.log("Edit News item Result: " + this.initial?._id);
    });

  }

  handleSubmit() {
   /* this.authService.login(this.model).subscribe((res) => {
      console.log(JSON.stringify(res));
      localStorage.setItem('token', res.token);
      this.router.navigate(['/task']);
    });
    this.submitted = true;*/
  }

}
