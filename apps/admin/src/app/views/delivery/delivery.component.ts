import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent {
  deliveryOptions = [{ id: 'lasjdfl', name: 'InPost', price: 18.5 }];
}
