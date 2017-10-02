import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients.component';


const routes: Routes = [{
	path: '',
	data: {
        title: 'Clients Page',
        urls: [{title: 'Clients',url: '/'},{title: 'Clients'}]
    },
	component: ClientsComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [ClientsComponent]
})
export class ClientsModule { }