const foods = ['rice','chicken,meat'];

function showMenu()
{
    let menu = "Menu:\n";
    for (let i = 0; i < foods.length; i++) {
        menu += "-"+ foods[i] + "\n";
        
    }
    console.log(menu);
}
function selectFood()
{
    let selectedFood = 0;
    setTimeout(()=>{
        if(selectedFood>=0 && selectFood <foods.length){
            console.log("Selected:"+selectedFood <foods.length);
        }
    },1000)
}
showMenu();
selectFood();