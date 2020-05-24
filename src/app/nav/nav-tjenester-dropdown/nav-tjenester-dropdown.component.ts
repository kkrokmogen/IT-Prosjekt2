import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nav-tjenester-dropdown',
    templateUrl: './nav-tjenester-dropdown.component.html',
    styleUrls: ['./nav-tjenester-dropdown.component.css']
})
export class NavTjenesterDropdownComponent {
    @Output() public onNavigate = new EventEmitter<any>();

    public isExpanded: boolean = false;

    public toggleExpand() {
        this.isExpanded = !this.isExpanded;
    }

    public collapse() {
        this.onNavigate.emit();
    }
}
