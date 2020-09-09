import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-portfolio-block',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
	@Input() isLeft: boolean
	@Input() hasAwards: boolean;

	constructor() {
	}

	ngOnInit(): void {
	}

}
