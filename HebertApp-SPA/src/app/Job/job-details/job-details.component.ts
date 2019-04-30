import { ModalsComponent } from './../modals/modals.component';
import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { JobsService } from '../services/jobs.service';
import { SimpleModalService } from 'ngx-simple-modal';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  id: number;
  job: Job = new Job(2019, 2019, '../', '', 'Actif', '../', '..');

  constructor(route: ActivatedRoute,
              private service: JobsService,
              private router: Router,
              public modals: SimpleModalService
              ) {
                route.params.forEach((params: Params) => {
                  if (params.id != null) {
                    this.id = +params.id;
                  }
                });
              }

  ngOnInit() {
    this.service.getJobById(this.id).subscribe(res => {
      this.job = res;
    });
  }

  deleteJob() {
    this.modals
      .addModal(ModalsComponent, {
        title: 'Suppression du job',
        message: 'Etes vous sûr de cette suppression ?'
      })
      .subscribe(result => {
        if (result) {
          this.service.deleteJobById(this.id).subscribe(res => {
            this.router.navigate(['/jobs']);
          });
        }
      });

    }
  }


