import { Component, AfterViewInit } from '@angular/core';
@Component({
	templateUrl: './orgchart.component.html'
})
export class OrgChartComponent implements AfterViewInit {
	subtitle:string;	
	constructor() {
		this.subtitle = "This is some text within a card block."
	}

	ngAfterViewInit(){}
}