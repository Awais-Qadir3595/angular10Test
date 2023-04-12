import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './MyComponent/reactive-form/reactive-form.component';
import { TempeleteFormComponent } from './MyComponent/tempelete-form/tempelete-form.component';


const routes: Routes = [

  { path: '', component: AppComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'templete', component: TempeleteFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
