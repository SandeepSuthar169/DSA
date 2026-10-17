const towsum = (arr: number[], target: number) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === target) {
      return [i + 1, j + 1];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return 0;
};

// console.log(towsum([2,7,11,15], 9));

// numbers[4] - numbers[0] = 12 - 1 = 11
const FindTwoNumbersWithaGivenDifference = (numbers: number[],target: number) => {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        let difference = numbers[j] - numbers[i];
        if (difference === target) {
            return [i + 1, j + 1];
        } else if (difference < target) {
            i++;
        } else {
            j--;
        }
    }
    return 0;
};

console.log(FindTwoNumbersWithaGivenDifference([2,7,11,15], 9));

