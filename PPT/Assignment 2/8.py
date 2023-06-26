"""
You are given an integer array nums and an integer k.

In one operation, you can choose any index i
where 0 <= i < nums.length and change nums[i] to nums[i] + x 
where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

"""
def min_score(nums, k):

  mi = nums[0]
  ma = nums[0]
  for i in range(1, len(nums)):
    mi = min(mi, nums[i] - k)
    ma = max(ma, nums[i] + k)
  return ma - mi

nums = list(map(int,input().split()))
k = int(input())
print(min_score(nums, k))
