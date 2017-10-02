import { Component, AfterViewInit } from '@angular/core';
@Component({
	templateUrl: './clients.component.html'
})
export class ClientsComponent implements AfterViewInit {
	subtitle:string;	
	constructor() {
		this.subtitle = "This is some text within a card block."
	}

	ngAfterViewInit(){}
}