import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { ValidateFormComponent } from './validate-form/validate-form.component';
const routes: Routes = [
  {
    path: 'simple',
    component: SimpleFormComponent
  },
  {
    path: 'complex',
    component: ComplexFormComponent
  },
  {
    path: 'validate',
    component: ValidateFormComponent
  },
  {
    path: '',
    redirectTo: 'simple',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
