import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CRUDComponent } from './component/crud/crud.component';
// import { ParentComponent } from './component/parent/parent.component';
import { CrudService } from './service/crud.service';

const routes: Routes = [
  // {path:'parent',component:ParentComponent},
  {path:'',component:CRUDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[CrudService]
})
export class AppRoutingModule { }
