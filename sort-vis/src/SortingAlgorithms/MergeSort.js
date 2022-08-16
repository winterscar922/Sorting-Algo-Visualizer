function nextGap(gap) {
  if (gap <= 1) return 0;
  return Math.floor(Math.ceil(gap / 2.0));
}
var IndextoSwap = [];

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function inPlaceMerge(nums, start, end) {
  let gap = end - start + 1;
  for (gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {
    for (let i = start; i + gap <= end; i++) {
      let j = i + gap;
      IndextoSwap.push([i, j, 2]);
      if (nums[i] > nums[j]) {
        swap(nums, i, j);
        IndextoSwap.push([i, j, 1]);
      }
    }
  }
}

function rec(nums, s, e) {
  if (s == e) return [];

  let mid = Math.floor((s + e) / 2);

  rec(nums, s, mid);
  rec(nums, mid + 1, e);
  inPlaceMerge(nums, s, e);
}

export const mergeSort = (arr) => {
  IndextoSwap.length = 0;
  let len = arr.length;
  let nums = arr;
  rec(nums, 0, len - 1);
  return IndextoSwap;
};
