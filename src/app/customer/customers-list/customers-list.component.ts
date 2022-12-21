import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  
  dataSource : any[] = []
  ngOnInit(): void {

    this.customerService.getCostumers().subscribe(
      (data: any)=>{
        console.log(data)
        this.dataSource = data
      }
    )
    
  }

  async deleteCustomer(id: string){ 
    await this.customerService.deleteCostumer(id)
  }

}
