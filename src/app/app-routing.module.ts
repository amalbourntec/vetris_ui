import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfaloginComponent } from './mfalogin/mfalogin.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'mfalogin', component: MfaloginComponent},
  { path: 'home', component: UsersComponent},
  {
    path: 'login',

    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)

  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
