import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from '../endpoint';
import { Player } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  public add(player: Partial<Player>): Observable<Player> {
    return this.http.post<Player>(`${url}/players`, player);
  }


}
