"""
Given an integer array nums, find three numbers 
whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6
"""
arr=list(map(int,input().split()))
l=len(arr)
arr.sort()
print(arr[-1]*arr[-2]*arr[-3])
