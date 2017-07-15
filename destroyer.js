function destroyer(arr) { // done without arr.filter  
  var newArr = [];
  var flag = false;
  for(var i = 0; i < arr.length; i++)
  {
    for(var j = 1; j < arguments.length; j++)
    {
      if(arr[i] == arguments[j])
      {
        flag = true;
        break;
      } 
    }
    if(flag == false)
    {
      var data = arr[i];
      newArr.push(data);
    }
    flag = false;
  }
  return newArr;
}