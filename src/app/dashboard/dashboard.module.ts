import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { AddWarehouseComponent } from './warehouses/add-warehouse/add-warehouse.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WarehousesComponent, AddWarehouseComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(DashboardRoutes),
    DashboardComponent,
  ],
})
export class DashboardModule { }
