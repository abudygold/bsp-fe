import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  #destroyRef = inject(DestroyRef);

  constructor(private http: HttpClient) { }

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http
      .get<T>(url, { params, headers, withCredentials: true })
      .pipe(takeUntilDestroyed(this.#destroyRef));
  }

  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http
      .post<T>(url, body, { headers, withCredentials: true })
      .pipe(takeUntilDestroyed(this.#destroyRef));
  }

  put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http
      .put<T>(url, body, { headers, withCredentials: true })
      .pipe(takeUntilDestroyed(this.#destroyRef));
  }

  patch<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http
      .patch<T>(url, body, { headers, withCredentials: true })
      .pipe(takeUntilDestroyed(this.#destroyRef));
  }

  delete<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http
      .delete<T>(url, { params, headers, withCredentials: true })
      .pipe(takeUntilDestroyed(this.#destroyRef));
  }
}
