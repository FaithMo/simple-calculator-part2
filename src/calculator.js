class Calculator_instance {
    constructor(){
        this.arr = [];
        this.lastNumber = 0;
    }
    add(){
        let sum=0;
        for(let x=0; x<arguments.length; x++){
            sum +=arguments[x];
        }
    this.lastNumber = sum;
        return sum;

    }
    multiply(){
        let product=1;
        for(let x=0; x<arguments.length; x++){
            product *= arguments[x];
        }
        this.lastNumber = product;
        return product;
    }
    last(){
        return  this.lastNumber;
    }
    set_slot(x){

        this.arr[x] = this.lastNumber;
        return this.lastNumber;
    }
    get_slot(x){
        //return this.arr.push(this.lastNumber);
        //return "Slot got: " + this.arr.push(this.lastNumber);
        this.arr[x] = this.lastNumber;
        return this.arr[x];
    }

}
let newCalculator = new Calculator_instance();


console.log(newCalculator.add(1,2));
console.log(newCalculator.set_slot(1));
console.log(newCalculator.get_slot(1));

console.log(newCalculator.add(10,20));
console.log(newCalculator.set_slot(2));
console.log(newCalculator.get_slot(2));

console.log(newCalculator.add(100,200));
console.log(newCalculator.set_slot(1));
console.log(newCalculator.get_slot(2));
console.log(newCalculator.last());


