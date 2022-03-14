const fs = require('fs')

const data = fs.readFileSync("input.txt", { encoding: 'utf8' })

let schoolOfFish = data.split(",").map(f => Number(f))
eightyDays(schoolOfFish)


function eightyDays(group){
    let newGroup = [...group]
    
    for(let i = 0; i<256; i++){
        
        let groupAfterDay = oneDay(newGroup)
        console.log(groupAfterDay)
    }
    
    console.log(newGroup.length)
    return 
}
        


function oneDay(newGroup){
    newFish = 0
    for(let fish = 0; fish<newGroup.length; fish++){
        if(newGroup[fish] != 0){
            newGroup[fish] -=1
            
        }
        else{
            newGroup[fish] = 6
            newFish ++
        } 
    }
    
    for(let j = 0; j<newFish; j++){
        
        newGroup.push(8)
        
    }
    
    return newGroup
}
                
                