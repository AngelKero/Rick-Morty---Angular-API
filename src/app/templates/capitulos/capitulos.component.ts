import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/core/services/episodes.service';
import { Episode } from 'src/app/models/episode';
import { Info } from '../characters/characters.component';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.scss']
})
export class CapitulosComponent implements OnInit {

  public name: string;
  public code: string;
  public episodes: Episode[];

  public loading: boolean;
  public nothing: boolean;

  public page: number;
  public maxPages: number;

  constructor(
    private episodesService: EpisodesService
  ) {
    this.name = '';
    this.code = '';
    this.episodes = []
    this.loading = true;
    this.nothing = false;
    this.page = 1;
    this.maxPages = 1;
  }

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    this.loading = true;
    this.episodesService.getEpisodes(this.page, this.name, this.code)
    .subscribe((data: any) => {
      this.loading = false;
      this.nothing = false;
      const info: Info = data.info;
      const results: Episode[] = data.results;
      this.maxPages = info.pages;
      this.page === 1 ? this.episodes = results : this.episodes.push(...results);
    }, (__error) => {
      this.loading = false;
      this.nothing = true;
    });
  }

  search(): void {
    this.page = 1;
    this.episodes = [];
    this.getEpisodes();
  }

  onScroll() {
    if (this.page < this.maxPages) {
      this.page++;
      this.getEpisodes();
    }
  }

}
