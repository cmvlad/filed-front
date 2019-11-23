import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PaymentModel} from './models/payment.model';
import {minDateValidator} from '../shared/validators/min-date.validator';
import {PaymentService} from './payment.service';
import {MessageBarService} from '../shared/message-bar/message-bar.service';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ModelTypeEnum} from '../shared/message-bar/models/model-type.enum';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit, OnDestroy {

  private paymentForm: FormGroup;

  constructor(private fb: FormBuilder,
              private paymentService: PaymentService,
              private messageBarService: MessageBarService) {
  }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      cardHolder: ['',
        [Validators.required]],
      amount: ['',
        [Validators.required, Validators.min(0)]],
      creditCardNumber: ['',
        [Validators.required]],
      expirationDate: ['',
        [Validators.required, minDateValidator]],
      securityCode: ['',
        [Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  submitForm(): void {
    if (this.paymentForm.valid) {
      this.paymentService.setPayment(this.createPaymentModel()).subscribe(resp => {
        console.log('API POST Respone', resp);
        this.messageBarService.sendToast(
          this.messageBarService.createModel('Payment successful', ModelTypeEnum.success)
        );
        this.resetForm();
      }, err => {
        this.messageBarService.sendToast(
          this.messageBarService.createModel('Payment unsuccessful. Please Try again', ModelTypeEnum.error)
        );
      });
    } else {
      this.paymentForm.markAllAsTouched();
    }
  }

  createPaymentModel(): PaymentModel {
    return new PaymentModel(
      this.paymentForm.value.creditCardNumber.trim(),
      this.paymentForm.value.cardHolder,
      this.paymentForm.value.expirationDate,
      this.paymentForm.value.securityCode,
      this.paymentForm.value.amount
    );
  }

  resetForm(): void {
    this.paymentForm.reset();
  }

  ngOnDestroy(): void {
  }

}
