function largestOfFour(arr) {
  var finArr = [];
  for(var i = 0; i < arr.length; i++)
  {
      for(var j = 0; j < arr[i].length; j++)
      {
        if(finArr[i] == null)
        {
          finArr[i] = arr[i][j];
        }
        else
        {
          if(finArr[i] < arr[i][j])
          {
            finArr[i] = arr[i][j];
          }
        }
      }
  }
  return finArr;
}
