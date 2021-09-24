console.log ("connected and shit")

const test1 = "is2 Thi1s T4est 3a"

function order(words){
    let arr = words.split(" "); //break string into individual words in arrays
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        //find the number in the word at this indexOf
        let num = arr[i].match(/\d+/);
        //use that number to put this word at the right index
        output[(num - 1)] = arr[i];
    }
    return output;
  }

 console.log(order(test1))