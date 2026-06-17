const MaxSumSubarrayofsizeK = (arr, k) => {
    let windowSum = 0;

    for (let i = 0; i < k ; i++){
        windowSum += arr[i]
    }

    let maxSum = windowSum;

    for(let j = k; j < arr.length; j++) {
        windowSum = windowSum - arr[j - k] + arr[j];

        maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum
}

console.log(MaxSumSubarrayofsizeK([2, 1, 5, 1, 3, 2], 3));




// ============================================================


const minSubArrayLen = (nums, target) => {
    let low = 0;
    let high = 0;

    let sum = 0;
    let res = Infinity;

    while (high < nums.length) {
        sum += nums[high];

        while (sum >= target) {
            let len = high - low + 1;
            res = Math.min(res, len);

            sum -= nums[low];
            low++;
        }

        high++;
    }

    return res === Infinity ? 0 : res;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));
