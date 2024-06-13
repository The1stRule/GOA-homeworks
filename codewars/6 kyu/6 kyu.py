
# Write Number in Expanded Form

def expanded_form(num):
    num = str(num)
    result = ""
    index = 0
    for i in num:
        if i != "0":
            result += i + "0" * (len(num) - index - 1) + " "
        index += 1
    result = result.split()
    return " + ".join(result)

# Data Reverse

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

# Collatz

def collatz(n):
    if n == 1:
        return "1"
    result = str(n) + "->"
    while n != 1:
        if n % 2 == 0:
            n = int(n / 2)
            result += str(n) + "->"
        else:
            n = int(3 * n + 1)
            result += str(n) + "->"
    return result[:-2]

# Detect Pangram

def is_pangram(st):
    st = st.lower()
    set_st = set(st)
    string = "abcdefghijklmnopqrstuvwxyz"
    for i in string:
        if i not in set_st:
            return False
    return True

# Kebabize

def kebabize(st):
    if st.lower() == st:
        return ""
    result = []
    string = ""
    for i in st:
        if i.isupper():
            result.append(string)
            string = ""
            string += i
        elif i.isdigit() == False:
            string += i
    result.append(string)
    result = "-".join(result)
    return result.lower() if result[0] != "-" else result[1:].lower()


# Convert string to camel case

def to_camel_case(text):
    if text == "":
        return ""
    words = text.title().replace("_","-").split("-")
    if text[0].isupper():
        return "".join(words)
    result = "".join(words[1:])
    return words[0].lower() + result