import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterDTO } from '../Models/register-model'
import {UserapiService} from '../Services/userapi.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerUserDetails: RegisterDTO=new RegisterDTO();
  constructor(private formBuilder: FormBuilder,private userapi:UserapiService) {

    this.registerForm = this.formBuilder.group({
      'email': [this.registerUserDetails.email, [
        Validators.required,
        Validators.email]],
        'password':[this.registerUserDetails.password,[
          Validators.required,
          Validators.min(8),
          Validators.max(12),
        
        ]],
        'username':[this.registerUserDetails.userName,[
          Validators.required,
          Validators.min(5),
          Validators.max(12)]],
          'mobilenumber':[this.registerUserDetails.mobileNumber,[
            Validators.required,
            Validators.max(10),
            Validators.min(10)
          ]]
    });
  }

  ngOnInit() {
  }

  public register() {
    console.log(this.registerUserDetails);
    this.userapi.registerUser(this.registerUserDetails).subscribe(
      response => {
        console.log(response);
      }
    );

  }

}
