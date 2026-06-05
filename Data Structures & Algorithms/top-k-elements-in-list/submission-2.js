class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numHasMap = {};


        for(let i=0; i< nums.length; i++){
            if(numHasMap[nums[i]]){
                numHasMap[nums[i]] = numHasMap[nums[i]] +1
            } else {
                numHasMap[nums[i]] = 1;
            }
        }

        const uniqKey = Object.keys(numHasMap);

        uniqKey.sort((a,b)=> numHasMap[b] - numHasMap[a]) 

        const filter = uniqKey.slice(0,k)

        return filter.map(num=> Number(num));
    }
}
