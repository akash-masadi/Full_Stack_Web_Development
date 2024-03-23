// No constructor Overloading in JS
class product {
    #nm; // private attributes
    #price;
    #size;
    constructor(name="NAN", price=999999, size='X') {
        this.#nm = name;
        this.#price = price;
        this.#size = size;
        // console.log("Product Init");
        // return "Akash"; // does nothing
        return {"Hello":2,"hii":3};
    }
    display() {
        console.log("Hello", this.#nm, this.#price, this.#size);
    }
}

const p = new product("Phone", 10, "M");
const p1 = new product();
// p1.display();
// p.display();
/**
 * 1.this in js is diff than other languages
 * 2. this keyword refers to the context from
 * where we cal the function 
 * This is not applicable to arrow function
 *  */ 


// function constructor

function Product(n, p, s) {
    this.name = n;
    this.price = p;
    this.size = s;
    const display = () => {
        console.log(this.name, this.price, this.size);
    };
    // display();
}

// var x = new Product("iPhone", 100, "M"); 


// Corner case if we return a object in constructor it will return that object.
class productDemo {
    #nm; // private attributes
    #price;
    #size;
    constructor(name="NAN", price=999999, size='X') {
        this.#nm = name;
        this.#price = price;
        this.#size = size;
        // console.log("Product Init");
        // return "Akash"; // does nothing
        return {"Hello":2,"hii":3};
    }
    display() {
        console.log("Hello", this.#nm, this.#price, this.#size);
    }
}

const pDemo = new productDemo("Phone", 10, "M");
// console.log(pDemo);
// pDemo.display();  Gives an error as we return {x:1,y:8} some other object

/**
 * If you don;t reeturn anything, js returns the newly created obj
 * if you return primitive objects, then also it returned newly createed obj
 * If you return custom  obj in Constructor, it will return the custom obj
 * 
 */

// const pArrow = (n,p)=>
// {
//     this.name = n;
//     this.price = p;
// };
// var paTemp = new pArrow("H",10);  //TypeError: pArrow is not a constructor
// console.log();

const pArrow = function(n,p)
{
    this.name = n;
    this.price = p;
};
var paTemp = new pArrow("H",10);  
//console.log(paTemp); // o/p : pArrow { name: 'H', price: 10 }


/////----------------------------------///
let obj =
{
    x:10,y:10,
    display(){
        console.log(this.x,this.y);
    },
    displayArrow:(x,y)=>{
        console.log(x,y);
    },
}
// console.log(obj);
// obj.display();
// obj.displayArrow();
// obj.displayArrow(2,3);

let object = {
    x:10,
    func()
    {
        console.log(this);
        y={
            p:50,
            gun:()=>
            {
                console.log(this.x);
                console.log(this.p); // undefined
            }
        }
        y.gun();
    }
}
// this always refers to the Upper Object
object.func();

/// ------------------------------------//