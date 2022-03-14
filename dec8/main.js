const fs = require('fs')

const data = fs.readFileSync("input.txt", { encoding: 'utf8' })

// split data on | allt efteråt skall splittas på ' ' sedan skall varje index med längd 2, 3, 4 och 7
// pushas till en ny Array. Dess längd är svaret

console.log(lookForNumbers(getOutput(data)).length)

function getOutput(input){
    let output = input.split('\r\n')
    for(let item of output){
        output[item].split('|')
        .filter((e, index) => index % 2)
        .map(i => i.split(' '))
    }
    
   
    console.log(output)
    return output
}

function lookForNumbers(output){
    let newOutput = []
        for(let code of output){

            if(code.length == 2 || code.length == 3 || code.length == 4 || code.length == 7){
               newOutput.push(code)
            }
        }
        return newOutput
       
}