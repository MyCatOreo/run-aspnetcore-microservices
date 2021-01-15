export interface OrderResponseModel {
  userName: string;
  totalPrice: number;

  // BillingAddress
  firstName: string;
  lastName: string;
  emailAddress: string;
  addressLine: string;
  country: string;
  state: string;
  zipCode: string;

  // Payment
  cardName: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
  paymentMethod: number;
}
