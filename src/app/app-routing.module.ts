import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { FruitsComponent } from './home/fruits/fruits.component';
import { HomeComponent } from './home/home.component';
import { VegetablesComponent } from './home/vegetables/vegetables.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "home/fruits",
    component: FruitsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "home/vegetables",
    component: VegetablesComponent,
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
