import { Component, AfterViewInit } from '@angular/core';
@Component({
	templateUrl: './reports.component.html'
})
export class ReportsComponent implements AfterViewInit {
	subtitle:string;	
	constructor() {
		this.subtitle = "This is some text within a card block."
	}

	ngAfterViewInit(){}
}