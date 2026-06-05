class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

    const numsHash ={}

    for(let i = 0; i < nums.length; i++){
        if(numsHash[nums[i]]){
            numsHash[nums[i]] = numsHash[nums[i]] +1;
        } else {
            numsHash[nums[i]] = 1;
        }
    }

    let numbKeys = Object.keys(numsHash)

    numbKeys.sort((a,b)=>{
       return numsHash[b] - numsHash[a]
    })

    const filter = numbKeys.slice(0,k)

    return filter.map(num=> Number(num))

    }
}
