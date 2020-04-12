import { Injectable } from '@angular/core';
import { Service } from './service.model';

@Injectable()
export class ServiceService {

    private services: Service[] = [
        new Service(
            'Flasker', 
            'Flasker er bra', 
        ),
        new Service(
            'Bokser', 
            'Bokser er bra', 
        ),
        new Service(
            'Blister', 
            'Blister er bra', 
        ),
        new Service(
            'Poser', 
            'Poser er bra', 
        ),

            
    ];

    getServices(){
        return this.services.slice();
    }

    getService(index: number){
        return this.services[index];
    }
}