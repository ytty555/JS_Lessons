a, b, c, d = int(input()), int(input()), int(input()), int(input())


def check_input():
    return a <= b and c <= d and a <= 10 and b <= 10 and c <= 10 and d <= 10


def block_operation():
    str_header = ''

    # Формируем и выводим шапку
    for i in range(c, d + 1):
        str_header += '\t' + str(i)
    print(str_header)

    # Формируем и выводим тело таблицы умножения по-строчно
    for i in range(a, b + 1):
        str_body = str(i)
        for j in range(c, d + 1):
            str_body += '\t' + str(i * j)
        print(str_body)

    return


if check_input():
    block_operation()
else:
    print('Ошибка ввода')
