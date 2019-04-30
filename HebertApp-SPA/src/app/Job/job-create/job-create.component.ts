import { SimpleModalService } from 'ngx-simple-modal';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Job } from '../models/job';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JobsService } from '../services/jobs.service';
import { ModalsFormsComponent } from '../parametres/modalsForms/modalsForms.component';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {
  hasError = false;
  errorMessage: string;
  createJob: FormGroup;
  job = new Job( 2019, 2019, '../', '', 'Actif', '../', '..');


  constructor(
    fb: FormBuilder,
    private router: Router,
    private service: JobsService,
    private modals: SimpleModalService
  ) {
    this.createJob = fb.group({
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
  }

  get dateDebut() {return this.createJob.get('dateDebut'); }
  get dateFin() {return this.createJob.get('dateFin'); }
  get cheminShp() {return this.createJob.get('cheminShp'); }
  get parametres() {return this.createJob.get('parametres'); }
  get statut() {return this.createJob.get('statut'); }
  get chemin() {return this.createJob.get('chemin'); }
  get shp() {return this.createJob.get('shp'); }

  ngOnInit() {
  }

  Save() {
    if (this.createJob.valid) {
      const newJob = new Job(2019, 2019, '../', '', 'Actif', '../', '..');
      newJob.dateDebut = this.createJob.value.dateDebut;
      newJob.dateFin = this.createJob.value.dateFin;
      newJob.cheminShp = this.createJob.value.cheminShp;
      newJob.parametres = this.createJob.value.parametres;
      newJob.statut = this.createJob.value.statut;
      newJob.chemin = this.createJob.value.chemin;
      newJob.shp = this.createJob.value.shp;
      //const json = JSON.stringify(newJob);
      this.service.postJob(newJob).subscribe(res => {
        this.router.navigate(['/jobs']);
      });
    } else {
      this.hasError = true;
      this.errorMessage = 'Formulaire incomplet: Tous les champs (sauf parametres), sont obligatoires';
    }
  }

  addParametres() {
    this.modals
      .addModal(ModalsFormsComponent, {
        title: 'formulaire paramètres',
        message: ''
      })
      .subscribe(result => {
        if (result) {
          this.createJob.controls.parametres.setValue(result);
        }
      });

    }
  }

