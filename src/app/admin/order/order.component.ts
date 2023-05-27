import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'admin-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  presentPage: number = 1
  adminorders: OrderModel[] = [];
  constructor(public service: OrderService) { }
  ngOnInit(): void {
    this.service.getAdminOrders()
      .subscribe(response => {
        this.adminorders = response.map((data) => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data() as OrderModel
          }
        });
      })

  }

}

