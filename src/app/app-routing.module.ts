import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import  { AdminModuleComponent} from './admin-module/admin-module.component'

const routes: Routes = [ {path:'', component: MainPageComponent},
{path:'dashboard', component: MainDashboardComponent},
{path:'admin-dashboard', component: AdminModuleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
