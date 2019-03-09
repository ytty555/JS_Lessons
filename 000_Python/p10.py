n = int(input())
if n < 0:
    n = n * -1

arr = []
num = 1

while len(arr) <= n:
    for i in range(num):
        arr.append(num)
    num += 1

new_arr = arr[:n]
for i in new_arr:
    print(i, end=" ")
