# Вычисление площади треугольника S по трем его сторонам a, b, c
# Формула Герона

a = float(input())
b = float(input())
c = float(input())

p = (a + b + c) / 2

S = (p * (p - a) * (p - b) * (p - c)) ** 0.5

print(S)
