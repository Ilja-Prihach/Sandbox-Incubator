// Consider a sequence made up of the consecutive prime numbers. This infinite sequence would start with:
//
// "2357111317192329313741434753596167717379..."
// You will be given two numbers: a and b, and your task will be to return b elements starting from index a in this sequence.
//
//     For example:
//     solve(10,5) == `19232` Because these are 5 elements from index 10 in the sequence.
//     Tests go up to about index 20000.
//
// More examples in test cases. Good luck!



function solve(a, b) {
    const need = a + b;

    let s = "";
    const primes = [2];
    s += "2";

    let n = 3;

    function isPrime(x) {
        const limit = Math.floor(Math.sqrt(x));
        for (let i = 0; i < primes.length; i++) {
            const p = primes[i];
            if (p > limit) break;
            if (x % p === 0) return false;
        }
        return true;
    }

    while (s.length < need) {
        if (isPrime(n)) {
            primes.push(n);
            s += String(n);
        }
        n += 2;
    }

    return s.slice(a, a + b);
}