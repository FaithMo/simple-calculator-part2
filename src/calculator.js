class Calculator_instance {
    constructor(){
        this.arr = [];
        this.lastNumber = 0;
    }
    add(){
        let sum=0;
        for(let x=0; x<arguments.length; x++){
            if(arguments[x] === "LAST"){
                arguments[x] = this.lastNumber;
            }

            if(arguments[x] === "SLOT_1"){
                arguments[x] = this.get_slot(1);
            }

            if(arguments[x] === "SLOT_2"){
                arguments[x] = this.get_slot(2);
            }

            sum +=arguments[x];
        }
        this.lastNumber = sum;
        return sum;

    }

    multiply(){
        let product=1;
        for(let x=0; x<arguments.length; x++){

            if(arguments[x] === "LAST"){
                arguments[x] = this.lastNumber;
            }

            if(arguments[x] === "SLOT_1"){
                arguments[x] = this.get_slot(1);
            }

            if(arguments[x] === "SLOT_2"){
                arguments[x] = this.get_slot(2);
            }

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
        return this.arr[x];
    }
    get_slot(x){
        
        return this.arr[x];
    }

}
let newCalculator = new Calculator_instance();



//console.log(newCalculator.add("LAST",200));



