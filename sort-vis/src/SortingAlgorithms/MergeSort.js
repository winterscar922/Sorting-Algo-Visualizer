export const mergesort = (array) => {
  if (array.length < 2) return array;
  const middle = Math.floor(array.length / 2);
  const array_l = array.slice(0, middle);
  const array_r = array.slice(middle, array.length);
  const sorted_l = mergesort(array_l);
  const sorted_r = mergesort(array_r);

  const sortedarr = [];

  let i = 0,
    j = 0;

  while (i < sorted_l.length && j < sorted_r.length) {
    if (sorted_l[i] < sorted_r[j]) {
      sortedarr.push(sorted_l[i++]);
    } else {
      sortedarr.push(sorted_r[j++]);
    }
  }

  while (i < sorted_l.length) {
    sortedarr.push(sorted_l[i++]);
  }

  while (j < sorted_r.length) {
    sortedarr.push(sorted_r[j++]);
  }
  return sortedarr;
};
