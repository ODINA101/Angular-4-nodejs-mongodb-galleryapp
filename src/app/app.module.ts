import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule,MdInputModule} from '@angular/material';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AddComponent} from './add/add.component';
import { HomeComponent } from './home/home.component';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';
import {MdProgressSpinnerModule} from '@angular/material';
const appRoutes:Routes = [
  {path:'',component:AppComponent},
  {path:'add',component:AddComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HomeComponent,
    FileDropDirective,
    FileSelectDirective
  ],
  imports: [
    NoopAnimationsModule,
    HttpModule,
    BrowserModule,
    MdInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    RouterModule.forRoot(appRoutes)



  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
