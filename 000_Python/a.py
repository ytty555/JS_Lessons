X = int(input())
H = int(input())
M = int(input())


def sleepDownTimeMin(h, m):
    return h * 60 + m


def timeToAlarmHM():
    mins = sleepDownTimeMin(H, M) + X
    h = mins // 60
    m = mins % 60
    res = [h, m]
    return res


alarmTimer = timeToAlarmHM()
print(alarmTimer[0])
print(alarmTimer[1])
