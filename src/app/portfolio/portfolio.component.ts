import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{
	titleColor = 'rgb(125 116 190 / 11%)'
	subtitleColor = '#7d74be'
	pageTitleColor: 'rgb(21, 0, 158)'
	isVisible: boolean = true
	isVisibleB: boolean = true
	@ViewChild('videoPlayer') videoplayer: ElementRef
	@ViewChild('videoPlayerB') videoplayerB: ElementRef

	constructor(private _title: Title, private _meta: Meta) {}

	ngOnInit() {
		this._title.setTitle('Portfolio | Kapeesh.dev')
		this._meta.updateTag({name: "description", content: "Highlighted work"})
	}

	toggleVideo() {
		this.isVisible = !this.isVisible
		this.videoplayer.nativeElement.play()
	}

	toggleVideoB() {
		this.isVisibleB = !this.isVisibleB
		this.videoplayerB.nativeElement.play()
	}
}
