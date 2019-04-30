import { SimpleModalService } from 'ngx-simple-modal';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Job } from '../models/job';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JobsService } from '../services/jobs.service';
import { ModalsFormsComponent } from '../parametres/modalsForms/modalsForms.component';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {

  hasError = false;
  errorMessage: string;
  id: number;
  editJobs: FormGroup;
  job = new Job(2019, 2019, '../', '', 'Actif', '../', '..');

  constructor(
    fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    route: ActivatedRoute,
    private service: JobsService,
    private modals: SimpleModalService,
  ) {
    this.editJobs = fb.group({
      dateDebut: new FormControl(this.job.dateDebut, [
        Validators.required
      ]),
      dateFin: new FormControl(this.job.dateFin, [
        Validators.required
      ]),
      cheminShp: new FormControl(this.job.cheminShp, [
        Validators.required
      ]),
      parametres: new FormControl(this.job.parametres),
      statut: new FormControl(this.job.statut, [
        Validators.required
      ]),
      chemin: new FormControl(this.job.chemin, [
        Validators.required
      ]),
      shp: new FormControl(this.job.shp, [
        Validators.required
      ])
    });
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  get dateDebut() {return this.editJobs.get('dateDebut'); }
  get dateFin() {return this.editJobs.get('dateFin'); }
  get cheminShp() {return this.editJobs.get('cheminShp'); }
  get parametres() {return this.editJobs.get('parametres'); }
  get statut() {return this.editJobs.get('statut'); }
  get chemin() {return this.editJobs.get('chemin'); }
  get shp() {return this.editJobs.get('shp'); }

  ngOnInit() {
    this.service.getJobById(this.id).subscribe(res => {
      this.editJobs.patchValue(res);
    });
  }

  edit() {
    if (this.editJobs.valid) {
      const newJob = new Job(2019, 2019, '../', '', 'Actif', '../', '..');
      newJob.dateDebut = this.editJobs.value.dateDebut;
      newJob.dateFin = this.editJobs.value.dateFin;
      newJob.cheminShp = this.editJobs.value.cheminShp;
      newJob.parametres = this.editJobs.value.parametres;
      newJob.statut = this.editJobs.value.statut;
      newJob.chemin = this.editJobs.value.chemin;
      newJob.shp = this.editJobs.value.shp;
      this.service.putJob(this.id, newJob).subscribe(res => {
        this.router.navigate(['/jobs/detail/' + this.id]);
      });
    } else {
      this.hasError = true;
      this.errorMessage = 'Formulaire incomplet: Tous les champs (sauf parametres), sont obligatoires';
    }
  }

  editParametres() {
    this.modals
      .addModal(ModalsFormsComponent, {
        title: 'formulaire paramètres',
        parametre: this.editJobs.value.parametres
      })
      .subscribe(result => {
        if (result) {
          this.editJobs.controls.parametres.setValue(result);
        }
      });

    }

}
