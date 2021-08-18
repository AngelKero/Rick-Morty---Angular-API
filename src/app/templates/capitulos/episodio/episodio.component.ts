import { Episode } from './../../../models/episode';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.scss']
})
export class EpisodioComponent implements OnInit {

  @Input() episode: Episode;

  constructor() {
    this.episode = {} as Episode;
  }

  ngOnInit(): void {
  }

}
