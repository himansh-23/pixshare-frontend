import { Injectable } from '@angular/core';
import { ImagefetchService } from '../imagefetch.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagedetailscontainerService {

  private allImageDetails=new BehaviorSubject([]);


  constructor() {

    
   }
}
