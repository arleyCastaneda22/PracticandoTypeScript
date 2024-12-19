interface SuperHero{
    name: String,
    age: number,
    address: address2

    showAddress: ()=> String
}

interface address2 {
    
    stree: string,
    pais: string,
    ciudad: string
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        stree: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}

const superñero: SuperHero = {
    name: 'Hassam',
    age: 30,
    address: {
        stree: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}

const ñero = superñero.showAddress()
const address = superHeroe.showAddress();
console.log( address );
console.log({ñero})


const [perro]=["años"]

console.log(perro)



class Persona {

    constructor(

        private _nombre: string,
        private _edad: number,
        private _eps: string
    ){}

    mostrarinfo =(nombre=this._nombre, edad=this._edad, eps=this._eps)=>{
        return nombre + edad + eps
    }


}

const uno = new Persona("Jhon", 24, "sura")

console.log(uno)
export {};