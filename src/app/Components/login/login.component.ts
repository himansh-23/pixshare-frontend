import { Component, OnInit } from '@angular/core';
import { LoginDTO} from '../../Models/login-model';
import {UserapiService} from '../../Services/userapi.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails:LoginDTO=new LoginDTO();
  loginForm: FormGroup;

  constructor(private userapi:UserapiService,private formBuilder: FormBuilder,private notification:MatSnackBar,private router:Router) {
    
    this.loginForm = this.formBuilder.group({
      'email': [this.loginDetails.email, [
        Validators.required,
        Validators.email]],
        'password':[this.loginDetails.password,[
          Validators.required,
          Validators.min(8),
          Validators.max(12),
        ]]});
   }

  ngOnInit() {    
  }

   login()
  {
   this.userapi.loginUser(this.loginDetails).subscribe(
     (result:any) =>
     {
       console.log(result);
       if(result.body.responseCode ==200){
      this.notification.open(result.body.responseMsg,"",{duration:2000}); 
      localStorage.setItem('Token',result.headers.get('jwttoken'))
       this.router.navigate(['./dashboard']);
       }
     },
     error =>{
       console.log(error);
     }
   )
  }

}
