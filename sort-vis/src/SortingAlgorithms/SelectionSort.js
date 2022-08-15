export const SelectionSort = (input) => {
  var IndextoSwap = [];
  for (var i = 0; i < input.length - 1; i++) {
    var temp = input[i];
    var index = i;
    for (var j = i + 1; j < input.length; j++) {
      if (temp > input[j]) {
        temp = input[j];
        index = j;
      }
    }
    var tempVal = input[i];
    input[i] = temp;
    input[index] = tempVal;
    if (index != i) IndextoSwap.push([i, index]);
  }
  return IndextoSwap;
};
