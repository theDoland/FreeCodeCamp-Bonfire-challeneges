function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b){
    return a-b;
    
  });
  for(var i = 0; i < arr.length; i++)
  {
    if(arr[i] >= num)
      break;
  }
  return i;
}