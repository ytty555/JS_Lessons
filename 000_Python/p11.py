a = [int(i) for i in input().split()]
b = int(input())
start = 0
stop = len(a)

if b in a:
    while b in a[start:stop]:
        i = a.index(b, start, stop)
        start = i + 1
        print(i, end=' ')
else:
    print('Отсутствует')
