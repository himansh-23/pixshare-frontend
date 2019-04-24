import { Component, OnInit } from '@angular/core';
import {UserapiService} from '../../Services/userapi.service'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private userapi:UserapiService) { }
  email:string='';
  ngOnInit() {
  }

  forgotPassword(){

    if(this.email!=="" ){

      this.userapi.forgotPassword(this.email);
  }

}
}
