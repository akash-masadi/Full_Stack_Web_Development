
const sumArray = arr=>
{
    let t=0;
    arr.forEach(element => {
        t+=element;
    });
    return t;
};
// console.log(sumArray([1,2,3]));

let arr =[1,2,3,4];
// arr.forEach((element,index,arr)=>
//     {
//         // console.log(element+' '+index);
//         // console.log(sumArray(arr)-element);
//     });
let filtered = arr.filter((s)=>
{
    if(s%2==0)
    {
        return s;
    }
});
console.log(filtered);


//map returns a new array with the results of the function,
// while forEach does not return anything and only modifies
// the original array.
let arr1=arr.map((ele,ind,arr)=>
{
    return sumArray(arr)+ele;
});
arr.forEach((ele,ind,arr)=>
{
    sumArray(arr);
});
console.log(arr1);
console.log(arr);


const total = arr.reduce((prev,curr)=>prev+curr,0) ;
console.log(typeof total); // "number"
let numb = new Number(100);
console.log(typeof numb); //object 
console.log(typeof typeof total); //object 

let greater = arr.find((ele)=> ele>2);
let greaterIdx = arr.findIndex ((ele)=> ele>2);
console.log(greater,greaterIdx);