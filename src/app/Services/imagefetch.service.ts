import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagefetchService {

  public userApiUrl="http://localhost:8080/user/api/"
  constructor(private httpclient:HttpClient) {

   }

   public postImage(image){
     return this.httpclient.post(this.userApiUrl+"/addimage",image);
   }
   public getImageDetailis(id:Number):Observable<string[]>{
     return this.httpclient.get<string[]>(this.userApiUrl+"userimages?id="+id);
   }


}
