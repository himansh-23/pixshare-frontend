import { Component, OnInit } from '@angular/core';
import { ImagefetchService } from 'src/app/Services/imagefetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private ImageName:string[];
  
  constructor(imagesdetails:ImagefetchService) {
    imagesdetails.getImageDetailis(3).subscribe( details => {
      this.ImageName=details});
   }

  ngOnInit() {
  }

}
