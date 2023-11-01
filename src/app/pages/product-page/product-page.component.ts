import { Component } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { ProductsService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  title = 'project';
  // products: IProduct[] = [];
  loading = false;
  // products$: Observable<IProduct[]>;
  filter = '';

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe((products) => {
      this.loading = false;
    });
  }
}
