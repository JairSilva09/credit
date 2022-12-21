import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCustomerComponent} from './create-customer/create-customer.component'
import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [
  { path: "", component: CreateCustomerComponent },
  { path: "customers", component: CustomersListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
