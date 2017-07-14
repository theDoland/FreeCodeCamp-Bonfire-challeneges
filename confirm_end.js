function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targLen = target.length;
  var realStrlen = str.length;
  var testChars = realStrlen - targLen;
  var testStr = str.substr(testChars,realStrlen);
  if(testStr == target)
  {
    return true;
  }
  else
  {  
    return false;
  }
}