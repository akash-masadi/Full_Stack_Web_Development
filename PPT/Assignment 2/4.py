"""
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, 
where 0 means empty and 1 means not empty, and an integer n, 
return true if n new flowers can be planted in the flowerbed without
violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

"""
arr=list(map(int,input().split()))
l=len(arr)
n=int(input())
i=0
c=0
while(i<l-1):
    if(arr[i]==0 and (arr[i-1]!=1 and arr[i-1]!=1)):
       c+=1
    if(c>=n):break
    i+=1
print(True if n<=c else False)
