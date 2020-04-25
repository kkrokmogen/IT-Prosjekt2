import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../service.model';
import { ServiceUnderCat } from '../../service-undercat.model';

@Component({
  selector: 'app-undercat-item',
  templateUrl: './undercat-item.component.html',
  styleUrls: ['./undercat-item.component.css']
})
export class UndercatItemComponent implements OnInit {
  @Input() service: ServiceUnderCat;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
