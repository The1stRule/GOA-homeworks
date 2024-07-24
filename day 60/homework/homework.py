

# 8 kyu

# 1)

def invert(lst):
    new_lst = []
    for i in lst:
        new_lst.append(-i)
    return new_lst

# 2)

def smash(words):
    return " ".join(words)

# 3)

def between(a,b):
    result = []
    for i in range(a, b + 1):
        result.append(i)
    return result

# 4)

def get_grade(s1, s2, s3):
    average = (s1 + s2 + s3) / 3
    if average >= 90:
        return "A"
    elif average >= 80:
        return "B"
    elif average >= 70:
        return "C"
    elif average >= 60:
        return "D"
    return "F"

# 5)

def dna_to_rna(dna):
    if dna == "":
        return ""
    result = ""
    for i in dna:
        if i == "T":
            result += "U"
        else:
            result += i
    return result


# 7 kyu 

# 1) 

def collatz(n):
    result = 1
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = n * 3 + 1
        result += 1
    return result

# 2

def stray(arr):
    numbers = sorted(arr)
    return numbers[0] if numbers.count(numbers[0]) == 1 else numbers[-1]

# 3)

def round_to_next5(n):
    if n % 5 == 0:
        return n
    for i in range(n + 1, n + 5 + 1):
        if i % 5 == 0:
            return i

# 4)

def spot_diff(s1, s2):
    if s1 == s2:
        return []
    result = []
    index = 0
    for i in s1:
        if i != s2[index]:
            result.append(index)
        index += 1
    return result

# 5)

def DNA_strand(dna):
    compliment_dict = {"A":"T","C":"G","T":"A","G":"C"}
    result = ""
    for i in dna:
        result += compliment_dict[i]
    return result


# 6 kyu

# 1)

def camel_case(s):
    return "".join(s.title().split(" "))