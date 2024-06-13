
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
