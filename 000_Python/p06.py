# s = aaaabbcaa
s = 'aaaabbcaa'

current_ch = ''
next_ch = ''
n = 1
res_str = ''

for ch in s:
    if ch == current_ch:
        n += 1
        current_ch = ch
        ch = ''
    else:
        if n > 1:
            res_str += str(n)
        current_ch = ch
        n = 1
    res_str += ch


print(res_str)
