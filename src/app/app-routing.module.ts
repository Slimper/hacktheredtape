import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsListComponent} from './forms/forms-list/forms-list.component';
import {FormFillComponent} from './forms/form-fill/form-fill.component';

const routes: Routes = [
  {
    path: 'forms',
    component: FormsListComponent,
    data: {title: 'Forms List'}
  },
  {
    path: '',
    redirectTo: '/forms',
    pathMatch: 'full'
  },
  {
    path: 'forms/:id',
    component: FormFillComponent,
  }
// { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
