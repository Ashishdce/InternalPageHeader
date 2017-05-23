import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { InternalPageHeaderInterface } from './internal-page-header.interface';

@Injectable()

export class InternalPageHeaderService{

    url: string = '/assets/internal-page-header.json';

    private headerData$: Observable<any>;

    constructor(private http: Http){
        this.headerData$ = this.fetchData();      
    }
    fetchData(): Observable<any> {
        return this.http.get(this.url);
    }
    getData(): Observable<any>{
        return this.headerData$;
    }
    
}