function threeSum(arr, target) {
// write your code here
	arr.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = Infinity; // Initialize closestSum with a large value

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        return sum; // Found exact target sum
      }

      // Update closestSum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++; // Increment left pointer for a larger sum
      } else {
        right--; // Decrement right pointer for a smaller sum
      }
    }
  }

  return closestSum;
  
}

module.exports = threeSum;
