import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire2',
  templateUrl: './formulaire2.component.html',
  styleUrls: ['./formulaire2.component.css']
})
export class Formulaire2Component implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      energy: ['', Validators.required],
      ponderation_volume: ['', Validators.required],
      ponderation_volume_inter: ['', Validators.required],
      ponderation_difference_ext: ['', Validators.required],

      l1min: ['', Validators.required],
      l1max: ['', Validators.required],

      l2min: ['', Validators.required],
      l2max: ['', Validators.required],

      h1min: ['', Validators.required],
      h1max: ['', Validators.required],

      h2min: ['', Validators.required],
      h2max: ['', Validators.required],

      heightToTopMin: ['', Validators.required],
      heightToTopgMax: ['', Validators.required],

      heightgutterMin: ['', Validators.required],
      heightgutterMax: ['', Validators.required],

      shiftMin: ['', Validators.required],
      shiftMax: ['', Validators.required],

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

  get energy() {return this.form.get('energy'); }
  get ponderation_volume() {return this.form.get('ponderation_volume'); }
  get ponderation_volume_inter() {return this.form.get('ponderation_volume_inter'); }
  get ponderation_difference_ext() {return this.form.get('ponderation_difference_ext'); }

  get l1min() {return this.form.get('l1min'); }
  get l1max() {return this.form.get('l1max'); }

  get l2min() {return this.form.get('l2min'); }
  get l2max() {return this.form.get('l2max'); }

  get h1min() {return this.form.get('h1min'); }
  get h1max() {return this.form.get('h1max'); }

  get h2min() {return this.form.get('h2min'); }
  get h2max() {return this.form.get('h2max'); }

  get heightToTopMin() {return this.form.get('heightToTopMin'); }
  get heightToTopgMax() {return this.form.get('heightToTopgMax'); }

  get heightgutterMin() {return this.form.get('heightgutterMin'); }
  get heightgutterMax() {return this.form.get('heightgutterMax'); }

  get shiftMin() {return this.form.get('shiftMin'); }
  get shiftMax() {return this.form.get('shiftMax'); }

  get temp() {return this.form.get('temp'); }
  get deccoef() {return this.form.get('deccoef'); }
  get poisson() {return this.form.get('poisson'); }
  get pbirth() {return this.form.get('pbirth'); }
  get pdeath() {return this.form.get('pdeath'); }

  get end_test_type() {return this.form.get('end_test_type'); }
  get delta() {return this.form.get('delta'); }
  get relative_nb_iter() {return this.form.get('relative_nb_iter'); }
  get absolute_nb_iter() {return this.form.get('absolute_nb_iter'); }

  get result() {return this.form.get('result'); }

  ngOnInit() {}
  save() {}
}
