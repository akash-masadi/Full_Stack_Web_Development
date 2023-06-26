a=list(map(int,input().split()))
c=0
k=[]
print(a)
for i in range(len(a)):
    if a[i]!=0:
        k.append(a[i])
    else:
        c+=1
while(c>0):
    k.append(0)
    c-=1
print(k)
