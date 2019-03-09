arr = []


def sum(arr):
    s = 0
    if len(arr) == 0:
        return -1
    for i in arr:
        s += i
    return s


def sum_squart(arr):
    ss = 0
    for i in arr:
        ss += i ** 2
    return ss


while sum(arr) != 0:
    n = int(input())
    arr.append(n)

print(sum_squart(arr))
