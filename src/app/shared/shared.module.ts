import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeartComponent } from './icons/heart/heart.component';
import { FilterComponent } from './icons/filter/filter.component';
import { SearchComponent } from './icons/search/search.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './icons/menu/menu.component';

@NgModule({
  declarations: [
    HeartComponent,
    FilterComponent,
    SearchComponent,
    NavigationComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeartComponent,
    FilterComponent,
    SearchComponent,
    NavigationComponent,
    MenuComponent
  ]
})
export class SharedModule { }
