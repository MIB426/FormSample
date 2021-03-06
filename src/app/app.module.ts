import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { ValidateFormComponent } from './validate-form/validate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ComplexFormComponent,
    ValidateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
