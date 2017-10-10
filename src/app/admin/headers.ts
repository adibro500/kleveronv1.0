import { Headers, RequestOptions } from '@angular/http';

export let options = new RequestOptions();
// let url = 'http://localhost:8081/auth/v1/ldap-login';
let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');
options.headers = headers;