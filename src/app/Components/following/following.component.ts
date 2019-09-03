import { Component, OnInit } from '@angular/core';
import { ImageserviceService } from 'src/app/Services/ImageServices/imageservice.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  private users:any[];
  private followingUser:any[];
  constructor(private imageService:ImageserviceService,private notification:MatSnackBar) {

    this.findPeople();
    this.following();

   }

  ngOnInit() {
  }

  sendFollowRequest(followId:Number){
    console.log(followId);
    this.imageService.followRequest(followId).subscribe(
      (value:any) =>{
        this.notification.open(value.responseMsg,"",{duration:2000});
        this.findPeople();
      }
    )
  }

  findPeople(){
    this.imageService.followingSuggestion().subscribe(
      (value) => {
        this.users=value;
        console.log(this.users);
        }
  )

  }

  following(){
    this.imageService.getFollowingUsers(3).subscribe(
      (value:any[]) =>{
        this.followingUser=value;
        console.log(value);
      }
    )
  }

}
