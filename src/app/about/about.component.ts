import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	titleColor = 'rgb(125 116 190 / 11%)'
	pageTitleColor = 'rgb(21, 0, 158)'
	subtitleColor = '#7d74be'

  constructor() { }

  ngOnInit(): void {
  }

}
