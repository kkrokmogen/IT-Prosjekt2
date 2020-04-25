import { Component, OnInit } from '@angular/core';
import { Service } from '../service.model';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ServiceUnderCat } from '../service-undercat.model';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: Service;
  id:number;

  constructor(private serviceService: ServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.service = this.serviceService.getService(this.id);
        }
      );
  }

}
