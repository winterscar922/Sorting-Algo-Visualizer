function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

var IndextoSwap = [];
IndextoSwap.length = 0;
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    IndextoSwap.push([i, j, 2]);

    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      IndextoSwap.push([i, j, 1]);
      i++;
      j--;
    }
  }
  return i;
}

export const quickSort = (items, left, right) => {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return IndextoSwap;
};
