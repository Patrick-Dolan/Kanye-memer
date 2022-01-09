export default function getLongestWord(quote){
  const quoteArr = quote.split(" ");
  let highIndex = 0;
  let temp = "";
  for (let i = 0; i < quoteArr.length - 1; i++) {
    if (quoteArr[i].length > temp.length) {
      highIndex = quoteArr.indexOf(quoteArr[i]);
      temp = quoteArr[i];
    } 
  }
  return quoteArr[highIndex];
}