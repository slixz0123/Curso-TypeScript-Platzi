// crear variables de tipo number  directas e inferidas

(()=>{
  let ProductPrice= 100; // variable inferida
  ProductPrice = 14;

 console.log('ProductPrice',ProductPrice)

 let customerAge : number = 21; // variable especifica utilizado el tipado number
 customerAge = customerAge+ 1


 console.log('customerAge', customerAge);

//  let productInStock : number ; // variable no inicializada  pero es de tipo number
//  console.log('productInStock',productInStock);

//  if (productInStock>10){
//   console.log('is greater');
//  }

let disccount = parseInt('123'); // es de tipo number devido a que  recibe parametros string y los convierte a numero
console.log('discount',disccount)

if (disccount<= 200){
  console.log('apply')
}else {
  console.log('not apply')
}


let hey = 0xfff; // numero hexadecimal
console.log('hex',hey);

let bin = 0b1010; // numero binario
console.log('bin', bin);



const myNumber : number = 10 ;  // utilizar el tipado number en minuscula



})
