import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  news:News[] = [];

  urls:string[] = [];
  urlOne:string;
  urlTwo:string;
  urlThree:string;
  constructor(private newsService:NewsService) {  }

  ngOnInit(): void {

    this.newsService.getLatestThree().subscribe((res) =>{
      for (let index = 0; index < res.length; index++) {
        let id = res[index]._id;
        let title = res[index].title;
        let description = res[index].description;
        let url = res[index].url;
        let urlToImage = res[index].urlToImage;
        let publishedAt = new Date(res[index].publishedAt);
        let isSports = res[index].isSports;
        this.urls.push(urlToImage);
        this.news.push(new News(id,title,description,url,urlToImage,publishedAt,isSports));
      }
      this.urlOne = this.urls[0];
      this.urlTwo = this.urls[1];
      this.urlThree = this.urls[2];
    })

  }

}
