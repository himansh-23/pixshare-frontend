import { Component, OnInit } from '@angular/core';
import { ImageserviceService } from 'src/app/Services/ImageServices/imageservice.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

   private persons: any[] = [];
   private myfollowers: any[] = [];

  constructor(private imageService: ImageserviceService, private notification: MatSnackBar) {

  }

  ngOnInit() {

    this.imageService.getFollowers(2).subscribe( ttx =>
      this.myfollowers = ttx
       );

    const value = {
      name: 'Himanshu',
      image: 'link1'
    };

    const value2 = {
      name: 'John',
      image: 'link2'
    };

    this.persons.push(value);
    this.persons.push(value2);


    // const value3 = {
    //   name: 'xyz',
    //   image: 'link1'
    // };

    // const value4 = {
    //   name: 'tsl',
    //   image: 'link2'
    // };

    // this.myfollowers.push(value3);
    // this.myfollowers.push(value4);

  }

  // tslint:disable-next-line: ban-types
  responseToRequest(userId: Number, response: Boolean) {

    this.imageService.responseRequest(userId, response).subscribe(
      // tslint:disable-next-line: no-shadowed-variable
      (response: any) => {
        this.notification.open(response.responseMsg, '', {duration: 2000});
      }
    );
  }

}
