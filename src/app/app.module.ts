import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from 'src/app/components/layout/layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VideosComponent} from './components/layout/component/videos/videos.component';
import {VideoComponent} from './components/layout/component/video/video.component';
import {MaterialModule} from 'src/app/modules/material/material.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    VideosComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
