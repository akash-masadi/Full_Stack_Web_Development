"""
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the 
array by deleting some or no elements without changing the order of the remaining elements.
Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

"""
arr=list(map(int,input().split()))
n=len(arr)
m=0
for i in range(n):
    if arr[i]+1 in arr:
        m=max(m,arr.count(arr[i])+arr.count(arr[i]+1))
print(m)
