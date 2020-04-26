import { Injectable } from '@angular/core';
import { Service } from './service.model';
import { ServiceUnderCat } from './service.model';

@Injectable()
export class ServiceService {

    private services: Service[] = [
        new Service(
            'Produktutvikling', 
            [ 
                new ServiceUnderCat('Reseptutvikling', 'Reseptutvikling er bra'),
                new ServiceUnderCat('Smak', 'Smak er bra'),
                new ServiceUnderCat('Økologiske', 'Økologiske er bra'),
                new ServiceUnderCat('Ideprosess', 'Ideprosess er bra'),
                new ServiceUnderCat('Vegansk', 'Vegansk er bra'),
            ]
        ),
        new Service(
            'Produktgrupper', 
            [ 
                new ServiceUnderCat('Tabletter', 'Tabletter er bra'),
                new ServiceUnderCat('Harde kapsler', 'Harde kapsler er bra'),
                new ServiceUnderCat('Myke kapsler', 'Myke kapsler er bra'),
                new ServiceUnderCat('Pulver', 'Pulver er bra'),
                new ServiceUnderCat('Flytende vannløselig', 'Flytende vannløselig er bra'),
                new ServiceUnderCat('Flytende oljebasert', 'Flytende oljebasert er bra'),
            ]
        ),
        new Service(
            'Forpakning', 
            [ 
                new ServiceUnderCat('Flasker', 'Flasker er bra'),
                new ServiceUnderCat('Poser', 'Poser er bra'),
                new ServiceUnderCat('Bokser', 'Bokser er bra'),
                new ServiceUnderCat('Blister', 'Blister er bra'),

                
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