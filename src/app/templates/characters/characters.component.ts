import { Component, ElementRef, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';
import { Character } from 'src/app/models/character';

export interface Info {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  private page: number;
  public name: string;

  public characters: Character[];
  public selectedCharacter: Character;
  private maxPages: number;

  public loading: boolean;

  public openDetailsBtn: ElementRef | undefined;

  constructor(
    private characterService: CharactersService
  ) {
    this.page = 1;
    this.name = '';
    this.characters = [];
    this.selectedCharacter = {} as Character;
    this.maxPages = 1;
    this.loading = true;
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.loading = true;
    this.characterService.getCharacters(this.page, this.name)
    .subscribe((data: any) => {
      this.loading = false;
      const info: Info = data.info;
      const results: Character[] = data.results;
      this.maxPages = info.pages;
      this.page === 1 ? this.characters = results : this.characters.push(...results);
    })
  }

  search(): void {
    this.characters = [];
    this.getCharacters();
  }

  onScroll(): void {
    if (this.page <= this.maxPages) {
      this.page++;
      this.getCharacters();
    }
  }

  openCharacter(character: Character) {
    this.selectedCharacter = character;
    this.openDetailsBtn?.nativeElement.click();
  }

}
