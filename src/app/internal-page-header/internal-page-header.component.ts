import { Component } from '@angular/core';
import { InternalPageHeaderService } from './internal-page-header.service';
import { InternalPageHeaderInterface } from './internal-page-header.interface';
import { InternalPageHeaderEnum } from './internal-page-header-enum.enum';

@Component({
  selector: 'app-internal-page-header',
  templateUrl: './internal-page-header.component.html',
  styleUrls: ['./internal-page-header.component.scss']
})
export class InternalPageHeaderComponent{

 variant= {
      text :false ,
      textoverimage : false,
      halfwidthandimage : false,
      headerwithblackovrlay : false
 }
  
  private headerData: InternalPageHeaderInterface;

  constructor( private internalPageHeaderService: InternalPageHeaderService) { 
    
    this.internalPageHeaderService.getData()
    .subscribe(data =>
        { 
          this.headerData = data.json(); 
         this.variant[InternalPageHeaderEnum[this.headerData.module.variantID]]=true;
        }
      );    
  }
}
