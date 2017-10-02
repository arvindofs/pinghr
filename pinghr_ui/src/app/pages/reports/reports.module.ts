import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';


const routes: Routes = [{
	path: '',
	data: {
        title: 'Reports Page',
        urls: [{title: 'Reports',url: '/'},{title: 'Reports'}]
    },
	component: ReportsComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [ReportsComponent]
})
export class ReportsModule { }