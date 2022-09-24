import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-withdrawmoney',
  templateUrl: './withdrawmoney.component.html',
  styleUrls: ['./withdrawmoney.component.css']
})
export class WithdrawmoneyComponent implements OnInit {

  

  currBal: number = 0;
  accountNumber: number = 0;
  cardPin: number = 0;
  subAmount: number = 0;
  valid : string  = '';
  balanceInfo: any = {
    currBal: 0,
    name: ''
  }
  
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
  }

  withdrawData(){
    this.customersService.setWithdraw(this.accountNumber, this.cardPin, this.subAmount)
    .subscribe({
      next: (data) => {
        this.balanceInfo.currBal = data.balance;
        this.balanceInfo.name = data.name;
        this.valid = 'valid'
      },
      error: (response) => {
        console.log(response);
        this.valid = 'invalid';
      }
    })
  }

}
