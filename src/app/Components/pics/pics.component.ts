import { Component, OnInit } from '@angular/core';
import { ImagefetchService } from 'src/app/Services/imagefetch.service';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit {

  private ImageName: string[];

  constructor(private imagesdetails: ImagefetchService) {
   }

  ngOnInit() {
    this.imagesdetails.getPersonalImage(1).subscribe(
      imagesDetails => this.ImageName = imagesDetails
    );

  }
}
