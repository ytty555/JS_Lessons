s = input()
f = 'gc'
n = 0

for c in f:
    n += s.upper().count(c.upper())

percent = n / len(s) * 100

print(percent)