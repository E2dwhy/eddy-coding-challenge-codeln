// dashboard.routing.ts

import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { AddWarehouseComponent } from './warehouses/add-warehouse/add-warehouse.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    // TODO: impement breadcrumbs
    // children: [
    //   {
    //     path: 'admin',
    //     children: [
    //       {
    //         path: 'operations',
    //         children: [
    //           {
    //             path: 'warehouses',
    //             component: WarehousesComponent,
    //             children: [
    //               {
    //                 path: 'add',
    //                 component: AddWarehouseComponent,
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  },
  {
    path: 'warehouses',
    component: WarehousesComponent,
  },
  {
    path: 'add',
    component: AddWarehouseComponent,
  }
];
