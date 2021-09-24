console.log ("connected and shit")

function isIsogram(str){ 
    const arr = str.toLowerCase().split("");
    console.log (arr)
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if ((i !== j) && (arr[i] === arr[j])){
                return false
            }
        }
    }
    return true
  }