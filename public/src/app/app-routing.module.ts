
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path: '', component: ListComponent  },
  // { path: 'pets', component: ListComponent  },
  { path: 'edit/:id', component: EditComponent},
  { path: 'pet/:id', component: DetailsComponent},
  { path: 'pets/create', component: SingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }