import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Card service
 *
 * @author Esteban Martín <esteban.martin.busto@gmail.com>
 */
@Injectable()
export class CardService {

	private apiUri = 'http://www.clashapi.xyz';

	constructor (private http: Http) {}

	getCards() {
		return this.http.get(this.apiUri + '/api/cards')
		.map((res:Response) => res.json());
	}

	getApiUri() {
		return this.apiUri;
	}
}