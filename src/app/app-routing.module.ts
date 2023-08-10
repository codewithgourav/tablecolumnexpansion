import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragtablecolumnComponent } from './dragtablecolumn/dragtablecolumn.component';

const routes: Routes = [
  {path:'',redirectTo:'dragtable',pathMatch:'full'},
  {path:'dragtable' , component: DragtablecolumnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
