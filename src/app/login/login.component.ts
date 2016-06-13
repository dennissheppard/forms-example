import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';
import { User } from '../shared/models/user';

@Component({
    selector: 'login',
    templateUrl: 'src/app/login/login.component.html',
    directives: [],
    providers: [LoginService]
})

export class LoginComponent implements OnInit{
    //////////////////////////
    //properties
    
    
    
    ///////////////////////
    //private members
    
    
    constructor(private loginService: LoginService){
    
    }
    
    //////////////////////////
    //Init function
    ngOnInit(){
    
    }
    
    
    //////////////////////////////////
    //View/public functions
    
    signIn(){
        // this.loginService.authenticate(this.credentials)
        //     .subscribe(() => {
        //         this.loginService.getStakeholderDetail()
        //             .subscribe((user: User) => {
        //                 this.user = user;
        //                 console.log(this.user);
        //             });
        //
        //     });
    }
    
    
    
    
    /////////////////////////////
    //Private methods
}