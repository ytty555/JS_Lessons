# s = aaaabbcaa
s = 'aaaabbcaa'

current_ch = ''
next_ch = ''
n = 1
res_str = ''
count = ''

for ch in s:
    if ch == current_ch:
        n += 1
        current_ch = ch
        ch_out = ''
    else:
        if n > 1:
            count = str(n)
            ch_out = ch
        else:
            ch_out = ch
        current_ch = ch
        n = 1
    res_str += count + ch_out
    count = ''


print(res_str)
