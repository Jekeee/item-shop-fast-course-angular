import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { catchError, Observable, throwError } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: "root"
})

export class ProductService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
        ){

    }
    
    getAll(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams({
                fromString: 'limit=10'
            })
        }).pipe(
            catchError(this.errorHendler.bind(this))
        )
    }

    private errorHendler(error: HttpErrorResponse){
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }
}  