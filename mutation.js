function mutation(arr) {
  var word1 = {};
  for(var i = 0; i < arr[0].length; i++) // loop creating a lookup table
  {
    if(word1[arr[0][i]] == true)
    {
      continue;
    }
    else
    {
      word1[arr[0][i]] = true;
      console.log(word1);
      word1[arr[0][i].toUpperCase()] = true; /* Quick fixes to put both lower and upper case*/
      word1[arr[0][i].toLowerCase()] = true; 
      
    }
  }
  for(i = 0; i < arr[1].length; i++)
  {
    if(word1[arr[1][i]] != true)
      return false;
  }
  return true;
}
