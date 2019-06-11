import { Component, OnInit } from '@angular/core';
import { LoginDTO} from '../../Models/login-model';
import {UserapiService} from '../../Services/userapi.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails:LoginDTO=new LoginDTO();
  loginForm: FormGroup;

  constructor(private userapi:UserapiService,private formBuilder: FormBuilder) {
    
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
    console.log(this.loginDetails);
   this.userapi.loginUser(this.loginDetails);
  }

}
