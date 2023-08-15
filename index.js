
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42)
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(pickupLocation, endLocation) {
    return Math.abs(endLocation - pickupLocation) * 264
}

function calculatesFarePrice(pickupLocation, endLocation) {
    const distance = distanceTravelledInFeet(pickupLocation, endLocation);

    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        return 0.02 * (distance - 400);
    } else if (distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

let pickupLocation = 50;