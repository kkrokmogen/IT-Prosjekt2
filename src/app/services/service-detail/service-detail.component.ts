import { Component, OnInit } from '@angular/core';
import { Service } from '../service.model';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  recipe: Service;
  id:number;

  constructor(private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.serviceService.getService(this.id);
        }
      );
  }

}
