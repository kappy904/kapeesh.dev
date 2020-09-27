import {Component, OnInit} from '@angular/core'
import * as p5 from 'p5'
import {MobileService} from "./services/mobile.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	private p5: any

	constructor(private _mobileService: MobileService) {
	}

	ngOnInit(): void {
		!this._mobileService.isMobileResolution() ? this.createCanvas() : ''
	}

	private createCanvas() {
		this.p5 = new p5(this.sketch)
	}

	private sketch(p: any) {
		// original author greg smith
		p.setup = () => {
			let circles = [],
				circle = {
					x: undefined,
					y: undefined,
					r: undefined
				},
				overlapping = false,
				NumCircles = 10,
				protection = 100,
				counter = 0,
				canvasWidth = window.innerWidth - 20,
				canvasHeight = window.innerHeight


			let cnv = p.createCanvas(canvasWidth, canvasHeight)
			cnv.parent('globalCircles')

			while (circles.length < NumCircles &&
			counter < protection) {
				circle = {
					x: p.random(p.width),
					y: p.random(p.height),
					r: p.random(3, 36)
				}
				overlapping = false

				for (let i = 0; i < circles.length; i++) {
					let existing = circles[i]
					let d = p.dist(circle.x, circle.y, existing.x, existing.y)
					if (d < circle.r + existing.r) {
						overlapping = true
						break
					}
				}

				if (!overlapping) {
					circles.push(circle)
				}

				counter++
			}

			p.fill('#4267b259')
			p.noStroke()
			for (let i = 0; i < circles.length; i++) {
				p.ellipse(circles[i].x, circles[i].y,
					circles[i].r * 2, circles[i].r * 2)
			}
		}
	}
}
