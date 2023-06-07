import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule} from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { QuenpasswordComponent } from './pages/quenpassword/quenpassword.component';
import { ProductsComponent } from './pages/products/products.component';

import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    RegisterComponent,
    LoginComponent,
    QuenpasswordComponent,
  
    HeaderAdminComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    SidebarAdminComponent,
    DashboardComponent,
    NotFoundComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  FormsModule, BrowserAnimationsModule,MatIconModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
