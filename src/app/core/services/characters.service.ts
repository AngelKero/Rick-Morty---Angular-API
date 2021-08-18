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

  getCharacters(page: number, name: string) {
    return this.http.get(`${environment.urlAPI}/character/?page=${page}&name=${name}`);
  }
}
