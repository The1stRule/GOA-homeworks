
# 8 kyu

# 1)

def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    return "green"

# 2)

def find_difference(a, b):
    a_sum = 1
    b_sum = 1
    for i in a:
        a_sum *= i
    for i in b:
        b_sum *= i
    return a_sum - b_sum if a_sum > b_sum else b_sum - a_sum

# 3)

def triple_trouble(one, two, three):
    word = ""
    for i in range(len(one)):
        word += one[i] + two[i] + three[i]
    return word

# 7 kyu

# 4)

def arithmetic(a, b, operator):
    if operator == "add":
        return a + b
    elif operator == "subtract":
        return a - b
    elif operator == "multiply":
        return a * b
    return a / b

# 5)

def in_asc_order(arr):
    return arr == sorted(arr)

# 6)

def show_sequence(n):
    if n < 0:
        return str(n) + "<0"
    elif n == 0:
        return "0=0"
    sum = 0
    str_result = []
    for i in range(n + 1):
        sum += i
        str_result.append(str(i))
    return "+".join(str_result) + " = " + str(sum)