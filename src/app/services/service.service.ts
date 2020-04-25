import { Injectable } from '@angular/core';
import { Service } from './service.model';
import { ServiceUnderCat } from './service-undercat.model';

@Injectable()
export class ServiceService {

    private services: Service[] = [
        new Service(
            'Produktutvikling', 
            'Flasker er bra', 
            [ 
                new ServiceUnderCat('Utvikling', 'Utvikling er bra'),
                new ServiceUnderCat('Vegansk', 'Vegansk er bra')
            ]
        ),
        new Service(
            'Produktgrupper', 
            'Bokser er bra', 
            [ 
                new ServiceUnderCat('Pulver', 'Pulver er bra'),
                new ServiceUnderCat('Krem', 'Krem er bra')
            ]
        ),
        new Service(
            'Forpakning', 
            'Blister er bra', 
            [ 
                new ServiceUnderCat('Poser', 'poser er bra'),
                new ServiceUnderCat('Flasker', 'Flasker er bra')
            ]
        ),    
    ];

    getServices(){
        return this.services.slice();
    }

    getService(index: number){
        return this.services[index];
    }

    getUnderCats(index:number){
        return this.services[index].undercat.slice();

    }
    getUnderCat(index:number){
        return this.services[index].undercat[index];

    }
}