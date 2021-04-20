import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  urlOne: string;
  urlTwo: string;
  urlThree: string;
  titleOne:string;
  titleTwo:string;
  titleThree:string;

  titles:string[] = [];
  urls: string[] = [];
  news: News[] = [];

  

  constructor(private newsService:NewsService) {
    
  }

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
        this.titles.push(title);
        this.news.push(new News(id,title,description,url,urlToImage,publishedAt,isSports));
      }
      this.urlOne = this.urls[0];
      this.urlTwo = this.urls[1];
      this.urlThree = this.urls[2];
      this.titleOne = this.titles[0];
      this.titleTwo = this.titles[1];
      this.titleThree = this.titles[2];
    })

  }


}
