import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProductComponent} from './components/product/product.component'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
