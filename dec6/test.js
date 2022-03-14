
newGroup = [3, 0, 1, 0, 6,
    2, 1, 3, 0, 5,
    5, 8]

oneDay(newGroup)

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
        console.log(newFish)
        newGroup.push(8)
        
    }
    console.log(newGroup)
    return newGroup
}