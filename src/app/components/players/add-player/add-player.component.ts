import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces';
import { PlayerService } from 'src/app/services/player.service';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player!:Partial<Player>;

  constructor(private playerService: PlayerService,
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit(): void {
    this.player = {};
    this.player.name = "";
  }


  add() {
    this.playerService.add(this.player).subscribe(
      player => {
        this.cookieService.putObject("player", player);
        this.router.navigate(["/rooms/join"]);


      }
    )
  }

}
