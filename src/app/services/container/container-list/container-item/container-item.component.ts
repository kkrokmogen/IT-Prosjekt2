import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/services/service.model';

@Component({
  selector: 'app-container-item',
  templateUrl: './container-item.component.html',
  styleUrls: ['./container-item.component.css']
})
export class ContainerItemComponent implements OnInit {
  @Input() service: Service;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
