import { Component, Input, OnInit } from '@angular/core';
import { PackagingEnum } from '../../service.model';

@Component({
    selector: 'app-packaging-info',
    templateUrl: './packaging-info.component.html',
    styleUrls: ['./packaging-info.component.css']
})
export class PackagingInfoComponent implements OnInit {
    public enum = PackagingEnum;
    @Input() public itemSet: string;

    public ngOnInit() {
        console.log(this.itemSet);
    }
}
