import { Component, OnInit } from '@angular/core';
import { ProductDevelopmentEnum } from '../service.model';

@Component({
    selector: 'app-product-development',
    templateUrl: './product-development.component.html',
    styleUrls: ['./product-development.component.css']
})
export class ProductDevelopmentComponent implements OnInit {
    public enum = ProductDevelopmentEnum;
    public listItems = [
        this.enum.Ide,
        this.enum.Resept,
        this.enum.Smak,
        this.enum.Vegansk,
    ];

    public activeItem: string;

    public ngOnInit() {
        this.activeItem = this.listItems[0];
    }

    public openItem(item: string) {
        this.activeItem = item;
    }
}
