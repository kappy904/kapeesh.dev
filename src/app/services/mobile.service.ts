import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

	private readonly isMobile: boolean = false;

	constructor() {
		(window.innerWidth < 768) ? this.isMobile = true : false
	}

	public isMobileResolution(): boolean {
		return this.isMobile;
	}
}
