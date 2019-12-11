class Calculator_instance {
    constructor(){
        this.arr = [];
        this.arrSlot = [];
        this.lastNumber = 0;
    }
    add(){
        let sum=0;
        if(typeof arguments[0] == "string"){
            if (arguments[0].match(/\d+/)) {
                let slot_num = arguments[0].match(/\d+/);
                slot_num = Number(slot_num);
                sum = this.get_slot(slot_num) + arguments[1];
                return sum;
            }
        }

        if (arguments[0] == "LAST") {
            sum = arguments[1] + this.last();
            return sum;
        }
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        
        this.lastNumber = sum;
        return sum;
    }

    multiply(){
        let product=1;
        if (typeof arguments[0] == "string") {
            if (arguments[0].match(/\d+/)) {
              let slot_num = arguments[0].match(/\d+/);
              slot_num = Number(slot_num);
              product = this.get_slot(slot_num) * arguments[1];
              return product;
            }
          }
      
          if (arguments[0] == "LAST") {
            product = arguments[1] * this.last();
            return product;
          }
          for (let i = 0; i < arguments.length; i++) {
            product = product * arguments[i];
          }
          this.lastNumber = product;
          return product;
        
    };

    last(){
        return this.lastNumber;
    }
    set_slot(x){

        this.arrSlot[x] = this.last();
        return this.arrSlot[x];
    }
    get_slot(x){
        
        let value_inside_array_indexed = this.arrSlot[x];
        return value_inside_array_indexed;
    }

}


let newCalc = new Calculator_instance();
module.exports = newCalc;