// function suma(a: number, b: number){

//     return a+b;
// }

// const result: number = suma(1,1);
// console.log(
//     result
    
// )


//  const resta = (a: number, b:number ): number=>{
//     return a-b;

//  }

// const result2 : number=resta(2,1);

// console.log(result2);

interface condiciones{
    character: string;
    hp: number;
    show:()=> void;

}

const personaje =(character: condiciones, amount: number)=>{
    character.hp +=amount;
}

const strider={
    character: 'Jhon',
    hp: 100,
    show() {
     
        console.log(`Puntos de vida ${this.hp}`)
    },
}

personaje(strider,10);
strider.show();





