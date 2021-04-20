import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  newsList:News[]=[];
  _id:String = "";
  constructor(private newsService:NewsService, private router:Router) { }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((res) => {
      console.log(JSON.stringify(res));
      this.newsList=res;
    })
  }
  EditNews(event:any){
    this._id= event.srcElement.attributes.id;
    this.router.navigate(['/edit-task-item/' + this._id]);
  }
  DeleteNews(event:any){
    this._id = (String(event.srcElement.attributes.id));
    console.log("Edit News: " + this._id.toString());
    this.newsService.deleteNews(this._id);
    
  }

}
