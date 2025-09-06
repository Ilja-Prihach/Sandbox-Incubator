// You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn
// (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.
//
//     Return the direction you will face after the turn.


function direction(facing, turn) {
    const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = dirs.indexOf(facing);
    const steps = turn / 45;
    const newIndex = (index + steps % 8 + 8) % 8;
    return dirs[newIndex];
}

// function direction(facing, turn){
//     const arr = "N NE E SE S SW W NW".split(" ");
//     return arr[(arr.indexOf(facing) + Math.floor(turn / 45) + 1080) % 8];
// } best practic