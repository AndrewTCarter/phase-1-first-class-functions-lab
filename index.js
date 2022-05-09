const returnFirstTwoDrivers = function(drivers){
    let newArray = [drivers[0],  drivers[1]]
    return newArray
}

const returnLastTwoDrivers = function(drivers){
    let nextArray = [drivers[2], drivers[3]]
    return nextArray
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(fare){
        return fare * int
    }
}

function fareDoubler(fare){
    const double = createFareMultiplier(2)
    return (double(fare))
}

function fareTripler(fare){
    const triple = createFareMultiplier(3)
    return (triple(fare))
}

function selectDifferentDrivers(drivers,cb){
    return cb(drivers)
}