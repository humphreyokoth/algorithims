let string1 = "saveChangesInTheEditor";
function camelcase(s) {
    let count = 1;
    for(let i in s){
     if(s.charAt(i) === s.charAt(i).toUpperCase()){
       count++
     }
    }
    return count
 }
 
 console.log(camelcase("saveChangesInTheEditor"));

 
 function camelcase(s) {
  let count = 1;
  for(let i=0;i<s.length;i++){
      if(s[i] == s[i].toUpperCase()){
          count++;
      }
  }
  return count;
}
console.log(camelcase("saveChangesInTheEditor"));
camelcase('saveChangesInTheEditor');


let str = "saveChangesInTheEditor";
function camelcase(str) {
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length;
    // for(let i in s){
    //  if(s.charAt(i) === s.charAt(i).toUpperCase()){
    //    count++
    //  }
    // }
    // return count
 }
 
 console.log(camelcase("saveChangesInTheEditor"));
//length = 22
 function camelcase(str) {
    let count = 1;
    for(let i=0;i<str.length;i++){
       // console.log(str.length) 
      // s,a,v,e,C,h,a,n,g, e, s,I, n, T, h, e, E, d, i, t, o, r
      // 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22     
        if(str[i] == str[i].toUpperCase()){
          // console.log(str[i]) 
            count++;
            //console.log(str[i])
        }
    }
    return count;
}
//console.log(camelcase(str));
camelcase(str)
