function slasher(arr, howMany) {

  arr = arr.splice(howMany); // since splice returns the deleted elements, delete the rest --> gives you the rest except
  return arr;
}