// Memoization is a way to cache a return value of a function based on its parameters.
//Makes the function that takes a long time to run much faster after one execution.

function addTo80(n){
    //console.log("long time....")
    return n+80
}
addTo80(5)
addTo80(5)
addTo80(5)


// Memoized way 
function memoizedAddTo80(){

    let cache= {}
    return function(n){
        if(n in cache){
            return cache[n]
        }else{
            console.log("long time ....")
            cache[n]= n+80
            return cache[n]
        }
    }
}

const memoized = memoizedAddTo80()

console.log("1", memoized(5))

console.log("2", memoized(5))

console.log("3", memoized(5))

console.log("4", memoized(5))

console.log("5", memoized(10))