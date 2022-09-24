import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckbalanceComponent } from './components/checkbalance/checkbalance.component';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { DepositmoneyComponent } from './components/depositmoney/depositmoney.component';
import { WithdrawmoneyComponent } from './components/withdrawmoney/withdrawmoney.component';



@NgModule({
  declarations: [
    AppComponent,
    CheckbalanceComponent,
    HomeComponent,
    DepositmoneyComponent,
    WithdrawmoneyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
