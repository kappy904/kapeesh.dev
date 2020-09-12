import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
	titleColor = 'rgb(125 116 190 / 11%)'
	subtitleColor = '#7d74be'
	pageTitleColor: 'rgb(21, 0, 158)';
	isVisible: boolean = true
	@ViewChild('videoPlayer') videoplayer: ElementRef;

	toggleVideo() {
		this.isVisible = !this.isVisible
		this.videoplayer.nativeElement.play();
	}
}
