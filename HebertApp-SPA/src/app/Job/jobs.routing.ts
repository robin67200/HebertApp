import { NgModule} from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobListComponent } from './job-list/job-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
    },
    {path: 'create', component: JobCreateComponent},
    {path: 'detail/:id', component: JobDetailsComponent},
    {path: 'edit/:id', component: JobEditComponent},
    {path: 'list', component: JobListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobsRoutingModule {}
