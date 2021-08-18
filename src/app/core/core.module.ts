import { EpisodesService } from './services/episodes.service';
import { CharactersService } from 'src/app/core/services/characters.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CharactersService,
    EpisodesService
  ]
})
export class CoreModule { }
