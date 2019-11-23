import {NgModule} from '@angular/core';

import {PaymentsRoutingModule} from './payments-routing.module';
import {PaymentsComponent} from './payments.component';
import {CommonModule} from '@angular/common';
import {CreditCardDirectivesModule} from 'angular-cc-library';
import {CalendarModule} from 'primeng/calendar';
import {ReactiveFormsModule} from '@angular/forms';
import {PaymentService} from './payment.service';


@NgModule({
  declarations: [PaymentsComponent],
  imports: [CreditCardDirectivesModule,
    CommonModule,
    PaymentsRoutingModule,
    CalendarModule,
    ReactiveFormsModule
  ],
  providers: [PaymentService]
})
export class PaymentsModule {
}
