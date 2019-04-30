import { JobsService } from './Job/services/jobs.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'jobs',
        loadChildren: './Job/jobs.module#JobsModule'
      }
    ]
  },
  {path: 'nav', component: NavComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,

   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      FormsModule
   ],
   providers: [
      JobsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
