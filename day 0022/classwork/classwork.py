
# 1)

def my_range(start,end,step):
    numbers = []
    new_numbers = []
    while start != end -1:
        start = start + step
        numbers.append(start)

        product = 0

        if start % 3 == 0:
            product = product + start
            new_numbers.append(start)
        
    return product

# 2)

def calculator():
    number1 = my_range(1,10,2)
    number2 = int(input("Please enter a number: "))
    print(number1 + number2)
    print(number1 - number2)
    print(number1 * number2)
    print(number1 / number2)
calculator()

# 3) 

def hashtag_generator():
    string = input("Please enter a words: ")

    string = string.title()
    string = string.replace(" ", "")
    print("#" + string)
hashtag_generator()

# 4)

def num_divisors():
    number = int(input("Please enter a number: "))
    numbers = []
    for i in range(number,0,-1):
        if number % i == 0:
            numbers.append(i)
    numbers.reverse()
    print(number,"->",numbers)
    
num_divisors()

# 5)

def manual_split():
    words = input("Please enter a words: ")

    start = int(input("Please enter a start index number: "))
    end = int(input("Please enter a end index number: "))
    step = int(input("Please enter a step index number: "))
    
    words_list = list(words)
    string = []
    for i in words_list:
        if i == words_list[start] and start <= end:
            string.append(i)
            start += step

    new_string = ''.join(string)

    print("'" + words + "'",start,"-",end,"-",step,"->",new_string)
manual_split()

# 6)

def greet(name):
    print("welcome",name)
greet("Nika")

# 7)

def odd_numbers(numbers):
    odd_number_sum = 0
    for i in numbers:
        if i % 2 != 0: 
            odd_number_sum = odd_number_sum + i
    return odd_number_sum
print(odd_numbers([1,2,3,4,5,6,7,8,9,10]) + 5)