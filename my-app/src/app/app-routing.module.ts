import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { HomeComponent } from './home/home.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path:"",
    children: [
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "user/add", component: UserAddComponent },
      { path: "user/edit/:id", component: UserEditComponent },
  ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
