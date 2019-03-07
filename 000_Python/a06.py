figure = input()
if figure == "прямоугольник":
    a = float(input())
    b = float(input())
    s = a * b
elif figure == "треугольник":
    a = float(input())
    b = float(input())
    c = float(input())
    p = (a + b + c) / 2
    s = (p * (p - a) * (p - b) * (p - c)) ** 0.5
elif figure == "круг":
    r = float(input())
    pi = 3.14
    s = pi * (r ** 2)
else:
    s = 'Задана неверная фигура'

print(s)
