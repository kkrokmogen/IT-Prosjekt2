import { Component, Input } from '@angular/core';
import { ProductGroupsEnum } from '../../service.model';

@Component({
    selector: 'app-product-groups-info',
    templateUrl: './product-groups-info.component.html',
    styleUrls: ['./product-groups-info.component.css']
})
export class ProductGroupsInfoComponent {
    public enum = ProductGroupsEnum;
    @Input() public itemSet: string;
}
