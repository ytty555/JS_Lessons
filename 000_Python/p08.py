arr = [int(n) for n in input().split()]

arr.sort()
rep = False
last_i = ''

for i in arr:
    if i == last_i and rep == False:
        print(i, end=' ')
        rep = True
    else:
        if i == last_i:
            rep = True
        else:
            rep = False
    last_i = i
