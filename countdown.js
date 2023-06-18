function countdown(n){
    if(n<1){
        console.log(n);
        return
    }

    console.log(n);
    return countdown(n-1);
}
countdown(5);