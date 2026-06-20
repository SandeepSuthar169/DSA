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

// console.log(MaxSumSubarrayofsizeK([2, 1, 5, 1, 3, 2], 3));




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

// console.log(minSubArrayLen([2,3,1,2,4,3], 7));

// ============================================================
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

const MaximumAverageSubarrayI = (nums, k) => {
    let windowSum = 0;

    for (let i = 0; i < k; i++){
        windowSum = (windowSum + nums[i]) 
    }

    let maxSum = windowSum / k;
    


    for(let j = k ; j < nums.length ; j++){
        windowSum = windowSum - nums[j - k] + nums[j];
        console.log('windowSum', windowSum);
        
        maxSum = Math.max(maxSum, windowSum / k)
        
    }
    return maxSum
}

// console.log(MaximumAverageSubarrayI([1,12,-5,-6,50,3], 4));
// console.log(MaximumAverageSubarrayI([0,1,1,3,3], 4));

function build(str) {
    const stack = [];

    for (const ch of str) {
        if (ch === "#") {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }

    return stack.join("");
}
var backspaceCompare = function(s, t) {
    return build(s) === build(t);
};


// console.log(backspaceCompare("ab#c", "ad#c"));
// console.log(backspaceCompare("ab##", "c#d#"));
// console.log(backspaceCompare("a#c", "b"));


// ===============================================

const containsDuplicateII = (nums, k) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (i - map.get(nums[i]) <= k) {
                return true;
            }
        }

        map.set(nums[i], i);
    }

    
    return false;
};

console.log(containsDuplicateII([1, 2, 3, 1], 3)); // true
console.log(containsDuplicateII([1, 0, 1, 1], 1)); // true

console.log(containsDuplicateII([1, 2, 3, 1, 2, 3], 2)); // false
// ============================================
// if (nums[left] === nums[right] && Math.abs(left - right) <= k) {
