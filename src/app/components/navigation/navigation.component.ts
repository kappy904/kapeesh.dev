import {Component, OnInit} from '@angular/core'

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
	isActive: boolean

	constructor() {
	}

	ngOnInit(): void {
	}

	showNav(): void {
		this.isActive = !this.isActive
	}

}
