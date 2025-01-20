
# 6 kyu

# 1)

# Duplicate Encoder

def duplicate_encode(word):
    new_str = ""
    word = word.lower()
    for i in word:
        if word.count(i) > 1:
            new_str += ")"
        else:
            new_str += "("
    return new_str

# 2)

# Detect Pangram

def is_pangram(st):
    st = st.lower()
    set_st = set(st)
    string = "abcdefghijklmnopqrstuvwxyz"
    for i in string:
        if i not in set_st:
            return False
    return True

# 3)

# What's A Name In?

def name_in_str(strng, name):
    name = name.lower()
    result = ""
    index = 0
    for i in strng.lower():
        if i in name and index != len(name) and i == name[index]:
            result += i
            index += 1
    return result == name

# 4)

# Memesorting

def memesorting(meme):
    st = ""
    chemistry = ""
    design = ""
    index = 0
    index_1 = 0
    index_2 = 0
    for i in meme.lower():
        if len("bug") != index and i == "bug"[index]:
            st += i
            index += 1
        if len("boom") != index_1 and i == "boom"[index_1]:
            chemistry += i
            index_1 += 1
        if len("edits") != index_2 and i == "edits"[index_2]:
            design += i
            index_2 += 1
        if st == "bug":
            return "Roma"
        elif chemistry == "boom":
            return "Maxim"
        elif design == "edits":
            return "Danik"
    return "Vlad"

# 5 kyu

# 5)

# First non-repeating character

def first_non_repeating_letter(s=""):
    if s == "":
        return s
    result = ""
    for i in s:
        if s.lower().count(i.lower()) == 1:
            result += i
    return result[0] if result != "" else ""

