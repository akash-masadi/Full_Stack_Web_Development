// First-class function
const mypow = function(a, b) {
    return a ** b;
};

// Arrow function
const mypow2 = (mypow, a, b) => {
    return mypow(a, b);
};

// Higher-order function
const bigpow = (mypow, a, b) => {
    let c=mypow(a, b);
    return c; 
};

// console.log(mypow2(mypow, 2, 3)); // Output: 8
// console.log(mypow(2, 3));          // Output: 8
// console.log(bigpow(mypow, 2, 3));  // Output: 8

let hof= function(){  /// a hof func which returns return another function body
    return (a)=>
    {
        console.log("Inner Anonymous functn");
        return a*5;
    };
}

let tempfunc = hof(); // assigns function to temp
// console.log(tempfunc); // [Function (anonymous)]
// console.log(hof); //[Function: hof]
// console.log(tempfunc(10));  // o/p:50


const HOF = n =>
{
    const onefunc= m=>
    {
        const twofunc = p=>
        {
            return m+n+p;
        }
        return twofunc;
    }
    return onefunc;
}

// console.log(HOF);
// let tempfunc1 = HOF(9);
// console.log(tempfunc1); // function onefunc
// let tempfunc2 = tempfunc1(8); 
// console.log(tempfunc2); // function twofunc
// let tempfunc3 = tempfunc2(7); // return val 9+8+7
// console.log(tempfunc3);

// // console.log(HOF(9)(8)(7));
