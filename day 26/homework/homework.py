
# 8 kyu

# 1)

def twice_as_old(dad_years_old, son_years_old):
    if son_years_old * 2 < dad_years_old:
        return dad_years_old - son_years_old * 2
    else:
        return son_years_old * 2 - dad_years_old

# 2)

def sum_str(a, b):
    if not a and not b:
        return "0"
    elif not a or not b:
        return a + b
    else:
        return str(int(a) + int(b))

# 3)

def reverse_seq(n):
    numbers = []
    for i in range(n, 0, -1):
        numbers.append(i)
    return numbers

# 4)

def no_space(x):
    return x.replace(" ", "")

# 5)

def abbrev_name(name):
    name = name.title()
    name_surname = []
    for i in name:
        if i.isupper():
            name_surname.append(i)
    return ".".join(name_surname)

# 7 kyu

# 6)

def factorial(n):
    num_factorial = 1
    if n == 0 or n ==  1:
        return 1
    else:
        for i in range(1, n + 1, 1):
            num_factorial *= i
        return num_factorial

# 7)

def solve(s):
    upper_symbols = []
    lower_symbols = []
    for i in s:
        if i.islower() == True:
            lower_symbols.append(i)
        else:
            upper_symbols.append(i)
    if len(upper_symbols) <= len(lower_symbols):
        return s.lower()
    elif len(upper_symbols) > len(lower_symbols):
        return s.upper()

# 8)

def divisors(n):
    divisors = []
    for i in range(1, n + 1, 1):
        if n % i == 0:
            divisors.append(i)
    return len(divisors)

# 9)

def capitals(word):
    upper_index = []
    index = 0
    for i in word:
        if i.isupper() == True:
            upper_index.append(index)
        index += 1
    return upper_index

# 10)

def divisors(integer):
    divisors = []
    for i in range(1, integer, 1):
        if i != 1 and integer % i == 0:
            divisors.append(i)
    if divisors == []:
        str_integer = str(integer)
        return str_integer +" is prime"
    else:
        return divisors