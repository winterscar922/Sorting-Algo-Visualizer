export const bubbleSort = (arr) => {
  var i, j;
  var len = arr.length;
  var dummy_arr = arr;
  var IndextoSwap = [];

  var isSwapped = false;

  for (i = 0; i < len - 1; i++) {
    isSwapped = false;

    for (j = 0; j < len - i - 1; j++) {
      IndextoSwap.push([j, j + 1, 2]);
      if (dummy_arr[j] > dummy_arr[j + 1]) {
        var temp = dummy_arr[j];
        dummy_arr[j] = dummy_arr[j + 1];
        dummy_arr[j + 1] = temp;
        IndextoSwap.push([j, j + 1, 1]);
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return IndextoSwap;
};
