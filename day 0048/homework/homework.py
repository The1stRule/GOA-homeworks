

# 7 kyu

# 1)

# Sum of two lowest positive integers

def sum_two_smallest_numbers(numbers):
    first_min = min(numbers)
    numbers.remove(first_min)
    second_min = min(numbers)
    return first_min + second_min

# 2)

# Maximum Multiple

def max_multiple(divisor, bound):
    for i in range(bound,divisor, -1 ):
        if i % divisor == 0:
            return i

# 3)

# JavaScript Array Filter

def get_even_numbers(arr):
    result = []
    for i in arr:
        if i % 2 == 0:
            result.append(i)
    return result

# 4)

# Check the exam

def check_exam(arr1,arr2):
    index = 0
    result = 0
    for i in arr2:
        if i == arr1[index]:
            result += 4
        elif i != "" and i != arr1[index]:
            result -= 1
        index += 1
    return result if result >= 0 else 0

# 5)

# Row Weights

def row_weights(array):
    team_1 = 0
    team_2 = 0
    index = 0
    for i in array:
        if index % 2 == 0:
            team_1 += i
        else:
            team_2 += i
        index += 1
    return team_1,team_2