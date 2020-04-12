import { Component, OnInit } from '@angular/core';
import { Service } from '../service.model';
import { Subscription } from 'rxjs';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
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
