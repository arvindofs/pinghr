import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';


const routes: Routes = [{
	path: '',
	data: {
        title: 'Employees Page',
        urls: [{title: 'Employees',url: '/'},{title: 'Employees'}]
    },
	component: EmployeesComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [EmployeesComponent]
})
export class EmployeesModule { }