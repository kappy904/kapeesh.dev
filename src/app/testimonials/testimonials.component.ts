import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
	selector: 'app-testimonials',
	templateUrl: './testimonials.component.html',
	styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit{
	titleColor = 'rgb(125 116 190 / 11%)'
	pageTitleColor = '#898F9C'
	subtitleColor = '#4267B2'
	showMentees: boolean = false;

	constructor(private _title: Title, private _meta: Meta) {
	}

	ngOnInit() {
		this._title.setTitle('Testimonials | Kapeesh.dev')
		this._meta.updateTag({name: "description", content: "What my colleagues and mentees have shared"})
	}
}
