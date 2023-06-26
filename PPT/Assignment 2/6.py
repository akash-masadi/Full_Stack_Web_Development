"""
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.
You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
"""
def bs(nums, target):
  low = 0
  high = len(nums) - 1
  while low <= high:
    mid = (low + high) // 2
    if nums[mid] == target:
      return mid
    elif nums[mid] < target:
      low = mid + 1
    else:
      high = mid - 1
  return -1

arr = list(map(int,input().split()))
k = int(input())
print(bs(arr, k))
