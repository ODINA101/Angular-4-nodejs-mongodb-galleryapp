import { Component, OnInit } from '@angular/core';
import {MdButtonModule,MdInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import * as io from 'socket.io-client';
import {Router} from "@angular/router";
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {FileUploader } from 'ng2-file-upload/ng2-file-upload';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
link:String;
loading = false;
socket = io('');
url = "http://192.168.1.7:8000/upload";

 public uploader:FileUploader = new FileUploader({url:this.url, itemAlias: 'photo'});
 clcked() {
   this.loading = true;
   this.router.navigate(['']);
 }

 ngOnInit() {
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
     //overide the onCompleteItem property of the uploader so we are
     //able to deal with the server response.
     this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
          console.log("ImageUpload:uploaded:", item, status, response);
          this.loading = false;

      };
    }




  constructor(public router:Router,public http:Http) {


  }

addnewphoto(data){
  console.log(data);
  this.socket.emit('newphoto',data.link);
  this.link = '';
  this.router.navigate(['']);
}





}
