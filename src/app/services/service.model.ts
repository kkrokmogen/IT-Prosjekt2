export class Service {
    constructor(
       public name:string, 
       public undercat: ServiceUnderCat[]
       ){}
 }

 export class ServiceUnderCat{
    constructor(
        public name: string, 
        public description: string
        ){}

}