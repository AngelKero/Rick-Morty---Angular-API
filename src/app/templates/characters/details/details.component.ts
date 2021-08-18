import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterViewInit, OnChanges {

  @Output() open = new EventEmitter<ElementRef>();
  @ViewChild('openBtn', {static: false}) openBtn: ElementRef | undefined;

  @Input() character: Character;
  @Input() like: boolean;

  constructor() {
    this.character = {} as Character;
    this.like = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterViewInit(): void {
    this.open.emit(this.openBtn);
  }

  ngOnInit(): void {
  }

}
