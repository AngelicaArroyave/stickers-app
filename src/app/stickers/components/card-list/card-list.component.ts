import { Component, Input } from '@angular/core';
import { Sticker } from '../../interfaces/stickers.interfaces';

@Component({
  selector: 'stickers-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
@Input()
public stickers: Sticker[] = []
}
