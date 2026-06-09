class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0;

        let numSet = new Set(nums)
        let longest = 0;

        for(let i=0; i<nums.length; i++){
            if(!numSet.has(nums[i]-1)){
                let num = nums[i];
                let curLong =1;
                while(numSet.has(num+1)){
                    num += 1
                    curLong += 1
                }

                if(curLong > longest){
                    longest = curLong
                }
            }
        }

        return longest;
    }
}
