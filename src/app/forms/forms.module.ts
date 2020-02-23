import {NgModule} from '@angular/core';
import {FormsListComponent} from './forms-list/forms-list.component';
import {FormListElementComponent} from './forms-list/form-list-element.component';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {RouterModule} from '@angular/router';
import {FormFillComponent} from './form-fill/form-fill.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    FormsListComponent,
    FormListElementComponent,
    FormFillComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  exports: [FormFillComponent],
  providers: [],
})
export class HTRTFormsModule {
}
