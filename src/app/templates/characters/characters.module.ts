import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CharacterComponent } from './character/character.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    FormsModule,
    InfiniteScrollModule
  ]
})
export class CharactersModule { }
