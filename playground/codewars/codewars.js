console.log ("connected and shit")
//split first two characters of string into new array item
function solution(str){
   let arr = [];
   if (str.length %2){ //if odd
    str += "_"; //make even with final character
   }
    
   console.log(str);
   
   for(let i=0; i<str.length; i= i+2){
    arr.push(str.substring(i, i + 2));
    console.log(`i:${i} substr:${str.substring(i,2)}`)
   }
   return arr;
}