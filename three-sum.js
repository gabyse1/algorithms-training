const threeSum = (nums) => {
    let answ = [];
    let i = 0;
    let j = 1;
    let found = false;
    
    while (i < nums.length - 2) {
        j = 1;
        while (j < nums.length - 1) {
            const newItem = [nums[i], nums[i + j], nums[i + j + 1]];
            for(let k = 0; k < answ.length; k += 1) {
                found = answ[k].every((val, index) => val === newItem[index]);
                if (found) break;
            }
            if(!found && newItem.reduce((x, y) => x + y) === 0) answ.push(newItem);
            j += 1;
        }
        i += 1;
    }
    return answ;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([0,0,0,0]));
