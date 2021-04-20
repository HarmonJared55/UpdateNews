import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  title = 'Angular Google Maps Example';

  lat = 19.07;
  lng = 72.87;
 

  constructor() { }

  ngOnInit(): void {
  }
  
}
