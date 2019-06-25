import { Component, OnInit } from '@angular/core';
import { ImagefetchService } from 'src/app/Services/imagefetch.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private ImageName:string[];
  constructor(imagesdetails:ImagefetchService) {

    imagesdetails.getImageDetailis(2).subscribe( details => {
      this.ImageName=details});
      
   }

  ngOnInit() {
    
  }




}
