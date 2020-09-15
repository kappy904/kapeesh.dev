import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
	selector: 'app-testimonials',
	templateUrl: './testimonials.component.html',
	styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit{
	titleColor = 'rgba(11, 149, 96, 0.11)'
	subtitleColor = '#01935e'

	constructor(private _title: Title, private _meta: Meta) {
	}

	ngOnInit() {
		this._title.setTitle('Testimonials | Kapeesh.dev')
		this._meta.updateTag({name: "description", content: "What my colleagues and mentees have shared"})
	}
}
