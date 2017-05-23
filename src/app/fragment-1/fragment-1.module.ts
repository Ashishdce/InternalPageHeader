import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Fragment1Component } from './fragment-1.component';
import { Fragment1Service } from './fragment-1.service';

@NgModule({
  declarations: [
    Fragment1Component
  ],
  imports: [
    CommonModule,
  ],
  exports: [Fragment1Component],
  providers: [Fragment1Service]
})
export class Fragment1Module { }