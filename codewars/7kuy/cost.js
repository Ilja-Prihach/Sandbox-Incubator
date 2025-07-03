
// Time	Cost
// Up to 1st hour	$30
// Every subsequent half hour**	$10
// ** Subsequent charges are calculated by rounding up to nearest half hour.
// For example, if student X has a lesson for 1hr 20 minutes, he will be charged $40 (30+10) for 1 hr 30 mins and if he has a lesson for 5 minutes, he will be charged $30 for the full hour.
// Out of the kindness of its heart, F&F also provides a 5 minutes grace period. So, if student X were to have a lesson for 65 minutes or 1 hr 35 mins,
//  he will only have to pay for an hour or 1hr 30 minutes respectively.
// For a given lesson time in minutes (min) , write a function cost to calculate how much the lesson costs. Input is always > 0.

function cost (mins) { 
    const gracePeriod = 5
    const minCost = 30
    const costNextHalfHour = 10
    let finalyCost = 0
    const finalTime = mins - gracePeriod
    const halfHoursCount = Math.ceil(finalTime / 30)
    if(mins <= gracePeriod || halfHoursCount < 2){
        finalyCost = minCost
    } else {
        finalyCost = minCost + (halfHoursCount - 2) * costNextHalfHour
    }
    

    return finalyCost;
} 

console.log(cost(50));
console.log(cost(425));