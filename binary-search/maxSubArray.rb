# Given an integer array nums, 
# find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


 

# Example 1:

# Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Example 2:

# Input: nums = [1]
# Output: 1
# Example 3:

# Input: nums = [0]
# Output: 0
# Example 4:

# Input: nums = [-1]
# Output: -1
# Example 5:

# Input: nums = [-2147483647]
# Output: -2147483647
# solution
def max_sub_array(nums)
  
    maxSoFar = nums[0];
    maxEndingHere = nums[0];
    i = 1
    
    while i < nums.length
      
      maxEndingHere = [maxEndingHere + nums[i], nums[i]].max;
      maxSoFar = [maxSoFar, maxEndingHere].max;
      
      i +=1
    end
    
    puts maxSoFar
  end

max_sub_array([-2,1,-3,4,-1,2,1,-5,4])