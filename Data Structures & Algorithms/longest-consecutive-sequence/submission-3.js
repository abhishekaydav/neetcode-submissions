class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        let numSet = new Set(nums)
        let longest =0;

        for(let i=0; i<nums.length; i++){
            if(!numSet.has(nums[i]-1)){
                let currentNum = nums[i]
                let localLong = 1;
                while(numSet.has(currentNum +1)){
                    currentNum +=1
                    localLong += 1
                }

                if(localLong> longest){
                    longest = localLong ;
                }
            }
        }

        return longest
    }
}
