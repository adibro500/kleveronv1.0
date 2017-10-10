import { Headers, RequestOptions } from '@angular/http';

export let options = new RequestOptions();
// let url = 'http://localhost:8081/auth/v1/ldap-login';
options.headers = new Headers();
options.headers.append('Access-Control-Allow-Origin', '*');
options.headers.append('Content-Type', 'application/json');
