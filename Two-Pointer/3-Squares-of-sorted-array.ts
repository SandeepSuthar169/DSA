
function squareOfSortedArray(arr: number[]): number[]{
    const result = new Array(arr.length)
    let left = 0
    let right = arr.length - 1;
    let index = arr.length - 1;

    while(left <= right){
        const leftSquare = arr[left] * arr[left]
        const rightSquare = arr[right] * arr[right]

        if(leftSquare > rightSquare){
            result[index] = leftSquare
            left++
        } else {
            result[index] = rightSquare
            right--
        }
        index--
    }
    return result
}

console.log(squareOfSortedArray([-4, -3, 0, 3, 10]));
