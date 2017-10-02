import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';

const routes: Routes = [
    {
        path: '', component: PageComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'myinfo', loadChildren: './myinfo/myinfo.module#MyInfoModule' },
            { path: 'myprofile', loadChildren: './myinfo/myprofile/myprofile.module#MyProfileModule' },
            { path: 'orgchart', loadChildren: './myinfo/orgchart/orgchart.module#OrgChartModule' },
            { path: 'training', loadChildren: './myinfo/training/training.module#TrainingModule' },
            { path: 'employees', loadChildren: './employees/employees.module#EmployeesModule' },
            { path: 'clients', loadChildren: './clients/clients.module#ClientsModule' },
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
