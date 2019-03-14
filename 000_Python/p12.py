matrix = []
res_matrix = []
i = 0
j = 0
ABCD = 0

 
# Функция переводит список строк в список чисел
def toInt(arr):
    if len(arr) ==  1:
        res = int(arr[0])
    else:
        res = []
        for i in range(len(arr)):
            res.append(int(arr[i]))
    return res

# Формируем матрицу из вводимых строк до ввода слова end
while True:
    str = [n for n in input().split()]
    if str == ['end']:
        break
    else:
        matrix.append(toInt(str))

# Формируем итоговую матрицу и забиваем ее нулями

# Если список одномерный и состоит из одного значения
if len(matrix) == 1:
    res = matrix[0]
    res_matrix = [[res for i in range(3)] for j in range(3)]
# иначе, если список многомерный
else:
    res_matrix = [[0 for i in range(len(matrix) + 2)] for j in range(len(matrix[j]) + 2)]
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            res_matrix[i + 1][j + 1] = matrix[i][j]
            if i == 0:
                res_matrix[i][j+1] = matrix[len(matrix) - 1][j]
            if i == len(matrix) - 1:
                res_matrix[len(res_matrix) - 1][j+1] = matrix[0][j]
            if j == 0:
                res_matrix[i+1][j] = matrix[i][len(matrix[i]) - 1]
            if j == len(matrix[i]) - 1:
                res_matrix[i + 1][len(res_matrix) - 1] = matrix[i][0]


# for i in range(len(res_matrix)):
#     for j in range(len(res_matrix[i])):
#         print(res_matrix[i][j], end="\t")
#     print()

# print()
# print()
# print()

i = 1
while i < len(res_matrix) - 1:
    j = 1
    while j < len(res_matrix[i]) - 1:
        A = res_matrix[i][j-1]
        B = res_matrix[i-1][j]
        C = res_matrix[i][j+1]
        D = res_matrix[i+1][j]
        print(A + B + C + D, end="\t")
        j += 1
    i += 1
    print()

