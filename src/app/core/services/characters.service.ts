import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(page: number, name: string, gender: string, status: string, species: string) {
    return this.http.get(`${environment.urlAPI}/character/?page=${page}&name=${name}&gender=${gender}&status=${status}&species=${species}`);
  }
}
