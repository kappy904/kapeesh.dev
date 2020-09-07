import { Component, OnInit } from '@angular/core'
import * as p5 from 'p5'

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
	isActive: boolean
	private p5: any

	constructor() {
	}

	ngOnInit(): void {
		this.createCanvas()
	}

	showNav(): void {
		this.isActive = !this.isActive
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
				canvasWidth = window.innerWidth,
				canvasHeight = window.innerHeight

			let cnv = p.createCanvas(canvasWidth, canvasHeight)
			cnv.parent('circlesContainer')

			while (circles.length < NumCircles &&
			counter < protection) {
				circle = {
					x: p.random(p.width),
					y: p.random(p.height),
					r: p.random(3, 100)
				}
				overlapping = false

				// check that it is not overlapping with any existing circle
				// another brute force approach
				for (let i = 0; i < circles.length; i++) {
					let existing = circles[i]
					let d = p.dist(circle.x, circle.y, existing.x, existing.y)
					if (d < circle.r + existing.r) {
						// They are overlapping
						overlapping = true
						// do not add to array
						break
					}
				}

				// add valid circles to array
				if (!overlapping) {
					circles.push(circle)
				}

				counter++
			}

			p.fill('#0a916569')
			p.noStroke()
			for (let i = 0; i < circles.length; i++) {
				p.ellipse(circles[i].x + p.random(-1, 1), circles[i].y + p.random(-1, 1),
					circles[i].r * 2, circles[i].r * 2)
			}

		}
	}
}
