import { Injectable } from '@angular/core';
import { Service } from './service.model';
import { ServiceUnderCat } from './service-undercat.model';

@Injectable()
export class ServiceService {

    private services: Service[] = [
        new Service(
            'Produktutvikling', 
            [ 
                new ServiceUnderCat('Reseptutvikling', 'Utvikling er bra'),
                new ServiceUnderCat('Smak', 'Utvikling er bra'),
                new ServiceUnderCat('Økologiske', 'Vegansk er bra'),
                new ServiceUnderCat('Ideprosess', 'Utvikling er bra'),
                new ServiceUnderCat('Vegansk', 'Vegansk er bra'),
            ]
        ),
        new Service(
            'Produktgrupper', 
            [ 
                new ServiceUnderCat('Tabletter', 'Pulver er bra'),
                new ServiceUnderCat('Harde kapsler', 'Krem er bra'),
                new ServiceUnderCat('Myke kapsler', 'Pulver er bra'),
                new ServiceUnderCat('Pulver', 'Krem er bra'),
                new ServiceUnderCat('Kremer', 'Krem er bra'),
                new ServiceUnderCat('Flytende vannløselig', 'Pulver er bra'),
                new ServiceUnderCat('Flytende oljebasert', 'Krem er bra'),
            ]
        ),
        new Service(
            'Forpakning', 
            [ 
                new ServiceUnderCat('Flasker', 'Flasker er bra'),
                new ServiceUnderCat('Poser', 'poser er bra'),
                new ServiceUnderCat('Bokser', 'Flasker er bra'),
                new ServiceUnderCat('Blister', 'poser er bra'),

                
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