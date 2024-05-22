import { Component, ElementRef, ViewChild } from '@angular/core';
import { StickersService } from '../../services/stickers.service';

@Component({
  selector: 'stickers-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(private stickersService: StickersService) { }

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value
    this.stickersService.searchTag(newTag)
    this.tagInput.nativeElement.value = ''
  }
}
