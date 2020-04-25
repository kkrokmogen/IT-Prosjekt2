import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ServiceService } from './service.service';
import { Service } from './service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  service: Service;
  id: number;

  constructor(private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
    (params: Params) => {
    this.id = +params['id'];
    this.service = this.serviceService.getService(this.id);
    }
    );
  }

  onProdDev(){
    this.router.navigate(['tjenester/produktutvikling'])
  }

  onProdGroup(){
    this.router.navigate(['tjenester/produktgrupper'])
  }

  onContainer(){
    this.router.navigate(['tjenester/forpakning'])
  }

}
