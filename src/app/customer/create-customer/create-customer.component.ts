import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent {

  constructor(private customerService: CustomerService) { }
  

  createCustomerForm:any = {
    name: "",
    lastName: "",
    address: "",
    email: "",
    phone: ""    
  }

  async createCustomer(){
    const response = await this.customerService.addCustomer(this.createCustomerForm);
  }
  

}
