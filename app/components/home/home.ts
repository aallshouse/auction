import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Product, ProductService } from '../../services/product-service';
import CarouselComponent from '../carousel/carousel';
import ProductItemComponent from '../product-item/product-item';
import {FilterPipe} from '../../pipes/filter-pipe';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'auction-home-page',
    styleUrls: ['/home.css'],
    templateUrl: 'app/components/home/home.html'
})
export default class HomeComponent {
    products: Product[] = [];
    titleFilter: FormControl = new FormControl();
    filterCriteria: string;

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
        this.titleFilter.valueChanges
            .debounceTime(100)
            .subscribe(
                value => this.filterCriteria = value,
                error => console.log(error)
            );
    }
}