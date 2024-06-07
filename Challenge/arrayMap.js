// This is a function to find a Contiguous array that sums up to the targetSum. 
// Return true if such a subarray exists,
// otherwise return false.

function findContiguousSubarray(arr, targetSum) {
    const initialSum = new Array(arr.length).fill(0);
    initialSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
      initialSum[i] = initialSum[i - 1] + arr[i];
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (initialSum[i] === targetSum) return true; //when the condition is True
      if (initialSum[i] > targetSum) continue; // No need to check further if already exceeds targetSum
  
      // Here we Check if difference between current sum and previous sums might be the targetSum
      for (let j = 0; j < i; j++) {
        if (initialSum[i] - initialSum[j] === targetSum) {
          return true;
        }
      }
    }
  
    return false;
  }

  // Let's test this

  const arr = [4, 2, 7, 1, 9, 5];
  const targetSum = 14;
  console.log(findContiguousSubarray(arr, targetSum)); // This will output true

  