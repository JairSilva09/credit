import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, collectionData,doc,deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import  Customer  from './models/customer.interface'

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private firestore: Firestore) { }

  addCustomer(customer: Customer){
    const customerRef = collection(this.firestore,'customers');
    return addDoc(customerRef,customer)
  }

  getCostumers():Observable<Customer[]> {
    const customerRef = collection(this.firestore,'customers');
    return collectionData(customerRef,{idField: 'id'}) as Observable<Customer[]>;
  }

  deleteCostumer(customer: string){
    const customerRef = doc(this.firestore,'customers/'+customer);
    return deleteDoc(customerRef);
  }
}
