import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	titleColor = 'rgb(125 116 190 / 11%)'
	pageTitleColor = 'rgb(21, 0, 158)'
	subtitleColor = '#5a1f9f'
	yearsInAmsterdam = new Date().getFullYear() - 2019
	miraayasAge = new Date().getMonth()
	daiysAge = new Date().getFullYear() - 2018

  constructor(private _title: Title,private _meta: Meta) { }

  ngOnInit(): void {
	  this._title.setTitle('About | Kapeesh.dev')
	  this._meta.updateTag({name: "description", content: "Get to know me"})
  }

}
