import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-heart',
  templateUrl: './heart.component.svg',
  styleUrls: ['./heart.component.scss']
})
export class HeartComponent implements OnInit {

  @Input() active: boolean;

  constructor() {
    this.active = false;
  }

  ngOnInit(): void {
  }

}
