
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

const n = 120
const k = 20
const p = 1/6

const probability = bernoulliProbability(n, k, p);

const [reducedNumerator, reducedDenominator] = reduceFraction(probability * 100, 100);

console.log(`Die Wahrscheinlichkeit für genau ${k} Erfolge in ${n} Versuchen als Bruch: ${reducedNumerator}/${reducedDenominator}`);
console.log(`Die Wahrscheinlichkeit für genau ${k} Erfolge in ${n} Versuchen als Prozentzahl: ${probability * 100}%`);