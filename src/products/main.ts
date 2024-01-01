import { addProduct,calStock,product } from "./product.services";

addProduct({
  title:'Cola',
  creatAt: new Date,
  stock:5,
  Size:'M'
});

console.log(product);
const total = calStock();
console.log('total :', total);


