# Простейший калькулятор

a = float(input())
b = float(input())
oper = input()


def calc(a, b, oper):
    if oper == '+':
        return a + b
    elif oper == '-':
        return a - b
    elif oper == '*':
        return a * b
    elif oper == '/':
        if b == 0:
            return 'Деление на 0!'
        return a / b
    elif oper == 'mod':
        if b == 0:
            return 'Деление на 0!'
        return a % b
    elif oper == 'pow':
        return a ** b
    elif oper == 'div':
        if b == 0:
            return 'Деление на 0!'
        return a // b
    else:
        return 'Не верный математический оператор'


print(calc(a, b, oper))
