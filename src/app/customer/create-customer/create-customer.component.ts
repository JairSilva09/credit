import { Component } from '@angular/core';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent {

  createCustomerForm:any = {
    name: "",
    lastName: "",
    address: "",
    email: "",
    phone: ""    
  }

  createCustomer(){
    console.log(this.createCustomerForm)
  }

}
