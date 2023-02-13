import { Component, OnInit } from '@angular/core';
import { Detail } from 'src/app/shared/interfaces/search.interface';
import { UserService } from '../../user.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-more-details',
  templateUrl: './show-more-details.component.html',
  styleUrls: ['./show-more-details.component.css']
})
export class ShowMoreDetailsComponent implements OnInit {

  title = 'Google Pay Demo';

  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '15',
      currencyCode: 'INR',
      countryCode: 'BE'
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION']
  };

  onLoadPaymentData = (
    event: Event
  ): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  }

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (
    paymentData
    ) => {
      console.log('payment authorized', paymentData);
      return {
        transactionState: 'SUCCESS'
      };
    }

  onError = (event: ErrorEvent): void => {
    console.error('error', event.error);
  }

  detail!:Detail;
  constructor(private route:ActivatedRoute,private userService:UserService,private location:Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>this.getDetailById(params['id']));
  }
  getDetailById(id:number){
    this.detail = this.userService.getDetailById(id);
  }
  goBack() {
    // window.history.back();
    this.location.back();

    console.log( 'goBack()...' );
  }

}
