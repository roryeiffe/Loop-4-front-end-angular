import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room-service.service';
import {CookieService} from 'ngx-cookie';
import { Room, Player } from 'src/app/interfaces';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit {
  code:string = "";
  room!:Room;

  constructor(private roomService: RoomService, private cookieService:CookieService) { }

  ngOnInit(): void {
  }

  create() {
    this.roomService.create().subscribe(
      room => {
        this.cookieService.putObject("room", room);
        this.room = room;
        this.join();
      }
    )
    
  }

  check() {
    this.roomService.check(this.code).subscribe(
      room => {
        if(!room) alert("Passcode not valid");
        else {
          this.room = room;
          this.join();

        }
      })
    }

  join() {
    let player:any=  this.cookieService.getObject("player")!;
    this.roomService.join(this.room.id,player.id).subscribe(
      room => {
        console.log(room);
      }
    )
  }

  

}
