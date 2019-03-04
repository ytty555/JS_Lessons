s = input()
i = 0
rep = False
n = 1
res_str = ''
ch0 = ''
last = False


def isLastSymbol(i):
    return i < len(s) - 1

def nextEqu(i):
    if isLastSymbol(i):
        return s[i] == s[(i + 1)]
    return False

while i < len(s):
    ch = s[i]
    if isLastSymbol(i):
        if ch == ch0:
            rep = True
            n += 1
        else:
            rep = False
            n = 1
    else:
        if ch == ch0:
            n += 1
            res_str += str(n)
            last = True
        else:
            res_str += ch + str(n)
            last = True

    if rep and last != True:
        if nextEqu(i) == False:
            res_str += str(n)
    elif rep == False and last != True:
        if nextEqu(i) == False:
            res_str += ch + str(n)
        else:
            res_str += ch
    ch0 = ch
    i += 1

print(res_str)