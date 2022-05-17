// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42;
    }
    else if (blocks < 42) {
        return 42 - blocks
    }
}

function distanceFromHqInFeet(distance) {
    if (distance > 42) {
        return (distance - 42) * 264
    }
    else if (distance < 42) {
        return (42 - distance) * 264
    }
}

function distanceTravelledInFeet (start, destination) {

    if (start > destination){
        return (start - destination) * 264
    }
    else if (start < destination) {
        return (destination - start) * 264
    } 
}

function calculatesFarePrice(start, destination) {
    
    const dist = distanceTravelledInFeet(start, destination)
    if (dist < 400) {
        return 0;
    }
    else if (dist > 400 && dist <= 2000) {
        return (dist - 400) * .02;
    }
    else if (dist > 2000 && dist < 2500) {
        return 25;
    }
    else  {
        return 'cannot travel that far';
    }
}