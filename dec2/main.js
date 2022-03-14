const fs = require('fs')
const data = fs.readFileSync("input.txt", { encoding: 'utf8' })
let splittad = []
let depth = 0
let x = 0

// .map((i) => (i).split(' ')) 

function splitData(){
    splittad = data.split("\r\n")
}
   
    

function followInstructions(){
    for(let i of splittad){
        let entry = []
        entry = i.split(" ")
        
        
        if(entry[0] == 'forward'){
            x += Number(entry[1])
            console.log(entry[1])
            console.log(typeof Number(entry[1]))
            
        if(entry[0] == 'down'){
            depth += Number(entry[1])
            
        }
        }
        else{
            depth -= Number(entry[1])
            
        }
     
    }
    
}



function multiplyCoordinates(){
    console.log(x * depth)
    return (x * depth)
    
}

splitData()
followInstructions()
multiplyCoordinates()
