const fs = require('fs')

const data = fs.readFileSync("input.txt", { encoding: 'utf8' })
let numberOfEvens = 0
let numberOfIncreases = 0
let measurementsArray = []

// .map(i => Number(i));

function splitNumbers() {
    measurementsArray = data.split("\n")
    // console.log(measurementsArray)
    countIncreases(measurementsArray)
}

function countIncreases(splittad) {
    
    splittad.forEach((value, i) => {
        let asNumber = Number(value)
        let splittadAsNumber = Number(splittad[i+1])
        if(!(value < splittad[i + 1]) && asNumber<splittadAsNumber){
            console.log(asNumber, splittadAsNumber)
        }
            if (value < splittad[i + 1]) {
                numberOfIncreases++
            }}
        // if(data[i-1]){console.log('finns')}
        // let previous = data[i-1]
        // console.log('v: '+value+', p: ' + previous)
    )
    console.log(numberOfIncreases)
    // for(let i of data){
    //     indexOf(i)+1
    //     if(i<data[i]+1)
    // }

    
}


splitNumbers()

