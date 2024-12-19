let habilidades: string[] =['bash', 'volar', 'correr'];

interface Persona {
    name: String,
    age : number,
    skill: string 
}

const persona: Persona ={
    name:"Jhon",
    age: 1235,
    skill: "bash"
}


persona.name ="Jhon Arley"

console.table(persona)



export {}