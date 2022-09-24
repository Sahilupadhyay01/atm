import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css']
})
export class CheckbalanceComponent implements OnInit {

  
  currBal: number = 0;
  accountNumber: number = 0;
  cardPin: number = 0;
  addAmount: number = 0;
  valid: string = '';
  balanceInfo: any = {
    currBal: 0,
    name: ''
  }

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
  }

   submitData() { 
    this.customersService.getBalance(this.accountNumber, this.cardPin)
    .subscribe({
      next: (data) => {
        this.balanceInfo.currBal = data.balance;
        this.balanceInfo.name = data.name;
        this.valid = 'valid'
      },
      error: (Response) => {
        console.log(Response);
        this.valid = 'invalid';
      }
    })
  }

}

