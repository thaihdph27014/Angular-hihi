import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LayoutClientComponent } from './components/layouts/layout-client/layout-client.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/admin/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      {path:'product/:id',component:ProductDetailComponent},
      {
        path: 'login',
        component: LoginComponent,
      },
      { path: 'register', component: RegisterComponent },
    ],

  },
  { path: '**', component: NotFoundComponent },

  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'admin',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },

      {
        path: 'dashboard',
        component: DashboardComponent,
      },

      {
        path: 'products',
        component: ProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
