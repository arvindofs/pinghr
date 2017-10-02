import { Component, AfterViewInit } from '@angular/core';
@Component({
	templateUrl: './employees.component.html'
})
export class EmployeesComponent implements AfterViewInit {
	subtitle:string;	
	constructor() {
		this.subtitle = "This is some text within a card block."
	}

	ngAfterViewInit(){}
}