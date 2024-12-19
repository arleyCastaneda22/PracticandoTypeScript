
import {products, takCalculator} from './06-desestrucFunciones'

const showping : products[]=[

    {
        description: 'nokia',
        price: 150
    },

    {
        description: 'huawey',
        price:2000
    }
];

const [,{description}]=showping;
console.log(description);
const [task, total]  = takCalculator({
    products: showping,

    task:0.15
    

});

console.log(task);
console.log(total);

