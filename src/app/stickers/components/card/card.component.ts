import { Component, Input, OnInit } from '@angular/core';
import { Sticker } from '../../interfaces/stickers.interfaces';

@Component({
  selector: 'stickers-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public sticker!: Sticker

  ngOnInit(): void {
    if(!this.sticker) throw new Error('Sticker property is required')
  }
}
