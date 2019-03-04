# s = aaaabbcaa
s = 'aaaabbcaa'
i = 0
rep = False
n = 0
ch0 = ''
res_str = ''


def isLastSymbol(i):
    return i < len(s)

while i < len(s):
    ch = s[i]
    if isLastSymbol(i) == False:
        if ch == ch0:
            rep = True
            n += 1
        else:
            rep = False
    if rep:
        res_str += n
    else:
        res_str += ch 

print(res_str)
