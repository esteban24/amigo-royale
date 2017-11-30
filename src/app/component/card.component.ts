import { Component, OnInit } from '@angular/core';

import { CardService } from '../shared/card.service';

@Component({
  selector: 'card-root',
  providers: [CardService],
  templateUrl: '../resource/view/card.component.html',
  styleUrls: ['../resource/css/card.component.css']
})

export class CardComponent implements OnInit  {
	private cards: any = {};

	constructor(private cardService: CardService) { }

	ngOnInit() {
	    this.cards = this.cardService.getCards().subscribe(data => this.cards = data);
	}

	getImage(id: String): String {
		return this.cardService.getApiUri() + '/images/cards/' + id + '.png';
	}

	getCardsArray() {
		return Array.from(this.cards);
	}
}
