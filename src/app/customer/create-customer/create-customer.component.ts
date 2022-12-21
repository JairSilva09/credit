import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent {

  constructor(private customerService: CustomerService,private activatedRoute: ActivatedRoute) { }
  

  createCustomerForm:any = {
    name: "",
    lastName: "",
    address: "",
    email: "",
    phone: ""    
  }

  async createCustomer(){
    const response = await this.customerService.addCustomer(this.createCustomerForm);
    if(response.id != null && response.id != undefined){
      this.reset()
      alert("The new client was added")
    }
    console.log(response.id)
  }
  
  reset(){
    this.createCustomerForm.name = "";
    this.createCustomerForm.lastName = "";
    this.createCustomerForm.address = "";
    this.createCustomerForm.email = "";
    this.createCustomerForm.phone = "";
  }

}
