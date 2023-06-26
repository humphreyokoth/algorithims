function myDisplayer(some){
    console.log(some);
}

function getFile(myCallback){

    let req = new XMLHttpRequest();
    req.open('GET',"elements.html");
    req.onload = function (){
        if(req.status == 200){
            myCallback(this.responseText);

        }else{
            myCallback("Error:" + req.status);
        }
    }

req.send();


}
getFile(myDisplayer);
console.log(getFile);