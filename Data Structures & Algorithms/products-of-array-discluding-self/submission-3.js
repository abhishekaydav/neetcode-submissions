class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      const length = nums.length
      const result = new Array(length);

      result[0]=1;
      for(let i =1; i< length; i++){
        result[i] = result[i-1] * nums[i-1]
      }

      let rightHalf = 1;

    for(let i = length -1; i>= 0; i--){
        result[i] = rightHalf * result[i]
        rightHalf = rightHalf * nums[i]
    }

    return result
    }
}
