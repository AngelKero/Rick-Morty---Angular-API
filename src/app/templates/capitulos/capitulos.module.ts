import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitulosRoutingModule } from './capitulos-routing.module';
import { CapitulosComponent } from './capitulos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EpisodioComponent } from './episodio/episodio.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    CapitulosComponent,
    EpisodioComponent
  ],
  imports: [
    CommonModule,
    CapitulosRoutingModule,
    SharedModule,
    FormsModule,
    InfiniteScrollModule
  ]
})
export class CapitulosModule { }
