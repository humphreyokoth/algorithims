function getPermutations(str){
    // Breaking condition to stop recursion
    if(str.length<2){
    return str;

}

// Array to stor permutations
let permutations =[];

// Iterate through string to get char at value 1 and remaining letters

for(let i= 0; i<str.length;i++){
    let char = str[i];
    let remainigChars = str.slice(0,1) +str.slice(i+1,str.length);

    // use recursion to get all combinations of remaining chars and append them to char
for(let permutations of getPermutations(remainigChars)){
   permutations.push(char+permutations) 
}

}


return permutations;


}