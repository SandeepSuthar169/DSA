// Brute Force Approqch 

const BruteTwoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == target) {
                return [arr[i], arr[j]]
            }
        }
    }
}
// console.log(BruteTwoSum([2, 3, 4, 5, 6], 11));

// =========================================================================

const TowSum = (arr, target) => {
    let left  = 0;
    let right = arr.length - 1;
    
    while (right > left) {
        let sum  = arr[left] + arr[right]

        if(sum === target) {
            return [arr[left], arr[right]]
        } else if (sum < target){
            left++
        } else {
            right--
        } 
    }
    return []
}

// console.log(TowSum([1, 2, 4, 6, 10], 8));
// =========================================================================
//  Squares of a Sorted Array

const squaresSortedArr = (num) => {
    let newSquarearr = num.map((num) => num * num)

    return newSquarearr.sort((a, b) => a - b)
}

// console.log(squaresSortedArr([-4, -1, 0, 3, 10]));

// =========================================================================

const SquaaresOfSortedArray = (num) => {
    let left = 0;
    let right = num.length - 1;
    let index = num.length - 1;

    let newArray = new Array(num.length)



    while (left <= right) {
        let leftSquare = num[left] * num[left]
        let rightSquare = num[right] * num[right]

        if(leftSquare > rightSquare) {
            newArray[index] = leftSquare
            left++
        } else {
            newArray[index] = rightSquare
            right--
        }
        index--;
    }
    return newArray

}

// console.log(SquaaresOfSortedArray([-4, -3, 0, 3, 10]));

// =========================================================================



//   Remove Duplicates from Sorted Array

const RemoveDuplicate = (num) => {
    let i = 1;

    for(let j = 1; j<num.length; j++){
        if(num[j] !== num[i - 1]){
            num[i] = num[j]
            i++
        }        
    }
    return i
}

// console.log(RemoveDuplicate([1, 1, 2, 2]));

// =========================================================================

// 3 sum 

const threeSum = (num) => {
    for(let i = 0; i < num.length; i++){
        for (let j = i +1; j < num.length; j++){
            for(let k = j +1; k < num.length; k++){
                if(num[i] + num[j] + num[k] === 0){
                    return [num[i], num[j], num[k]]
                }
            }
        }
    }
}

// }
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// 
                    
           
// =========================================================================

const ThreeSum = (nums) => {
    const result = [];

    const num  = nums.sort((a, b) => a - b)

    for(let i = 0; i < num.length - 2; i++){
        let left = i + 1;
        let right = num.length - 1;


        if(i > 0 && num[i] == num[i - 1]){
            continue
        }


        while(left < right) {
            let sum  = num[i] + num[left] + num[right]
            
            if(sum === 0) {
                result.push([num[i], num[left], num[right]])
    

        
                while(left < right && num[left] == num[left + 1]){
                    left++
                }

                while(right > left && num[right] == num[right - 1]){
                    right--
                }

                left++
                right--

            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }

    }
    return result;
}

// console.log(ThreeSum([-1, 0, 1, 2, -1, -4]));
// console.log(ThreeSum([-1, 2, 2]));
// console.log(ThreeSum([0, 0, 0]));



// ====================================================

const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b)

    let closestSum = nums[0] + nums[1] + nums[2]

    for(let i = 0; i < nums.length - 2; i++){
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right]

            if(Math.abs(target - sum) < Math.abs(target - closestSum)){
                closestSum = sum
            }

            if(sum < target) {
                left++
            } else if (sum > target){
                right--
            } else {
                return sum 
            }
        }
    }
    return closestSum
}

// console.log(
//     threeSumClosest([-1, 2, 1, -4], 1)
// );



// ==============================================================

const TripletswithSmallerSum = (nums, target) => {
    nums.sort((a, b) => a - b)

    let count = 0;

    for (let i = 0; i < nums.length - 2; i++){
        let left = i + 1;
        let right  = nums.length -1


        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            
            if(sum < target){
                count+= right - left;
                left++
            } else {
                right--
            }
        }
    }
    return count
}

// console.log(TripletswithSmallerSum([-1, 0, 2, 3, 4], 3));

// ===========================================================

const SortColors = (nums) => {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if(nums[mid] == 0){
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++
        } else if (nums[mid] == 1){
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums
}


// console.log(SortColors([0, 0, 2, 1, 1, 2]));
// console.log(SortColors([0, 2, 1, 1, 0, 2]));


// ===========================================================

const RemoveElement = function(nums, val) {
    let much = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[much] = nums[i];
            much++;
        }
    }

    return much;
};


// console.log(RemoveElement([2, 1, 3, 0, 2, 1, 0], 2));
// console.log(RemoveElement([3,2,2,3], 2));



const MoveZeroes = (nums) => {
    // let end = nums.length - 1;
    let end = 0

    for (let i = 0; i < nums.length ; i++){
        if(nums[i] !== 0){
            [nums[end], nums[i]] = [nums[i], nums[end]]
            end++;
        }
    }
    return nums
}
console.log(MoveZeroes([0, 1, 0, 3, 1, 2]));
console.log(MoveZeroes([0, 1, 0, 3, 0, 2]));



