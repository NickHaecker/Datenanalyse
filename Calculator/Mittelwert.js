 const values = [24, 27, 58, 26, 24, 27, 30, 24]

 const newValues =  [24, 27, 26, 24, 27, 30, 24]

const isNewVal = true

export function GetValues(){
    return isNewVal ? newValues : values
}


export function GetAverage() {
    let total = 0
    GetValues().forEach((v) => {
        total += v
    })
    
    return total / GetValues().length;
}



const average = GetAverage()
console.log("Average",average)
