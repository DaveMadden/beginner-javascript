console.log ("connected and shit")

const test1 = "is2 Thi1s T4est 3a"

function order(words){
    let arr = words.split(" "); //break string into individual words in arrays
    let output = [];
    let outstr = "";

    for (let i = 0; i < arr.length; i++) {
        //find the number in the word at this indexOf
        let num = arr[i].match(/\d+/);
        //use that number to put this word at the right index
        output[(num - 1)] = arr[i];
    }
    //turn array into a string against
    for (let i = 0; i < arr.length; i++) {
        if (i === 0){
            outstr += output[i];
        }
        else{
            outstr += " " + output[i];
        }
    }
    return outstr;
  }

 console.log(order(test1))