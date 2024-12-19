interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details : Details;
    


}

interface Details{
    author: string;
    year:Year;
}

interface Year{
    publicacion: number,
    creacion: number
}

const cancion :AudioPlayer={
    audioVolume: 15,
    songDuration: 20,
    song: "La idea de mi vida",
    details: {
        author: 'Man',
        year: {
            publicacion: 2001,
            creacion : 2004
        }
    }
}

//La desestructuracion se puede aplicar en varios lugares 

const {song, details} = cancion;
const {author, year} =details;
const {publicacion}=year

// console.log(`La cancion es ${song}`);
// console.log(author);
// console.log(publicacion);

//Desestructuracion de arreglos

const dbz:string[] =['Goku', 'Trans', 'vegetta'];

const numeros :number[][]= [[1,2,3], [5,6,7]]
const [uno,[dos]]=numeros;
console.log(uno);
console.log(dos);




console.log(`Personaje3 ${dbz[2]}`);

