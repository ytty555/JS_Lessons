'''
1 - программист
2-4 - программиста
0, 5-9, 11-19 - программистов
'''
n = int(input())


def length_2():
    temp = str(n)
    t1 = int(temp[-2])
    t2 = int(temp[-1])

    if t1 == 1:
        return str(n) + ' программистов'
    else:
        return length_1(t2)


def length_1(num):
    if num == 1:
        return str(n) + ' программист'
    if 2 <= num <= 4:
        return str(n) + ' программиста'
    if num == 0 or 5 <= num <= 9:
        return str(n) + ' программистов'

if n < 10:
    print(length_1(n))
else:
    print(length_2())