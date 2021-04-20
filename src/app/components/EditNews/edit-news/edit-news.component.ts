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
  query:String = "";
  constructor(private newsService:NewsService, private router:Router) { }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((res) => {
      console.log(JSON.stringify(res));
      this.newsList=res;
    }) 
  }
  DeleteNews(id:String){
    this._id = id;
    console.log("Edit News: " + id);
    this.newsService.deleteNews(this._id).subscribe((res) =>{
      console.log(JSON.stringify(res));
    });
    this.newsService.getAllNews().subscribe((res) => {
      console.log(JSON.stringify(res));
      this.newsList=res;
    }) 
    
  }

}
