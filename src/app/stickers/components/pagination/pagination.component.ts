import { Component } from '@angular/core';
import { StickersService } from '../../services/stickers.service';

@Component({
  selector: 'stickers-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  public numbers:Array<any> = []
  public activeBtn: number = 1
  private numberPagination: number = 1

  constructor(private stickersService: StickersService) {
    this.numbers = Array.from({length:5},(v,k)=>k+1)
  }

  searchTagPagination(pagination: number = 1): void {
    const listTags = this.stickersService.tagsHistory

    if(listTags.length === 0) return

    this.stickersService.searchTag(listTags[0], pagination)
    this.activeBtn = pagination
    this.numberPagination = pagination
  }

  nextPagination(): void {
    this.searchTagPagination(this.numberPagination + 1)
  }
}
