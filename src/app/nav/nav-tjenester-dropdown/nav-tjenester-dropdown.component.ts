import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-tjenester-dropdown',
    templateUrl: './nav-tjenester-dropdown.component.html',
    styleUrls: ['./nav-tjenester-dropdown.component.css']
})
export class NavTjenesterDropdownComponent {
    public isExpanded: boolean = false;

    public toggleExpand() {
        this.isExpanded = !this.isExpanded;
    }
}
