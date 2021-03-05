# Given an array nums, write a function to move all 0s to the end of it while maintaining the relative order of the non-zero elements.

# Example:

# Input: [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Note:

# You must do this in-place without making a copy of the array.
# Minimize the total number of operations.
# solution
def move_zeroes(nums)
    len=nums.length
    count=0
    for i in 0...len
        if nums[i]!=0
            nums[count]=nums[i]
            count+=1
        end
    end
    while count<len
        nums[count]=0
        count+=1
    end
    puts nums
end

# JavaScript solution
# var moveZeroes = function(nums) {
#     let counter = 0
#         for(let i = 0; i < nums.length; i++){
#             if(nums[i] !== 0){
#                 nums[counter] = nums[i]
#                 counter += 1
#             }
#         }
#         for(counter; counter < nums.length; counter++){
#             nums[counter] = 0
#         }
#         return nums
# };