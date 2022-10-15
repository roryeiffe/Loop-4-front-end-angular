import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './components/players/add-player/add-player.component';
import { CookieModule } from 'ngx-cookie';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoomComponent } from './components/rooms/room/room.component';
import { JoinRoomComponent } from './components/rooms/join-room/join-room.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    NavbarComponent,
    RoomComponent,
    JoinRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CookieModule.withOptions()
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
