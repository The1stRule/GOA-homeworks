
# 1)

def manual_reverse(collection):
    return collection[::-1]

# 2)

def manual_replace(words_list,old_element,new_element):
    words = " ".join(words_list)
    result = []
    string = ""
    for i in words:
        if i == " ":
            result.append(string)
            string = ""
        elif i == old_element:
            string += new_element
        else:
            string += i
    result.append(string)
    return result

# 3)

def manual_count(st,symbol):
    count = 0
    for i in st:
        if i == symbol:
            count += 1
    return count