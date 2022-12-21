import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';


@NgModule({
  declarations: [
    CreateCustomerComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomerModule { }
