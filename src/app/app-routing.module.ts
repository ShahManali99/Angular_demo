import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './users/about.component';
import { LoginComponent } from './users/login.component';
import { PageNotFoundComponent } from './users/page-not-found.component';
import { LaptopComponent } from './users/products/laptop/laptop.component';
import { MobileComponent } from './users/products/mobile/mobile.component';
import { ProductsComponent } from './users/products/products.component';
import { TvComponent } from './users/products/tv/tv.component';
import { WashingMachineComponent } from './users/products/washing-machine/washing-machine.component';
import { SignupComponent } from './users/signup.component';

const routes: Routes = [
  {path: '', redirectTo: '/users/products', pathMatch:'full'},
  {path: 'users/login', component: LoginComponent},
  {path: 'users/signup', component: SignupComponent},
  {path: 'users/signup/:name', component: AboutComponent},
  {path: 'users/about', component: AboutComponent},
  {path: 'users/products',component:ProductsComponent, children:[
    {path: 'laptop', component: LaptopComponent},
    {path: 'mobile', component: MobileComponent},
    {path: 'tv', component: TvComponent},
    {path: 'washing-machine', component: WashingMachineComponent}
  ]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, SignupComponent,AboutComponent, ProductsComponent, PageNotFoundComponent]
