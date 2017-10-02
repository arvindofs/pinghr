import { Component, AfterViewInit } from '@angular/core';
@Component({
	templateUrl: './myinfo.component.html'
})
export class MyInfoComponent implements AfterViewInit {
	subtitle:string;	
	constructor() {
		this.subtitle = "This is some text within a card block."
	}

	ngAfterViewInit(){}
}