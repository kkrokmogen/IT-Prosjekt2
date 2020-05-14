import { Component, Input } from '@angular/core';
import { ProductDevelopmentEnum } from '../../service.model';

@Component({
    selector: 'app-product-development-info',
    templateUrl: './product-development-info.component.html',
    styleUrls: ['./product-development-info.component.css']
})
export class ProductDevelopmentInfoComponent {
    public enum = ProductDevelopmentEnum;
    @Input() public itemSet: string;
}
