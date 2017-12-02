import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';

const appRoutes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
