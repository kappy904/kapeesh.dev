import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	showScore: boolean = false;

	constructor(private _title: Title, private _meta: Meta) {
	}

	ngOnInit(): void {
		this._title.setTitle('Home | Kapeesh.dev')
		this._meta.updateTag({name: "description", content: "Welcome to my portfolio site"})
	}

	toggleScore(): void {
		this.showScore = !this.showScore

		setTimeout(() => {
			this.showScore = !this.showScore
		}, 10000)
	}
}
