import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

    constructor(private http: Http) {
        this.headers = this.setAuthHeader();
        this.requestOptions = new RequestOptions({ headers: this.headers });
    }

    private headers: Headers;
    private requestOptions: RequestOptions;

    get(url: string): Observable<Response> {
        return this.http.get(url, this.requestOptions);
    }

    put(url: string, data: any): Observable<Response> {
        return this.http.put(url, JSON.stringify(data), this.requestOptions);
    }

    post(url: string, data: any): Observable<Response> {
        return this.http.post(url, JSON.stringify(data),this.requestOptions);
    }

    remove(url: string): Observable<Response> {
        return this.http.delete(url, this.getHeaders());
    }

    patch(url: string, data: any): Observable<Response> {
        return this.http.post(url, JSON.stringify(data), this.requestOptions);
    }    

    setAuthHeader(){
        if(localStorage.getItem('authToken')){
            this.headers = new Headers({
                'AUTHORIZATION': 'Token 09195ed25cb1fed8d305c27ca7525e958db0dbfa', //hard code for now
                'Content-Type': 'application/json'
            });
            this.requestOptions = new RequestOptions({ headers: this.headers });
        }
    }

    private getHeaders(): Headers {
        return new Headers({
            'Content-Type': 'application/json'
        });
    }

}
