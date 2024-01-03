import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { ConfirmationModalComponent } from 'src/app/shared/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {
  warehouseForm!: FormGroup;
  constructor(
    private dialog: MatDialog,
    private warehouseService: WarehouseService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
   this.setForm();
  
  }

  setForm() {
    this.warehouseForm = new FormGroup({
      label: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      area: new FormControl('', [Validators.required, Validators.min(0)]),
      longitude: new FormControl('', Validators.required),
      latitude: new FormControl('', Validators.required)
   });
  }

  add() {
    const data = {
      title: "Voulez-vous enregistrer ?",
      message: "Vous êtes sur le point de sauvegarder ces données dans la base de données, êtes-vous sûr de vouloir continuer ?"
    };
    this.dialog
    .open(ConfirmationModalComponent, {
      data
    })
    .afterClosed()
    .subscribe((result: any) => {
      if (result && result === true) {
        this.save()
      }
    });

  }

  save() {
    const data = this.warehouseForm.value;

    this.warehouseService.addWarehouse(data).then((res) => {
      console.log(res);
      this.setForm();
    }) 
  }



}
