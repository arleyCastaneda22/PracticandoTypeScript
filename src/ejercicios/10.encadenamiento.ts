interface Passenger{
    name: string;
    children? : string[];
}

const passenger:Passenger={
    name: 'Jhon',
   
}

const passenger2:Passenger={
    name: 'Melissa',
    children: ['Irene', 'Silvana']
}

const passenger3:Passenger={
    name: 'Laura',
    children: ['Irene', 'Silvana']
}

const printChildren=( passenger:Passenger)=>{

    const {name,children}=passenger
    const howMany=children?.length || 0;
    console.log(howMany);

}


printChildren(passenger2);


