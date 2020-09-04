import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    titleColor = 'rgb(125 116 190 / 11%)'
    subtitleColor = '#7d74be'

    constructor() {
    }

    ngOnInit(): void {
    }

}
