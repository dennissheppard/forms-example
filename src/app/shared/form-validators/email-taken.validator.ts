import {Control} from '@angular/common';
import {Observable} from "rxjs/Rx";

import {Injectable, ReflectiveInjector} from '@angular/core';

import {Headers, Http, Response, RequestOptions, HTTP_PROVIDERS} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';


import { ApiService } from '../services/api.service';
import  {UrlConstants } from '../services/url-constants.service';
import {Injector} from "@angular/core";

interface IValidationResult{
    [key:string]:boolean;
}

function checkEmail(control: Control): Observable<IValidationResult>{
    // Manually inject Http
    let injector = ReflectiveInjector.resolveAndCreate([HTTP_PROVIDERS]);
    let http = injector.get(Http);
    let requestOptions = new RequestOptions({ headers: new Headers({
        'Content-Type': 'application/json'
    })});


    let baseUrl: string = 'https://api-staging.nexttiereducation.com/v1';
    let email = control.value;
    let data = emailTakenValidator.getDefaultData();
    data.email = email;

    return new Observable((obs: any) => {
        control
            .valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(value => http.post(baseUrl + '/stakeholder/register/', JSON.stringify(data), requestOptions))
            .subscribe(
                data => {
                    obs.next(null);
                    obs.complete();
                },
                error => {
                    if (error.status === 409) {
                        obs.next({ ['emailTaken']: true });
                        obs.complete();
                    } else{
                        obs.next(null);
                        obs.complete();
                    }

                }
            );
    });

}

export class emailTakenValidator{
    
    constructor(){

    }
    
    static emailTaken(control: Control) {
        return checkEmail(control);
    }



    static getDefaultData(){
        return {
            "email": "",
            "password": "thisIsaLegitPassword1",
            "first_name": "Generic",
            "last_name": "Name",
            "stakeholder_type": "Student",
            "phase": "Junior",
            "graduation_year": 2016,
            "has_letters": true
        };
    }
}