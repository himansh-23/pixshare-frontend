import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {

  private userApiUrl = 'http://localhost:8080/user/api/';

  constructor(private httpclient: HttpClient) { }

  public imageUpload(file: File) {
    const formdata: FormData = new FormData();
    formdata.append('image', file);
    console.log(file);
    return this.httpclient.post<string>(this.userApiUrl + 'addimage?userId=3' , formdata);
  }

  public followingSuggestion() {
    return this.httpclient.get<any[]>(this.userApiUrl + 'follwingsuggestion?userId=2&page=0&size=5');
  }

  // tslint:disable-next-line: ban-types
  public followRequest(connectionId: Number ) {
    return this.httpclient.get(this.userApiUrl + 'createconnection?userId=2&connectionId=' + connectionId);
  }

  // tslint:disable-next-line: ban-types
  public responseRequest(requesterId: Number, response: Boolean) {

    // tslint:disable-next-line: max-line-length
    return this.httpclient.get<any[]>(this.userApiUrl + 'responseconnection?userId=2&whoSendRequest=' + requesterId + '&response=' + response);
  }

  // tslint:disable-next-line: ban-types
  public getFollowers(userId: Number): Observable<any[]> {
    return this.httpclient.get<any[]>(this.userApiUrl + 'followers?userId=' + userId);
  }

    // tslint:disable-next-line: ban-types
  public getFollowingUsers(userId: Number): Observable<any[]>{
    return this.httpclient.get<any[]>(this.userApiUrl  + 'following?userId=' + userId);
  }

}
