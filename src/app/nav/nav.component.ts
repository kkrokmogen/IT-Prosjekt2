import { Component } from '@angular/core';
import {  } from 'protractor';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Service } from '../services/service.model';
import { ServiceService } from '../services/service.service';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  collapse = true;
  service: Service;
  id:number;

  constructor(private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
    (params: Params) => {
    this.id = +params['id'];
    this.service = this.serviceService.getService(this.id);
    }
    );
  }

  onProdDev(){
    this.router.navigate(['/produktutvikling'])
  }

  onProdGroup(){
    this.router.navigate(['/produktgrupper'])
  }

  onContainer(){
    this.router.navigate(['/forpakning'])
  }
}
