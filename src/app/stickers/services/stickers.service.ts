import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchResponse, Sticker } from '../interfaces/stickers.interfaces';

const API_KEY: string = 'QSrX6KCzfZBtOkBu91vQtpf69ug1yXfH'
const URL: string = 'http://api.giphy.com/v1/stickers'

@Injectable({
  providedIn: 'root'
})
export class StickersService {
  public stickerList: Sticker[] = []
  private _tagsHistory: string[] = []

  constructor(private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  searchTag(tag: string): void {
    tag = tag.trim()

    if(tag.length === 0) return

    this.organizeHistory(tag)
    this.makeARequest(tag)
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase()

    if(this._tagsHistory.includes(tag)) this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag)

    this._tagsHistory.unshift(tag)
    this._tagsHistory = this.tagsHistory.splice(0, 10)
  }

  private makeARequest(tag: string): void {
    const params = new HttpParams()
                    .set('api_key', API_KEY)
                    .set('limit', '10')
                    .set('q', tag)

    this.http.get<SearchResponse>(`${URL}/search`, { params })
      .subscribe(response => this.stickerList = response.data)
  }
}
