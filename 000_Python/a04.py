n = int(input())


def check_n(n):
    return bool((-15 < n <= 12) or (14 < n < 17) or (19 <= n))


print(check_n(n))
