(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL' ;
  // estructura para un objeti

  type Product = {
    tittle:string,
    createdAt:Date,
    stock:number,
    size?:Sizes
  };

  const product: Product[]=[] // esto quiere decir que en mi array solo va arecibir objetos de tipo de product


  const Login = (data:{User:string,password: number}) =>{
    console.log(data.User , data.password)

  }
  // creacion de un objeto con los mismo tipados para las funciones
  Login({
    User:'camilo@gmial.com',
    password:234234
  });


 //  se agrega  la data de un obejto dentro de una funcion
  const agregarproducto= (data:{ tittle:string,createdAt:Date,stock:number,size?:Sizes}) => {

    product.push(data)
    console.log('product :', product);
  }
// agregando objetos a las funcionesn
  agregarproducto({
    tittle:'Cola',
    createdAt: new Date,
    stock:5,
    size:'M'
  });


})();
