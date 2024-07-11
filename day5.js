
var maxOperations = function(nums, k) {
    nums.sort((a,b) => a-b);
    let l = 0, r = nums.length - 1, c=0;
    while(l<r) {
        const sum = nums[l] + nums[r]; 
        if (sum < k) {
            l++;
        } else if (sum > k) {
            r--;
        }
        else {
            c++;
            l++;
            r--;
        }
    }
    return c;
};