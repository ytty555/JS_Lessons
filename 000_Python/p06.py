# s = aaaabbcaa
s = 'aaaabbcaa'

last_ch = ''
next_ch = ''
n = 1
res_str = ''
count = ''

for ch in s:
    if ch == last_ch:
        n += 1
    else:
        res_str += ch
        last_ch = ch


print(res_str)
