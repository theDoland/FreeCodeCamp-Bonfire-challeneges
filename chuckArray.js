function chunkArrayInGroups(arr, size) {
  var i = 0;
  var newArr = [];
  while(newArr.length < Math.ceil(arr.length/size))
  {
    if(arr.length < size)
    {
      newArr.push(arr.slice(ind));    
    }
    else
    {
      newArr.push(arr.slice(i,size+i)); 
    }
    i += size;
  }
  return newArr;
}