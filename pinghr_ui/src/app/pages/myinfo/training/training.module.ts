import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TrainingComponent } from './Training.component';


const routes: Routes = [{
	path: '',
	data: {
        title: 'Training Page',
        urls: [{title: 'Training',url: '/'},{title: 'Training'}]
    },
	component: TrainingComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [TrainingComponent]
})
export class TrainingModule { }