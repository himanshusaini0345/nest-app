// Find if a sorted array has two elements that sum up to a target value, find if pair exist whose difference = k [1, 4, 6, 7, 91], 15

// Approach 1: Take all pairs, O(n)²
// Approach 2: Take two pointers from left and right till they dont cross, O(n)

function sumEqualsTarget(arr = [8, 4, 6, 7, 91], target = 15) {
  const n = arr.length;

  let left = 0;
  let right = n - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == target) return true;
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

// console.log(sumEqualsTarget());

// Given an array of integers nums and an integer k, find the maximum sum of any contiguous subarray of size k. nums = [2, 1, 5, 1, 3, 2], k = 3, , Output: 9

// Approach 1: Fixed sliding window

function maxSumFixedSizeSubArray(arr = [2, 1, 5, 1, 3, 2], k = 3) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  let maxSum = sum;
  let n = arr.length;

  for (let i = k; i < n; i++) {
    sum += arr[i];
    sum -= arr[i - k];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

// console.log(maxSumFixedSizeSubArray());

// Maximum contiguous sub-array, nums = [-2,1,-3,4,-1,2,1,-5,4], output: 6

// Approach 1: Take all sub arrays O(n)³, optimized to O(n)² using carry forward
// Approach 2: sliding window variable, reset sum when it turns 0, O(n)

function maxSumSubArray(arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]) {
  let maxSum = -Infinity;
  let sum = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    maxSum = Math.max(maxSum, sum);
    if (sum <= 0) {
      sum = 0;
    }
  }
  return maxSum;
}

// console.log(maxSumSubArray());

// Longest subarray with sum = k, nums = [1,2,3,1,1,1,1] k = 3

// Approach 1: Sliding window variable, shift left pointer when sum is greater than k, O(n)

function longestSubArrayWithSum(arr = [1, 2, 3, 1, 1, 1, 1], k = 3) {
  let n = arr.length;
  let left = -1;
  let right = -1;
  let sum = 0;
  let start = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum === k) {
      if (left === -1 || right - left + 1 < i - start + 1) {
        left = start;
        right = i;
      }
    } else if (sum > k) {
      while (sum > k) {
        sum -= arr[start];
        start++;
      }
    }
  }
  return [left, right];
}

// console.log(longestSubArrayWithSum());

// Approach 2: The above solution breaks for negative numbers, because sliding window depends upon the monotonic nature so the newer approach would be to us a hashmap to check whether k - prefixSum[j] = prefixSum[i]

function longestSubArrayWithSum2(arr = [1, 2, 3, 1, 1, 1, 1], k = 3) {
  const map = new Map();
  map.set(0, -1);
  let sum = 0;
  let n = arr.length;
  let left = -1;
  let right = -1;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (map.has(sum - k)) {
      if (left === -1 || right - left + 1 < i - map.get(sum - k)) {
        left = map.get(sum - k) + 1;
        right = i;
      }
    }
    map.set(sum, i);
  }

  return [left, right];
}

// console.log(longestSubArrayWithSum2());

// Find the minimum length subarray whose sum ≥ k. nums = [2,3,1,2,4,3] k = 7

// Approach 1: If we take a sliding window approach, we move the right pointer till we cross >= k, now that we have crossed it we store these indexes and start moving left pointer untill it is < k.

// Approach 2: We take a similar approach to longest subarray sum, TODO: monotonic dequeue + prefix sum

// Longest Subarray With At Most K Distinct Elements nums = [1,2,1,2,3] k = 2

// Approach 1: Brute force is to take all subarrays and use a hashmap, O(n)²

// Approach 2: So remember sliding window is monotonic so, if we move right the occurrences will either increase or stay the same, so we as soon as we encounter a duplicate element we keep on removing the element at the left pointer until the element at the right is not present and then we reinsert it.

function longestSubArrayWithAtMostKDistinct(arr = [1, 2, 1, 2, 3], k = 2) {
  const map = new Map();
}

// Two Sum nums = [2,7,11,15] target = 9
`using a hashmap, and finding target - nums[currentIndex] in hashmap.`;
// let nums = [2, 7, 11, 15];
// let target = 9;
// let map = new Map();
// for (let i = 0; i < nums.length; i++) {
//   const matched = map.get(target - nums[i]);
//   if (matched >= 0) {
//     console.log(`matched: [${map.get(target - nums[i])}, ${i}]`);
//     break;
//   }
//   map.set(nums[i], i);
// }

// Product of Array Except Self nums = [1,2,3,4]
`brute force would be to first calculate the product of entire array, then return a new array of prod/nums[i], but this fails for 0`;
// let nums = [0, 2, 0, 4];
// let prod = 1;
// let zeroCount = 0;

// for (const n of nums) {
//   if (n === 0) zeroCount++;
//   else prod *= n;
// }

// for (const n of nums) {
//   if (zeroCount === 0) {
//     console.log(prod / n);
//   } else if (zeroCount === 1 && n === 0) {
//     console.log(prod);
//   } else {
//     console.log(0);
//   }
// }

//With division ban

// let nums = [0, 2, 3, 4];
// let p = [];
// let s = [];
// let prod = 1;
// for (const n of nums) {
//   prod *= n;
//   p.push(prod);
// }
// console.log(p);
// prod = 1;
// for (let i = nums.length - 1; i >= 0; i--) {
//   const n = nums[i];
//   prod *= n;
//   //   s.splice(0, 0, prod);
//   s[i] = prod;
// }
// console.log(s);
// const res = [];
// for (let i = 0; i < nums.length; i++) {
//   let prefix = i > 0 ? p[i - 1] : 1;
//   let suffix = i < nums.length - 1 ? s[i + 1] : 1;
//   res.push(prefix * suffix);
// }
// res.forEach((n) => console.log(n));

// let nums = [1, 2, 3, 4];
// let n = nums.length;
// const res = [];
// let prod = 1;

// for (let i = 0; i < n; i++) {
//   res.push(prod);
//   prod *= nums[i];
// }

// prod = 1;

// for (let i = nums.length - 1; i >= 0; i--) {
//   res[i] *= prod;
//   prod *= nums[i];
// }
// res.forEach((n) => console.log(n));

// Reverse a string without using built-in reverse methods. Input:  "hello" Output: "olleh"

function reverseString(str = 'hello') {
  return str.split('').reverse().join('');
}

// console.log(reverseString())

// First Non-Repeating Character s = "aabbcde"

function firstNonRepeatingCharacter(str = 'aabbcde') {
  const map = new Map();
  for (let s of str.split('')) {
    if (map.has(s)) {
      map.set(s, map.get(s) + 1);
    } else {
      map.set(s, 1);
    }
  }

  for (let entry of map.entries()) {
    if (entry[1] === 1) return entry[0];
  }

  return null;
}

// console.log(firstNonRepeatingCharacter())

// Find the index of target in a sorted array. arr = [1,3,5,7,9], target = 7

// Approach 1: So the array is sorted, so we can take a pivot, let it be the middle element, if it is the target return the index, if the target is greater we search in the right half else search in the left half and while moving to left or right keep on updating the left and right indexes.

function binarySearch(arr = [1, 3, 6, 7, 9], target = 7) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// console.log(binarySearch())

// First Occurrence of Element arr = [1,2,2,2,3,4], target = 2

// Approach 1: So for the first occurence of the element we need the left most occurence, so first we need to find the element, we apply the binarySearch function above. So now we have found the element, so one approach would be to keep iterating towards the left but if the entire array is filled with the target, time complexity bumps to O(n) so a better approach would be to modify the binary search to not return on the target but move left on both found and if target is less than the mid element and keep on updating the result when mid equals target.

function firstOccurence(arr = [1, 2, 2, 2, 3, 4], target = 2) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  let ans = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
      ans = mid;
      right = mid - 1;
    } else if (target < mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

// console.log(firstOccurenceOfElement());

function firstOccurrenceLowerBound(arr = [1, 2, 2, 2, 3, 4], target = 2) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return arr[left] === target ? left : -1;
}

console.log(firstOccurrenceLowerBound());