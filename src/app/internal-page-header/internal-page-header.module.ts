import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InternalPageHeaderComponent } from './internal-page-header.component';
import { InternalPageHeaderService } from './internal-page-header.service';

@NgModule({
  declarations: [
    InternalPageHeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [InternalPageHeaderComponent],
  providers: [InternalPageHeaderService]
})
export class InternalPageHeaderModule { }