

# 7 kyu

# 1)

def get_count(D_D):
    return D_D.count("a") + D_D.count("e") + D_D.count("i") + D_D.count("o") + D_D.count("u")

# 2)

def descending_order(num):
    result = "".join(sorted(str(num)))
    return int(result[::-1])

# 3)

def filter_list(l):
    new_list = []
    for i in l:
        if type(i) != str:
            new_list.append(i)
    return new_list


# 6 kyu

# 4)

def find_it(seq):
    for i in seq:
        if seq.count(i) % 2 != 0:
            return i
        

# 5)

def digital_root(n):
    if len(str(n)) == 1:
        return n
    result = n
    while len(str(result)) != 1:
        num = 0
        for i in str(result):
            num += int(i)
        result = num
    return result