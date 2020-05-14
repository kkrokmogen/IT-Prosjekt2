import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-undercat-list',
	templateUrl: './undercat-list.component.html',
	styleUrls: ['./undercat-list.component.css']
})
export class UndercatListComponent {

	@Output() public onOpen: EventEmitter<string> = new EventEmitter();
	@Input() public listName: string;
	@Input() public itemActive: boolean;

	public openItem() {
		this.onOpen.emit(this.listName);
	}
}
