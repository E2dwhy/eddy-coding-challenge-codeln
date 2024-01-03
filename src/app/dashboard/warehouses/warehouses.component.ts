import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/models/warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css']
})
export class WarehousesComponent implements OnInit {

  displayedColumns = ['area', 'label', 'address', 'actions'/* Add other column names as needed */];
  dataSource = new MatTableDataSource();
 
  constructor( private router: Router, private warehouseService: WarehouseService) {}

  warehouses: Warehouse[] | undefined;

  refresh() {
    this.warehouseService.getWarehouses().subscribe((res) => {
      this.dataSource.data = res;
      console.log(this.warehouses);
    })
  }

  ngOnInit() {
    this.refresh();
  }

  redirectToCreationPage() {
    this.router.navigate(['/dashboard/add']);
  }
  

  delete(warehouse: Warehouse) {
    this.warehouseService.deleteWarehouse(warehouse.id).then((res) => {
      console.log(res);
      this.refresh();
    });

  }

}
