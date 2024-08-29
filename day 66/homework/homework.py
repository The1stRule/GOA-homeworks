

# 7 kyu

# Milk and Cookies for Santa

def time_for_milk_and_cookies(dt):
    return str(dt).split("-")[1] == "12" and str(dt).split("-")[2] == "24"

def time_for_milk_and_cookies(dt):
    return dt.month == 12 and dt.day == 24

# Check if a triangle is an equable triangle!

# ?

# Drinking Game

def game(a, b):
    n = int(a**0.5)
    return "Non-drinkers can't play" if a * b == 0 else "Mike" if n*(n+1) > b  else "Joe"

a = ["lll","bb", "oo","aa"," "]

a.sort(key=lambda item: (len(item), item), reverse=True)
print(a)