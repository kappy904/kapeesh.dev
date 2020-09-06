import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
	titleColor = 'rgb(125 116 190 / 11%)'
	subtitleColor = '#7d74be'

	constructor() {
	}

	ngOnInit(): void {
	}

}
