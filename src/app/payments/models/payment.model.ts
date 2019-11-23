export class PaymentModel {
  id?: number;
  creditCardNumber: string;
  cardholder: string;
  expirationDate: Date;
  securityCode: string;
  amount: number;

  constructor(creditCardNumber: string, cardholder: string, expirationDate: Date, securityCode: string, amount: number) {
    this.creditCardNumber = creditCardNumber;
    this.cardholder = cardholder;
    this.expirationDate = expirationDate;
    this.securityCode = securityCode;
    this.amount = amount;
  }
}
