import {Product} from './Prdouct.model'
  export const product : Product[]=[];

  export const addProduct= (data:Product) => {
  product.push();
  }

  export const calStock = (): number => {
  let total = 0;
  product.forEach((item) => {
    total += item.stock;
  });
  return total;
  }


