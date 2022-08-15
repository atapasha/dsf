import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialExampleModule } from './material.module';
import { UserListComponent } from './userApp/user-list/user-list.component';
import { UserRegisterComponent } from './userApp/user-register/user-register.component';
import { UserUpdateComponent } from './userApp/user-update/user-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { AngularIbanModule } from 'angular-iban';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserRegisterComponent,
    UserUpdateComponent,
    DialogComponent
  ],
  imports: [
    AngularIbanModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    AngularIbanModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
