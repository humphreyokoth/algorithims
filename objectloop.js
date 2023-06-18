const population ={
    male:4,
    female:93,
    others:10
}

let totalPopulation = 0;

let genders = Object.keys(population);


genders.forEach((gender)=>{
    totalPopulation+=population[gender];
})

console.log(totalPopulation)