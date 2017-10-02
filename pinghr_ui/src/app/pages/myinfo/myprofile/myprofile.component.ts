import { Component, AfterViewInit } from '@angular/core';
@Component({
	templateUrl: './myprofile.component.html'
})
export class MyProfileComponent implements AfterViewInit {
	subtitle:string;	
	constructor() {
		this.subtitle = "This is some text within a card block."
	}

	ngAfterViewInit(){}
}