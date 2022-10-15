import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './components/players/add-player/add-player.component';
import { JoinRoomComponent } from './components/rooms/join-room/join-room.component';
import { RoomComponent } from './components/rooms/room/room.component';

const routes: Routes = [
  {path: "players/add", component: AddPlayerComponent },
  {path: "rooms/room", component: RoomComponent},
  {path: "rooms/join", component: JoinRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
