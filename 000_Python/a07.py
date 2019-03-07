a = int(input())
b = int(input())
c = int(input())
sum = a + b + c

print(max(a, b, c))
print(min(a, b, c))
print(sum - max(a, b, c) - min(a, b, c))