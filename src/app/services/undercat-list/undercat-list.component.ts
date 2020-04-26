import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Service } from '../service.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-undercat-list',
  templateUrl: './undercat-list.component.html',
  styleUrls: ['./undercat-list.component.css']
})
export class UndercatListComponent implements OnInit {
  
  id:number;
  service: Service;
  services: Service[];
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

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

}
