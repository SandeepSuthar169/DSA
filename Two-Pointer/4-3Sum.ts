const ThreeSum = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);
  let j = 1;
  let k = nums.length - 1;
  let target = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 || nums[i] === nums[i - 1]) continue;

    let sum = nums[i] + nums[j] + nums[k];

    if ((sum = target)) {
      result.push([nums[i], nums[j], nums[k]]);
    } else if (sum < target) {
      j++;
    } else {
      k--;
    }
    // j++
    // k--
  }
  return result;
};

export default ThreeSum;

console.log(ThreeSum([-1, 0, 1, 2, -1, -4]));
