function titleCase(str) {
  str = str.split(' ');
  for(var i = 0; i < str.length; i++)
  {
    str[i] = str[i].toLowerCase();
    var capLetter = str[i][0];
    capLetter = capLetter.toUpperCase();
    var endStr = str[i].length - 1;
    var partStr = str[i].substr(1,endStr);
    str[i] = capLetter + partStr;
  }  
  str = str.join(' ');
  return str;
}