export const values = [24, 27, 58, 26, 24, 27, 30, 24]




export function GetAverage() {
    let total = 0
    values.forEach((v) => {
        total += v
    })
    
    return total / values.length;
}



const average = GetAverage()
console.log("Average",average)
