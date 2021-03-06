import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ServiceHelper {

    constructor(private http: HttpClient) {
    }

    GetRequest<T>(url: string): Promise<T> {
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.get(url, options)
            .toPromise()
            .then(data => {
                return data as T;             
            }).catch((error: any) => {
                return null;
            });
    }

}
