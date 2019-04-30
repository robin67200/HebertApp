
import { ModalsComponent } from './modals/modals.component';
import { JobsService } from './services/jobs.service';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobListComponent } from './job-list/job-list.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs.routing';
import { SimpleModalModule, SimpleModalService } from 'ngx-simple-modal';
import { Formulaire2Component } from './parametres/formulaire2/formulaire2.component';
import { Formulaire1Component } from './parametres/formulaire1/formulaire1.component';
import { ModalsFormsComponent } from './parametres/modalsForms/modalsForms.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        JobsRoutingModule,
        SimpleModalModule.forRoot(
            { container: 'modal-container' },
            {
              closeOnEscape: false,
              closeOnClickOutside: false,
              bodyClass: 'modal-open',
              wrapperDefaultClasses: 'modal fade-anim',
              wrapperClass: 'in',
              animationDuration: 300
            }
        )],
    declarations: [
        JobCreateComponent,
        JobDetailsComponent,
        JobEditComponent,
        JobListComponent,
        ModalsComponent,
        Formulaire2Component,
        Formulaire1Component,
        ModalsFormsComponent
    ],
    providers: [JobsService, SimpleModalService], entryComponents: [ModalsComponent, ModalsFormsComponent]
})
export class JobsModule {}
