import { Component } from '@angular/core'
import { Race } from './race';
import { RaceScore } from './raceScore'
import { RaceScoreService } from './raceScore.service';

@Component({
  selector: 'scoreboard-item',
  template: `
<header class="container">
<h1>ScoreBoard</h1>
<h3>Race Notifications</h3>
<ul>
<li></li>
</ul>
</header>


<div class="container-fluid scoreboard-display">
  <div class="row">
    <div class="col-xs-4" *ngFor="let race of races">
    <scoreboard-item [race="race"]></scoreboard-item>
    </div>
</div>
</div>
`
})

export class scoreboardItemComponent {

  race: Race;

  constructor(private raceScoreService: RaceScoreService) { }

//  ngOnInit() {
//    this.raceService.getRaces()
//        .subscribe(data => this.races = data);
//  }
}
