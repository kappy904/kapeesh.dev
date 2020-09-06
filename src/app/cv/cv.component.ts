import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
	titleColor = 'rgb(125 116 190 / 11%)'
	subtitleColor = '#7d74be'
  constructor() { }

  ngOnInit(): void {
  }

}
