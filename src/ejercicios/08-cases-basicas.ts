export class Person{

    constructor(public _nombre:string, public _edad:number){
    }
}

// class Suma extends Person {
//     constructor(nombre:string, edad:number, public valor:number=1){
//         super(nombre,edad);
//     }
//     public sumaEdad(){
//         let edad2= this._edad+=this.valor;
//         return edad2;
//     }
// }
//En angular se busca priorizar la composicion por encima de la herencia
class Suma{
    constructor(
        public valor:number,
        public person: Person
        ){
        
    }
        public sumaEdad(){
        let edad2= this.person._edad+=this.valor;
        return edad2;
    }
}
const jhon = new Person('Jhon', 22) 
const result = new Suma(2,jhon);
console.log(result.sumaEdad());
