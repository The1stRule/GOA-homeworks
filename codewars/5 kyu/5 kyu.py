
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