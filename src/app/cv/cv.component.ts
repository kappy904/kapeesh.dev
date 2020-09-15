import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
	titleColor = 'rgb(125 116 190 / 11%)'
	subtitleColor = '#7d74be'
  constructor(private _title: Title, private _meta: Meta) { }

  ngOnInit(): void {
	  this._title.setTitle('CV Download | Kapeesh.dev')
	  this._meta.updateTag({name: "description", content: "Download my CV"})
  }

}
