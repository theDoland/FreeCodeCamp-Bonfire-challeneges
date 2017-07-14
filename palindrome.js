function palindrome(str) {
  // Good luck!
  var newStr = [];
  var newStrInd = 0;
  
  for(var i = 0; i < str.length; i++)
  {
    if(str[i].match(/[A-Za-z0-9]/i) != null)
    {
      newStr[newStrInd++] = str[i].toLowerCase();
    }
    else {
      continue;
    }
  }
  var otherside = newStr.length-1;
  for(i = 0; i < Math.floor(newStr.length/2); i++)
  {
    if(newStr[i] != newStr[otherside--])
    {
      return false;    
    }
  }
  return true;
}

palindrome("eye");
