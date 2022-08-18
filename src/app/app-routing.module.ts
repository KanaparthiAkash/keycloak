import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { Role } from './models/role';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      roles: [Role.USER]
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
