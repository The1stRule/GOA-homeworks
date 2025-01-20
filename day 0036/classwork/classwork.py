
# 8 kyu

# Array plus array

def array_plus_array(arr1,arr2):
    sum_arr1 = 0
    sum_arr2 = 0
    for i in arr1:
        sum_arr1 += i
    for i in arr2:
        sum_arr2 += i
    return sum_arr1 + sum_arr2

# Rock Paper Scissors!

def rps(p1, p2):
    if p1 == "scissors" and p2 == "paper":
        return "Player 1 won!"
    elif p1 == "scissors" and p2 == "rock": 
        return "Player 2 won!"
    elif p1 == "paper" and p2 == "rock":
        return "Player 1 won!"
    if p2 == "scissors" and p1 == "paper":
        return "Player 2 won!"
    elif p2 == "scissors" and p1 == "rock":
        return "Player 1 won!"
    elif p2 == "paper" and p1 == "rock":
        return "Player 2 won!"
    return "Draw!"

# Area or Perimeter

def area_or_perimeter(l , w):
    if l == w:
        return l * w
    return l * 2 + w * 2


# 7 kyu

# Remove anchor from URL

def remove_url_anchor(url):
    return url[:url.index("#")] if "#" in url else url

# Anagram Detection

def is_anagram(test, original):
    test = test.lower()
    original = original.lower()
    return True if sorted(test) == sorted(original) else False

# Greatest common divisor

def mygcd(x, y):
    if x > y:
        max = x
        min = y
    else:
        max = y
        min = x
        num = 0
    while max % min != 0:
        num = min
        min = max % min
        max = num
    return min


# 6 kyu

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


# 5 kyu

# Simple Pig Latin

def pig_it(text):
    string = ""
    result = ""
    for i in text:
        if i == " ":
            string = "ya" + string[0] + "".join(reversed(string[1:]))
            result += "".join(reversed(string)) + " "
            string = ""
        else:
            string += i
    if string not in "!?":
        string = "ya" + string[0] + "".join(reversed(string[1:]))
        result += "".join(reversed(string))
    else:
        result += string
    return result