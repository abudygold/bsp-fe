import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ApiService {
    #private;
    private http;
    constructor(http: HttpClient);
    get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T>;
    post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T>;
    put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T>;
    patch<T>(url: string, body: any, headers?: HttpHeaders): Observable<T>;
    delete<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiService>;
}
