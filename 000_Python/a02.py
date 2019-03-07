# Вводим год
n = int(input())


def b(n, num):
    return bool(not n % num)


def check_year(n):
    if not(1900 <= n <= 3000):
        return print('Некорректно задан год')

    if (b(n, 4) and (not b(n, 100))) or b(n, 400):
        res = 'Високосный'
    else:
        res = 'Обычный'

    return res


print(check_year(n))
