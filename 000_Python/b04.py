a = int(input())
b = int(input())
sum = 0
n = 0

for i in range(a, b + 1):
    if i % 3 == 0:
        sum += i
        n += 1

print(sum / n)
