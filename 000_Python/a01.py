# Рекомендовано спать А часов в сутки
A = int(input())

# Не стоит спать более В часов в сутки
# А <= B
B = int(input())

# Аня спит Н часов в сутки
H = int(input())


def check_sleeping(A, B, H):
    if not(A <= B):
        return print('Должно быть А <= В')

    if A <= H <= B:
        res = 'Это нормально'
    elif H < A:
        res = 'Недосып'
    elif H > B:
        res = 'Пересып'

    return res


print(check_sleeping(A, B, H))
