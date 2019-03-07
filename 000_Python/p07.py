arr = [int(i) for i in input().split()]

working_arr = []

working_arr.append(arr[-1])

for n in arr:
    working_arr.append(n)

working_arr.append(arr[0])

for i in range(len(arr)):
    if len(arr) == 1:
        res = arr[0]
    else:
        res = working_arr[i] + working_arr[i + 2]
    print(res, end=' ')
