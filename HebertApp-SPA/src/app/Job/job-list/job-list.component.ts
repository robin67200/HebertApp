import { JobsService } from './../services/jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: any;
  constructor(private service: JobsService) { }

  ngOnInit() {
    this.service.getJobs().subscribe(
      response => {
        this.jobs = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
