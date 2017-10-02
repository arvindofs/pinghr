import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './pages.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';
import { NAV_DROPDOWN_DIRECTIVES } from '../shared/nav-dropdown.directive';
import { HeaderNavigationComponent } from '../shared/header-navigation/headernavigation.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { RightSidebarComponent } from '../shared/right-sidebar/rightsidebar.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
    declarations: [
        PageComponent,
        HeaderNavigationComponent,
        BreadcrumbComponent,
        SidebarComponent,
        RightSidebarComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        NAV_DROPDOWN_DIRECTIVES
    ]
})
export class PagesModule { }
