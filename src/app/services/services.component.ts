import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ServiceService } from './service.service';
import { Service } from './service.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[];
  subscription: Subscription;

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.services = this.serviceService.getServices();
  }

}
