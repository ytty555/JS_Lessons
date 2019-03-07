n = input()
a1 = n[0]
a2 = n[1]
a3 = n[2]
b1 = n[3]
b2 = n[4]
b3 = n[5]
a = int(a1) + int(a2) + int(a3)
b = int(b1) + int(b2) + int(b3)

if len(n) != 6:
    print('Ошибка')
elif a == b:
    print('Счастливый')
else:
    print('Обычный')
