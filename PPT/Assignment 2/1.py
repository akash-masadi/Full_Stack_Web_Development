"""
Given an integer array nums of 2n integers, group these integers 
into n pairs (a1, b1), (a2, b2),..., (an, bn) 
such that the sum of min(ai, bi) for all i is maximized. 
Return the maximized sum.
"""
arr=list(map(int,input().split()))
s=0
arr.sort()
for i in range(0,len(arr),2):
    s+=arr[i]
print(s)