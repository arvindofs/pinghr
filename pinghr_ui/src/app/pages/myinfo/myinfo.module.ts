import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MyInfoComponent } from './myinfo.component';


const routes: Routes = [{
	path: '',
	data: {
        title: 'My Info Page',
        urls: [{title: 'My Info',url: '/'},{title: 'My Info Page'}]
    },
	component: MyInfoComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [MyInfoComponent]
})
export class MyInfoModule { }