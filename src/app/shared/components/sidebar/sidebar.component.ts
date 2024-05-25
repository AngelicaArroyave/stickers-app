import { Component } from '@angular/core';
import { StickersService } from 'src/app/stickers/services/stickers.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private _tagsHistory: string[] = []

  constructor(private stickersService: StickersService) { }

  get tagsHistory(): string[] {
    return this.stickersService.tagsHistory
  }

  searchTag(tag: string): void {
    this.stickersService.searchTag(tag)
  }
}
