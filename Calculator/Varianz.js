import { GetValues, GetAverage } from "./Mittelwert.js";




export function CalculateSumPart() {
    let total = 0;
    GetValues().forEach((v) => {
        total += Math.pow((v - GetAverage()), 2)
    })
    return total
}

console.log("CalculateSumPart", CalculateSumPart())
const varianz = CalculateSumPart() / GetValues().length
console.log("varianz",varianz)
const standardDeviation = Math.sqrt(varianz)
console.log("standard deviation", standardDeviation)