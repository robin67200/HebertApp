import { Formulaire1 } from './../../models/formulaire1';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobsService } from '../../services/jobs.service';
import { send } from 'q';

@Component({
  selector: 'app-formulaire1',
  templateUrl: './formulaire1.component.html',
  styleUrls: ['./formulaire1.component.css']
})
export class Formulaire1Component implements OnInit {

  @Input() parametre: string;
  @Output() sent = new EventEmitter<string>();

  hasError = false;
  errorMessage: string;
  newForm1: FormGroup;
  formulaire1 = new Formulaire1('', '', '', '', '', '', '', '', '', '', '', '',
   '', '', '', '', '', '', '', '', '', '', '', '');

  constructor(
    fb: FormBuilder,
    private router: Router,
    private service: JobsService
    ) {
      this.newForm1 = fb.group({
        energy: ['', Validators.required],
        ponderation_volume: ['', Validators.required],
        ponderation_volume_inter: ['', Validators.required],
        ponderation_difference_ext: ['', Validators.required],
        maxwid: ['', Validators.required],
        minwid: ['', Validators.required],
        minlen: ['', Validators.required],
        maxlen: ['', Validators.required],
        minheight: ['', Validators.required],
        maxheight: ['', Validators.required],
        amplitudeMove: ['', Validators.required],
        amplitudeMaxDim: ['', Validators.required],
        amplitudeHeight: ['', Validators.required],
        amplitudeRotate: ['', Validators.required],
        temp: ['', Validators.required],
        deccoef: ['', Validators.required],
        poisson: ['', Validators.required],
        pbirth: ['', Validators.required],
        pdeath: ['', Validators.required],
        end_test_type: ['', Validators.required],
        delta: ['', Validators.required],
        relative_nb_iter: ['', Validators.required],
        absolute_nb_iter: ['', Validators.required],
        result: ['', Validators.required]

      });
     }

     get energy() {return this.newForm1.get('energy'); }
     get ponderation_volume() {return this.newForm1.get('ponderation_volume'); }
     get ponderation_volume_inter() {return this.newForm1.get('ponderation_volume_inter'); }
     get ponderation_difference_ext() {return this.newForm1.get('ponderation_difference_ext'); }
     get maxwid() {return this.newForm1.get('maxwid'); }
     get minwid() {return this.newForm1.get('minwid'); }
     get minlen() {return this.newForm1.get('minlen'); }
     get maxlen() {return this.newForm1.get('maxlen'); }
     get minheight() {return this.newForm1.get('minheight'); }
     get maxheight() {return this.newForm1.get('maxheight'); }
     get amplitudeMove() {return this.newForm1.get('amplitudeMove'); }
     get amplitudeMaxDim() {return this.newForm1.get('amplitudeMaxDim'); }
     get amplitudeHeight() {return this.newForm1.get('amplitudeHeight'); }
     get amplitudeRotate() {return this.newForm1.get('amplitudeRotate'); }
     get temp() {return this.newForm1.get('temp'); }
     get deccoef() {return this.newForm1.get('deccoef'); }
     get poisson() {return this.newForm1.get('poisson'); }
     get pbirth() {return this.newForm1.get('pbirth'); }
     get pdeath() {return this.newForm1.get('pdeath'); }
     get end_test_type() {return this.newForm1.get('end_test_type'); }
     get delta() {return this.newForm1.get('delta'); }
     get relative_nb_iter() {return this.newForm1.get('relative_nb_iter'); }
     get absolute_nb_iter() {return this.newForm1.get('absolute_nb_iter'); }
     get result() {return this.newForm1.get('result'); }

  ngOnInit() {
    this.formulaire1 = JSON.parse(this.parametre);
    this.newForm1.patchValue(this.formulaire1);
  }

  Save() {
    if (this.newForm1.valid) {
      const newFormulaire1 = new Formulaire1('', '', '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '', '', '');
      newFormulaire1.energy = this.newForm1.value.energy;
      newFormulaire1.ponderation_volume = this.newForm1.value.ponderation_volume;
      newFormulaire1.ponderation_volume_inter = this.newForm1.value.ponderation_volume_inter;
      newFormulaire1.ponderation_difference_ext = this.newForm1.value.ponderation_difference_ext;
      newFormulaire1.maxwid = this.newForm1.value.maxwid;
      newFormulaire1.minwid = this.newForm1.value.minwid;
      newFormulaire1.minlen = this.newForm1.value.minlen;
      newFormulaire1.maxlen = this.newForm1.value.maxlen;
      newFormulaire1.minheight = this.newForm1.value.minheight;
      newFormulaire1.maxheight = this.newForm1.value.maxheight;
      newFormulaire1.amplitudeMove = this.newForm1.value.amplitudeMove;
      newFormulaire1.amplitudeMaxDim = this.newForm1.value.amplitudeMaxDim;
      newFormulaire1.amplitudeHeight = this.newForm1.value.amplitudeHeight;
      newFormulaire1.amplitudeRotate = this.newForm1.value.amplitudeRotate;
      newFormulaire1.temp = this.newForm1.value.temp;
      newFormulaire1.deccoef = this.newForm1.value.deccoef;
      newFormulaire1.poisson = this.newForm1.value.poisson;
      newFormulaire1.pbirth = this.newForm1.value.pbirth;
      newFormulaire1.pdeath = this.newForm1.value.pdeath;
      newFormulaire1.end_test_type = this.newForm1.value.end_test_type;
      newFormulaire1.delta = this.newForm1.value.delta;
      newFormulaire1.relative_nb_iter = this.newForm1.value.relative_nb_iter;
      newFormulaire1.absolute_nb_iter = this.newForm1.value.absolute_nb_iter;
      newFormulaire1.result = this.newForm1.value.result;


      const json = JSON.stringify(newFormulaire1);
      this.sent.emit(json);
    } else {
      this.hasError = true;
    }
  }

}
