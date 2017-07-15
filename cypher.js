function rot13(str) { // LBH QVQ VG!
  var ind = 0;
  var tempNum;
  var finalStr = ""; // had to initialize, otherwise undefined was in front of the string
  while(ind < str.length)
  {
    if(str.charCodeAt(ind) < 65 || str.charCodeAt(ind) > 90) // if the character isn't a letter, keep it
    {
      finalStr += str.charAt(ind);
      ind++;
      continue;
    }
    tempNum = str.charCodeAt(ind);
    if((tempNum - 13) < 65)
    {
      finalStr += String.fromCharCode(tempNum + 13);
    }
    else
    {
      finalStr += String.fromCharCode(tempNum - 13);
    }
    
    ind++;
  }
    return finalStr;
}