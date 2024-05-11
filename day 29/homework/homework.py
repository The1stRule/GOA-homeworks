
# 8 kyu

# 1)

def get_average(marks):
    average = sum(marks) / len(marks)
    return int(average)

# 2)

def make_negative( number ):
    return -number if number >= 0 else number

# 3)

def str_count(strng, letter):
    return strng.count(letter)  

# 7 kyu

# 4)

def is_leap_year(year):
    return False if year % 4 != 0 or year % 100 == 0 and year % 400 != 0 else True

# 5)

def best_friend(txt, a, b):
    return txt.count(a+b) == txt.count(a)