matrix = []


def toInt(arr):
    if len(arr) == 1:
        res = int(arr[0])
    else:
        res = []
        for i in range(len(arr)):
            res.append(int(arr[i]))
    return res


while True:
    str = [n for n in input().split()]
    if str == ['end']:
        break
    else:
        matrix.append(toInt(str))


try:
    if len(matrix) == 1:
        i = 0
        while i < len(matrix[0]):
            A = matrix[0][i - 1]
            B = matrix[0][i]
            C = matrix[0][i - len(matrix[0]) + 1]
            D = matrix[0][i]
            print(A + B + C + D)
            i += 1
    else:
        i = 0
        while i < len(matrix):
            j = 0
            while j < len(matrix[i]):
                A = matrix[i][j - 1]
                B = matrix[i - 1][j]
                C = matrix[i][j - len(matrix) + 1]
                D = matrix[i - len(matrix) + 1][j]
                print(A + B + C + D, end="\t")
                j += 1
            i += 1
            print()
except:
    i = 0
    while i < len(matrix):
        A = matrix[i - 1]
        B = matrix[i]
        C = matrix[i - len(matrix) + 1]
        D = B
        print(A + B + C + D, end="\t")
        i += 1
