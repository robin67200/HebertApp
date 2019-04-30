import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
export interface JobModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-modals',
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h4><i class="icon-globe"></i>&nbsp;{{ title || 'Confirmation' }}</h4>
      </div>
      <div class="modal-body">
        <button
          type="button"
          class="btn btn-primary btn-sm"
          (click)="switchForm(1)"
        >
          Formulaire 1
        </button>
        <button
          type="button"
          class="btn btn-primary btn-sm mx-2"
          (click)="switchForm(2)"
        >
          Formulaire 2
        </button>
        <app-formulaire1
          *ngIf="form == 1"
          (sent)="confirm($event)"
        ></app-formulaire1>
        <app-formulaire2
          *ngIf="form == 2"
          (sent)="confirm($event)"
        ></app-formulaire2>
      </div>
      <div class="modal-footer">
        <div style="text-align: center">
          <button class="btn btn-primary btn-sm mx-2" (click)="close()">Retour aux jobs</button>
        </div>
      </div>
    </div>
  `
})
export class ModalsFormsComponent extends SimpleModalComponent<JobModel, string>
  implements JobModel {
  message: string;
  title: string;

  form = 0;
  constructor() {
    super();
  }

  switchForm(i: number) {
    this.form = i;
  }

  confirm(param: string) {
    this.result = param;
    this.close();
  }
}
