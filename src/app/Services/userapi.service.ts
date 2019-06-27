import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import {RegisterDTO} from '../Models/register-model'
import { LoginDTO } from '../Models/login-model';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private httpclient:HttpClient) { }

  private userApiUrl="http://localhost:8080/user/api/"
  
    public registerUser(registerDTO:RegisterDTO):any
    {
      return this.httpclient.post<RegisterDTO>(this.userApiUrl+"register",registerDTO);
    }

    public loginUser(loginDTO:LoginDTO):any
    {
      return this.httpclient.post(this.userApiUrl+"login",loginDTO,{observe:'response'});
    }

    public forgotPassword(email:string)
    {
      return this.httpclient.post<string>(this.userApiUrl+"forgotpassword",email);
    }
}
