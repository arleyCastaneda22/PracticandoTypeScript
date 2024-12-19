

const sumar= (a: number,b: number) =>{

    return a+b;
}

const resultado =sumar(13,15)
console.log(resultado);
export {sumar}


interface Personaje{
    name: String,
    pv: number,
    showUP: ()=> void
}

const curar =(character: Personaje, amount:number )=>{
    character.pv +=amount

    
}

const objeto: Personaje ={
    name: "Laura",
    pv: 60,
    showUP(){
        console.log(`Puntos de vida: ${this.pv}`)
    }

    
}

curar(objeto, 10);
curar(objeto, 20);
curar(objeto, 30);


objeto.showUP()