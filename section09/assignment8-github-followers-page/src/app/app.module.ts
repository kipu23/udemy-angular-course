import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowersService } from './services/followers.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
