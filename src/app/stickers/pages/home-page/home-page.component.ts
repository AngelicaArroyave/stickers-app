import { Component } from '@angular/core';

import { StickersService } from '../../services/stickers.service';
import { Sticker } from '../../interfaces/stickers.interfaces';

@Component({
  selector: 'stickers-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  constructor(private stickersService: StickersService) { }

  get stickers(): Sticker[] {
    return this.stickersService.stickerList
  }
}
