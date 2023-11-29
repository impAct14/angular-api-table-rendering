import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ProductionComponent } from './components/production/production.component';

const routes: Routes = [
  { path: 'user', component: DataTableComponent },
  { path: 'production', component: ProductionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
