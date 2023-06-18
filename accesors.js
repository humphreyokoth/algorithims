const obj ={counter:0};


Object.defineProperty(obj,"reset",{
    get:function(){
        this.counter = 0;
    }
})
obj.reset;
//console.log(obj.counter);

// ITERABLES
function myNumbers(){

    let n = 0;
    return{
        next:function(){
            n+=10
            return {value:n, done:false};
        }
    };
}

const n = myNumbers();
//console.log(n.next().value);

// function mySum(){
//     let arr=[1,2,3,4,5]
//     let sum =""
//     for(let i=0;i<arr.length;i++)

//     return sum+=arr[i];
// }

// mySum();
// console.log(arr[i]);


//let ar =[1000000001, 1000000002 ,1000000003, 1000000004 ,1000000005]
function aVeryBigSum(ar) {
    // Write your code here
    let sum=0;
    for(let i=0;i<ar.length;i++){
        sum = sum+ar[i]
    }
    
return sum
}
 //aVeryBigSum(ar);
 //console.log(aVeryBigSum(ar));
 
 let ar = [1, 123, 500, 115, 44, 88];
 function findMax(ar) {
    let sum = 0;
    for(let i = 0; i < ar.length; i++) {
      if (ar[i] > sum) {
        sum += ar[i];
      }
    }
    return sum;
  } 
  console.log(findMax(ar));
 
