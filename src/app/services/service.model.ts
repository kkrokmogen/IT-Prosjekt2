import { ServiceUnderCat } from './service-undercat.model';

export class Service {
    constructor(
       public name:string, 
       public description:string,
       public undercat: ServiceUnderCat[]
       ){}
 }