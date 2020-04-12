import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Service } from '../../service.model';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.css']
})
export class ContainerListComponent implements OnInit, OnDestroy {
  services: Service[];
  subscription: Subscription;

  constructor(private serviceService: ServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.services = this.serviceService.getServices();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
