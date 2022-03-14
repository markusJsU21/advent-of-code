const fs = require('fs')

const data = fs.readFileSync("input.txt", { encoding: 'utf8' })

//Samla all data i en matris. 
//För varje element hitta grannar. Jämför värdet med grannarnas. Om värdet är högre än deras, gå vidare. Annars notera grannarnas värde och gå vidare.
//Addera alla sparade grannars värden.

let matrix = [...data.split('\r\n')
.map(e => e.split('').map(e => Number(e)))]

console.log(matrix)



function robertAschberg(matrix) {
    
    let riskSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let point = isNeighboursLarger(matrix, row, col)
            if (point.isLowPoint) {
                console.log(matrix[row][col])
                riskSum += point.riskLevel
            }
        }

    }
    return riskSum
}
                
                    

function isNeighboursLarger(matrix, i, j) {
   
    let isLeftLarger = false
    let isRightLarger = false
    let isUpLarger = false
    let isDownLarger = false
    const elementToCompare = matrix[i][j]
    

    let rowAbove = matrix[i-1]
    if(rowAbove !==undefined){ 

        isUpLarger = rowAbove[j] > elementToCompare
    } 
    else{
        isUpLarger = true
    }    
    let rowBelow = matrix[i+1]
    if (rowBelow !==undefined) {
        
        isDownLarger = rowBelow[j] > elementToCompare
    }
    else{
        isDownLarger = true
    }
    let elementToRight = matrix[i][j+1]
    if (elementToRight !==undefined) {
        
        isRightLarger = elementToRight > elementToCompare
        
    }
    else{
        isRightLarger = true
    }
    let elementToLeft = matrix[i][j-1]
    if (elementToLeft !==undefined) {
        
        isLeftLarger = elementToLeft > elementToCompare
    }
    else{
        isLeftLarger = true
    }
    
    return {
        isLowPoint: isUpLarger && isDownLarger && isRightLarger && isLeftLarger,
        riskLevel: elementToCompare +1
    }
}



console.log(robertAschberg(matrix))
