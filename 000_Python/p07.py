arr = [int(i) for i in input().split()]


def check_position(arr, i):
    if arr[i] == arr[0]:
        return [False, True]
    elif arr[i] == arr[-1]:
        return [True, False]
    else:
        return [True, True]


for i in range(len(arr)):
    pos = check_position(arr, i)
    if pos[0] and pos[1]:
        res = arr[i - 1] + arr[(i + 1)]
    elif (not pos[0]) and pos[1]:
        res = arr[-1] + arr[(i + 1)]
    elif pos[0] and (not pos[1]):
        res = arr[0] + arr[-2]

    print(res, end=' ')