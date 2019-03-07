i = 0
j = 0
a = []

while i < 100:
    n = int(input())
    if n < 10:
        continue
    elif n > 100:
        break
    else:
        a.append(n)

while j < len(a):
    print(a[j])
    j += 1