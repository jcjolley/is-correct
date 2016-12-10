import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "../components/home/home";

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
