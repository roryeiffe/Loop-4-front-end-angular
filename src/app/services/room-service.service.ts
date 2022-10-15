import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../interfaces';
import {url} from '../endpoint';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) { 
  }

  create(): Observable<Room> {
    return this.http.post<Room>(`${url}/rooms`,{});
  }

  check(password:string): Observable<Room>{
    return this.http.get<Room>(`${url}/rooms/password/${password}`)
  }

  join(roomId:number, playerId:number) {
    return this.http.post<Room>(`${url}/rooms/${roomId}/players/${playerId}`, {});
  }
}
