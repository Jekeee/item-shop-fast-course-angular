import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Items list';

  

  products$: Observable<IProduct[]>

  loading = false

  term = ""

  constructor(private productService  : ProductService){}

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productService.getAll().pipe(
     tap(() => this.loading = false)
    )
  }
}
