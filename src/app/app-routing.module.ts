import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {ROUTES} from './constants';

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }