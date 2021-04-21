import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { update } from 'Server/models/user';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  tempList:News[]=[];
  newsList:News[]=[];
  _id:String = "";
  query:String = "";
  newsVisible:number = 3;
  i:number = 0;
  constructor(private newsService:NewsService, private router:Router) { }

  ngOnInit(): void {
    this.updateNews(); 
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
      this.updateSearch();
    }) 
    
  }



  updateNews(){
    console.log("Number: " + this.newsVisible);
    console.log("Query: " + this.query);
    this.newsService.getAllNews().subscribe((res) => {
      this.tempList=res;
      console.log("Result: " + JSON.stringify(this.tempList));
      this.updateSearch();
      if(this.newsVisible && this.tempList.length > this.newsVisible){
        this.tempList.length = this.newsVisible;
      }
      this.newsList=this.tempList;
    }) 
  }





  updateSearch(){
    if(this.query && this.query != ""){
    const total = this.tempList.length;
    for (this.i = 0; this.i < total; this.i++){
    this.tempList.forEach(element => {
      if(element.description.toUpperCase().indexOf(this.query.toUpperCase()) == -1){
        console.log("Removing: " + element.title);
        this.tempList.splice(this.tempList.indexOf(element), 1);
      }
    });
    console.log("Result: " + JSON.stringify(this.tempList));
  }
}
}
}
