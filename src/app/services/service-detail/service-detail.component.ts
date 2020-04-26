import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../service.model';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  @Input() service: Service;
  @Input() index: number;

  id:number;


  //service: Service;
  //services: Service[];
  
  subscription: Subscription;

  constructor(private serviceService: ServiceService,
    private router: Router,
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

  onClick(){
    this.router.navigate(['/name'], {relativeTo: this.route}) ;
  }

}
