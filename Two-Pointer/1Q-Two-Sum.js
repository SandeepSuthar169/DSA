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

//  Squares of a Sorted Array

const squaresSortedArr = (nums) => {
    let newSquarearr = nums.map((nums) => nums * nums)

    return newSquarearr.sort((a, b) => a - b)
}

// console.log(squaresSortedArr([-4, -1, 0, 3, 10]));


const SquaaresOfSortedArray = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length - 1;

    let newArray = new Array(nums.length)



    while (left <= right) {
        let leftSquare = nums[left] * nums[left]
        let rightSquare = nums[right] * nums[right]

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



//   Remove Duplicates from Sorted Array

const RemoveDuplicate = (nums) => {
    let i = 1;

    for(let j = 1; j<nums.length; j++){
        if(nums[j] !== nums[i - 1]){
            nums[i] = nums[j]
            i++
        }        
    }
    return i
}

console.log(RemoveDuplicate([1, 1, 2, 2]));

