import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MyProfileComponent } from './myprofile.component';


const routes: Routes = [{
	path: '',
	data: {
        title: 'MyProfile Page',
        urls: [{title: 'My Profile',url: '/'},{title: 'My Profile'}]
    },
	component: MyProfileComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [MyProfileComponent]
})
export class MyProfileModule { }