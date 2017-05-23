import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Fragment1Interface } from './fragment-1.interface';

@Injectable()

export class Fragment1Service{

    url: string = '/assets/fragment-1.json';

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