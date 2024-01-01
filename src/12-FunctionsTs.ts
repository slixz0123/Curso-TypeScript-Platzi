(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL' ;
  function createProductJson(
    tittle:string,
    createdAt:Date,
    stock:number,
    size:Sizes
  ){
    return{
      tittle,
      createdAt,
      stock,
      size
    }
  }
// otra forma de crear funciones de manera mas actual usando esta estructura arrow function
// const Mifuncion = () => { proceso}   ||  ? = siginifca que puede colocar opcional con parametros
  const  createProductJsonv2 =(tittle:string,createdAt:Date,stock:number,size?:Sizes)=> {
    return{
      tittle,createdAt,stock,size
    }
  }


  const prodruct1 = createProductJson('p1', new Date(),12,'L')
})();
