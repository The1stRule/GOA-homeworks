
# 8 kyu

# 1)

def smash(words):
    return " ".join(words)

# 2)

def square_sum(numbers):
    new_numbers = []

    for num in numbers:
        num = num ** 2
        new_numbers.append(num)
    sum_numbers = sum(new_numbers)
    return sum_numbers

# 3)

def sum_str(a, b):
    if not a and not b:
        return "0"
    elif not a or not b:
        return a + b
    else:
        return str(int(a) + int(b))
    
# 4)

def solution(string):
    return string[::-1]

# 5)

def sum_array(a):
    if a == []:
        return 0
    else:
        return sum(a)

# 6)

def remove_exclamation_marks(s):
    new_s = []
    for i in s:
        if i != "!":
            new_s.append(i)
    return "".join(new_s)

# 7)

def monkey_count(n):
    result = []
    for i in range(1, n + 1, 1):
        result.append(i)
    return result

# 7 kyu

# 8)

def diff(a, b):
    a = set(a)
    b = set(b)
    return sorted(a ^ b)

# 9)

def xo(s):
    s = s.lower()
    return s.count("x") == s.count("o")

# 6 kyu

# 10)

def duplicate_encode(word):
    new_str = ""
    word = word.lower()
    for i in word:
        if word.count(i) > 1:
            new_str += ")"
        else:
            new_str += "("
    return new_str