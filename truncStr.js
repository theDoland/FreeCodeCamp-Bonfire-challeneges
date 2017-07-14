function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newStr;
  if(str.length <= num) // case where the string doesn't exceed the length
    return str;
  else 
  {
    if(num <= 3)
    {  
      newStr = str.slice(0,num);
      newStr += "..."; 
    }
    else
    {
      newStr = str.slice(0,num-3);
      newStr += "...";
    }
    return newStr;
  }
}