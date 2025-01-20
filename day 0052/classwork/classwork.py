
# 7 kyu

# 1)

def square_sum(numbers):
    new_numbers = []
    
    for num in numbers:
        num = num ** 2
        new_numbers.append(num)
    sum_numbers = sum(new_numbers)
    return sum_numbers

# 2)

def maskify(cc):
    if len(cc) <= 4:
        return cc
    else:
        lenght = len(cc) - 4
        result = lenght * "#"
        result += cc[-4:]
    return result

# 3)

def digitize(n):
    str_num = str(n)
    result = []
    for i in str_num[::-1]:
        result.append(int(i))
    return result


# 6 kyu

# 4)

def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    arr = [0,0]
    for i in walk:
        if i == "n":
            arr[0] += 1
        elif i == "s":
            arr[0] -= 1
        elif i == "w":
            arr[1] += 1
        elif i == "e":
            arr[1] -= 1
    return arr == [0,0]

# 5)

def sort_array(source_array):
    result = []
    odd_nums = []
    for i in source_array:
        if i % 2 != 0:
            odd_nums.append(i)
    odd_nums = sorted(odd_nums)
    index = 0
    for i in source_array:
        if i % 2 == 0:
            result.append(i)
        else:
            result.append(odd_nums[index])
            index += 1
    return result

# 6)

def sum_dig_pow(a, b):
    result = []
    for i in range(a, b + 1):
        if len(str(i)) == 1:
            result.append(i)
        else:
            index = 1
            sum = 0
            for x in str(i):
                sum += int(x) ** index
                index += 1
            if i == sum:
                result.append(sum)
    return result