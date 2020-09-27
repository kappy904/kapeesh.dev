import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	titleColor = 'rgb(125 116 190 / 11%)'
	pageTitleColor = '#898F9C'
	subtitleColor = '#4267B2'

  constructor(private _title: Title,private _meta: Meta) { }

  ngOnInit(): void {
	  this._title.setTitle('About | Kapeesh.dev')
	  this._meta.updateTag({name: "description", content: "Get to know me"})
  }

}
