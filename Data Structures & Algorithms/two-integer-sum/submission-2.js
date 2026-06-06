class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const numberHash ={};

        for(let i=0; i<nums.length; i++){

            const currentNumber = nums[i];
            const needValue = target - currentNumber;
            if(numberHash[needValue] !== undefined){
                return [numberHash[needValue], i]
            }

            numberHash[currentNumber] = i;

        }

        return []
        
    }
}
