import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { OrgChartComponent } from './orgChart.component';


const routes: Routes = [{
	path: '',
	data: {
        title: 'OrgChart Page',
        urls: [{title: 'OrgChart',url: '/'},{title: 'OrgChart'}]
    },
	component: OrgChartComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [OrgChartComponent]
})
export class OrgChartModule { }