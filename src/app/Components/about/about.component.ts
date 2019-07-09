import { Component, OnInit } from '@angular/core';
import { ImageserviceService } from 'src/app/Services/ImageServices/imageservice.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


private fileName:string;
private file:File;
  constructor(private imageService:ImageserviceService,private notification:MatSnackBar) { }

  ngOnInit() {
  }

  filename(file:File){

      this.fileName=file.name;
      this.file=file;      
  }

  uploadFile(){

    if(this.file !==null){
      this.imageService.imageUpload(this.file).subscribe((t:any)=>
      {
        console.log(t);
        this.notification.open(t.responseMsg,"",{duration:1000});
        this.file=null;
        this.fileName=null;
      });
    }
  }
}
