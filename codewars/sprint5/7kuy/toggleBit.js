// Toggle, Set, and Clear Bits
// Your task is to implement a collection of utility functions that perform common bitwise operations on integers. All bit positions are zero-based, meaning position 0 refers to the least significant bit.
//
// Toggles (flips) the bit at the given position. If the bit is 0, it becomes 1; if it is 1, it becomes 0.
//
// console.log(toggleBit(5, 1)); // 7
// Sets the bit at the given position to 1, without modifying other bits.
//
// console.log(setBit(5, 1)); // 7
// Clears (sets to 0) the bit at the given position, leaving all other bits unchanged.
//
// console.log(clearBit(7, 1)); // 5
// Checks whether the bit at the given position is set to 1. Returns true if it is set, otherwise false.
//
// console.log(isBitSet(5, 0)); // true
// Sets all bits to 1 wherever the mask has 1s.
//
// console.log(setMultipleBits(5, 3)); // 7
// Clears all bits wherever the mask has 1s.
//
// console.log(clearMultipleBits(7, 2)); // 5
// Toggles all bits wherever the mask has 1s.
//
// console.log(toggleMultipleBits(5, 3)); // 6
// Notes
// All functions should return the resulting number (or a boolean for isBitSet).


// Toggle (flip) a single bit at position
function toggleBit(num, position) {
    return num ^ (1 << position);
}

// Set a single bit to 1
function setBit(num, position) {
    return num | (1 << position);
}

// Clear (set to 0) a single bit
function clearBit(num, position) {
    return num & ~(1 << position);
}

// Check if a bit is set
function isBitSet(num, position) {
    return (num & (1 << position)) !== 0;
}

// Set multiple bits using a mask
function setMultipleBits(num, mask) {
    return num | mask;
}

// Clear multiple bits using a mask
function clearMultipleBits(num, mask) {
    return num & ~mask;
}

// Toggle multiple bits using a mask
function toggleMultipleBits(num, mask) {
    return num ^ mask;
}
