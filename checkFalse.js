function checkFalse(val) {
  
  if(val == false || val == null || val == 0 || val.length == 0 || val == undefined || val !== val) // where val !== val means it's a NaN
      return false;
    
  else
    return true;
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  var newArr = arr.filter(checkFalse);
  return newArr;
}
