import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './userApp/user-list/user-list.component';
import { UserRegisterComponent } from './userApp/user-register/user-register.component';
import { UserUpdateComponent } from './userApp/user-update/user-update.component';

const routes: Routes = [

  { path: 'userList', component: UserListComponent },
  { path: 'addUser', component: UserRegisterComponent },
  { path: 'updateUser/:id', component: UserUpdateComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
