const finderFn = (arr) => {
  const hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    let getValue = hashMap.get(arr[i]);
    if (getValue) {
      getValue++;
      hashMap.set(arr[i], getValue);
    } else {
      hashMap.set(arr[i], 1);
    }
  }

  console.log(hashMap)

  let maxCount = 0,
    minCount = arr.length;

  for (let [key, value] of hashMap) {
    maxCount = Math.max(maxCount, value);
    minCount = Math.min(minCount, value);
  }

  return [maxCount, minCount];
};

console.log(finderFn([1, 3, 4, 1, 2, 6, 8, 3, 4, 1, 2, 8]));
