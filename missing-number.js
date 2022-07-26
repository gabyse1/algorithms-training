var missingNumber = (nums) => {
    let missnum;
    nums.sort((a, b) => a - b);
    console.log(nums);
    
    if (nums[0] !== 0) return 0;
    if (nums[nums.length - 1] !== nums.length) return nums.length;

    
    for (let i = 1; i < nums.length; i += 1) {
        missnum = nums[i] - nums[i - 1];
        if (missnum > 1) {
            missnum = nums[i] - 1;
            break;
        }
    }
    return missnum;
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
