class Car {
    model:string;
    year:number;
    price:number;


constructor(model:string,year:number,price:number){
    
    this.model= model;
    this.year= year;
    this.price= price;
}

}

const car = new Car ('tesla',2000,15000)
console.log(car)