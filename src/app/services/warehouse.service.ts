import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

constructor(private fs: Firestore) { }

  getWarehouses() {
    let warehouses = collection(this.fs, 'warehouses');
    return collectionData(warehouses, { idField: 'id'});
  }

  addWarehouse(data: any) {
    let warehouse = collection(this.fs, 'warehouses');
    return addDoc(warehouse, data);
  }

  deleteWarehouse(id: string) {
    let docRef = doc(this.fs, `warehouses/${id}`);
    return deleteDoc(docRef); 
  }


}
