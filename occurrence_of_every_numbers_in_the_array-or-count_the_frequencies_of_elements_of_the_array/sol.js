const occurrenceFinderFn = (arr) => {
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

  return hashMap;
};

console.log(occurrenceFinderFn([1, 3, 4, 1, 2, 6, 8, 3, 4, 1, 2, 8]));

// Test cases
console.log(occurrenceFinderFn([])); // Expected output: Map {}
console.log(occurrenceFinderFn([1, 2, 3, 4, 5])); // Expected output: Map {1 => 1, 2 => 1, 3 => 1, 4 => 1, 5 => 1}
console.log(occurrenceFinderFn([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])); // Expected output: Map {1 => 1, 2 => 2, 3 => 3, 4 => 4}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
