import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(
    private http: HttpClient
  ) {
  }

  getEpisodes(page: number, name: string, code: string) {
    return this.http.get(`${environment.urlAPI}/episode/?page=${page}&name=${name}&episode=${code}`);
  }
}
