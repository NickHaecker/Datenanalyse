
export function binomialCoefficient(n, k, memo = {}) {
    const key = `${n},${k}`;

    if (key in memo) {
        return memo[key];
    }

    if (k === 0 || k === n) {
        return 1;
    }

    const result = binomialCoefficient(n - 1, k - 1, memo) + binomialCoefficient(n - 1, k, memo);
    memo[key] = result;

    return result;
}
export function bernoulliProbability(n, k, p) {
    const binomialCoefficientValue = binomialCoefficient(n, k);
    const probability = binomialCoefficientValue * Math.pow(p, k) * Math.pow(1 - p, n - k);
    return probability;
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function reduceFraction(numerator, denominator) {
    const commonFactor = gcd(numerator, denominator);
    return [numerator / commonFactor, denominator / commonFactor];
}
let probability = 0

const probs = []
const n = 5000
// const k = 20
const p = 1 / 2

// bestimmung von erwartungswert
// for ( let k = 2495; k <= 2505;k++){
//     console.log(k)
//     probability = probability + (k * bernoulliProbability( n, k, p ));
// }

for (let i = 0; i <= 5000; i++) {
    console.log(i)
    probs.push(bernoulliProbability(n, i, p))
}

console.log(probs.length)
console.log(probs)

// const [reducedNumerator, reducedDenominator] = reduceFraction(probability * 100, 100);

// console.log(`Die Wahrscheinlichkeit für genau ${k} Erfolge in ${n} Versuchen als Bruch: ${reducedNumerator}/${reducedDenominator}`);
// console.log(` ${probability}`);