import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientAppComponent } from './client-app/client-app.component';
import { TopHeaderComponent } from './components/headerArea/top-header/top-header.component';
import { BottomHeaderComponent } from './components/headerArea/bottom-header/bottom-header.component';
import { NavigationBarComponent } from './components/headerArea/navigation-bar/navigation-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCategoryListComponent } from './components/productCategoryList/product-category-list/product-category-list.component';
import { ProductCategoryComponent } from './components/productCategoryList/product-category/product-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientAppComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    NavigationBarComponent,
    HeaderComponent,
    ProductCategoryListComponent,
    ProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
