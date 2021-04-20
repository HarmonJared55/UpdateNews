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

  constructor(private newsService:NewsService) {  }

  ngOnInit(): void {

    this.newsService.getLatestThree().subscribe((res) =>{
      for (let index = 0; index < res.length; index++) {
        let id = res[index]._id;
        let title = res[index].title;
        let description = res[index].description;
        let urlToImage = res[index].urlToImage;
        let isSports = res[index].isSports;
        this.news.push(new News(id,title,description,urlToImage,isSports));
      }
      console.log(this.news);
    })

  }

}
