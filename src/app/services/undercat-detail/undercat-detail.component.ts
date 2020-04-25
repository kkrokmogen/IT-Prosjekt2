import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Service } from '../service.model';
import { UndercatStartComponent } from '../undercat-start/undercat-start.component';
import { ServiceUnderCat } from '../service-undercat.model';

@Component({
  selector: 'app-undercat-detail',
  templateUrl: './undercat-detail.component.html',
  styleUrls: ['./undercat-detail.component.css']
})
export class UndercatDetailComponent implements OnInit {
  recipe: ServiceUnderCat;
  service: ServiceUnderCat;
  id:number;
  
  constructor(private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.serviceService.getUnderCat(this.id)
      }
    );
  }

}
