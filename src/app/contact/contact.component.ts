import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    titleColor = 'rgb(125 116 190 / 11%)'
    subtitleColor = '#5a1f9f'


    constructor(private _title: Title, private _meta: Meta) {
    }

    ngOnInit(): void {
		this._title.setTitle('Contact | Kapeesh.dev')
		this._meta.updateTag({name: "description", content: "Let's connect"})
    }

}
