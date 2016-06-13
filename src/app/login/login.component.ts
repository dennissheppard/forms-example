import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';
import { User } from '../shared/models/user';
import {FormBuilder, ControlGroup, Validators, AbstractControl} from "@angular/common";
import { FORM_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'login',
    templateUrl: 'src/app/login/login.component.html',
    directives: [],
    providers: [LoginService]
})

export class LoginComponent implements OnInit{
    //////////////////////////
    //properties
    loginForm: ControlGroup;

    
    
    ///////////////////////
    //private members
    
    
    constructor(private loginService: LoginService, private formBuilder: FormBuilder){
        this.loginForm = this.formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        });
        

    }
    
    //////////////////////////
    //Init function
    ngOnInit(){
    
    }
    
    
    //////////////////////////////////
    //View/public functions
    
    signIn(credentials){
        console.log(credentials);
        this.loginService.authenticate(credentials)
            .subscribe(() => {
                this.loginService.getStakeholderDetail()
                    .subscribe((response) => {

                    });

            });
    }
    
    
    
    
    /////////////////////////////
    //Private methods
}