import { Component, OnInit } from '@angular/core';
import { PackagingEnum } from '../service.model';


@Component({
    selector: 'app-packaging',
    templateUrl: './packaging.component.html',
    styleUrls: ['./packaging.component.css']
})

export class PackagingComponent implements OnInit {
    public enum = PackagingEnum;
    public listItems = [
        this.enum.Flasker,
        this.enum.Poser,
        this.enum.Bokser,
        this.enum.Blister,
    ];

    public activeItem: string;

    public ngOnInit() {
        this.activeItem = this.listItems[0];
    }

    public openItem(item: string) {
        this.activeItem = item;
        console.log(this.activeItem);
    }
}

