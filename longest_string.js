function findLongestWord(str) {
  var wordArr = str.split(' '); // wordArr 
  var currLongest = 0;
  for(var i = 0; i < wordArr.length; i++)
  {
    if(wordArr[i].length > currLongest)
    {
      currLongest = wordArr[i].length;    
    }
  }  
  return currLongest;
}
