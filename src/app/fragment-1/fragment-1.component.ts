import { Component } from '@angular/core';
import { Fragment1Service } from './fragment-1.service';
import { Fragment1Interface } from './fragment-1.interface';
import { Fragment1Enum } from './fragment-1.enum';

@Component({
  selector: 'rgr-fragment-1',
  templateUrl: './fragment-1.component.html',
  styleUrls: ['./fragment-1.component.scss']
})
export class Fragment1Component{

 variant: string;
  enum=null;
  private headerData: Fragment1Interface;

  constructor( private internalPageHeaderService: Fragment1Service) { 
    
    this.internalPageHeaderService.getData()
    .subscribe(data =>
        { 
          this.headerData = data.json(); 
          this.variant = this.headerData.module.variantID 
          this.enum = Fragment1Enum;  
        }
      );    
  }
}
