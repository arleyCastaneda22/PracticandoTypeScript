
//Evitar tratar el dato any
export function whastMyType<T>(argument: T):T{
    return argument
}


let amiString=whastMyType<string>('Hola mundo')
let amiNumber=whastMyType<number>(100)
let amiArray=whastMyType<number[]>([1,2,3,4])

console.log(amiString.split(' '))
console.log(amiNumber.toFixed())
console.log(amiArray.join(','))


class Animal{
    constructor(
        public name:string, 
        public peso:number,
        public estatura:number){

    }


    public calcular(){
        let total = this.peso*this.estatura;
        return total;
    }


}

let animla = new Animal('Juna', 12,13);
console.log(animla.calcular());