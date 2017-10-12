import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from "rxjs/Rx";
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from "@angular/forms";
import { AuthGuardService } from "../auth-guard.service";
import { LoginService } from "./login.service";

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
})

export class LoginComponent implements OnDestroy, OnInit {

    ngOnDestroy(): void {
        //this.observable.unsubscribe();
    }

    observable: any;
    public form: FormGroup;
    public username: AbstractControl;
    public password: AbstractControl;
    uname: string = '';
    pass: string = '';
    constructor(private fb: FormBuilder, translate: TranslateService, private authguardservice: AuthGuardService, private loginservice: LoginService) {

        this.observable = Observable.interval(1000).subscribe(x => {
            translate.use(localStorage.getItem('lang'));
            //translate.use(localStorage.getItem('lang'));
        });

        this.form = fb.group({
            'username': ['', Validators.compose([Validators.required])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        });

        this.username = this.form.controls['username'];
        this.password = this.form.controls['password'];



        // this language will be used as a fallback when a translation isn't found in the current languag
    }
    ngOnInit() {


    }

    res = [];
    public onSubmit(): void {

        var json1 = {
            "username": this.uname,
            "password": this.pass
        };

        console.log(JSON.stringify(json1));

        this.loginservice.getLogins(JSON.stringify(json1));




    }


}