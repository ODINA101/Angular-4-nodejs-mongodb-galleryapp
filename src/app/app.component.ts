import { Component } from '@angular/core';
import {MdButtonModule} from '@angular/material';
import * as io from 'socket.io-client';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {MdProgressSpinnerModule} from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgs = [];
loading = true;

  socket = io('');
  constructor(private http:Http) {

    this.http.get('http://192.168.1.7:8000/imgs')
    .map(res => res.json())
    .subscribe(res => {this.imgs = res; this.loading=false});


  }


}
