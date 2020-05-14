import { Component, OnInit } from '@angular/core';
import { ProductGroupsEnum } from '../service.model';


@Component({
    selector: 'app-product-groups',
    templateUrl: './product-groups.component.html',
    styleUrls: ['./product-groups.component.css']
})
export class ProductGroupsComponent implements OnInit {

    public enum = ProductGroupsEnum;
    public listItems = [
        this.enum.Tabletter,
        this.enum.Oljer,
        this.enum.Pulver,
        this.enum.Kapsler,
    ];

    public activeItem: string;

    public ngOnInit() {
        this.activeItem = this.listItems[0];
    }

    public openItem(item: string) {
        this.activeItem = item;
    }
}

