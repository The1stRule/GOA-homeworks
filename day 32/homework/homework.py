
# 7 kyu

# 1)

def no_odds(values):
    sorted_values = []
    for i in values:
        if i % 2 == 0:
            sorted_values.append(i)
    return sorted_values

# 2)

def sum_cubes(n):
    result = 0
    for i in range(1, n + 1):
        result += i ** 3
    return result

# 3)

def number_of_occurrences(element, sample):
    return sample.count(element)

# 6 kyu

# 4)

def to_weird_case(words):
    words = words.split()
    result = []
    for i in words:
        string = ""
        index = 0
        for x in i:
            if index % 2 == 0:
                string += x.upper()
            else:
                string += x.lower()
            index += 1
        result.append(string)
    return " ".join(result)

# 5)

def data_reverse(data):
    byte = []
    result = []
    byte_index = 0
    index = 1
    for i in data:
        if index % 2 == 0:
            byte_index += 1
        if byte_index == 4:
            byte.append(i)
            result += byte[::-1]
            byte = []
            byte_index = 0
        else:
            byte.append(i)
        index += 1
    return result[::-1]