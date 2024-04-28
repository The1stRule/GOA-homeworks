
# 1)

def litres(time):
    return int(time * 0.5)

# 2)

def paperwork(n, m):
    if n < 0 or m < 0:
        return 0
    else:
        return n * m

# 3)

def grow(arr):
    result = 1
    for i in arr:
        result *= i
    return result

# 4)

def fake_bin(x):
    result = ''
    for i in x:
        if int(i) < 5:
            result += '0'
        else:
            result += '1'
    return result

# 5)

def count_by(x, n):
    count_nums = []
    for i in range(x, x * n + 1, 1):
        if i % x == 0:
            count_nums.append(i)
    return count_nums

# 6)

def to_jaden_case(string):
    return ' '.join(string.capitalize() for string in string.split())

# 7)

def accum(st):
    st = list(st)
    a = 1
    b = []
    for i in range(len(st)):
        if i == len(st) - 1:
            b.append(st[i] * a)
        else:
            b.append(st[i] * a + "-")
        a += 1
    str_b = " ".join(b)
    replace_str_b = str_b.replace(" ","")

    return replace_str_b.title()

# 8)

def remove_smallest(numbers):
    if not numbers:
        return []
    min_index = numbers.index(min(numbers))
    return numbers[:min_index] + numbers[min_index + 1:]

# 9)

def solution(number):
    if number < 0:
        return 0
    multiples = []

    for i in range(number):
        if i % 3 == 0 or i % 5 == 0:
            multiples.append(i)
    sum_of_multiples = sum(multiples)
    
    return sum_of_multiples

# 10)

def likes(names):
    len_list = len(names)
    if names == []:
        return "no one likes this"
    elif len_list == 1:
        a = names[0],"likes this"
        str_a = " ".join(a)
        return str_a
    elif len_list == 2:
        a = names[0],"and",names[1],"like this"
        str_a = " ".join(a)
        return str_a
    elif len_list == 3:
        a = names[0]+ ",",names[1],"and",names[2],"like this"
        str_a = " ".join(a)
        return str_a
    else:
        others = len_list - 2
        str_others = str(others)
        a = names[0]+ ",",names[1],"and",str_others,"others like this"
        str_a = " ".join(a)
        return str_a