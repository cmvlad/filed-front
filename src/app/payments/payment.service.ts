import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PaymentModel} from './models/payment.model';
import {Observable} from 'rxjs';

@Injectable()
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  setPayment(payment: PaymentModel): Observable<number> {
    return this.http.post<number>('url', payment);
  }
}
