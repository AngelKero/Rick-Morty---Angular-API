import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character;

  public like: boolean;

  constructor() {
    this.character = {} as Character;
    this.like = false;
  }

  ngOnInit(): void {
    console.log(this.character);
  }

}
