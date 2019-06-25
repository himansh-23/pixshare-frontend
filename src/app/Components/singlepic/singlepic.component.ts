import { Component, OnInit, NgModule, Input } from '@angular/core';
import { ImagefetchService } from 'src/app/Services/imagefetch.service';

@Component({
  selector: 'app-singlepic',
  templateUrl: './singlepic.component.html',
  styleUrls: ['./singlepic.component.css']
})
export class SinglepicComponent implements OnInit {

  @Input()
  imageurl:string;
  
  constructor(baseurl:ImagefetchService) {
    
   }

  

  ngOnInit() {
  }

}
