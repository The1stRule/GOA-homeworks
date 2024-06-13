
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

# Hello, Name or World!

def hello(name = ""):
    if name != "":
        name = name.capitalize()
        return f"Hello, {name}!"
    return "Hello, World!"