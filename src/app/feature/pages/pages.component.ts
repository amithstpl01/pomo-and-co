import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Menus } from './menus';

@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
	menus = Menus;
	isMenuOpen = false;
	isMenuOpenMobile = false;
	url!: string;

	fakeMenusItems = new Array(5);

	constructor(public router: Router) {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.url = event.url.split('/')[1];
			}
		});
	}

	ngOnInit(): void {}
}
