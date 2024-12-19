export interface products{
    description: string;
    price: number;
}

const phone: products={
    description : 'Hauwy',
    price: 150.0
}

//Se implementa la interfaz
const table: products={
    description : 'table',
    price: 150.0
}


interface TaxCalculatorOptions{
    task: number,
    products: products[];
}


const showping=[phone, table]
const tax=0.15;
export function takCalculator (options: TaxCalculatorOptions): number[]{
    const {task, products}=options
    let total=0;
    products.forEach(({price}) => {
        total+=price;
    });

    return [total, total*task];
}

const [total, taxTotal] =takCalculator({
    products:showping,
    task: tax,
})

// console.log(total);
// console.log(taxTotal);





