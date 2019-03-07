a = int(input())
b = int(input())


def gcd(a, b):
    if b == 0:
        return a
    else:
        return gcd(b, a % b)


def lcm(a, b):
    return a / gcd(a, b) * b


print(int(lcm(a, b)))