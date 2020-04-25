import { ServiceUnderCat } from './service-undercat.model';

export class Service {
    constructor(
       public name:string, 
       public undercat: ServiceUnderCat[]
       ){}
 }