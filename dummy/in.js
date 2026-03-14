// const arr = [1, 2, 3];
// arr.push(4);
// arr.pop()
// const arr2 = arr.slice(1)
// arr.splice(0,0,90)
// for (let i of arr) {
//   console.log(i);
// }
// console.log(`size:${arr.length}`)
// console.log(`arr[3]:${arr[3]}`)
// for(let i in arr){
//     console.log(i)
// }

// const _2d = [[1,2,3],[4,5,6]]
// for(let i = 0; i < _2d.length; i++){
//     for(let j = 0; j < _2d[i].length; j++){
//         console.log(_2d[i][j] + ' ')
//     }
//     console.log()
// }

// for(const arr of _2d){
//     for(const n of arr){
//         process.stdout.write(`${n}, `)
//     }
// }

function longestSubArrayWithSum2(arr = [1, 2, 3, 1, 1, 1, 1], k = 3) {
  const map = {};
  let sum = 0;
  let n = arr.length;
  let left = -1;
  let right = -1;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    
    if (Object.hasOwn(map,sum - k)) {
      if (left === -1 || right - left + 1 < i - map[sum - k]) {
        left = map[sum - k] + 1;
        right = i;
      }
    }
    map[sum] = i;
  }

  return [left, right];
}

// console.log(longestSubArrayWithSum2());

// monotonic dequeue
