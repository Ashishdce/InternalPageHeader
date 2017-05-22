import { Component, OnInit } from '@angular/core';
import { InternalPageHeaderService } from './internal-page-header.service';
import { InternalPageHeaderInterface } from './internal-page-header.interface';

@Component({
  selector: 'app-internal-page-header',
  templateUrl: './internal-page-header.component.html',
  styleUrls: ['./internal-page-header.component.css']
})
export class InternalPageHeaderComponent implements OnInit {

InternalPageHeader:any; 
 
 variant= {
      text :false ,
      textoverimage : false,
      halfwidthandimage : false,
      headerwithblackovrlay : false
 }
  
  private headerData: InternalPageHeaderInterface;

  constructor(private internalPageHeaderService: InternalPageHeaderService) { 
    enum InternalPageHeader {
      text=1 ,
      textoverimage = 2,
      halfwidthandimage = 3,
      headerwithblackovrlay = 4
    };

    this.internalPageHeaderService.getData()
    .subscribe(data =>
        { 
          this.headerData = data.json(); 
         this.variant[InternalPageHeader[this.headerData.module.variantID]]=true;
        }
      );
    


    
  }

  ngOnInit() {
     
  }

}
