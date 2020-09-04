import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
    titleColor = 'rgba(11, 149, 96, 0.11)'
    subtitleColor = '#01935e'

    constructor() {
    }

    ngOnInit(): void {
    }

}
