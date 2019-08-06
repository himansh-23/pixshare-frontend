import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {

  private userApiUrl="http://localhost:8080/user/api/";

  constructor(private httpclient:HttpClient) { }

  public imageUpload(file:File)
  {
    let formdata:FormData=new FormData();
    formdata.append('image',file);
    console.log(file);
    return this.httpclient.post<string>(this.userApiUrl+"addimage?userId=3",formdata);
  }

  public followingSuggestion(){
    return this.httpclient.get<any[]>(this.userApiUrl+"follwingsuggestion?userId=2&page=0&size=5");
  }

  public followRequest(connectionId:Number){
    return this.httpclient.get(this.userApiUrl+"createconnection?userId=2&connectionId="+connectionId);
  }
}
