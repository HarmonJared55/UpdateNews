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
  initial:any = {};
  model: any = {};
  result: any = [];
  submitted: boolean = false;
  constructor(private route: ActivatedRoute, private router:Router, private newsService:NewsService) {}

  ngOnInit(): void {
    const{_id} = this.route.snapshot.params;
    console.log("Edit News Item Init: " + _id);
    this.newsService.findNewsById(_id).subscribe((res) => {
      this.initial=res;
      console.log("Edit News item Result: " + this.initial?._id);
    });

  }

  handleSubmit() {
    console.log("Sending: " + JSON.stringify(this.initial))
   this.newsService.updateNews(this.initial).subscribe((res) => {
      console.log(JSON.stringify(res));
      localStorage.setItem('token', res.token);
      this.router.navigate(['/edit-news']);
    });
    this.submitted = true;
  }

}
function subscribe(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}

